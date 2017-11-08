import { Component, OnInit } from '@angular/core';

import { Question } from '../question';

import { AnswerInterface } from '../answerInterface';
@Component({
  selector: 'app-inputcmp',
  templateUrl: './inputcmp.component.html',
  styleUrls: ['./inputcmp.component.css']
})
export class InputcmpComponent extends Question  implements AnswerInterface {
  localAnswer= new Array(10); // 存储数据

  constructor() {
    super();
  }
  

  answerChange(event) {
    console.log(this.localAnswer);
  }

  getAnswer() {
    return this.localAnswer;
  }

}
