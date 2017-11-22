import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Question } from '../question';
import { AnswerInterface } from '../answerInterface';


@Component({
    selector: 'app-checkboxcmp',
    templateUrl: './checkboxcmp.component.html',
    styleUrls: ['./checkboxcmp.component.less']
})
export class CheckboxcmpComponent extends Question implements OnInit {// 继承自Question类，
    localAnswer;
    answerChanged = false;
    editdisabled = false;
    @Output() onVoted = new EventEmitter < any > ();
    ngOnInit() {
        this.localAnswer = new Array(this.question.content.length);
        // if ( this.question.id === '10.3') {
        //     let flag = false;
        //     for ( let i = 0; i < this.question.content.length; i++) {
        //         if ( this.localAnswer[i] === true ) {
        //             flag =  true;
        //             break;
        //         }
        //     }
        //     if ( flag === false ) {
        //         this.vote( this.question.hiddenlist[0], []);
        //     }else {
        //         this.vote(  [], this.question.hiddenlist[0]);
        //     }
        // }
    }
    constructor() {
        super();
    }
    vote ( hiddenList: any [], hiddenshowList: any[] ) {
        const showAndhidden = {
            'hiddenlist': hiddenList,
            'hiddenshowlist' : hiddenshowList
        }
        this.onVoted.emit(showAndhidden);
    }
    answerChange() {
        const res = [];
        if ( this.question.id === '10.3') {
            let flag = false;
            for ( let i = 0; i < this.question.content.length; i++) {
                if ( this.localAnswer[i] === true ) {
                    flag =  true;
                    break;
                }
            }
            if ( flag === false ) {
                this.vote( this.question.hiddenlist[0], []);
            }else {
                this.vote(  [], this.question.hiddenlist[0]);
            }
        }

        for (let index = 1; index <= this.question.content.length; index++ ) {
            const tem = {
                Record_ID: '',
                Record_Value: false
            };
            if (this.localAnswer[index - 1] === true) {
                const  questionID = 'ID' + this.question.id.replace(/\./g , '_') + '_' + index;
                tem.Record_ID = questionID;
                tem.Record_Value = true;
                res.push(tem);
            }
        }
        this.answer = res;
        if ( this.localAnswer ) {
            this.answerChanged = true;
        }else {
            this.answerChanged = false;
        }
    }
}
