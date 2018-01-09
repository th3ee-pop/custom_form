/**
 * Created by th3ee on 1/9/18.
 */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-multi-table',
    templateUrl: './multi-table.component.html'
})
export class MultiTableComponent implements OnInit {

    startStr = 'ee';
    column: number;
    row: number;
    letterArray = [];
    initialArray = [];
    idArray = [];
    rowTitle = ['第一次', '第二次', '第三次', '第四次', '第五次', '第六次', '第七次', '第八次', '第九次', '第十次'];
    columnTitle = ['RBC', 'WBC', 'Hb', 'PLT109/', 'NEUT', 'NEUT%', 'LYMPH', 'LYMPH%', 'MONO', 'MONO%'];
    changedAnswer = [];

    constructor() { }

    ngOnInit() {

        this.column = this.columnTitle.length;
        this.row = this.rowTitle.length;
        for (let i = 97; i < 97 + this.column; i++) {
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
            for (let column = 0; column < this.column; column++) {
                this.initialArray[row].push('');
            }
        }
    }

    initId() {
        for (let row = 0; row < this.row; row++) {
            this.idArray.push([]);
            this.letterArray.forEach(l => {
                this.idArray[row].push(this.startStr + (row + 1) + l);
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
