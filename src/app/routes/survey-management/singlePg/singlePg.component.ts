import {AfterViewInit, Component, OnInit, QueryList, ViewChildren, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '@core/services/http.service';
import {NzModalService} from 'ng-zorro-antd';
import {InputcmpComponent} from '../shared/inputcmp/inputcmp.component';
import {RadiocmpComponent} from '../shared/radiocmp/radiocmp.component';
import {CheckboxcmpComponent} from '../shared/checkboxcmp/checkboxcmp.component';
import {DatecmpComponent} from '../shared/datecmp/datecmp.component';
import {AddrcmpComponent} from '../shared/addrcmp/addrcmp.component';
import {IdccmpComponent} from '../shared/idccmp/idccmp.component';
import {HighTableComponent} from '../../useful-table/high-table/high-table.component';
import {SaveList} from '../shared/example';
import {ScheduleList} from '../shared/scheduleList';

@Component({
    selector: 'app-singlepg',
    templateUrl: './singlePg.component.html',
    styleUrls: ['./singlePg.component.less']
})
export class SinglePgComponent implements OnInit, AfterViewInit  {
    @ViewChildren(InputcmpComponent) InputItems: QueryList<InputcmpComponent>;
    @ViewChildren(RadiocmpComponent) RadioItems: QueryList<RadiocmpComponent>;
    @ViewChildren(CheckboxcmpComponent) CheckItem: QueryList<CheckboxcmpComponent>;
    @ViewChildren(DatecmpComponent) DateItem: QueryList<DatecmpComponent>;
    @ViewChildren(AddrcmpComponent) AddrItem: QueryList<AddrcmpComponent>;
    @ViewChildren(IdccmpComponent) IdcItem: QueryList<IdccmpComponent>;
    @ViewChildren(HighTableComponent) HighTableItem: QueryList<HighTableComponent>;
    current = 0; // 当前步骤
    exampleList = new SaveList().questions;
    steps = new SaveList().step_key;

    qlist = [];     // 当前页问题列表
    b = new ScheduleList().schedule_list; // 步骤条的list
    resultList = [];                      // 填写结果
    fillingList = [];                     // 请求的键值对
    answerList = [];
    PID;                                  // PID
    finished = false;
    buttondisable = false;

    department = 'test';
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: HttpService,
        private confirmServ: NzModalService,
        private ref: ChangeDetectorRef
    ) {

        this.PID = this.route.params['value']['PID'];
        if (this.PID) {
            const getRecord = {
                'PID': this.PID
            };
            // this.service.getRecordpart(getRecord).subscribe( (res) => {
            //     const list = res.Records;
            //     this.answerList = list;
            //     for (let i = 0; i < list.length; i++) {
            //         if ( list[i]['questionlist'] && list[i]['questionlist'] !== '') {
            //             this.questionList = list[i]['questionlist'][this.current];
            //             this.questionSave = list[i]['questionlist'];
            //             break;
            //         }
            //     }
            //     this.fillingAllanswer();
            // });
        } else {
            this.qlist = this.exampleList[this.steps[this.current]]['items'];
            console.log(this.qlist);
        }
    }
    ngOnInit() {

    }

    ngAfterViewInit() {
        if ( this.PID ) {
            this.fillingAllanswer();
        }
    }

    onVoted (showAndhidden: any) {
        for ( let i = 0; i <  showAndhidden.hiddenshowlist.length; i++) {
            for ( let j = 0; j < this.qlist.length; j++) {
                if ( this.qlist[j].webId === showAndhidden.hiddenshowlist[i] ) {
                    this.qlist[j]['hidden'] = false;
                }
            }
        }
        for (let i = 0; i < showAndhidden.hiddenlist.length; i++) {
            for ( let j = 0; j < this.qlist.length; j++) {
                if ( this.qlist[j].webId === showAndhidden.hiddenlist[i] ) {
                    this.qlist[j]['hidden'] = true;
                }
            }
        }
    }
    initputRecord() {

        this.collectAllanswer();
        let putRecord  = {};
        if (this.PID ) {
            putRecord = {
                'Records' : this.resultList,
                'step_key': this.steps[this.current],
                'Department': this.department,
                'PID' : this.PID
            };
        }else {
            putRecord = {
                'Records' : this.resultList,
                'step_key': this.steps[this.current],
                'Department': this.department,
                'PID' : ''
            };
        }
        return putRecord;
    }
    next() {
        if ( (this.current + 1) < this.steps.length) {
            this.current = this.current + 1;
            this.service.putRecords(this.initputRecord()).subscribe((res) => {
                console.log(res);
                this.qlist = this.exampleList[this.steps[this.current]]['items'];
            }, err => {
                console.log(err);
            });
        }
    }
    pre() {
        if (this.current > 0) {
            this.current = this.current - 1;
            this.service.putRecords(this.initputRecord()).subscribe((res) => {
                console.log(res);
                this.qlist = this.exampleList[this.steps[this.current]]['items'];
            }, err => {
                console.log(err);
            });
        }

    }
    temporary_deposit() {
        this.service.putRecords(this.initputRecord()).subscribe((res) => {
            console.log(res);
            this.router.navigate(['system/survey/detail']);
        }, err => {
            console.log(err);
        });
    }

    exit() {                                            // 退出
        this.router.navigate( ['system/survey/detail/']);
    }

    confirm() {
        const confirmlist = []; // 验证列表
        let confirmnum = 0;
        let confirms = true;
        this.InputItems.forEach(item => {
            confirmnum ++;
            if (item.question.required === true) {
                if ( item.question.hidden === false && item.valid_confirmed === false) {
                    confirms = false;
                    confirmlist.push(item.question.webId);
                }
            }
        });
        this.RadioItems.forEach(item => {
            confirmnum ++;
            if (item.question.required === true ) {
                if ( item.question.hidden === false && item.valid_confirmed === false) {
                    confirms = false;
                    confirmlist.push(item.question.webId);
                }
            }
        });
        this.IdcItem.forEach( item => {
            confirmnum ++;
            if (item.question.required === true ) {
                if ( item.question.hidden === false && item.valid_confirmed === false) {
                    confirms = false;
                    confirmlist.push(item.question.webId);
                }
            }
        });
        this.CheckItem.forEach( item => {
            confirmnum ++;
            if (item.question.required === true ) {
                if ( item.question.hidden === false && item.valid_confirmed === false ) {
                    confirms = false;
                    confirmlist.push(item.question.webId);
                }
            }
        });
        this.DateItem.forEach(item => {
            confirmnum ++;
            if (item.question.required === true ) {
                if ( item.question.hidden === false && item.valid_confirmed === false ) {
                    confirms = false;
                    confirmlist.push(item.question.webId);
                }
            }
        });
        this.AddrItem.forEach(item => {
            confirmnum ++;
            if (item.question.hidden === false && item.valid_confirmed === false ) {
                confirms = false;
                confirmlist.push(item.question.webId);
            }
        });

        const confirmAll = {
            confirms: confirms,
            confirmList: confirmlist,
            confirmP: confirmlist.length / confirmnum,
        } ;
        return confirmAll;
    }
    collectAllanswer() {
        this.RadioItems.forEach(item => {
            if (item.valid_confirmed === true ) {
                for (let i = 0; i < item.answer.length; i++)
                    this.resultList.push(item.answer[i]);
            }
        });
        this.InputItems.forEach(item => {
            if (item.valid_confirmed === true) {
                for (let i = 0; i < item.answer.length; i++)
                    this.resultList.push(item.answer[i]);
            }
        });
        this.CheckItem.forEach(item => {
            if (item.valid_confirmed === true) {
                for (let i = 0; i < item.answer.length; i++)
                    this.resultList.push(item.answer[i]);
            }
        });

        this.DateItem.forEach(item => {
            if (item.valid_confirmed === true ) {
                for (let i = 0; i < item.answer.length; i++)
                    this.resultList.push(item.answer[i]);
            }
        });

        this.AddrItem.forEach(item => {
            if (item.valid_confirmed === true ) {
                for (let i = 0; i < item.answer.length; i++)
                    this.resultList.push(item.answer[i]);
            }
        });
        this.IdcItem.forEach(item => {
            if (item.valid_confirmed === true ) {
                for (let i = 0; i < item.answer.length; i++)
                    this.resultList.push(item.answer[i]);
            }
        });
        this.HighTableItem.forEach(item => {
                item.getAnswer();
                for (let i = 0; i < item.changedAnswer.length; i++) {
                    this.resultList.push(item.changedAnswer[i]);
                }
        });

        // for (let i = 0; i < this.answerList.length; i++) {
        //     for (let j = 0; j < this.resultList.length; j++) {
        //         const id = this.resultList[j].Record_ID;
        //         if (this.answerList[i][id] || this.answerList[i][id] === 0) {
        //             this.resultList[j]['Updated_time'] = this.answerList[i]['Updated_time'];
        //         }
        //     }
        // }
        console.log(this.resultList);
    }

    disabledAll() {
        // this.buttondisable = true;
        // this.InputItems.forEach(item => {
        //     item.editdisabled = true;
        // });
        // this.RadioItems.forEach(item => {
        //     item.editdisabled = true;
        // });
        // this.CheckItem.forEach(item => {
        //     item.editdisabled = true;
        // });
    }
    fillingAllanswer() {

        // const getRecord = {
        //     'PID': this.PID
        // };
        // this.service.getRecord(getRecord).subscribe((res) => {
        //
        //     this.fillingList = res.Records;
        //     const pageZero = [];
        //     this.fillingList.forEach(d => {
        //         for (const key in d) {
        //             if (key.substr(0, 1) === 'n'
        //                 || key === 'Idnumber'
        //                 || key === 'doctor'
        //                 || key.substr(0, 4) === 'type'
        //                 || key.substr(0, 4) === 'diag'
        //             ) {
        //                 pageZero.push(d);
        //             }
        //         }
        //     });
        //     // console.log(pageZero);
        //     this.InputItems.forEach(item => {
        //         for (let i = 0; i < pageZero.length; i++) {
        //             const id = item.question.id2;
        //             if (pageZero[i][id] && pageZero[i][id] !== '') {
        //                 item.localAnswer = pageZero[i][id];
        //             }
        //             if (pageZero[i][id] === 0) {
        //                 item.localAnswer = '0';
        //             }
        //         }
        //     });
        //
        //     this.IdcItems.forEach( item => { for (let i = 0; i < pageZero.length; i++) {
        //         if (pageZero[i]['Idnumber'] && pageZero[i]['Idnumber'] !== '') {
        //             item.localAnswer = pageZero[i]['Idnumber']; }
        //     }});
        //     this.RadioItems.forEach(item => {
        //         for (let i = 0; i < pageZero.length; i++) {
        //             const id = item.question.id2;
        //             if (pageZero[i][id] && pageZero[i][id] !== '') {
        //                 item.localAnswer = pageZero[i][id] - 1;
        //             }
        //         }
        //     });
        // }, error => {
        //     console.log(error);
        // });
    }

}

