
import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, PreloadingStrategy, Params} from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { HttpService } from '@core/services/http.service';

import { InputcmpComponent } from '../shared/inputcmp/inputcmp.component';
import { RadiocmpComponent } from '../shared/radiocmp/radiocmp.component';
import { CheckboxcmpComponent} from '../shared/checkboxcmp/checkboxcmp.component';
import { Table96Component } from '../shared/tablecmp/table96/table96.component';
import { Table913Component} from '../shared/tablecmp/table913/table913.component';
import { QuestionList } from '../shared/questionList';
import { ScheduleList } from '../shared/scheduleList';

@Component({
    selector: 'app-ninth-step',
    templateUrl: './ninth-step.component.html',
    styleUrls: ['./ninth-step.component.css']
})

export class NinthStepComponent implements OnInit, AfterViewInit {
    @ViewChildren(InputcmpComponent) InputItems: QueryList<InputcmpComponent>;
    @ViewChildren(RadiocmpComponent) RadioItems: QueryList<RadiocmpComponent>;
    @ViewChildren(CheckboxcmpComponent) CheckboxItems: QueryList<CheckboxcmpComponent>;
    @ViewChildren(Table96Component) Table96Items: QueryList<Table96Component>;
    @ViewChildren(Table913Component ) Table913Items: QueryList<Table913Component>;
    current = 8;                                        // 当前步骤
    questionList = new QuestionList().questions[this.current];     // 问题总列表
    schedule_list =  new ScheduleList().schedule_list;  // 步骤列表
    resultList = [];                                    // 填写结果
    PID = '';
    finished = false;
    answerList = [];
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: HttpService,
        private confirmServ: NzModalService
    ) {}

    ngOnInit() {
        this.PID = this.route.params['value']['PID'];
    }
    ngAfterViewInit() {
        this.fillingAnswer();
    }
    pre () {
        this.collectAllanswer();
        const putRecord = { 'PID': this.PID, 'Records' : this.resultList };
        this.service.putRecord(putRecord).subscribe( (res) => {
        }, error => { });
        this.router.navigate( ['/survey/eighth_step/' + this.PID]);
    }
    next() {                                            // 下一步
        if ( this.confirm().confirms ) {
            this.collectAllanswer();
            const putRecord = { 'Records': this.resultList, 'PID': this.PID};
            this.service.putRecord(putRecord).subscribe( (res) => {
                console.log(res);
                this.router.navigate(['/survey/tenth_step/' + this.PID]);
            }, error => {
                console.log(error);
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
    temporary_deposit() {                               // 暂存
        this.collectAllanswer();
        const putRecord = { 'PID': this.PID, 'Records' : this.resultList };
        this.service.putRecord(putRecord).subscribe( (res) => {
            this.router.navigate( ['/survey/detail/']);
        }, error => { });
    }
    exit() {                                            // 退出
        this.router.navigate( ['/survey/detail/']);
    }
    confirm () {
        const confirmlist = [];
        let confirms = true;
        this.InputItems.forEach(item => { if (item.answerChanged === false) { confirms = false; confirmlist.push(item.question.id);
        }});
        this.RadioItems.forEach(item => { if (item.localAnswer === -1) { confirms = false; confirmlist.push(item.question.id);
        }});
        this.Table96Items.forEach( item => { if ( item.answerCheck() === false) { confirms = false; confirmlist.push(item.question.id);
        }});
        this.Table913Items.forEach( item => { if ( item.answerCheck() === false) { confirms = false; confirmlist.push(item.question.id);
        }});
        const confirmAll = {
            confirms: confirms,
            confirmList: confirmlist
        };
        return confirmAll;
    }
    collectAllanswer() {
        this.RadioItems.forEach(item => {
            if (item.answerChanged === true) { for ( let i = 0; i < item.answer.length; i++) { this.resultList.push(item.answer[i]); } }
        });
        this.InputItems.forEach(item => {
            if (item.answerChanged === true) { for ( let i = 0; i < item.answer.length; i++) { this.resultList.push(item.answer[i]); } }
        });
        this.Table96Items.forEach( item => {
            if (item.answerCheck() === true) { item.getAnswer().forEach( it => { this.resultList.push(it); }); }
        });
        this.Table913Items.forEach( item => {
            if (item.answerCheck() === true) { item.getAnswer().forEach( it => { this.resultList.push(it); }); }
        });
        if (this.confirm().confirms)
            this.resultList.push(
                {'Record_ID': 'ID0_4', 'Record_Value': this.getNowdate()},
                {'Record_ID': 'ID9', 'Record_Value': 'finished'});
        else {
            this.resultList.push(
                {'Record_ID': 'ID0_4', 'Record_Value': this.getNowdate()},
                {'Record_ID': 'ID9', 'Record_Value': ''});
        }
        for ( let i = 0; i < this.answerList.length; i ++) {
            for ( let j = 0; j < this.resultList.length; j++) {
                const id = this.resultList[j].Record_ID;
                if (this.answerList[i][id]) {
                    this.resultList[j]['Updated_time'] = this.answerList[i]['Updated_time'];
                }
            }
        }
    }
    fillingAnswer() {
        const getRecord = {
            'PID': this.PID
        };
        this.service.getRecord(getRecord).subscribe( (res) => {
            const fillingList = res.Records;
            this.answerList = fillingList;
            fillingList.forEach( it => { if ( it['ID9'] && it['ID9'] === 'finished') this.finished = true;
            });
            console.log(fillingList);
            this.InputItems.forEach( item => { fillingList.forEach( it => {
                let id = '';
                id = this.getTransid( item.question.id );
                if ( it[id] && it[id] !== '') {  item.localAnswer[0] = it[id]; }});
            });
            this.RadioItems.forEach( item => {
                for ( let i = 0; i < fillingList.length; i++) {
                    for ( let j = 1 ; j <= item.question.content.length; j++) {
                        const id = this.getTransid(item.question.id) + '_' + j;
                        if ( fillingList[i][id] && fillingList[i][id] !== '') {
                            const nums = id.split('_');
                            item.localAnswer = Number.parseInt( nums[nums.length - 1]) - 1 ;
                        }
                    }
                }
            });
            this.Table96Items.forEach( item => {
                    for ( let i = 0; i < fillingList.length; i++) {
                        const id1 = 'ID9_6_a_' + ( i + 1 );
                        const id2 = 'ID9_6_b_' + ( i + 1 );
                        const id3 = 'ID9_6_c_' + ( i + 1 );
                        if ( fillingList[i][id1] && fillingList[i][id1] !== '') {
                            item.birthAge[i] = fillingList[i][id1];
                        }
                        if ( fillingList[i][id2] && fillingList[i][id2] !== '') {
                            item.feedMonths[i] = fillingList[i][id2];
                        }
                        if ( fillingList[i][id3]) {
                            item.isTwins[i] = fillingList[i][id3];
                        }
                    }
                }
            );
            this.Table913Items.forEach( item => {
                    for ( let i = 0; i < fillingList.length; i++ ) {
                        const id1 = 'ID9_13_' + ( i + 1 );
                        const id2 = 'ID9_13_a_' + ( i + 1 );
                        if ( fillingList[i][id1]) {
                            item.selected[i] = fillingList[i][id1];
                        }
                        if ( fillingList[i][id2]) {
                            item.operationAge[i] = fillingList[i][id2];
                        }
                    }
                }
            );

        }, error => {
            console.log(error);
        });
    }
    getNowdate() {
        const date = new Date();
        let str = '';
        str = date.getFullYear() + '年' + date.getMonth() + '月' + date.getDate() + '日' + date.getHours() + '时'
            + date.getMinutes() + '分';
        return str;
    }
    getTransid(str: string) {
        let id = 'ID';
        id = id + str.replace(/\./g, '_');
        return id;
    }

}
