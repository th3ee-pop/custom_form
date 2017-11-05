import { Component, OnInit } from '@angular/core';

import { AnswerInterface } from '../answerInterface';
import { Question } from '../question';

@Component({
  selector: 'app-radiocmp',
  templateUrl: './radiocmp.component.html',
  styleUrls: ['./radiocmp.component.less']
})
export class RadiocmpComponent extends Question implements AnswerInterface {
  A: any;
  constructor() { 
    super();
  }


}
