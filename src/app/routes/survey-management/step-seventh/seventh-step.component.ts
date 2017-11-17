import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, PreloadingStrategy, Params} from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { HttpService } from '@core/services/http.service';

import { InputcmpComponent } from '../shared/inputcmp/inputcmp.component';
import { RadiocmpComponent } from '../shared/radiocmp/radiocmp.component';
import { CheckboxcmpComponent} from '../shared/checkboxcmp/checkboxcmp.component';
import { Table74Component} from '../shared/tablecmp/table74/table74.component';
import { Table715Component} from '../shared/tablecmp/table715/table715.component';

import { QuestionList } from '../shared/questionList';
import { ScheduleList } from '../shared/scheduleList';

@Component({
    selector: 'app-seventh-step',
    templateUrl: './seventh-step.component.html',
    styleUrls: ['./seventh-step.component.css']
})

export class SeventhStepComponent implements OnInit, AfterViewInit {
    @ViewChildren(InputcmpComponent) InputItems: QueryList<InputcmpComponent>;
    @ViewChildren(RadiocmpComponent) RadioItems: QueryList<RadiocmpComponent>;
    @ViewChildren(CheckboxcmpComponent) CheckboxItem: QueryList<CheckboxcmpComponent>;
    @ViewChildren(Table74Component) Table74Item: QueryList<Table74Component>;
    @ViewChildren(Table715Component) Table715Item: QueryList<Table715Component>;
    current = 6;                                        // 当前步骤
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
        this.fillingAllanswer();
    }
    pre() {                                             // 上一步
        this.collectAllanswer();
        const putRecord = { 'PID': this.PID, 'Records' : this.resultList };
        this.service.putRecord(putRecord).subscribe( (res) => {
        }, error => { });
        this.router.navigate( ['/survey/sixth_step/' + this.PID]);
    }
    next() {                                            // 下一步
        if ( this.confirm().confirms ) {
            this.collectAllanswer();
            const putRecord = { 'Records': this.resultList, 'PID': this.PID};
            this.service.putRecord(putRecord).subscribe( (res) => {
                console.log(res);
                this.router.navigate(['/survey/eighth_step/' + this.PID]);
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
        this.router.navigate(['/survey/detail/']);
    }

    confirm() {
        const confirmlist = [];
        let confirms = true;
        this.InputItems.forEach(item => { if (item.answerChanged === false) { confirms = false; confirmlist.push(item.question.id);
        }});
        this.RadioItems.forEach(item => { if (item.localAnswer === -1) { confirms = false; confirmlist.push(item.question.id);
        }});
        this.CheckboxItem.forEach(item => { if ( !item.localAnswer) { confirms = false; confirmlist.push(item.question.id);
        }});
        this.Table74Item.forEach( item => { if ( !item.answerCheck() ) { confirms = false; confirmlist.push(item.question.id); }});
        this.Table715Item.forEach( item => { if ( !item.answerCheck() ) { confirms = false; confirmlist.push(item.question.id); }});
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
        this.Table74Item.forEach( item => {
                if ( item.answerCheck() ) for ( let i = 0; i < item.answer.length; i++) { this.resultList.push(item.answer[i]); }
            }
        );
        this.Table715Item.forEach( item => {
            if ( item.answerCheck() ) for ( let i = 0; i < item.answer.length; i++) { this.resultList.push(item.answer[i]); }
            }
        );
        if (this.confirm().confirms)
            this.resultList.push(
                {'Record_ID': 'ID0_4', 'Record_Value': this.getNowdate()},
                {'Record_ID': 'ID3', 'Record_Value': 'finished'});
        else {
            this.resultList.push(
                {'Record_ID': 'ID0_4', 'Record_Value': this.getNowdate()},
                {'Record_ID': 'ID3', 'Record_Value': ''});
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
        };
        this.service.getRecord( getRecord).subscribe( (res) => {
            const fillingList = res.Records;
            this.answerList = fillingList;
            fillingList.forEach( it => { if ( it['ID7'] && it['ID7'] === 'finished') this.finished = true;
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
            this.CheckboxItem.forEach( item => { for ( let i = 0; i < fillingList.length; i++) {
                for ( let j = 1; j <= item.question.content.length; j++ ) {
                    const id = this.getTransid(item.question.id) + '_' + j;
                    if ( fillingList[i][id] && fillingList[i][id] !== '') {
                        const nums = id.split('_');
                        item.localAnswer[Number.parseInt (nums[nums.length - 1]) - 1] = true;
                    }
                }
            }});
            this.Table74Item.forEach( item => {
                    for ( let i = 0; i < item.illnessNames.length; i++ ) {
                        const id1 = 'ID7_4' + '_h_' + ( i + 1 );
                        const id2 = 'ID7_4' + '_a_' + ( i + 1 );
                        const id3 = 'ID7_4' + '_b_' + ( i + 1 );
                        const id4 = 'ID7_4' + '_c_' + ( i + 1 );
                        const id5 = 'ID7_4' + '_d_' + ( i + 1 );
                        const id6 = 'ID7_4' + '_e_' + ( i + 1 );
                        fillingList.forEach( it => {
                                if ( it[id1] ) { item.other[i] = it[id1]; }
                                if ( it[id2] ) { item.hasThisIllness[i] = true; }
                                if ( it[id3] ) { item.firstSickAge[i] = it[id3]; }
                                if ( it[id4] ) { item.beingTreated[i] = true; }
                                if ( it[id5] ) { item.hospitalized[i] = true; }
                                if ( it[id6] ) { item.lastTimeInHospital[i] = new Date(it[id6]); }
                            }
                        );

                    }
                }
            );
            this.Table715Item.forEach( item => {
                    for (let i = 0; i < item.illnessNames.length; i++ ) {
                        const id1 = 'ID7_15' + '_a_' + ( i + 1 );
                        const id2 = 'ID7_15' + '_b_' + ( i + 1 );
                        const id3 = 'ID7_15' + '_c_' + ( i + 1 );
                        const id4 = 'ID7_15' + '_d_' + ( i + 1 );
                        fillingList.forEach( it => {
                                if ( it[id1] ) { item.father[i] = true; }
                                if ( it[id2] ) { item.mother[i] = true; }
                                if ( it[id3] ) { item.brothersAndSisters[i] = it[id3]; }
                                if ( it[id4] ) { item.children[i] = it[id4]; }
                            }
                        );

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
