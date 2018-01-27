import { Component, OnInit, Output , EventEmitter } from '@angular/core';

import { Question } from '../question';

import { AnswerInterface } from '../answerInterface';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
@Component({
    selector: 'app-inputcmp',
    templateUrl: './inputcmp.component.html',
    styleUrls: ['./inputcmp.component.css']
})
export class InputcmpComponent extends Question implements OnInit {
    localAnswer = ''; // 存储数据
    answerChanged = false;
    validateForm: FormGroup;
    editdisabled = false;
    @Output() onVoted = new EventEmitter< any >();
    // @Output() onwVoted = new EventEmitter < any >();

    ngOnInit() {
    }
    otherValidator = ( control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            this.answerChanged = false;
            return {required: true};
        }else {
            this.answerChanged = true;
        }
    }
    getFormControl(name) {
        return this.validateForm.controls[ name ];
    }
    constructor(private fb: FormBuilder) {
        super();
        this.validateForm = this.fb.group(
            {
                input: ['', [this.otherValidator]]
            }
        );
    }

    answerChange() {
        const res = [];
        const tem = {
            Record_ID: '',
            Record_Value: ''
        };
        const questionID = this.question.id2;
        tem.Record_ID = questionID;
        tem.Record_Value = this.localAnswer;
        res.push(tem);
        this.answer = res;
        if (this.question.id1 === '2.1') {
            const votedata = {
                'height': this.localAnswer
            };
            this.onVoted.emit(votedata);
        }else if (this.question.id1 === '2.2') {
            const votedata = {
                'weight': this.localAnswer
            };
            this.onVoted.emit(votedata);
        }


    }
}
