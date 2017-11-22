import { Component, OnInit } from '@angular/core';
import { Question } from 'app/routes/survey-management/shared/question';
import { AnswerInterface } from 'app/routes/survey-management/shared/answerInterface';


@Component({
    selector: 'app-table54',
    templateUrl: './table54.component.html',
    styleUrls: ['./table54.component.less']
})
export class Table54Component extends Question implements AnswerInterface, OnInit {
    localAnswer = new Array(5);
    selected = [];
    actionNames = [
        '吃零食/小吃', '不吃早餐', '在餐馆或小吃店吃饭', '吃深度油炸烧烤类食物', '吃西式快餐（如披萨饼、汉堡等）'
    ];

    answerChanged = false;

    /**
   * 是否可编辑
   */
  editdisabled = false;


    constructor() {
        super();

    }
    ngOnInit () {
        for (let i =  0; i < 5; i++) {
            this.localAnswer[i] =  new Array(5);
        }
    }
    radioChange(row, col) {
        for (let i = 0; i < 5; i++) {
            if (col !== i)
                this.localAnswer[row][i] = false;
        }
        this.answerChange();
    }
    answerChange() {
        const questionID = 'ID5_4';
        const res = [];
        for (let row = 0; row < this.actionNames.length; row++) {  // 行
            for (let col = 0; col < 5; col++) {
                const item = {
                    Record_ID : '',
                    Record_Value: ''
                };
                if ( this.localAnswer[row][col] === true ) {
                    item.Record_ID = questionID + '_' + (row + 1);
                    item.Record_Value = col + '';
                    res.push(item);
                }
            }
        }
        this.answer = res;
        console.log(this.answer);
    }
    answerCheck() {
        this.answerChange();
        for (let row = 0; row < 5; row++) {
            let flag2 = false;
            for (let col = 0; col < 5; col++) {
                if (this.localAnswer[row][col] === true)
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
