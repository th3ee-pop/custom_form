import { Component, OnInit } from '@angular/core';

import { Question } from '../question';
import { AnswerInterface } from '../answerInterface';


@Component({
    selector: 'app-checkboxcmp',
    templateUrl: './checkboxcmp.component.html',
    styleUrls: ['./checkboxcmp.component.less']
})
export class CheckboxcmpComponent extends Question implements AnswerInterface {// 继承自Question类，
    localAnswer = new Array(20);
    Changed = false;
    constructor() {
        super();
    }

    answerChange() {
        this.answer = this.localAnswer;
        if ( this.localAnswer ) {
            this.Changed = true;
        }else {
            this.Changed = false;
        }
    }


    getAnswer() {
        const res = {
            available : this.Changed,
            answer : this.answer
        };
        return res;
    }
}
