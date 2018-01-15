import {AfterViewInit, Component, OnInit, QueryList, ViewChildren, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '@core/services/http.service';
import {NzModalService} from 'ng-zorro-antd';

import {InputcmpComponent} from '../shared/inputcmp/inputcmp.component';
import {RadiocmpComponent} from '../shared/radiocmp/radiocmp.component';

import {QuestionList} from '../shared/ql';
import {ScheduleList} from '../shared/scheduleList';
import {Table64Component} from "../shared/tablecmp/table64/table64.component";
import {SelectableInputComponent} from "../shared/tablecmp/selectable-input/selectable-input.component";
import {MultiRadioComponent} from "../shared/tablecmp/multi-radio/multi-radio.component";
import {SelectableTableComponent} from "../../useful-table/selectable-table/selectable-table.component";

@Component({
  selector: 'app-info6',
  templateUrl: './info6.component.html',
  styleUrls: ['./info6.component.less']
})
export class Info6Component implements OnInit, AfterViewInit {

    @ViewChildren(InputcmpComponent) InputItems: QueryList<InputcmpComponent>;
    @ViewChildren(RadiocmpComponent) RadioItems: QueryList<RadiocmpComponent>;
    @ViewChildren(Table64Component) Table64Item: QueryList<Table64Component>;
    @ViewChildren(MultiRadioComponent) MultiRadioItems: QueryList<MultiRadioComponent>;
    @ViewChildren(SelectableInputComponent) SelectableInputItems: QueryList<SelectableInputComponent>;
    @ViewChildren(SelectableTableComponent) SelectableTableItems: QueryList<SelectableTableComponent>;

    current = 6;
    questions = new QuestionList().questions;
    questionSave = this.questions; // 用来传到后端
    questionList = [];
    schedule_list = new ScheduleList().schedule_list; // 步骤条的list
    resultList = [];                                  // 用于封装答案
    answerList = [];
    PID = '';
    fillingList = [];                                 // 用于从后端获取答案
    putRecord = {};

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private confirmServ: NzModalService,
      private service: HttpService
  ) {
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
      this.questionList = this.questionSave[this.current];
  }

    ngAfterViewInit() {
        if (this.PID) {
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

    next() {
        if (this.confirm().confrims) {
            this.initPutRecord();
            console.log(this.putRecord);
            this.service.putRecord(this.putRecord).subscribe((res) => {
                this.router.navigate(['system/survey/info7/' + this.PID]);
            });
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
        this.router.navigate(['system/survey/info5/' + this.PID]);
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
        this.SelectableInputItems.forEach(item => { if (item.question.hidden === false && item.answerChanged === false) {
            confirms = false;
            confirmlist.push(item.question.id1);
        }});
        this.MultiRadioItems.forEach(item => { if (item.question.hidden === false && item.answerChanged === false) {
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
        this.Table64Item.forEach(item => {
            item.getAnswer();
            item.changedAnswer.forEach(d => {
                this.resultList.push(d);
            });
        });
        this.SelectableInputItems.forEach(item => {
            if (item.answer) {
                for (let i = 0; i < item.answer.length; i++) {
                    this.resultList.push(item.answer[i]);
                }
            }
        });
        this.MultiRadioItems.forEach(item => {
            if (item.answer) {
                for (let i = 0; i < item.answer.length; i++) {
                    this.resultList.push(item.answer[i]);
                }
            }
        });
        this.SelectableTableItems.forEach(item => {
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
    }

    fillingAllanswer() {
        const getRecord = {
            'PID': this.PID
        };
        this.service.getRecord(getRecord).subscribe(
            (res) => {
                this.fillingList = res.Records;
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

                this.Table64Item.forEach(item => {
                    const id = item.idArray;
                    this.fillingList.forEach(d => {
                        for (let j = 0; j < item.initialArray.length; j++) {
                            if (d[id[j]] && d[id[j]] !== '') {
                                item.initialArray[j] = d[id[j]];
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
