import { Component, OnInit } from '@angular/core';
import { Question } from '../../survey-management/shared/question';

@Component({
  selector: 'app-high-table',
  templateUrl: './high-table.component.html',
  styleUrls: ['./high-table.component.less']
})
export class HighTableComponent extends Question implements OnInit {

    table_style: Array<any>;
    id_title: string;
    table_type: string;
    radio_condition: any;
    overall: boolean;
    startStr: string;
    title: string;
    column: number;
    row: number;
    initialArray = [];
    idArray = [];
    rowTitle: Array<any>;
    columnTitle: Array<any>;
    changedAnswer = [];
    idStyle = 1;

    /**
     * 存储问题是否填写的变量,默认false
     */
    answerChanged = false;
    editdisabled = false;

    constructor() {
        super();
    }

    ngOnInit() {
        this.title = this.question.title;
        console.log(this.question.title);
        this.startStr = this.question.startStr;
        this.rowTitle = this.question.rowTitle;
        this.columnTitle = this.question.columnTitle;
        this.idStyle = this.question.idStyle;
        this.column = this.columnTitle.length;
        this.row = this.rowTitle.length;
        this.id_title = this.question.id_title;
        this.table_type = this.question.table_type;
        this.radio_condition = this.question.radio_setting;
        this.overall = this.question.overall;
        console.log(this.radio_condition);
        this.initId();
        console.log(this.initialArray);
        this.table_style = this.table_Config();
    }

    type_setting(): Array<string> {
        const setting = [];
        if (this.radio_condition.direction === 'column') {
          this.columnTitle.forEach(() => {
              setting.push('input');
          });
        } else {
            this.rowTitle.forEach(() => {
                setting.push('input');
            });
        }
        this.radio_condition.index.forEach(d => {
            setting[d - 1] = 'radio';
        });
        return setting;
    }

    table_Config() {
        const type_setting = this.type_setting();
        const table_setting = [];
        for (let row = 0; row < this.rowTitle.length; row ++) {
            table_setting.push([]);
            for (let col = 0; col < this.columnTitle.length; col++) {
                if (this.radio_condition.direction === 'column') {
                  table_setting[row].push(type_setting[col]);
                } else {
                    table_setting[row].push(type_setting[row]);
                }
            }
        }
        console.log(table_setting);
        return table_setting;
    }

    initId() {
        for (let row = 0; row < this.row; row++) {
            this.initialArray.push([]);
            for (let column = 0; column < this.column; column++) {
                this.initialArray[row].push({
                    Record_ID: this.id_title + '.' + row + '.' + column,
                    Record_Value: '',
                });
            }
        }
        if (this.overall) {
            this.initialArray.push({
                Record_ID: this.id_title + 'overall',
                Record_Value: '',
            });
        }
    }


    getAnswer() {
        this.changedAnswer = [];
        this.setAnswer(this.initialArray, this.idArray, this.row, this.column);
    }

    setAnswer(blank: any, idArray: any, row: number, column: number) {
        if (row > 1) {
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < column; j++) {
                    if (blank[i][j] !== '') {
                        this.changedAnswer.push({
                            Record_ID: idArray[i][j],
                            Record_Value: blank[i][j]
                        });
                    }
                }
            }
        } else {
            for (let i = 0; i < column; i++) {
                if (blank[i] !== '') {
                    this.changedAnswer.push({
                        Record_ID: idArray[i],
                        Record_Value: blank[i]
                    });
                }
            }
        }
        if ( this.answerCheck() === true)
            this.answerChanged = true;
        else
            this.answerChanged = false;
    }

    test() {
        console.log(this.initialArray);
    }
    answerCheck() {
        for ( let i = 0; i < this.changedAnswer.length; i++) {
            if (this.changedAnswer[i] && this.changedAnswer[i] !== '' ) {
                return true;
            }
        }
        return false;
    }

}
