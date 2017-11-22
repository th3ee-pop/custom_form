/**
 *  input radio idc phone checkbox date
 */
import   { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { HttpService } from '@core/services/http.service';
import { NzModalService } from 'ng-zorro-antd';

import { InputcmpComponent } from '../shared/inputcmp/inputcmp.component';
import { RadiocmpComponent } from '../shared/radiocmp/radiocmp.component';
import { IdccmpComponent} from '../shared/idccmp/idccmp.component';
import { PhoneComponent } from '../shared/phonecmp/phonecmp.component';
import { CheckboxcmpComponent} from '../shared/checkboxcmp/checkboxcmp.component';
import { DatecmpComponent} from '../shared/datecmp/datecmp.component';

import { QuestionList } from '../shared/questionList';
import { ScheduleList } from '../shared/scheduleList';


@Component({
    selector: 'app-first-step',
    templateUrl: './first-step.component.html',
    styleUrls: ['./first-step.component.css']
})

export class FirstStepComponent implements OnInit, AfterViewInit {
    @ViewChildren(InputcmpComponent) InputItems: QueryList<InputcmpComponent>;
    @ViewChildren(RadiocmpComponent) RadioItems: QueryList<RadiocmpComponent>;
    @ViewChildren(CheckboxcmpComponent) CheckboxItems: QueryList<CheckboxcmpComponent>;
    @ViewChildren(IdccmpComponent) IdcItems: QueryList<IdccmpComponent>;
    @ViewChildren(PhoneComponent) PhoneItems: QueryList<PhoneComponent>;
    @ViewChildren(DatecmpComponent) DateItem: QueryList<DatecmpComponent>;
    current = 0;                                        // 当前步骤
    questionList = new QuestionList().questions[0];     // 问题总列表
    schedule_list =  new ScheduleList().schedule_list;  // 步骤列表
    resultList = [];                                    // 填写结果
    PID = '';                                           // PID
    finished = false;
    answerList = [];
    localInfo = JSON.parse(localStorage.getItem('_user'));
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: HttpService,
        private confirmServ: NzModalService
    ) {}

    ngOnInit() {
        this.PID = this.route.params['value']['PID'];
        if ( !this.PID )
            this.resultList.push(
                { 'Record_ID': 'ID0_3', 'Record_Value': this.localInfo.user_province}, // 省份
                { 'Record_ID': 'ID0_5', 'Record_Value': this.localInfo.user_name}        // 用户ID
            );
    }
    ngAfterViewInit() {
        if ( this.PID ) {
            this.fillingAllanswer();
        }
    }
    next() { // 下一步
        // if ( ! this.PID )

        if ( this.confirm().confirms ) {
            this.collectAllanswer();
            let  putRecord = {};
            if (!this.PID)  putRecord = { 'Records' : this.resultList };
            else putRecord = { 'PID': this.PID, 'Records' : this.resultList };
            this.service.putRecord(putRecord).subscribe( (res) => {
                console.log(res);
                this.PID = res.PID;
                this.router.navigate(['/survey/second_step/' + this.PID]);
            }, err => {
                console.log(err);
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
        let allow = true;
        this.InputItems.forEach( item => {
            if (item.question.id === '1.0' && item.answerChanged === false)  allow = false;
            if (item.question.id === '1.1' && item.answerChanged === false)  allow = false; });
        if (allow) {
            this.collectAllanswer();
            let putRecord = {};
            if (this.PID ) {
                putRecord = { 'Records' : this.resultList, 'PID' : this.PID };
            }else {
                putRecord = { 'Records' : this.resultList };
            }

            this.service.putRecord(putRecord).subscribe( (res) => {
                this.router.navigate(['/survey/detail/']);
            }, err => { });
        }else {
            this.confirmServ.error({
                title: '必须包含“姓名”和“体检编号”！',
                content: '如果您想退出，请点击退出按钮！'
            });
        }

    }
    exit() {                                            // 退出
        this.router.navigate( ['/survey/detail/']);
    }

    confirm() {
        const confirmlist = [];                                   // 验证列表
        let confirms = true;
        this.InputItems.forEach(item => { if (item.answerChanged === false) { confirms = false; confirmlist.push(item.question.id);
        }});
        this.RadioItems.forEach(item => { if (item.localAnswer === -1) { confirms = false; confirmlist.push(item.question.id);
        }});
        this.CheckboxItems.forEach(item => { if ( !item.localAnswer) { confirms = false; confirmlist.push(item.question.id);
        }});
        this.IdcItems.forEach( item => { if (item.answerChanged === false) { confirms = false; confirmlist.push(item.question.id);
        }});
        this.PhoneItems.forEach( item => { if ( item.answerChanged === false) { confirms = false; confirmlist.push(item.question.id);
        }});
        // this.DateItem.forEach( item => { if ( item.answerChanged === false) { confirms = false; confirmlist.push(item.question.id);
        // }});
        const confirmAll = {
            confirms: confirms,
            confirmList: confirmlist
        } ;
        return confirmAll;
    }


    collectAllanswer() {
        this.RadioItems.forEach(item => {
            if (item.answerChanged === true) { for ( let i = 0; i < item.answer.length; i++) { this.resultList.push(item.answer[i]); } }
        });
        this.CheckboxItems.forEach(item => {
            if (item.answerChanged === true) { for ( let i = 0; i < item.answer.length; i++) { this.resultList.push(item.answer[i]); } }
        });
        this.InputItems.forEach(item => {
            if (item.answerChanged === true) { for ( let i = 0; i < item.answer.length; i++) { this.resultList.push(item.answer[i]); } }
        });
        this.IdcItems.forEach(item => {
            if (item.answerChanged === true) { for ( let i = 0; i < item.answer.length; i++) { this.resultList.push(item.answer[i]); } }
        });
        this.PhoneItems.forEach(item => {
            if (item.answerChanged === true) { for ( let i = 0; i < item.answer.length; i++) { this.resultList.push(item.answer[i]); } }
        });
        this.DateItem.forEach(item => {
            if (item.answerChanged === true) { this.resultList.push(item.answer[0]); }
        });
        if (this.confirm().confirms)
            this.resultList.push(
                {'Record_ID': 'ID0_4', 'Record_Value': this.getNowdate()},
                {'Record_ID': 'ID1', 'Record_Value': 'finished'});
        else {
            this.resultList.push(
                {'Record_ID': 'ID0_4', 'Record_Value': this.getNowdate()});
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


    fillingAllanswer() {
        const getRecord = {
            'PID': this.PID
            // 'RecordID': 'ID1'
        };
        this.service.getRecord(getRecord).subscribe( (res) => {
                const fillingList = res.Records;
                this.answerList = fillingList;
                fillingList.forEach( it => {
                    if ( it['ID1'] && it['ID1'] === 'finished') { this.finished = true; }
                });
                console.log(fillingList);
                this.InputItems.forEach( item => { for ( let i = 0; i < fillingList.length; i++) {
                    let id = '';
                    if ( item.question.id === '1.0') { console.log('姓名'); id = 'ID0_1'; } else { id = this.getTransid( item.question.id); }
                    if ( fillingList[i][id] && fillingList[i][id] !== '') {  item.localAnswer[0] = fillingList[i][id]; }
                }});
                this.RadioItems.forEach( item => { for ( let i = 0; i < fillingList.length; i++) {
                    for ( let j = 1 ; j <= item.question.content.length; j++) {
                        const id = this.getTransid(item.question.id) + '_' + j;
                        if ( fillingList[i][id] && fillingList[i][id] !== '') {
                            const nums = id.split('_');
                            item.localAnswer = Number.parseInt( nums[nums.length - 1]) - 1 ;
                        }
                    }
                }});
                this.CheckboxItems.forEach( item => { for ( let i = 0; i < fillingList.length; i++) {
                    for ( let j = 1; j <= item.question.content.length; j++ ) {
                        const id = this.getTransid(item.question.id) + '_' + j;
                        if ( fillingList[i][id] && fillingList[i][id] !== '') {
                            const nums = id.split('_');
                            item.localAnswer[Number.parseInt (nums[nums.length - 1]) - 1] = true;
                        }
                    }
                }});
                this.IdcItems.forEach( item => { for (let i = 0; i < fillingList.length; i++) {
                    if (fillingList[i]['ID1_5'] && fillingList[i]['ID1_5'] !== '') { item.localAnswer = fillingList[i]['ID1_5']; }
                }});
                this.PhoneItems.forEach( item => {
                    for (let i = 0; i < fillingList.length; i++) {
                        if ( fillingList[i]['ID1_7_1'] && fillingList[i]['ID1_7_1'] !== '') {
                            item.localAnswer = fillingList[i]['ID1_7_1'];
                        }
                        if ( fillingList[i]['ID1_7_2'] && fillingList[i]['ID1_7_2'] !== '') {
                            item.localAnswer = fillingList[i]['ID1_7_2'];
                        }
                    }
                });
                this.DateItem.forEach( item => { const id = this.getTransid(item.question.id);
                    for (let i = 0; i < fillingList.length; i++) {
                        if (fillingList[i][id] && fillingList[i][id] !== '') { item.date = new Date(fillingList[i][id]); }
                    }
                });
            }, error => {
                console.log(error);
            }
        );
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

// onVoted ( hiddenList: any[] ) {
//     console.log('事件出发');
//     for (let i = 0; i < hiddenList.length; i++) {
//         for ( let j = 0; j < this.questionList.length; j++) {
//             if ( this.questionList[j].id === hiddenList[i] ) {
//                 console.log(this.questionList[j]);
//                 this.questionList[j]['hidden'] = true;
//                 console.log(this.questionList[j]);
//             }
//         }
//     }
// }


}
