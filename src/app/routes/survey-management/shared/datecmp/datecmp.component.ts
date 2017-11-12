import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

import { AnswerInterface } from '../answerInterface';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-datecmp',
  templateUrl: './datecmp.component.html',
  styleUrls: ['./datecmp.component.less']
})
export class DatecmpComponent extends Question {
  date = ''; // 
  answerChanged = false;


  constructor(private fb: FormBuilder) {
      super();
      
  }

  answerChange() {
    const res = [];
    const tem = {
        questionID: '',
        answer: ''
    };
    const questionID = 'ID' + this.question.id.replace('.' , '_');
    tem.questionID = questionID;
    tem.answer = this.date;
    res.push(tem);
    this.answer = res;

    console.log(res);
  }

}
