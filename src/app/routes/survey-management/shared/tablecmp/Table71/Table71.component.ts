import {Component, OnInit} from '@angular/core';
import {Question} from '../../question';
import { AnswerInterface } from 'app/routes/survey-management/shared/answerInterface';
@Component({
    selector: 'app-table71',
    templateUrl: './Table71.component.html',
    styleUrls: ['./Table71.component.css']
})


export class Table71Component extends Question implements OnInit {
    localAnswer = [];
    answerChanged = false;
    editdisabled = false;

    constructor() {
        super();

    }

    ngOnInit() {
        this.localAnswer = new Array(this.question.rawname.length);
        for (let i = 0; i < this.localAnswer.length; i++) { this.localAnswer[i] = new Array(this.question.id2[0].length); }
    }

    answerChange() {
        const res = [];
        const item = {
            Record_ID : '',
            Record_Value: ''
        }
        for (let row = 0; row < this.question.rawname.length; row ++) {  // raw
            for (let col = 0; col < this.question.question.id2[0].length; col++ ) {
                if ( this.localAnswer[row][col] && this.localAnswer[row][col] !== '' ) {
                    item.Record_ID = this.question.id2[row][col];
                    item.Record_Value = this.localAnswer[row][col];
                    res.push(item);
                }
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
            item.forEach( colitem => {
                if ( item !== '')
                    return true;
            });
        });
        return false;
    }
}
