import { Component, OnInit } from '@angular/core';

import { Question } from '../question';
import { AnswerInterface } from '../answerInterface';


@Component({
    selector: 'app-checkboxcmp',
    templateUrl: './checkboxcmp.component.html',
    styleUrls: ['./checkboxcmp.component.less']
})
export class CheckboxcmpComponent extends Question implements AnswerInterface {// 继承自Question类，


    localAnswer = new Array(20);
    Changed = false;
    constructor() {
        super();
    }

    answerChange() {
        const res = [];
        const RecordID = 'ID' + this.question.id.replace(/\./g , '_');  // 替换id 中的.  比如16.1.1 替换为  ID16_1_1
        console.log(RecordID);
        for (let index = 0; index < this.question.content.length ; index++) {
            if (this.localAnswer[index] === true) {
                const item = {};
                const itemID = RecordID + '_' + (index + 1);
                item[itemID] = 'true';
                res.push(item);
            }
        }
        this.answer = res;
        if ( this.localAnswer ) {
            this.Changed = true;
        }else {
            this.Changed = false;
        }
    }


    getAnswer() {
        const res = {
            available : this.Changed,
            answer : this.answer
        };
        return res;
    }
}
