import { Component, OnInit } from '@angular/core';

import { Question } from '../question';
import { AnswerInterface } from '../answerInterface';

@Component({
  selector: 'app-inputcmp',
  templateUrl: './inputcmp.component.html',
  styleUrls: ['./inputcmp.component.css']
})
export class InputcmpComponent extends Question implements AnswerInterface {
  localAnswer: any;
  constructor() {
    super();
  }

  answerChange() {
    console.log(this.localAnswer);
  }

}
