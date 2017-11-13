import { Component, OnInit } from '@angular/core';

import { Question } from '../question';
import { AnswerInterface } from '../answerInterface';


@Component({
    selector: 'app-checkboxcmp',
    templateUrl: './checkboxcmp.component.html',
    styleUrls: ['./checkboxcmp.component.less']
})
export class CheckboxcmpComponent extends Question implements OnInit {// 继承自Question类，
    localAnswer;
    answerChanged = false;
    ngOnInit() {
        this.localAnswer = new Array(this.question.content.length);
    }
    constructor() {
        super();
    }

    answerChange() {
        const res = [];
        for (let index = 0; index < this.question.content.length; index++ ) {
            const tem = {
                Record_ID: '',
                Record_Value: false
            };
            const  questionID = 'ID' + this.question.id.replace('.' , '_') + '_' + index;
            tem.Record_ID = questionID;
            if (this.localAnswer[index] === true) {
                tem.Record_Value = true;
            }else {
                tem.Record_Value = false;
            }
            res.push(tem);
        }
        this.answer = res;
        if ( this.localAnswer ) {
            this.answerChanged = true;
        }else {
            this.answerChanged = false;
        }
    }
}
