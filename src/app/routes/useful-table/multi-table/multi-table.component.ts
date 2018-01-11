/**
 * Created by th3ee on 1/9/18.
 */
import { Component, OnInit } from '@angular/core';
import { Question } from '../../survey-management/shared/question';

@Component({
    selector: 'app-multi-table',
    templateUrl: './multi-table.component.html'
})
export class MultiTableComponent extends Question implements OnInit {

    startStr: string;
    column: number;
    row: number;
    letterArray = [];
    initialArray = [];
    idArray = [];
    rowTitle: Array<any>;
    columnTitle: Array<any>;
    changedAnswer = [];
    idStyle = 1;

    constructor() {
        super();
    }

    ngOnInit() {
        this.startStr = this.question.startStr;
        this.rowTitle = this.question.rowTitle;
        this.columnTitle = this.question.columnTitle;
        this.idStyle = this.question.idStyle;
        this.column = this.columnTitle.length;
        this.row = this.rowTitle.length;
        for (let i = 97; i < 97 + this.column; i++) {
            this.letterArray.push(String.fromCharCode(i));
        }
        this.initArray();
        this.initId(this.idStyle);
        console.log(this.letterArray);
        console.log(this.initialArray);
        console.log(this.idArray);
    }

    initArray() {
        for (let row = 0; row < this.row; row++) {
            this.initialArray.push([]);
            for (let column = 0; column < this.column; column++) {
                this.initialArray[row].push('');
            }
        }
    }

    initId(idStyle: number) {
        if (idStyle === 1) {
            for (let row = 0; row < this.row; row++) {
                this.idArray.push([]);
                this.letterArray.forEach(l => {
                    this.idArray[row].push(this.startStr + (row + 1) + l);
                });
            }
        } else if (idStyle === 2) {
            for (let row = 0; row < this.row; row++) {
                this.idArray.push([]);
                for (let column = 0; column < this.column; column++) {
                    this.idArray[row].push(this.startStr + this.letterArray[row] + column);
                }
            }
        }
    }


    getAnswer() {
        this.changedAnswer = [];
        this.setAnswer(this.initialArray, this.idArray, this.row, this.column);
        console.log(this.changedAnswer);
    }

    setAnswer(blank: any, idArray: any, row: number, column: number) {
        if (row > 1) {
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < column; j++) {
                    if (blank[i][j] !== '') {
                        this.changedAnswer.push({
                            id2: idArray[i][j],
                            value: blank[i][j]
                        });
                    }
                }
            }
        } else {
            for (let i = 0; i < column; i++) {
                if (blank[i] !== '') {
                    this.changedAnswer.push({
                        id2: idArray[i],
                        value: blank[i]
                    });
                }
            }
        }
    }
}
