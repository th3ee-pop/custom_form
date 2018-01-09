/**
 * Created by th3ee on 1/9/18.
 */
/**
 * Created by th3ee on 1/9/18.
 */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-selectable-table',
    templateUrl: './selectable-table.component.html'
})
export class SelectableTableComponent implements OnInit {

    radioStr = 'eeia';
    column: number;
    row: number;
    letterArray = [];
    initialArray = [];
    idArray = [];
    rowTitle = ['ESR', 'hsCRP', 'pro-BNP', 'ACA', 'ANC', 'HCY(mmol/l)'];
    columnTitle = ['入院时', '第二次检查'];
    changedAnswer = [];

    constructor() { }

    ngOnInit() {

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
            this.initialArray[row].push(false);
            for (let column = 0; column < this.column - 1; column++) {
                this.initialArray[row].push('');
            }
        }
    }

    initId() {
        for (let row = 0; row < this.row; row++) {
            this.idArray.push([]);
            this.letterArray.forEach(l => {
                this.idArray[row].push(this.radioStr + (row + 1) + l);
            });
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
