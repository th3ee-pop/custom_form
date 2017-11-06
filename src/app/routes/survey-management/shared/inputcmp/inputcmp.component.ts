import { Component, OnInit } from '@angular/core';

import { Question } from '../question';

@Component({
  selector: 'app-inputcmp',
  templateUrl: './inputcmp.component.html',
  styleUrls: ['./inputcmp.component.css']
})
export class InputcmpComponent extends Question {
  localAnswer= new Array(10); // 存储数据

  constructor() {
    super();
  }
  

  answerChange(event) {
    console.log(this.localAnswer);
  }

}
