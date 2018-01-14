/**
 * Created by th3ee on 1/11/18.
 */
/**
 *  input radio idc phone checkbox date
 */
import {AfterViewInit, Component, OnInit, QueryList, ViewChildren, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '@core/services/http.service';
import {NzModalService} from 'ng-zorro-antd';

import {InputcmpComponent} from '../shared/inputcmp/inputcmp.component';
import {RadiocmpComponent} from '../shared/radiocmp/radiocmp.component';
import { ExampleComponent } from '../../useful-table/example/example.component';
import { MultiTableComponent } from '../../useful-table/multi-table/multi-table.component';
import { SelectableTableComponent } from '../../useful-table/selectable-table/selectable-table.component';
import { Table52Component } from '../../useful-table/table52/table52.component';
import { Table53Component } from '../../useful-table/table53/table53.component';
import { Table54Component } from '../../useful-table/table54/table54.component';
import { Table55Component } from '../../useful-table/table55/table55.component';
import {QuestionList} from '../shared/ql';
import {ScheduleList} from '../shared/scheduleList';

@Component({
    selector: 'app-info5-step',
    templateUrl: './info5.component.html',
    styleUrls: ['./info5.component.css']
})
export class Info5Component implements OnInit, AfterViewInit {

    @ViewChildren(InputcmpComponent) InputItems: QueryList<InputcmpComponent>
    @ViewChildren(RadiocmpComponent) RadioItems: QueryList<RadiocmpComponent>
    @ViewChildren(ExampleComponent) ExampleItems: QueryList<ExampleComponent>
    @ViewChildren(MultiTableComponent) MultiTableItems: QueryList<MultiTableComponent>
    @ViewChildren(SelectableTableComponent) SelectableTableItems: QueryList<SelectableTableComponent>
    @ViewChildren(Table52Component) Table52Items: QueryList<Table52Component>
    @ViewChildren(Table53Component) Table53Items: QueryList<Table53Component>
    @ViewChildren(Table54Component) Table54Items: QueryList<Table54Component>
    @ViewChildren(Table55Component) Table55Items: QueryList<Table55Component>
    current = 5;
    questions = new QuestionList().questions;
    questionSave = this.questions; // 用来传到后端
    questionList = []
    schedule_list = new ScheduleList().schedule_list; // 步骤条的list
    resultList = [];                                  // 用于封装答案
    PID = '';
    fillingList = [];                                 // 用于从后端获取答案
    putRecord = {};
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: HttpService,
        private confirmServ: NzModalService,
        private ref: ChangeDetectorRef
    ) {

    }
    ngOnInit() {
        this.questionList = this.questionSave[this.current];
    }
    ngAfterViewInit() {
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
    next() {
        if (this.confirm().confrims) {
            this.initPutRecord()
            console.log(this.putRecord);
            /*
             * 在此处调用API 发送请求
             * */
        } else {
            let str = '';
            this.confirm().confirmsList.forEach( item => {
                str = str + item + '、';
            });
            this.confirmServ.error({
                title: '您还有以下必填项未完成：',
                content: str
            });
        }
    }
    temporary_deposit() {
        this.initPutRecord();
        console.log(this.putRecord);
        /*
         * 在此处调用API 发送请求
         * */
    }
    exit () {
        this.router.navigate( ['system/survey/detail/']);
    }
    pre() {
        this.initPutRecord();
        console.log(this.putRecord);
    }

    initPutRecord() {
        this.collecAllanswer()
        if (this.PID) {
            this.putRecord = { 'Records': this.resultList, 'PID': this.PID };
        }else {
            this.putRecord = { 'Records': this.resultList };
        }
    }
    confirm() {
        const confirmlist = [];
        let confirms = true;
        this.InputItems.forEach(item => { if (item.question.hidden === false && item.answerChanged === false) {
            confirms = false;
            confirmlist.push(item.question.id1);
        }});
        this.RadioItems.forEach(item => { if (item.question.hidden === false && item.answerChanged === false) {
            confirms = false;
            confirmlist.push(item.question.id1);
        }});
        const confirmAll = {
            confrims: confirms,
            confirmsList: confirmlist
        };
        return confirmAll;
    }

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
                console.log( item.answer );
                for (let i = 0; i < item.answer.length; i++) {
                    this.resultList.push(item.answer[i]);
                }
            }
        });
    }
    fillingAllanswer() {

    }

}
