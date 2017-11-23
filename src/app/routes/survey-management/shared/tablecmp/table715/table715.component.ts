import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Question } from 'app/routes/survey-management/shared/question';
import { AnswerInterface } from 'app/routes/survey-management/shared/answerInterface';


@Component({
    selector: 'app-table715',
    templateUrl: './table715.component.html',
    styleUrls: ['./table715.component.less']
})
export class Table715Component extends Question implements AnswerInterface, OnInit {

    mother: boolean [];
    father: boolean [];
    brothersAndSisters = [];
    children = [];
    answerChanged = false;
    editdisabled = false;
    required = false;

    illnessNames = [
        '中风', '急性心梗', '糖尿病', '抑郁症', '恶性肿瘤', '慢阻肺/肺气肿/肺心病/慢支'
    ];

    constructor() {
        super();
    }
    ngOnInit() {
        this.mother =  new Array(5);
        this.father =  new Array(5);
        this.brothersAndSisters =  new Array(5);
        this.children =  new Array(5);
    }
    answerChange() {

        const questionID = 'ID7_15';
        const res = []; // 结果暂存
        for (let i = 0; i < this.illnessNames.length; i++) {  // 本题结构和其他的不一样，所以需要横向遍历
            if ( this.mother[i] ) {
                res.push({
                    Record_ID : questionID + '_b_' + ( i + 1),
                    Record_Value : true
                });
            }
            if ( this.father [i] ) {
                res.push({
                    Record_ID : questionID + '_a_' + ( i + 1),
                    Record_Value: true
                });
            }
            if ( this.brothersAndSisters [i] ) {
                res.push(
                    {
                        Record_ID : questionID + '_c_' + ( i + 1),
                        Record_Value: this.brothersAndSisters [i]
                    }
                );
            }
            if ( this.children [i] ) {
                res.push(
                    {
                        Record_ID : questionID + '_d_' + ( i + 1),
                        Record_Value: this.children [i]
                    }
                );
            }
        }
        this.answer = res;
    }
    answerCheck() {
        this.answerChange();
        for ( let i = 0; i < 5; i++) {
            if ( this.father[i] )  return true;
            if ( this.mother[i] )  return true;
            if ( this.brothersAndSisters[i] && this.brothersAndSisters[i] !== '' )  return true;
            if ( this.children[i] && this.children[i] !== '' )  return true;
        }
        return false;
    }

    getAnswer() {
        this.answerChange();
        return this.answer;
    }
}
