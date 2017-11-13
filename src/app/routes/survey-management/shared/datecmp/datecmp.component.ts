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
        Record_ID: '',
        Record_Value: ''
    };
    const questionID = 'ID' + this.question.id.replace('.' , '_');
    tem.Record_ID = questionID;
    tem.Record_Value = this.date;
    res.push(tem);
    this.answer = res;

    console.log(res);
  }

}
