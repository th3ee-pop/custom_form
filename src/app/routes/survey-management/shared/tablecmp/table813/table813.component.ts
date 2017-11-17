import { Component, OnInit } from '@angular/core';
import { Question } from '../../question';
import { AnswerInterface } from '../../answerInterface';


@Component({
    selector: 'app-table813',
    templateUrl: './table813.component.html',
    styleUrls: ['./table813.component.less']
})
export class Table813Component extends Question implements AnswerInterface, OnInit {
    localAnswer = [];
    required = false;
    time = [];
    activityNames = [
        '看电视/碟片', '读书/看报', '吃饭/聚餐/闲聊', '下棋/打牌/打麻将', '上网/写作/文件整理'
    ];
    answerChanged = false;
    constructor() {
        super();
    }
    ngOnInit() {
        this.localAnswer = new Array(5); // 五行
        for (let i = 0; i < 5; i++) {
            this.localAnswer[i] = new Array(5); // 每行生成5列
        }
        this.time = new Array(5);
    }
    radioChange(row, col) {
        for (let i = 0; i < 5; i++) {
            if ( col !== i) this.localAnswer[ row ][ i ] = false;
        }
        this.answerChange();
    }

    answerChange() {

        const questionID = 'ID8_13';
        const res = [];
        for (let row = 0; row < this.activityNames.length; row++) {  // 行
            for (let col = 0; col < 5; col++) {
                if (this.localAnswer[row][col]) {
                    const item = {
                        Record_ID : questionID + '_' + (col + 1),
                        Record_Value: col + ''
                    };
                    res.push(item);
                }
                if ( this.time [col] && this.time[col] !== '') {
                    const item = {
                        Record_ID: questionID + '_a_ ' + (col + 1 ),
                        Record_Value: this.time[col]
                    };
                    res.push(item);
                }

            }
        }

        this.answer = res;
        console.log(res);
    }


    answerCheck() {
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
