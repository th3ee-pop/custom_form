import { Component, OnInit } from '@angular/core';

import { AnswerInterface } from '../answerInterface';
import { Question } from '../question';


@Component({
  selector: 'app-checkboxcmp',
  templateUrl: './checkboxcmp.component.html',
  styleUrls: ['./checkboxcmp.component.less']
})
export class CheckboxcmpComponent extends Question implements AnswerInterface {

  constructor() { 
    super();
  }


}
