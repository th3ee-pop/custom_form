import { Component, OnInit, Output , EventEmitter} from '@angular/core';

import { Question } from '../question';

import { AnswerInterface } from '../answerInterface';
@Component({
  selector: 'app-radiocmp',
  templateUrl: './radiocmp.component.html',
  styleUrls: ['./radiocmp.component.less']
})
export class RadiocmpComponent extends Question {

  /**
   *  存储答案的变量数组
   */
  localAnswer = -1;
  @Output() onVoted = new EventEmitter< any [] >();
  /**
   * 存储问题是否填写的变量,默认false
   */
  answerChanged = false;
  editdisabled = false;
  constructor() {
    super();
  }

  // vote ( hiddenList: any [] ) {
  //     this.onVoted.emit(hiddenList);
  // }
  /**
   * 答案改变后触发
   */
  answerChange() {
      const res = [];
      const tem = {
          Record_ID: '',
          Record_Value: false
      };
      if (this.localAnswer !== -1) {
          const questionID = 'ID' + this.question.id.replace(/\./g , '_') + '_' + (this.localAnswer + 1);
          tem.Record_ID = questionID;
          tem.Record_Value = true;
          res.push(tem);
          this.answer = res;
      }
      // if (this.question.hiddenList.length !== 0) {
      //     if (this.localAnswer === this.question.emitId) {  console.log('事件触发在radio'); this.vote(this.question.hiddenList); }
      // }
      if ( this.localAnswer !== -1 )  this.answerChanged =  true;
      console.log(this.answer);
  }
}
