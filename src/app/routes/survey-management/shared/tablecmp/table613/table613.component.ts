import {Component, OnInit} from '@angular/core';
import {Question} from 'app/routes/survey-management/shared/question';
import {AnswerInterface} from 'app/routes/survey-management/shared/answerInterface';


@Component({
    selector: 'app-table613',
    templateUrl: './table613.component.html',
    styleUrls: ['./table613.component.less']
})
export class Table613Component extends  Question implements AnswerInterface, OnInit {

    /**
     * 是否暴露过
     */
    selected = [];
    editdisabled = false;
    exposureTime = [];
    smokeNames = [
        '煤气/蒸汽/烟/雾', '粉尘（如：硅石/煤炭/棉花）', '纤维（如　石棉/纺织品）', '化学制品（如：苯/甲苯）'
    ];
    answerChanged = false;
    constructor() {
        super();
    }

    ngOnInit() {
        this.selected =  new Array(4);
        this.exposureTime =  new Array(4);
    }
    answerChange() {

        const questionID = 'ID6_13';
        const res = [];
        for (let row = 0; row < 4; row++) {
            if ( this.selected [row] === true )
                res.push({   // 生育时年龄
                    Record_ID : questionID + '_' + (row + 1), // 题号
                    Record_Value : true    // 如不为空，则push进
                });
        }
        for ( let i = 0 ; i < 4 ; i++) {
            if ( this.exposureTime[i]) {
                let x = '';
                if ( i === 0 ) x = 'a';
                if ( i === 1 ) x = 'b';
                if ( i === 2 ) x = 'c';
                if ( i === 3 ) x = 'd';
                const id = questionID + '_' + x;
                res.push({
                    Record_ID : id,
                    Record_Value : this.exposureTime[i]
                });
            }
        }
        this.answer = res;
        console.log(res);
    }
    answerCheck() {
        return true;
    }

    getAnswer() {
        this.answerChange();
        return this.answer;
    }

}
