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
    questionSave = []; // 用来传到后端
    questionList = [];
    schedule_list = new ScheduleList().schedule_list; // 步骤条的list
    resultList = [];
    answerList = [];
    PID = '';
    fillingList = [];                                 // 用于从后端获取答案
    putRecord = {};

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
                console.log(res);
                this.answerList = list;
                for (let i = 0; i < list.length; i++) {
                    if (list[i]['questionlist'] && list[i]['questionlist'] !== '') {
                        this.questionList = list[i]['questionlist'][this.current];
                        this.questionSave = list[i]['questionlist'];
                        break;
                    }
                }
            });

        }
    }
    ngOnInit() {

        // this.fillingAllanswer();
        // this.questionList = this.questionSave[this.current];
    }
    ngAfterViewInit() {
        if (this.PID) {
            console.log(this.PID);
            console.log('found');
            this.fillingAllanswer();
        }
        console.log('not found');
    }
    onVoted (showAndhidden: any) {
        console.log(showAndhidden);
        for ( let i = 0; i <  showAndhidden.hiddenshowlist.length; i++) {
            for ( let j = 0; j < this.questionList.length; j++) {
                if ( this.questionList[j].id1 === showAndhidden.hiddenshowlist[i] ) {
                    this.questionList[j].hidden = false;
                }
            }
        }
        for (let i = 0; i < showAndhidden.hiddenlist.length; i++) {
            for ( let j = 0; j < this.questionList.length; j++) {
                if ( this.questionList[j].id1 === showAndhidden.hiddenlist[i] ) {
                    console.log(this.questionList[j]);
                    this.questionList[j].hidden = true;
                    console.log(this.questionList[j]);
                }
            }
        }
    }
    next() {
        // if (this.confirm().confrims) {
        this.initPutRecord();
        console.log(this.putRecord);
        this.service.putRecord(this.putRecord).subscribe((res) => {
            this.router.navigate(['system/survey/info6/' + this.PID]);
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
    temporary_deposit() {
        this.initPutRecord();
        console.log(this.putRecord);
        this.service.putRecord(this.putRecord).subscribe((res) => {
            this.router.navigate(['system/survey/detail/']);
        }, error => {
        });
    }
    exit () {
        this.router.navigate( ['system/survey/detail/']);
    }
    pre() {
        this.initPutRecord();
        this.service.putRecord(this.putRecord).subscribe((res) => {
        }, error => {
        });
        this.router.navigate(['system/survey/info4/' + this.PID]);
        console.log(this.putRecord);
    }

    initPutRecord() {
        this.collecAllanswer();
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
        this.resultList = [];
        this.RadioItems.forEach(item => {
            if (item.answerChanged === true) {
                for (let i = 0; i < item.answer.length; i++) {
                    console.log(item.answer);
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
        this.ExampleItems.forEach(item => {
            item.getAnswer();
            item.changedAnswer.forEach(d => {
                this.resultList.push(d);
            });
        });
        this.MultiTableItems.forEach(item => {
            item.getAnswer();
            item.changedAnswer.forEach(d => {
                this.resultList.push(d);
            });
        });
        this.SelectableTableItems.forEach(item => {
            item.getAnswer();
            item.changedAnswer.forEach(d => {
                this.resultList.push(d);
            });
        });
        this.Table52Items.forEach(item => {
            item.getAnswer();
            item.changedAnswer.forEach(d => {
                this.resultList.push(d);
            });
        });
        this.Table53Items.forEach(item => {
            item.getAnswer();
            item.changedAnswer.forEach(d => {
                this.resultList.push(d);
            });
        });
        this.Table54Items.forEach(item => {
            item.getAnswer();
            item.changedAnswer.forEach(d => {
                this.resultList.push(d);
            });
        });
        this.Table55Items.forEach(item => {
            item.getAnswer();
            item.changedAnswer.forEach(d => {
                this.resultList.push(d);
            });
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
    fillingAllanswer() {
        const getRecord = {
            'PID': this.PID
        };
        this.service.getRecord(getRecord).subscribe(
            (res) => {
                this.fillingList = res.Records;
                console.log(this.fillingList);
                const pageFive = [];
                this.fillingList.forEach(d => {
                    for (const key in d) {
                        if (key.substr(0, 1) === 'e') {
                            pageFive.push(d);
                        }
                    }
                });
                console.log(pageFive);
                if (this.fillingList && this.fillingList.length !== 0) {
                    this.InputItems.forEach(item => {
                        this.fillingList.forEach(fl => {
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
                    this.fillingList.forEach(fl => {
                        const id = item.question.id2;
                        if (fl[id] && fl[id] !== '') {
                            item.localAnswer = fl[id] - 1;
                        }
                    });
                });
                this.MultiTableItems.forEach(item => {
                    const id = item.idArray;
                    console.log(id);
                    pageFive.forEach(d => {
                        for (let i = 0; i < item.row; i++) {
                            for (let j = 0; j < item.column; j++) {
                                if (d[id[i][j]] && d[id[i][j]] !== '') {
                                    item.initialArray[i][j] = d[id[i][j]];
                                }
                            }
                        }
                    });
                });
                this.ExampleItems.forEach(item => {
                    const id = item.idArray;
                    console.log(id);
                    pageFive.forEach(d => {
                        for (let i = 0; i < item.row; i++) {
                            for (let j = 0; j < item.column; j++) {
                                if (d[id[i][j]] && d[id[i][j]] !== '') {
                                    item.initialArray[i][j] = d[id[i][j]];
                                }
                            }
                        }
                    });
                });
                this.SelectableTableItems.forEach(item => {
                    const id = item.idArray;
                    console.log(id);
                    pageFive.forEach(d => {
                        for (let i = 0; i < item.row; i++) {
                            for (let j = 0; j < item.column + 1; j++) {
                                if (d[id[i][j]] && d[id[i][j]] !== '') {
                                    item.initialArray[i][j] = d[id[i][j]];
                                    if (item.initialArray[i][j] === '1' || item.initialArray[i][j] === '2') {
                                        item.initialArray[i][j] = parseInt(item.initialArray[i][j]);
                                    }
                                }
                            }
                        }
                    });
                });
                this.Table52Items.forEach(item => {
                    const id = item.idArray;
                    console.log(id);
                    pageFive.forEach(d => {
                        for (let i = 0; i < item.row + item.overallItem - 1 ; i++) {
                            for (let j = 0; j < item.column ; j++) {
                                if (d[id[i][j]] && d[id[i][j]] !== '') {
                                    item.initialArray[i][j] = d[id[i][j]];
                                }
                            }
                        }
                    });
                });
                this.Table53Items.forEach(item => {
                    const id = item.idArray;
                    console.log(id);
                    pageFive.forEach(d => {
                        for (let i = 0; i < item.row; i++) {
                            for (let j = 0; j < item.column; j++) {
                                if (d[id[i][j]] && d[id[i][j]] !== '') {
                                    item.initialArray[i][j] = d[id[i][j]];
                                }
                            }
                        }
                    });
                });
                this.Table54Items.forEach(item => {
                    const id = item.idArray;
                    console.log(id);
                    pageFive.forEach(d => {
                        for (let j = 0; j < item.initialArray.length; j++) {
                            if (d[id[j]] && d[id[j]] !== '') {
                                item.initialArray[j] = d[id[j]];
                            }
                        }
                    });
                });
                this.Table55Items.forEach(item => {
                    const id = item.idArray;
                    console.log(id);
                    pageFive.forEach(d => {
                        for (let i = 0; i < item.row; i++) {
                            for (let j = 0; j < item.column * 2 - item.selectableCol + 1; j++) {
                                if (d[id[i][j]] && d[id[i][j]] !== '') {
                                    item.initialArray[i][j] = d[id[i][j]];
                                }
                            }
                        }
                    });
                });
                console.log(res);
            }, error => {
                console.log(error);
            }
        );
    }

}
