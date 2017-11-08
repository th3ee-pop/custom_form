import { Component, OnInit } from '@angular/core';

import { Question } from '../question';

import { AnswerInterface } from '../answerInterface';

@Component({
  selector: 'app-tablecmp',
  templateUrl: './tablecmp.component.html',
  styleUrls: ['./tablecmp.component.less']
})
export class TablecmpComponent extends Question implements AnswerInterface {
  localAnswer = {};
  constructor() { 
    super();
  }

  getAnswer() {
    // return this.localAnswer;
  }

}
