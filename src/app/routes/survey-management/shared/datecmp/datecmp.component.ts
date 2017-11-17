import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-datecmp',
    templateUrl: './datecmp.component.html',
    styleUrls: ['./datecmp.component.less']
})
export class DatecmpComponent extends Question {
    date = new Date();
    answerChanged = false;
    constructor(private fb: FormBuilder) {
        super();
    }
    answerChange() {
        const res = [];
        const tem = {
            Record_ID: '',
            Record_Value: {}
        };
        const questionID = 'ID' + this.question.id.replace(/\./g , '_');
        tem.Record_ID = questionID;
        tem.Record_Value = this.date;
        res.push(tem);
        this.answer = res;
        if (this.date) {
            this.answerChanged = true;
        }else {
            this.answerChanged = false;
        }
    }
}
