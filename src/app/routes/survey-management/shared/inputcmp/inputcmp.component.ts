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
    localAnswer = []; // 存储数据
    answerChanged = false;
    validateForm: FormGroup;
    editdisabled = false;
    @Output() onVoted = new EventEmitter < any >();

    ngOnInit() {
        this.localAnswer = new Array(this.question.content.length);
    }
    vote ( hiddenList: any [], hiddenshowList: any[] ) {
        const showAndhidden = {
            'hiddenlist': hiddenList,
            'hiddenshowlist' : hiddenshowList
        };
        this.onVoted.emit(showAndhidden);
    }
    otherValidator = ( control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            this.answerChanged = false;
            return {required: true};
        }else {
            this.answerChanged = true;
        }
    };
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
        // if ( this.question.id === '9.1' || this.question.id === '9.4' || this.question.id === '9.5.a') {
        //     if ( this.localAnswer[0] === '#' ) {
        //         this.vote( this.question.hiddenlist[0], []);
        //     } else {
        //         this.vote([], this.question.hiddenlist[0]);
        //     }
        // }

        if (this.question.content.length !== 1) {
            for ( let index = 1; index <= this.question.content.length; index++) {
                const tem = {
                    Record_ID: '',
                    Record_Value: ''
                };
                // const questionID = 'ID' + this.question.id.replace(/\./g , '_') + '_' + index;
                const questionID = this.question.id1;
                tem.Record_ID = questionID;
                tem.Record_Value = this.localAnswer[index - 1];
                res.push(tem);
            }

        }  else {
            const tem = {
                Record_ID: '',
                Record_Value: ''
            };
            // if (this.question.id === '1.0' ) {
            //     const questionID = 'ID0_1';
            //     tem.Record_ID = questionID;
            // } else {
            //     const questionID = 'ID' + this.question.id.replace(/\./g, '_');
                const questionID = this.question.id1;
                tem.Record_ID = questionID;
            // }
            tem.Record_Value = this.localAnswer[0];
            res.push(tem);
            this.answer = res;
        }
    }
}
