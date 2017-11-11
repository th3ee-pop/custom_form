import { Component, OnInit } from '@angular/core';

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

  /**
   * 存储问题是否填写的变量,默认false
   */
  answerChanged = false;

  constructor() {
    super();
  }

  /**
   * 答案改变后触发
   */
  answerChange() {
    const numOfRadio = this.question.content.length; // 选项个数
    const res = [];
    for (let index = 0; index < numOfRadio ; index++) {
      const tem = {
          questionID: '',
          answer: false
      };
      const questionID = 'ID' + this.question.id.replace('.' , '_') + '_' + index;
      tem.questionID = questionID;
      if (index === this.localAnswer) {
          tem.answer = true;
      }
      res.push(tem);
    }

    this.answer = res;
    this.answerChanged =  true;
    console.log(this.answer);
  }
}
