import { Component, OnInit } from '@angular/core';
import { Question } from '../../question';
import { AnswerInterface } from '../../answerInterface';


@Component({
    selector: 'app-table813',
    templateUrl: './table813.component.html',
    styleUrls: ['./table813.component.less']
})
export class Table813Component extends Question implements AnswerInterface, OnInit {
    localAnswer = new Array(5);
    time = new Array(5);
    activityNames = [
        '看电视/碟片', '读书/看报', '吃饭/聚餐/闲聊', '下棋/打牌/打麻将', '上网/写作/文件整理'
    ];
    answerChanged = false;
    editdisabled = false;
    constructor() {
        super();
    }
    ngOnInit() {
        for (let i = 0; i < 5; i++) {
            this.localAnswer[i] = new Array(5); // 每行生成5列
        }
    }
    radioChange(row, col) {
        for (let i = 0; i < 5; i++) {
            console.log('this is col', col);
            if ( col !== i)
                this.localAnswer[row][i] = false;
        }
        this.answerChange();
    }

    answerChange() {

        const questionID = 'ID8_13';
        const res = [];
        for ( let index = 0; index < this.activityNames.length; index ++) {
            const item = {
              Record_ID : '',
              Record_Value: ''
            };
            if ( this.time[index] && this.time[index] !== '') {
                item.Record_ID = questionID + '_a_' + (index + 1);
                item.Record_Value = this.time[index];
                res.push(item);
            }
        }
        for ( let row = 0; row  < this.activityNames.length; row ++ ) {
            for ( let col = 0; col < 5 ; col ++) {
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
        this.answerChange();
       for ( let i = 0; i <  this.activityNames.length; i++) {
           if ( this.localAnswer[i] || this.time[i] !== ''){
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
