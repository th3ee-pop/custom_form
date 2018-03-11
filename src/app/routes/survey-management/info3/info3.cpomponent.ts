/**
 *  input radio idc phone checkbox date
 */
import {AfterViewInit, Component, OnInit, QueryList, ViewChildren, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '@core/services/http.service';
import {NzModalService} from 'ng-zorro-antd';

import {InputcmpComponent} from '../shared/inputcmp/inputcmp.component';
import {RadiocmpComponent} from '../shared/radiocmp/radiocmp.component';

import {QuestionList} from '../shared/ql';
import {ScheduleList} from '../shared/scheduleList';

@Component({
    selector: 'app-info3-step',
    templateUrl: './info3.component.html',
    styleUrls: ['./info3.component.css']
})
export class Info3Component implements OnInit, AfterViewInit {

    @ViewChildren(InputcmpComponent) InputItems: QueryList<InputcmpComponent>
    @ViewChildren(RadiocmpComponent) RadioItems: QueryList<RadiocmpComponent>

    current = 3;
    questionSave = [];
    questionList = [];     // 问题总列表
    schedule_list = new ScheduleList().schedule_list; // 步骤条的list
    resultList = [];       // 填写结果
    PID = '';
    fillingList = [];
    answerList = [];
    putRecord = {};

    buttondisable = false;
    finished = '';
    currentModal; // 模态框

    constructor(private router: Router,
                private route: ActivatedRoute,
                private service: HttpService,
                private confirmServ: NzModalService,
                private ref: ChangeDetectorRef) {
        this.PID = this.route.params['value']['PID'];
        if (this.PID) {
            const getRecord = {
                'PID': this.PID
            };
            this.service.getRecord(getRecord).subscribe((res) => {
                const list = res.Records;
                this.answerList = list;
                for (let i = 0; i < list.length; i++) {
                    if (list[i]['questionlist'] && list[i]['questionlist'] !== '') {
                        this.questionList = list[i]['questionlist'][this.current];
                        this.questionSave = list[i]['questionlist'];
                        break;
                    }
                }
                this.fillingAllanswer();
            });
        }
    }


    ngOnInit() {
    }

    ngAfterViewInit() {
        if (this.PID) {
            this.fillingAllanswer();
        }
    }

    /** 事件处理 **/
    onVoted(showAndhidden: any) {
        for (let i = 0; i < showAndhidden.hiddenshowlist.length; i++) {
            for (let j = 0; j < this.questionList.length; j++) {
                if (this.questionList[j].id1 === showAndhidden.hiddenshowlist[i]) {
                    this.questionList[j]['hidden'] = false;
                }
            }
        }
        for (let i = 0; i < showAndhidden.hiddenlist.length; i++) {
            for (let j = 0; j < this.questionList.length; j++) {
                if (this.questionList[j].id1 === showAndhidden.hiddenlist[i]) {
                    this.questionList[j]['hidden'] = true;
                }
            }
        }
    }

    /** 下一步 **/
    next(step_index? : any) {
        const numWords = ['info0', 'info1', 'info2', 'info3', 'info4', 'info5', 'info6', 'info7', 'info8'];
        this.initPutRecord();
        this.service.putRecord(this.putRecord).subscribe( (res) => {
            this.router.navigate(['system/survey/' + numWords[step_index] + '/' + this.PID]);  // 拼接跳转链接
        });
    }

    /** 暂存 **/
    temporary_deposit() {
        this.initPutRecord();
        this.service.putRecord(this.putRecord).subscribe((res) => {
            this.router.navigate(['system/survey/detail/']);
        }, error => {
        });
    }


    /** 退出 **/
    exit() {
        this.router.navigate(['system/survey/detail/']);
    }

    /** 返回上一步 **/
    pre() {
        this.initPutRecord();
        this.service.putRecord(this.putRecord).subscribe((res) => {
        }, error => {
        });
        this.router.navigate(['system/survey/info2/' + this.PID]);
    }

    /** 封装答案和请求参数 **/
    initPutRecord() {
        this.collectAllanswer()
        if (this.PID) {
            this.putRecord = {'Records': this.resultList, 'PID': this.PID};
        } else {
            this.putRecord = {'Records': this.resultList};
        }
    }

    /**
     *  页面跳转，弹窗检验是否填完，若选择确定则继续跳转，否则留在当前页面
     */
    jumpTo(step_index , footer) {
        const numWords = ['info0', 'info1', 'info2', 'info3', 'info4', 'info5', 'info6', 'info7', 'info8'];
        if (this.PID && step_index !== this.current) { // 如果有病人编号，则跳跃
            if (this.buttondisable === true) {
                this.router.navigate(['system/survey/' + numWords[step_index] + '/' + this.PID]);  // 拼接跳转链接
            } else {
                if (this.confirm().confirms) {
                    this.next(step_index);
                }else {
                    console.log('test and model show!');
                    let rest = '（本页剩余：' + (this.confirm().confirmP*100).toFixed(3) + '%）';
                    let str = '';
                    for ( let i = 0; i < this.confirm().confirmList.length; i++) {
                        str = str + this.confirm().confirmList[i] + '、';
                    }
                    this.currentModal = this.confirmServ.open({
                        title: '您还有以下必填项没有完成' + rest ,
                        content: str,
                        footer: footer,
                        onOk() {
                            console.log('Click ok');
                        },
                        onCancel() {
                            console.log('Click cancel');
                        }
                    });
                }
            }
        }
    }

    /**
     * 取消跳转
     */
    handleCancel() {
        this.currentModal.destroy('onCancel');
    }

    /**
     * 选择确定，则跳转到指定页面
     * @param step_index
     */
    handleOk(step_index) {
        console.log("step_index");
        /* destroy方法可以传入onOk或者onCancel。默认是onCancel */
        this.currentModal.destroy('onOk');
        this.currentModal = null;
        this.next(step_index);
    }

    /** 表单验证 **/
    confirm() {
        const confirmlist = [];                                   // 验证列表
        let confirmnum = 0;
        let confirms = true;
        this.InputItems.forEach(item => {
            confirmnum ++;
            if (item.question.hidden === false && item.answerChanged === false) {
                confirms = false;
                confirmlist.push(item.question.id1);
            }
        });
        this.RadioItems.forEach(item => {
            confirmnum ++;
            if (item.question.hidden === false && item.localAnswer === -1) {
                confirms = false;
                confirmlist.push(item.question.id1);
            }
        });
        const confirmAll = {
            confirms: confirms,
            confirmList: confirmlist,
            confirmP: confirmlist.length/confirmnum
        };
        return confirmAll;
    }

    /** 收集答案 **/
    collectAllanswer() {
        this.RadioItems.forEach(item => {
            if (item.answerChanged === true) {
                for (let i = 0; i < item.answer.length; i++) {
                    this.resultList.push(item.answer[i]);
                }
            }
        });
        this.InputItems.forEach(item => {
            if (item.answerChanged === true) {
                for (let i = 0; i < item.answer.length; i++) {
                    this.resultList.push(item.answer[i]);
                }
            }
        });

        this.questionSave[this.current] = this.questionList;
        this.resultList.push(
            {'Record_ID': 'questionlist', 'Record_Value': this.questionSave}
        );
        for (let i = 0; i < this.answerList.length; i++) {
            for (let j = 0; j < this.resultList.length; j++) {
                const id = this.resultList[j].Record_ID;
                if (this.answerList[i][id] || this.answerList[i][id] === 0) {
                    this.resultList[j]['Updated_time'] = this.answerList[i]['Updated_time'];
                }
            }
        }
    }

    /** 回填答案 **/
    fillingAllanswer() {
        const getRecord = {
            'PID': this.PID
        };
        this.service.getRecord(getRecord).subscribe(
            (res) => {
                this.fillingList = res.Records;
                const pageThree = [];
                this.fillingList.forEach(d => {
                    for (const key in d) {
                        if (key.substr(0, 1) === 'c') {
                            pageThree.push(d);
                        }
                    }
                });
                if (this.fillingList && this.fillingList.length !== 0) {
                    this.InputItems.forEach(item => {
                        pageThree.forEach(fl => {
                            const id = item.question.id2;
                            if (fl[id] && fl[id] !== '') {
                                if( id == 'caeb3'){
                                    item.localAnswer = fl[id].match(/\d+/g);
                                    item.selectedOption = fl[id].match(/[\u4e00-\u9fa5]+/g)[0];
                                }else {
                                    item.localAnswer = fl[id];
                                }
                            }
                            if (fl[id] === 0) {
                                item.localAnswer = '0';
                            }
                        });
                    });
                }
                this.RadioItems.forEach(item => {
                    pageThree.forEach(fl => {
                        const id = item.question.id2;
                        if (fl[id] && fl[id] !== '') {
                            item.localAnswer = fl[id] - 1;
                        }
                    });
                });
            }, error => {
                console.log(error);
            }
        );
    }
}
