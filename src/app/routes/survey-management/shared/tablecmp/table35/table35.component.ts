import {Component} from '@angular/core';
import {Question} from 'app/routes/survey-management/shared/question';
import {AnswerInterface} from 'app/routes/survey-management/shared/answerInterface';

@Component({
    selector: 'app-table35',
    templateUrl: './table35.component.html',
    styleUrls: ['./table35.component.css']
})


export class Table35Component extends Question implements AnswerInterface {
    localAnswer = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', '']];
    wineNames = [
        '啤酒', '高度白酒', '低度白酒', '葡萄酒/果酒', '黄酒/米酒'
    ];
    answerChanged = false;
    constructor() {
        super();
    }

    answerChange() {
        const questionID = 'ID3_5';
        const res = [];
        for (let row = 0; row < 5; row ++) {  // 行
            for (let col = 0; col < 3; col++) {  // 列
                const item = {
                    Record_ID : '',
                    Record_Value: ''
                };
                item.Record_ID = questionID + '_' + (col + 1) + '_' + String.fromCharCode(row + 'a'.charCodeAt(0));
                item.Record_Value = (this.localAnswer[row][col] === undefined) ? '' : this.localAnswer[row][col]; // 答案内容，如果没有填写，则改为空
                if ( item.Record_Value !== '' )
                    res.push(item);
            }
        }
        this.answer = res;
        console.log(res);
        if (this.answerCheck() === true) // 如果校验成功
            this.answerChanged = true;
        else
            this.answerChanged = false;

    }

    answerCheck() {
        // 本题只需校验checkbox勾选的一行，是否填写
        console.log('here');
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 3; col++) { // 逐行检查
                if (this.localAnswer[row][col] !== '') // 至少有一个填写
                    return true;
            }
        }
        console.log('false');
        return false;
    }

    fillAnswer ( RecordList: any[]) {


    }
    /**
     * 外部调用，用来获取本例答案
     */
    getAnswer() {
        this.answerChange();

        return this.answer;
    }
}
