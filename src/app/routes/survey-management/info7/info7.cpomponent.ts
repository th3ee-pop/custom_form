/**
 *  input radio idc phone checkbox date
 */
import {AfterViewInit, Component, OnInit, QueryList, ViewChildren, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '@core/services/http.service';
import {NzModalService} from 'ng-zorro-antd';

import {InputcmpComponent} from '../shared/inputcmp/inputcmp.component';
import {RadiocmpComponent} from '../shared/radiocmp/radiocmp.component';
import {Table71Component} from '../shared/tablecmp/Table71/Table71.component';
import {ScheduleList} from '../shared/scheduleList';

@Component({
    selector: 'app-info7-step',
    templateUrl: './info7.component.html',
    styleUrls: ['./info7.component.css']
})
export class Info7Component implements OnInit, AfterViewInit {

    @ViewChildren(InputcmpComponent) InputItems: QueryList<InputcmpComponent>
    @ViewChildren(RadiocmpComponent) RadioItems: QueryList<RadiocmpComponent>
    @ViewChildren(Table71Component) Table71Items: QueryList<Table71Component>
    current = 7;
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
                for ( let i = 0; i < list.length; i++) {
                    if ( list[i]['questionlist'] && list[i]['questionlist'] !== '') {
                        this.questionList = list[i]['questionlist'][this.current];
                        this.questionSave = list[i]['questionlist'];
                        break;
                    }
                }
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

    /** 下一步 **/
    next() {
        if (this.confirm().confirms) {
            this.initPutRecord();
            this.service.putRecord(this.putRecord).subscribe( (res) => {
                this.router.navigate(['system/survey/detail/']);
            });
        }else {
            let str = '';
            for ( let i = 0; i < this.confirm().confirmList.length; i++) {
                str = str + this.confirm().confirmList[i] + '、';
            }
            this.confirmServ.error({
                title: '您还有以下必填项没有完成： ',
                content: str
            });
        }
    }

    /** 暂存 **/
    temporary_deposit() {
        this.initPutRecord();
        this.service.putRecord(this.putRecord).subscribe( (res) => {
            this.router.navigate( ['system/survey/detail/']);
        }, error => { });
    }


    /** 退出 **/
    exit () {
        this.router.navigate( ['system/survey/detail/']);
    }

    /** 返回上一步 **/
    pre() {
        this.initPutRecord();
        this.service.putRecord(this.putRecord).subscribe( (res) => {
        }, error => { });
        this.router.navigate( ['system/survey/info6/' + this.PID]);
    }

    /** 封装答案和请求参数 **/
    initPutRecord() {
        this.collectAllanswer()
        if (this.PID) {
            this.putRecord = { 'Records': this.resultList, 'PID': this.PID };
        }else {
            this.putRecord = { 'Records': this.resultList };
        }
    }

    /** 表单验证 **/
    confirm() {
        const confirmlist = [];                                   // 验证列表
        let confirms = true;
        this.InputItems.forEach(item => { if ( item.question.hidden === false && item.answerChanged === false) {
            confirms = false; confirmlist.push(item.question.id1);
        }});
        this.RadioItems.forEach(item => { if ( item.question.hidden === false && item.localAnswer === -1) {
            confirms = false; confirmlist.push(item.question.id1);
        }});
        this.Table71Items.forEach( item => { if ( item.question.hidden === false && item.answerCheck() === false) {
            confirms = false; confirmlist.push(item.question.id1);
        }});
        const confirmAll = {
            confirms: confirms,
            confirmList: confirmlist
        } ;
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
        this.Table71Items.forEach(item => {
            if (item.answerCheck() === true) {
                for (let i = 0; i < item.answer.length; i++) {
                    this.resultList.push(item.answer[i]);
                }
            }
        });
        this.questionSave[this.current] = this.questionList;
        this.resultList.push(
            {'Record_ID': 'questionlist', 'Record_Value': this.questionSave }
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
                if (this.fillingList && this.fillingList.length !== 0) {
                    this.InputItems.forEach(item => {
                        this.fillingList.forEach( fl => {
                            const id = item.question.id2;
                            if (fl[id] && fl[id] !== '') {
                                item.localAnswer = fl[id];
                            }
                            if (fl[id] === 0) {
                                item.localAnswer = '0';
                            }
                        });
                    });
                }
                this.RadioItems.forEach(item => {
                    this.fillingList.forEach( fl => {
                        const id = item.question.id2;
                        if (fl[id] && fl[id] !== '') {
                            item.localAnswer = fl[id] - 1;
                        }
                    });
                });
                this.Table71Items.forEach(item => {
                    this.fillingList.forEach( fl => {
                        for (let i = 0; i < item.question.id2.length; i++) {
                            for (let j = 0; j < item.question.id2[0].length; j++) {
                                const id = item.question.id2[i][j];
                                if (fl[id] && fl[id] !== '') {
                                    item.localAnswer[i][j] = fl[id];
                                }
                            }
                        }
                    });
                });
            }, error => {
                console.log(error);
            }
        );
    }
}