/**
 *  页面跳转，弹窗检验是否填完，若选择确定则继续跳转，否则留在当前页面
 */
// jumpTo(step_index , footer) {
//     // const numWords = ['singlePg', 'info1', 'info2', 'info3', 'info4', 'info5', 'info6', 'info7', 'info8'];
//     if (this.PID && step_index !== this.current) { // 如果有病人编号，则跳跃
//
//         // if (this.buttondisable === true) {
//         //     this.router.navigate(['system/survey/' + numWords[step_index] + '/' + this.PID]);  // 拼接跳转链接
//         // } else {
//         //     if (this.confirm().confirms) {
//         //         this.save(step_index);
//         //     }else {
//         //         console.log('test and model show!');
//         //         let rest = '（本页剩余：' + (this.confirm().confirmP*100).toFixed(3) + '%）';
//         //         let str = '';
//         //         for ( let i = 0; i < this.confirm().confirmList.length; i++) {
//         //             str = str + this.confirm().confirmList[i] + '、';
//         //         }
//         //         this.currentModal = this.confirmServ.open({
//         //             title: '您还有以下必填项没有完成' + rest ,
//         //             content: str,
//         //             footer: footer,
//         //             onOk() {
//         //                 console.log('Click ok');
//         //             },
//         //             onCancel() {
//         //                 console.log('Click cancel');
//         //             }
//         //         });
//         //     }
//         // }
//     }else {
//         this.temporary_deposit();
//     }
// }

// /**
//  * 取消跳转
//  */
// handleCancel() {
//     this.currentModal.destroy('onCancel');
// }

// /**
//  * 选择确定，则跳转到指定页面
//  * @param step_index
//  */
// handleOk(step_index) {
//     console.log("step_index");
//         /* destroy方法可以传入onOk或者onCancel。默认是onCancel */
//         this.currentModal.destroy('onOk');
//         this.currentModal = null;
//         this.save(step_index);
// }


/**
 * 保存修改并跳转到指定页面
 * @param step_index
 */
// save(step_index) {
// const numWords = ['singlePg', 'info1', 'info2', 'info3', 'info4', 'info5', 'info6', 'info7', 'info8'];
// this.collectAllanswer();
// let putRecord = {};
// if (!this.PID) putRecord = {'Records': this.resultList};
// else putRecord = {'PID': this.PID, 'Records': this.resultList};
// console.log(putRecord);
// this.service.putRecord(putRecord).subscribe((res) => {
//     console.log(res);
//     this.PID = res.PID;
//     this.router.navigate(['system/survey/' + numWords[step_index] + '/' + this.PID]);  // 拼接跳转链接
// }, err => {
//     console.log(err);
// });
//}
