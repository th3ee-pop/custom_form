/**
 * Created by th3ee on 1/9/18.
 */
/**
 * Created by th3ee on 1/9/18.
 */
import { Component, OnInit } from '@angular/core';
import { Question } from '../../survey-management/shared/question';

@Component({
    selector: 'app-selectable-table',
    templateUrl: './selectable-table.component.html'
})
export class SelectableTableComponent extends Question implements OnInit {

    title: string;
    radioStr: string;
    column: number;
    row: number;
    letterArray = [];
    initialArray = [];
    idArray = [];
    rowTitle: Array<any>;
    columnTitle: Array<any>;
    changedAnswer = [];

    constructor() {
        super();
    }

    ngOnInit() {
        console.log(this.question.hidden);
        this.title = this.question.title;
        this.radioStr = this.question.startStr;
        this.rowTitle = this.question.rowTitle;
        this.columnTitle = this.question.columnTitle;
        this.column = this.columnTitle.length;
        this.row = this.rowTitle.length;
        for (let i = 97; i < 97 + this.row; i++) {
            this.letterArray.push(String.fromCharCode(i));
        }
        this.initArray();
        this.initId();
        console.log(this.letterArray);
        console.log(this.initialArray);
        console.log(this.idArray);
    }

    initArray() {
        for (let row = 0; row < this.row; row++) {
            this.initialArray.push([]);
            this.initialArray[row].push(-1);
            for (let column = 0; column < this.column; column++) {
                this.initialArray[row].push('');
            }
        }
    }

    initId() {
        for (let row = 0; row < this.row; row++) {
            this.idArray.push([]);
            this.idArray[row].push(this.radioStr + this.letterArray[row]);
            for (let column = 1; column < this.column + 1; column++) {
                this.idArray[row].push(this.radioStr + this.letterArray[row] + column);
            }
        }
    }


    getAnswer() {
        this.changedAnswer = [];
        this.setAnswer(this.initialArray, this.idArray, this.row, this.column);
        console.log(this.changedAnswer);
    }

    setAnswer(blank: any, idArray: any, row: number, column: number) {
            for (let i = 0; i < row; i++) {
                if (blank[i][0] === false) {
                } else {
                    for (let j = 0; j < column + 1; j++) {
                        if (blank[i][j] !== '') {
                            this.changedAnswer.push({
                                id2: idArray[i][j],
                                value: blank[i][j]
                            });
                        }
                    }
                }
            }
    }
}
