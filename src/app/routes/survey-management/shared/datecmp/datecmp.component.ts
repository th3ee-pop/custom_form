import {Component, OnInit, EventEmitter, Output} from '@angular/core';
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
    editdisabled = false;
    @Output() onVoted = new EventEmitter< any >();
    constructor(private fb: FormBuilder) {
        super();
    }
    answerChange() {
        const res = [];
        const tem = {
            Record_ID: '',
            Record_Value: {}
        };
        const questionID = this.question.id1;
        tem.Record_ID = questionID;
        tem.Record_Value = this.date;
        res.push(tem);
        this.answer = res;
        if (this.date) {
            this.answerChanged = true;
        }else {
            this.answerChanged = false;
        };
        if (this.question.id1 === '1.13') {
            const votedata = {
                'in_date': this.date
            };
            this.onVoted.emit(votedata);
        }else if (this.question.id1 === '1.14') {
            const votedata = {
                'out_date': this.date
            };
            this.onVoted.emit(votedata);
        }
    }
}
