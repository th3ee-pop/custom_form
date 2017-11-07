import { Component, OnInit } from '@angular/core';

import { Question } from '../question';
import { AnswerInterface } from '../answerInterface';


@Component({
  selector: 'app-checkboxcmp',
  templateUrl: './checkboxcmp.component.html',
  styleUrls: ['./checkboxcmp.component.less']
})
export class CheckboxcmpComponent extends Question implements AnswerInterface {// 继承自Question类，
  localAnswer = new Array(20);

  constructor() { 
    super();
  }

  answerChange() {
    console.log(this.localAnswer);
    this.answer = this.localAnswer ;
  }

  getAnswer() {
    return this.answer;
  }

}
