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
  changed = false;

  constructor() {
    super();
  }
  

  answerChange() {
    const question = this.question;
    

    const res = new Array();
    for (const index in this.localAnswer) {
     if (this.localAnswer[index] !== '') {
        const questionID = 'ID' + question.id;
        const item = {};
        // item[questionID] = this.localAnswer
        res.push(item);
        this.changed = true;
      }
    }
    this.answer = res;
  }

  getAnswer() {
    const answer = {
      available : this.changed ? 'true' : 'false',
      data : this.answer
    };

    return answer;
  }

}
