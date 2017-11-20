import { Component, OnInit } from '@angular/core';
import { Question } from '../../question';
import { AnswerInterface } from '../../answerInterface';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Component({
    selector: 'app-table51',
    templateUrl: './table51.component.html',
    styleUrls: ['./table51.component.less']
})
export class Table51Component  extends Question implements AnswerInterface, OnInit {

    localAnswer = new Array(23);
    amount = new Array(23);
    foodNames = [
        '大米',
        '面食',
        '杂粮（玉米、高粱、小米、青稞等）',
        '大肉，牛羊肉等',
        '家禽及制品',
        '水产/海鲜品',
        '蛋类及制品',
        '动物内脏类',
        '新鲜蔬菜',
        '新鲜瓜果',
        '土豆红薯类',
        '豆类及豆制品',
        '牛、羊奶',
        '酸奶',
        '其他奶制品',
        '咸菜泡菜',
        '干菜',
        '坚果',
        '果干',
        '豆浆',
        '纯果汁',
        '碳酸饮料',
        '其他饮品'
    ];

    answerChanged = false;
    constructor() {
        super();


    }
    ngOnInit() {
        for (let i = 0; i < 23; i++) {
            this.localAnswer[i] = new Array(5);
        }
    }
    radioChange(row, col) { // 用checkbox模拟radio 互斥选择
        for (let i = 0; i < 5; i++) {
            if ( col !== i)
                this.localAnswer[row][i] = false;
        }
        this.answerChange();
    }
    answerChange() {
        const questionID = 'ID5_1';
        const res = [];
        for (let index = 0; index < this.foodNames.length; index ++) {  // 遍历每一行, 获取摄入量
            const item = {
                Record_ID : '',
                Record_Value: ''
            };
            if (this.amount[index] && this.amount[index] !== '' ) {
                item.Record_ID = questionID + '_' + (index + 1) + '_' + 'b';
                item.Record_Value = this.amount[index];
                res.push(item);
            }
        }
        for (let row = 0; row < this.foodNames.length; row ++) {
            for (let col = 0; col < 5; col ++ ) {
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
        for (let row = 0; row < 23; row++) {
            let flag2 = false;
            for (let col = 0; col < 5; col++) {
                if (this.localAnswer[row][col] === true)
                    flag2 = true;
            }
            if ( flag2 === false) return false;
        }
        return true;
    }
    answertextCheck() {
        for ( let i = 0; i < 23; i++) {
            if ( !this.amount[i] || this.amount[i] === '') {
                return false;
            }
        }
        return true;
    }
    getAnswer() {
        return this.answer;
    }
}
