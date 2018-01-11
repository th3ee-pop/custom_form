import {AfterViewInit, Component, OnInit, QueryList, ViewChildren, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '@core/services/http.service';
import {NzModalService} from 'ng-zorro-antd';

import {InputcmpComponent} from '../shared/inputcmp/inputcmp.component';
import {RadiocmpComponent} from '../shared/radiocmp/radiocmp.component';
import {IdccmpComponent} from '../shared/idccmp/idccmp.component';
import {QuestionList} from '../shared/questionList';

@Component({
  selector: 'app-info0',
  templateUrl: './info0.component.html',
  styleUrls: ['./info0.component.less']
})
export class Info0Component implements OnInit, AfterViewInit  {
    @ViewChildren(InputcmpComponent) InputItems: QueryList<InputcmpComponent>;
    @ViewChildren(RadiocmpComponent) RadioItems: QueryList<RadiocmpComponent>;
    @ViewChildren(IdccmpComponent) IdcItems: QueryList<IdccmpComponent>;

    current = 0; // 当前步骤
    questions = new QuestionList().questions;
    questionList = [];     // 问题总列表
    resultList = [];                                    // 填写结果
    PID = '';                                           // PID
    finished = false;
    answerList = [];
    buttondisable = false;
    fillingList = [];

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private service: HttpService,
      private confirmServ: NzModalService,
      private ref: ChangeDetectorRef
  ) {
      this.PID = this.route.params['value']['PID'];
      // if( this.PID ){
      //     const  getRecord = {
      //         'PID': this.PID
      //     };
          // this.service.getRecord(getRecord).subscribe((res) => {
          //     const list = res.Records;
          //     console.log('this is answerlist',list);
          //     this.answerList = list;
              // for ( let i = 0; i < list.length; i++) {
                  // if (list[i]['ID0_0'] && list[i]['ID0_0'] !== '') {
                  //     this.questionList = list[i]['ID0_0'][0];
                  // }
          // }
          // })
      // }
  }

  ngOnInit() {
      if ( !this.PID ) {
          this.questionList = this.questions[0];
          console.log(this.questionList);
      }
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

    next() {

        if (this.confirm().confirms) {
            this.collectAllanswer();
            let putRecord = {};
            this.router.navigate(['system/survey/info2']);
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

    confirm() {
        const confirmlist = [];                                   // 验证列表
        let confirms = true;
        this.InputItems.forEach(item => { if ( item.question.hidden === false && item.answerChanged === false) {
            confirms = false; confirmlist.push(item.question.id1);
        }});
        this.RadioItems.forEach(item => { if ( item.question.hidden === false && item.localAnswer === -1) {
            confirms = false; confirmlist.push(item.question.id1);
        }});
        this.IdcItems.forEach( item => { if ( item.question.hidden === false && item.answerChanged === false) {
            confirms = false; confirmlist.push(item.question.id);
        }});
        const confirmAll = {
            confirms: confirms,
            confirmList: confirmlist
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
            console.log(item);
            if (item.answerChanged === true) {
                for (let i = 0; i < item.answer.length; i++) {
                    this.resultList.push(item.answer[i]);
                }
            }
        });
        this.IdcItems.forEach(item => {
            if (item.answerChanged === true) { for ( let i = 0; i < item.answer.length; i++) { this.resultList.push(item.answer[i]); } }
        });
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
    }

    fillingAllanswer() {
        console.log("fill in");
        const getRecord = {
            'PID': this.PID
        };
        this.service.getRecord(getRecord).subscribe((res) => {
            this.fillingList = res.Records;
            console.log('this is answerlist',this.fillingList);
            console.log(this.InputItems);
            this.InputItems.forEach(item => {
                console.log(item);
                for (let i = 0; i < this.fillingList.length; i++) {
                    let id = item.question.id2;
                    // if ( item.question.id === '1.0') { id = 'ID0_1'; } else { id = this.getTransid( item.question.id);  }
                    if (this.fillingList[i][id] && this.fillingList[i][id] !== '') {
                        item.localAnswer = this.fillingList[i][id];
                    }
                    if (this.fillingList[i][id] === 0) {
                        item.localAnswer = '0';
                    }
                }
            });

        this.RadioItems.forEach(item => {
            for (let i = 0; i < this.fillingList.length; i++) {
                for (let j = 1; j <= item.question.content.length; j++) {
                    const id = item.question.id2;
                    if (this.fillingList[i][id] && this.fillingList[i][id] !== '') {
                        const nums = id.split('_');
                        item.localAnswer = Number.parseInt(nums[nums.length - 1]) - 1;
                    }
                }
            }
        });
    }, error => {
            console.log(error);
        });
    }

    temporary_deposit(){

    }

}
