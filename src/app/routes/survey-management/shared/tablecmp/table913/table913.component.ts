import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Question } from 'app/routes/survey-management/shared/question';
import { AnswerInterface } from 'app/routes/survey-management/shared/answerInterface';


@Component({
    selector: 'app-table913',
    templateUrl: './table913.component.html',
    styleUrls: ['./table913.component.less']
})
export class Table913Component extends Question implements AnswerInterface, OnInit {

    selected = [];
    operationAge = [];
    operationNames = [
        '子宫切除术', '卵巢（单侧或双侧）摘除术', '乳房肿块/肿瘤摘除术', '绝育术', '剖腹产'
    ];
    answerChanged = false;
    constructor() {
        super();
        this.selected =  new Array(this.operationNames.length);
        this.operationAge =  new Array(this.operationNames.length);
    }
    ngOnInit() {
        this.selected =  new Array(this.operationNames.length);
        this.operationAge =  new Array(this.operationNames.length);
    }
    answerChange() {

        const questionID = 'ID9_13';
        const res = [];

        for (let i = 0; i < this.operationNames.length ; i++) {
            if ( this.selected[i] ) {
                res.push({
                    Record_ID: questionID + '_' + ( i + 1 ),
                    Record_Value : true
                });
            }
            if ( this.operationAge[i] && this.operationAge[i] !== '' ) {
                res.push({
                    Record_ID: questionID + '_a_' + ( i + 1)
                });
            }
        }

        this.answer = res;
        console.log(res);
    }


    answerCheck() {
        for ( let i = 0; i < this.operationNames.length; i++) {
            if ( this.selected[i] || this.operationAge[i] ){
                return true;
            }
        }
        return false;
    }

    getAnswer() {
        this.answerChange();
        return this.answer;
    }
}
