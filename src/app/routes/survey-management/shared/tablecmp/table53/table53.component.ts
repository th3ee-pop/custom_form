import { Component, OnInit } from '@angular/core';

import { Question } from 'app/routes/survey-management/shared/question';
import { AnswerInterface } from 'app/routes/survey-management/shared/answerInterface';


@Component({
    selector: 'app-table53',
    templateUrl: './table53.component.html',
    styleUrls: ['./table53.component.less']
})
export class Table53Component extends Question implements AnswerInterface, OnInit {

    days = [];
    flavoringNames = [
        '一袋盐（500克）', '一瓶酱油（500毫升）', '一瓶醋(500毫升)', '一瓶食用油（1000毫升）'
    ];
    answerChanged = false;
    constructor() {
        super();
        this.days = new Array(this.flavoringNames.length);
    }
    ngOnInit() {
        this.days = new Array(4);
    }
    answerChange() {
        const questionID = 'ID5_3';
        const res = [];
        for (let row = 0; row < this.flavoringNames.length; row ++) {
            if (this.days[row] && this.days[row] !== '') {
                const item = {
                    Record_ID : '',
                    Record_Value: ''
                };
                item.Record_ID = questionID + '_' + (row + 1);
                item.Record_Value = this.days[row];
                res.push(item);
            }
        }
        this.answer = res;
        console.log(res);
    }
    answerCheck() {
        for ( let i = 0; i < 4 ; i++) {
            if ( !this.days[i] || this.days[i] === '' ) return false;
        }
        return true;
    }
    getAnswer() {
        this.answerChange();
        return this.answer;
    }

}
