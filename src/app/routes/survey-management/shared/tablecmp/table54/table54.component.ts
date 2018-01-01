import { Component, OnInit } from '@angular/core';
import { Question } from 'app/routes/survey-management/shared/question';
import { AnswerInterface } from 'app/routes/survey-management/shared/answerInterface';


@Component({
    selector: 'app-table54',
    templateUrl: './table54.component.html',
    styleUrls: ['./table54.component.less']
})
export class Table54Component extends Question implements AnswerInterface, OnInit {
    localAnswer = new Array(23);
    selected = [];
    actionNames = [
        '馕',
        '八宝茶',
        '药茶',
        '动物油',
        '菜籽油',
        '花生油',
        '豆油',
        '胡麻油',
        '调和油',
        '葵花籽油',
        '玉米油',
        '橄榄油',
        '茶籽油',
        '吃零食',
        '吃方便面/方便米线等方便食品',
        '吃夜宵',
        '吃熏肉/腊肉',
        '吃火腿肠/香肠等加工肉食',
        '不吃早餐',
        '吃油炸食品',
        '吃烧烤类食物',
        '吃西式快餐(如披萨饼、汉堡等)',
        '在餐馆或小吃店吃饭'
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
        for (let i =  0; i < 23; i++) {
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
    }
    answerCheck() {
        this.answerChange();
        let flag2 = false;
        for (let row = 0; row < this.actionNames.length; row++) {
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
