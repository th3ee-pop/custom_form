/**
 *  input radio idc phone checkbox date
 */
import {AfterViewInit, Component, OnInit, QueryList, ViewChildren, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '@core/services/http.service';
import {NzModalService} from 'ng-zorro-antd';

import {InputcmpComponent} from '../shared/inputcmp/inputcmp.component';
import {RadiocmpComponent} from '../shared/radiocmp/radiocmp.component';

import {ScheduleList} from '../shared/scheduleList';

@Component({
    selector: 'app-infor1-step',
    templateUrl: './info1.component.html',
    styleUrls: ['./info1.component.css']
})
export class Info1Component implements OnInit, AfterViewInit {

    @ViewChildren(InputcmpComponent) InputItems: QueryList<InputcmpComponent>
    @ViewChildren(RadiocmpComponent) RadioItems: QueryList<RadiocmpComponent>

    current = 1;
    questionSave = []; // 用来传到后端
    questionList = []
    schedule_list = new ScheduleList().schedule_list; // 步骤条的list
    resultList = [];                                  // 用于封装答案
    PID = '';
    fillingList = [];                                 // 用于从后端获取答案
    answerList = [];
    putRecord = {};

    /** 备用变量 **/
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
    onVoted (showAndhidden: any) {
        for ( let i = 0; i <  showAndhidden.hiddenshowlist.length; i++) {
            for ( let j = 0; j < this.questionList.length; j++) {
                if ( this.questionList[j].id === showAndhidden.hiddenshowlist[i] ) {
                    this.questionList[j]['hidden'] = false;
                }
            }
        }
        for (let i = 0; i < showAndhidden.hiddenlist.length; i++) {
            for ( let j = 0; j < this.questionList.length; j++) {
                if ( this.questionList[j].id === showAndhidden.hiddenlist[i] ) {
                    this.questionList[j]['hidden'] = true;
                }
            }
        }
    }

    /** 下一步 **/
    next() {
        // if (this.confirm().confrims) {
        this.initPutRecord()
        this.service.putRecord(this.putRecord).subscribe( (res) => {
            this.router.navigate(['system/survey/info2/' + this.PID]);
        });
        // } else {
        //     let str = '';
        //     this.confirm().confirmsList.forEach( item => {
        //         str = str + item + '、';
        //     });
        //     this.confirmServ.error({
        //         title: '您还有以下必填项未完成：',
        //         content: str
        //     });
        // }
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
        this.router.navigate( ['system/survey/info0/' + this.PID]);
    }

    /** 封装答案和请求参数 **/
    initPutRecord() {
        this.collecAllanswer()
        if (this.PID) {
            this.putRecord = { 'Records': this.resultList, 'PID': this.PID };
        }else {
            this.putRecord = { 'Records': this.resultList };
        }
    }

    /** 表单验证 **/
    confirm() {
        const confirmlist = [];
        let confirms = true;
        this.InputItems.forEach(item => { if (item.question.hidden === false && item.answerChanged === false) {
            confirms = false;
            confirmlist.push(item.question.id1);
        }});
        this.RadioItems.forEach(item => { if (item.question.hidden === false && item.localAnswer === -1) {
            confirms = false;
            confirmlist.push(item.question.id1);
        }});
        const confirmAll = {
            confrims: confirms,
            confirmsList: confirmlist
        };
        return confirmAll;
    }

    /** 收集答案 **/
    collecAllanswer() {
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
            {'Record_ID': 'questionlist', 'Record_Value': this.questionSave }
        );
        for (let i = 0; i < this.fillingList.length; i++) {
            for (let j = 0; j < this.resultList.length; j++) {
                const id = this.resultList[j].Record_ID;
                if (this.fillingList[i][id] || this.fillingList[i][id] === 0) {
                    this.resultList[j]['Updated_time'] = this.fillingList[i]['Updated_time'];
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
                const pageOne = [];
                this.fillingList.forEach(d => {
                    for (const key in d) {
                        if (key.substr(0, 1) === 'a') {
                            pageOne.push(d);
                        }
                    }
                });
                if (this.fillingList && this.fillingList.length !== 0) {
                    this.InputItems.forEach(item => {
                        pageOne.forEach( fl => {
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
                    for (let i = 0; i < pageOne.length; i++) {
                        const id = item.question.id2;
                        if (pageOne[i][id] && pageOne[i][id] !== '') {
                            item.localAnswer = pageOne[i][id] - 1;
                        }
                    }
                });
            }, error => {
                console.log(error);
            }
        );
    }
}
