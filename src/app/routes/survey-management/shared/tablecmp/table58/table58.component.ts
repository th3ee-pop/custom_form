import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Question } from 'app/routes/survey-management/shared/question';
import { AnswerInterface } from 'app/routes/survey-management/shared/answerInterface';


@Component({
    selector: 'app-table58',
    templateUrl: './table58.component.html',
    styleUrls: ['./table58.component.less']
})
export class Table58Component extends Question implements AnswerInterface, OnInit {
    localAnswer = new Array(3);
    text = '';
    situationNames = [
        '体重明显下降', '因为食物短缺出现浮肿、严重贫血等相关疾病', '在此期间有家人、亲朋好友或邻居因食物短缺而死亡'
    ];
    constructor() {
        super();
    }
    ngOnInit() {
        for (let i =  0; i < 3; i++) {
            this.localAnswer[i] =  new Array(3);
        }
    }
    radioChange(row, col) {
        for (let i = 0; i < 3; i++) {
            if ( col !== i) {
                this.localAnswer[row][i] = false;
            }
        }
        this.answerChange();
    }
    answerChange() {
        const questionID = 'ID5_8';
        const res = [];
        if (this.text && this.text !== '' ) {
            const item = {
                Record_ID: '',
                Record_Value: this.text
            };
            res.push(item);
        }
        for (let row = 0; row < 3; row++) {  // 行
            for (let col = 0; col < 3; col++) {
                const item = {
                    Record_ID : '',
                    Record_Value: ''
                };
                if ( this.localAnswer[row][col] === true) {
                    item.Record_ID = questionID + '_' + (row + 1);
                    item.Record_Value = col + '';
                    res.push(item);
                }
            }

        }
        this.answer = res;
        console.log(res);
    }
    answerCheck() {
        for (let row = 0; row < 3; row++) {
            let flag2 = false;
            for (let col = 0; col < 3; col++) { // 逐行检查
                if (this.localAnswer[row][col] === true) // 至少有一个填写
                    flag2 = true;
            }
            if ( flag2 === false) return false;
        }
        return true;
    }

    getAnswer() {
        return this.answer;
    }
}
