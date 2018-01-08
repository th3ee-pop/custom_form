import {Component, OnInit} from '@angular/core';
import {Question} from '../../question';
import { AnswerInterface } from 'app/routes/survey-management/shared/answerInterface';
@Component({
    selector: 'app-single',
    templateUrl: './singletable.component.html',
    styleUrls: ['./singletable.component.css']
})


export class SingletableComponent extends Question implements AnswerInterface, OnInit {
    localAnswer = [];
    answerChanged = false;
    editdisabled = false;

    constructor() {
        super();

    }
    ngOnInit() {
        console.log(this.question);
        console.log(this.question.title);
        console.log(this.question.rawname);
        this.localAnswer = new Array(this.question.rawname.length);
    }
    answerChange() {
        const res = [];
        const item = {
            Record_ID : '',
            Record_Value: ''
        }
        for (let row = 0; row < this.question.rawname.length; row ++) {  // 行
            if ( this.localAnswer[row] && this.localAnswer[row] !== '') {
                item.Record_ID = this.question.id2[row];
                item.Record_Value = this.localAnswer[row];
                res.push(item);
            }
        }
        this.answer = res;
        if ( this.answerCheck() === true)
            this.answerChanged = true;
        else
            this.answerChanged = false;
    }

    answerCheck() {
        this.localAnswer.forEach(item => {
            if ( item !== '')
                return true;
        });
        return false;
    }
    getAnswer() {}
}
