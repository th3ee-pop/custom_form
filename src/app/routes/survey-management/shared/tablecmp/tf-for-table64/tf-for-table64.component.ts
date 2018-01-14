import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Question} from "../../question";

@Component({
  selector: 'app-tf-for-table64',
  templateUrl: './tf-for-table64.component.html',
  styleUrls: ['./tf-for-table64.component.less']
})
export class TfForTable64Component  extends Question implements OnInit {

    localAnswer = [];
    answerChanged = false;
    editdisabled = false;
    tf = ["否", "是"];
    answer;

  constructor() { super(); }

  ngOnInit() {
      console.log(this.question);
      this.localAnswer= new Array(this.question.content.length);
  }

    answerChange() {
        const res = [];
        const item = {
            Record_ID : '',
            Record_Value: ''
        }
        for (let row = 0; row < this.question.content.length; row ++) {  // 行
            if ( this.localAnswer[row] && this.localAnswer[row] !== '') {
                item.Record_ID = this.question.id2[row];
                item.Record_Value = this.localAnswer[row];
                res.push(item);
            }
        }
        this.answer = res;
        if ( this.answerCheck() === true)
            this.answerChanged = true;
        else
            this.answerChanged = false;
    }

    answerCheck() {
        this.localAnswer.forEach(item => {
            if ( item !== '')
                return true;
        });
        return false;
    }
    getAnswer() {}
}
