import { Component, OnInit } from '@angular/core';

import { Question } from '../question';


@Component({
  selector: 'app-checkboxcmp',
  templateUrl: './checkboxcmp.component.html',
  styleUrls: ['./checkboxcmp.component.less']
})
export class CheckboxcmpComponent extends Question {// 继承自Question类，
  localAnswer = new Array(20);

  constructor() { 
    super();
  }

  answerChange() {
    console.log(this.localAnswer);
  }

}
