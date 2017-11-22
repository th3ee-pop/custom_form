
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
    buttondisable = false;
    localInfo = JSON.parse(localStorage.getItem('_user'));
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
    onVoted (showAndhidden: any) {
        console.log('事件出发');
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
                    console.log(this.questionList[j]);
                    this.questionList[j]['hidden'] = true;
                    console.log(this.questionList[j]);
                }
            }
        }
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

    /**
     * 所有空间改为不可编辑状态
     */

    rundisabledAll (completeby, province) {
        if ( this.localInfo.user_group > 1 ) {
            if ( this.localInfo.user_group === 4) {
                if ( completeby !== this.localInfo.user_name ) {
                    this.disabledAll();
                }
            }else {
                if ( province !== this.localInfo.province) {
                    this.disabledAll();
                }
            }
        }
    }
    disabledAll() {
        this.buttondisable = true;
        this.InputItems.forEach(item => {
            item.editdisabled = true;
        });
        this.RadioItems.forEach(item => {
            item.editdisabled = true;
        });
        this.CheckboxItems.forEach(item => {
            item.editdisabled = true;
        });

        this.Table96Items.forEach(item => {
            item.editdisabled = true;
        });
        this.Table913Items.forEach(item => {
            item.editdisabled = true;
        });
    }

    /**
     *  点击steps上的按钮，进行步骤跳跃
     */
    jumpTo(step_index) {
        const numWords = ['first', 'second', 'third', 'forth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth'];
        if (this.PID) { // 如果有病人编号，则跳跃
            console.log(step_index);
            this.router.navigate(['/survey/' + numWords[step_index] + '_step/' + this.PID]);  // 拼接跳转链接
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
        this.InputItems.forEach(item => { if ( item.question.hidden === false && item.answerChanged === false) {
            confirms = false; confirmlist.push(item.question.id);
        }});
        this.RadioItems.forEach(item => { if ( item.question.hidden === false && item.localAnswer === -1) {
            confirms = false; confirmlist.push(item.question.id);
        }});
        this.CheckboxItems.forEach(item => { if ( item.question.hidden === false && !item.localAnswer) {
            confirms = false; confirmlist.push(item.question.id);
        }});
        this.Table96Items.forEach( item => { if ( item.question.hidden === false && item.answerCheck() === false) {
            confirms = false; confirmlist.push(item.question.id);
        }});
        this.Table913Items.forEach( item => { if ( item.question.hidden === false && item.answerCheck() === false) {
            confirms = false; confirmlist.push(item.question.id);
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
        this.CheckboxItems.forEach(item => {
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
                {'Record_ID': 'ID9', 'Record_Value': ''},
                {'Record_ID': 'ID0_2', 'Record_Value': '未完成'});
        }
        for ( let i = 0; i < this.answerList.length; i ++) {
            for ( let j = 0; j < this.resultList.length; j++) {
                const id = this.resultList[j].Record_ID;
                if (this.answerList[i][id] || this.answerList[i][id] === 0) {
                    this.resultList[j]['Updated_time'] = this.answerList[i]['Updated_time'];
                }
            }
        }
    }
    fillingAnswer() {
        const getRecord = {
            'PID': this.PID,
            'RecordID': 'ID9'
        };
        this.service.getRecord(getRecord).subscribe( (res) => {
            const fillingList = res.Records;
            this.answerList = fillingList;

            let province = '';
            let completeby = '';
            fillingList.forEach( it => {
                if ( it['ID9'] && it['ID9'] === 'finished') this.finished = true;
                if ( it['ID0_5'] && it['ID0_5'] !== '' )    { completeby = it['ID0_5']; }
                if ( it['ID0_3'] && it['ID0_3'] !== '' )    { province = it['ID0_3']; }
            });
            if ( province !== '' && completeby !== '')  this.rundisabledAll(completeby, province);


            this.InputItems.forEach( item => { fillingList.forEach( it => {
                let id = '';
                id = this.getTransid( item.question.id );
                if ( it[id] && it[id] !== '') {  item.localAnswer[0] = it[id]; }
                if ( it[id] === 0) { item.localAnswer[0] = '0'; }
            });
            });
            this.CheckboxItems.forEach( item => { for ( let i = 0; i < fillingList.length; i++) {
                for ( let j = 1; j <= item.question.content.length; j++ ) {
                    const id = this.getTransid(item.question.id) + '_' + j;
                    if ( fillingList[i][id] && fillingList[i][id] !== '') {
                        const nums = id.split('_');
                        item.localAnswer[Number.parseInt (nums[nums.length - 1]) - 1] = true;
                    }
                }
            }});
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
                        for ( let j = 0; j < 5 ; j++) {
                            const id1 = 'ID9_6_a_' + ( j + 1 );
                            const id2 = 'ID9_6_b_' + ( j + 1 );
                            const id3 = 'ID9_6_c_' + ( j + 1 );
                            if ( fillingList[i][id1] && fillingList[i][id1] !== '') {
                                item.birthAge[j] = fillingList[i][id1];
                            }
                            if ( fillingList[i][id2] && fillingList[i][id2] !== '') {
                                item.feedMonths[j] = fillingList[i][id2];
                            }
                            if ( fillingList[i][id3]) {
                                item.isTwins[j] = true;
                            }
                        }
                    }
                }
            );
            this.Table913Items.forEach( item => {
                    for ( let i = 0; i < fillingList.length; i++ ) {
                        for ( let j = 0; j < 5; j++) {
                            const id1 = 'ID9_13_' + ( j + 1 );
                            const id2 = 'ID9_13_a_' + ( j + 1 );
                            if ( fillingList[i][id1]) {
                                item.selected[j] = true;
                            }
                            if ( fillingList[i][id2]) {
                                item.operationAge[j] = fillingList[i][id2];
                            }
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
