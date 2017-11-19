import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Question } from 'app/routes/survey-management/shared/question';
import { AnswerInterface } from 'app/routes/survey-management/shared/answerInterface';

@Component({
    selector: 'app-table96',
    templateUrl: './table96.component.html',
    styleUrls: ['./table96.component.less']
})
export class Table96Component extends Question implements AnswerInterface, OnInit {

    birthAge = [];
    feedMonths = [];
    isTwins = [false, false, false, false, false];
    birthTimeList = [
        '首次', '第二次', '第三次', '第四次', '第五次'
    ];

    answerChanged = false;
    required = false;
    constructor() {
        super();
    }
    ngOnInit() {
        this.birthAge =  new Array(this.birthTimeList.length);
        this.feedMonths =  new Array(this.birthTimeList.length);
    }
    answerChange() {
        const questionID = 'ID9_6';
        const res = []; // 结果暂存
        for (let row = 0; row < this.birthTimeList.length; row++) {
            if ( this.birthAge[row] && this.birthAge[row] !== '') {
                res.push({
                    Record_ID : questionID + '_a_' + ( row + 1),
                    Record_Value: this.birthAge[row]
                });
            }
            if ( this.feedMonths[row] && this.feedMonths[row] !== '') {
                res.push({
                    Record_ID: questionID + '_b_' + ( row + 1 ),
                    Record_Value: this.feedMonths[row]
                });
            }
            if ( this.isTwins [row] ) {
                res.push({
                    Record_ID: questionID + '_c_' + ( row + 1),
                    Record_value: true
                });
            }
        }
        this.answer = res;
        console.log(res);
    }
    answerCheck() {
        for ( let i = 0; i < this.birthTimeList.length; i++) {
            if ( this.isTwins[i]) return true;
            if ( this.feedMonths[i] && this.feedMonths[i] !== '') return true;
            if ( this.birthTimeList[i] && this.birthTimeList [i] !== '') return true;
        }
        return false;
    }

    getAnswer() {
        this.answerChange();
        return this.answer;
    }
}
