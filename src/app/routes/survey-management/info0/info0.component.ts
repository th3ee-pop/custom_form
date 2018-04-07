import {AfterViewInit, Component, OnInit, QueryList, ViewChildren, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '@core/services/http.service';
import {NzModalService} from 'ng-zorro-antd';

import {InputcmpComponent} from '../shared/inputcmp/inputcmp.component';
import {RadiocmpComponent} from '../shared/radiocmp/radiocmp.component';
import {IdccmpComponent} from '../shared/idccmp/idccmp.component';
import {QuestionList} from '../shared/ql';
import {ScheduleList} from "../shared/scheduleList";
import { HighTableComponent } from '../../useful-table/high-table/high-table.component';

@Component({
    selector: 'app-info0',
    templateUrl: './info0.component.html',
    styleUrls: ['./info0.component.less']
})
export class Info0Component implements OnInit, AfterViewInit  {
    @ViewChildren(InputcmpComponent) InputItems: QueryList<InputcmpComponent>;
    @ViewChildren(RadiocmpComponent) RadioItems: QueryList<RadiocmpComponent>;
    @ViewChildren(IdccmpComponent) IdcItems: QueryList<IdccmpComponent>;
    @ViewChildren(HighTableComponent) Tables: QueryList<HighTableComponent>;

    current = 0; // 当前步骤
    questions = new QuestionList().questions;
    questionSave = this.questions
    questionList = [];     // 问题总列表
    b = new ScheduleList().schedule_list; // 步骤条的list
    resultList = [];                                    // 填写结果
    PID = '';                                           // PID
    finished = false;
    answerList = [];
    buttondisable = false;
    fillingList = [];
    currentModal;

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
            this.service.getRecord(getRecord).subscribe( (res) => {
                const list = res.Records;
                this.answerList = list;
                for (let i = 0; i < list.length; i++) {
                    if ( list[i]['questionlist'] && list[i]['questionlist'] !== '') {
                        this.questionList = list[i]['questionlist'][this.current];
                        this.questionSave = list[i]['questionlist'];
                        break;
                    }
                }
                this.fillingAllanswer();
            });
        } else {
            this.questionList = this.questions[this.current];
        }
    }
    ngOnInit() {
        console.log(this.PID);
    }

    ngAfterViewInit() {
        if ( this.PID ) {
            this.fillingAllanswer();
        }
    }

    onVoted (showAndhidden: any) {
        for ( let i = 0; i <  showAndhidden.hiddenshowlist.length; i++) {
            for ( let j = 0; j < this.questionList.length; j++) {
                if ( this.questionList[j].id1 === showAndhidden.hiddenshowlist[i] ) {
                    this.questionList[j]['hidden'] = false;
                }
            }
        }
        for (let i = 0; i < showAndhidden.hiddenlist.length; i++) {
            for ( let j = 0; j < this.questionList.length; j++) {
                if ( this.questionList[j].id1 === showAndhidden.hiddenlist[i] ) {
                    this.questionList[j]['hidden'] = true;
                }
            }
        }
    }

    /**
     * 保存修改并跳转到指定页面
     * @param step_index
     */
    save(step_index) {
        const numWords = ['info0', 'info1', 'info2', 'info3', 'info4', 'info5', 'info6', 'info7', 'info8'];
        this.collectAllanswer();
        let putRecord = {};
        if (!this.PID) putRecord = {'Records': this.resultList};
        else putRecord = {'PID': this.PID, 'Records': this.resultList};
        console.log(putRecord);
        this.service.putRecord(putRecord).subscribe((res) => {
            console.log(res);
            this.PID = res.PID;
            this.router.navigate(['system/survey/' + numWords[step_index] + '/' + this.PID]);  // 拼接跳转链接
        }, err => {
            console.log(err);
        });
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
                        this.save(step_index);
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
            }else {
            this.temporary_deposit();
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
            this.save(step_index);
    }

    confirm() {
        const confirmlist = [];// 验证列表
        let confirmnum = 0;
        let confirms = true;
        this.InputItems.forEach(item => {
            confirmnum ++;
            if ( item.question.hidden === false && item.answerChanged === false) {
            confirms = false; confirmlist.push(item.question.id1);
        }});
        this.RadioItems.forEach(item => {
            confirmnum ++;
            if ( item.question.hidden === false && item.localAnswer === -1) {
            confirms = false; confirmlist.push(item.question.id1);
        }});
        this.IdcItems.forEach( item => {
            confirmnum ++;
            if ( item.question.hidden === false && item.answerChanged === false) {
            confirms = false; confirmlist.push(item.question.id1);
        }});
        const confirmAll = {
            confirms: confirms,
            confirmList: confirmlist,
            confirmP: confirmlist.length/confirmnum,
        } ;
        return confirmAll;
    }
    collectAllanswer() {
        this.RadioItems.forEach(item => {
            if (item.answerChanged === true) {
                for (let i = 0; i < item.answer.length; i++) {
                    this.resultList.push(item.answer[i]);
                }
            }
        });
        this.InputItems.forEach(item => {
            // console.log(item);
            if (item.answerChanged === true) {
                for (let i = 0; i < item.answer.length; i++) {
                    this.resultList.push(item.answer[i]);
                }
            }
        });
        this.IdcItems.forEach(item => {
            if (item.answerChanged === true) { for ( let i = 0; i < item.answer.length; i++) { this.resultList.push(item.answer[i]); } }
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
        console.log(this.resultList);
    }

    disabledAll() {
        this.buttondisable = true;
        this.InputItems.forEach(item => {
            item.editdisabled = true;
        });
        this.RadioItems.forEach(item => {
            item.editdisabled = true;
        });
        this.IdcItems.forEach(item => {
            item.editdisabled = true;
        });
    }

    fillingAllanswer() {
        const getRecord = {
            'PID': this.PID
        };
        this.service.getRecord(getRecord).subscribe((res) => {

            this.fillingList = res.Records;
            const pageZero = [];
            this.fillingList.forEach(d => {
                for (const key in d) {
                    if (key.substr(0, 1) === 'n'
                        || key === 'Idnumber'
                        || key === 'doctor'
                        || key.substr(0, 4) === 'type'
                        || key.substr(0, 4) === 'diag'
                    ) {
                        pageZero.push(d);
                    }
                }
            });
            // console.log(pageZero);
            this.InputItems.forEach(item => {
                for (let i = 0; i < pageZero.length; i++) {
                    const id = item.question.id2;
                    if (pageZero[i][id] && pageZero[i][id] !== '') {
                        item.localAnswer = pageZero[i][id];
                    }
                    if (pageZero[i][id] === 0) {
                        item.localAnswer = '0';
                    }
                }
            });

            this.IdcItems.forEach( item => { for (let i = 0; i < pageZero.length; i++) {
                if (pageZero[i]['Idnumber'] && pageZero[i]['Idnumber'] !== '') {
                    item.localAnswer = pageZero[i]['Idnumber']; }
            }});
            this.RadioItems.forEach(item => {
                for (let i = 0; i < pageZero.length; i++) {
                    const id = item.question.id2;
                    if (pageZero[i][id] && pageZero[i][id] !== '') {
                        item.localAnswer = pageZero[i][id] - 1;
                    }
                }
            });
        }, error => {
            console.log(error);
        });
    }

    temporary_deposit() {
        const allow = true;
        if (allow) {
            this.collectAllanswer();
            let putRecord = {};
            if (this.PID ) {
                putRecord = { 'Records' : this.resultList, 'PID' : this.PID };
            }else {
                putRecord = { 'Records' : this.resultList, 'PID' : '' };
            }
            this.service.putRecord(putRecord).subscribe( (res) => {
                this.router.navigate(['system/survey/detail/']);
            }, err => { });
        }else {
            this.confirmServ.error({
                title: '保存出错！',
                content: '如果您想退出，请点击退出按钮！'
            });
        }
    }

    exit() {                                            // 退出
        this.router.navigate( ['system/survey/detail/']);
    }

}
