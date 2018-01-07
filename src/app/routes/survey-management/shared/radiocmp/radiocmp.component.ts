import { Component, OnInit, Output , EventEmitter} from '@angular/core';

import { Question } from '../question';

import { AnswerInterface } from '../answerInterface';
@Component({
    selector: 'app-radiocmp',
    templateUrl: './radiocmp.component.html',
    styleUrls: ['./radiocmp.component.less']
})
export class RadiocmpComponent extends Question {

    /**
     *  存储答案的变量数组
     */
    localAnswer = -1;
    @Output() onVoted = new EventEmitter< any >();
    // @Output() onVotedShow = new EventEmitter<any [] >();
    /**
     * 存储问题是否填写的变量,默认false
     */
    answerChanged = false;
    editdisabled = false;
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
    /**
     * 答案改变后触发
     */
    answerChange() {
        const res = [];
        const tem = {
            Record_ID: '',
            Record_Value: false
        };
        if (this.localAnswer !== -1) {
            // const questionID = 'ID' + this.question.id.replace(/\./g , '_') + '_' + (this.localAnswer + 1);
            const questionID = this.question.id2;
            tem.Record_ID = questionID;
            tem.Record_Value = true;
            res.push(tem);
            this.answer = res;
        }


        const hiddenshowlist = [];
        for (let i = 0; i < this.question.content.length; i++) {
            if ( this.localAnswer !== i) {
                if (this.question.hiddenlist.length !== 0)
                    if ( this.question.hiddenlist[i].length !== 0) {
                        for ( let j = 0; j < this.question.hiddenlist[i].length; j++) {
                            hiddenshowlist.push(this.question.hiddenlist[i][j]);
                        }
                    }
            }
        }
        if ( this.question.hiddenlist.length !== 0)
            if (this.question.hiddenlist[this.localAnswer].length !== 0 || hiddenshowlist.length !== 0) {
                this.vote(this.question.hiddenlist[this.localAnswer], hiddenshowlist);
            }
        if ( this.localAnswer !== -1 )  this.answerChanged =  true;
    }
}
