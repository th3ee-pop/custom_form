import { Component, OnInit } from '@angular/core';
import { Question } from '../../question';
import { AnswerInterface } from '../../answerInterface';

@Component({
    selector: 'app-table74',
    templateUrl: './table74.component.html',
    styleUrls: ['./table74.component.less']
})
export class Table74Component extends Question implements AnswerInterface, OnInit{
    hasThisIllness: boolean [];
    firstSickAge = [];
    beingTreated: boolean [];
    hospitalized: boolean [];
    other = [];
    lastTimeInHospital: Date [];
    illnessNames = [
        '糖尿病',
        '急性心梗（冠心病的一种）',
        '心绞痛（冠心病的一种）',
        '其他缺血性心脏病',
        '中风/小卒中发作（包括脑梗和脑溢血）',
        '高血压',
        '肺心病',
        '风湿性心脏病',
        '肺结核',
        '肺气肿',
        '慢性支气管炎',
        '慢阻肺',
        '哮喘',
        '慢性肝炎/肝硬化',
        '消化道溃疡',
        '胆结石/胆囊炎',
        '慢性肾病',
        '骨质疏松症',
        '骨折',
        '风湿性关节炎',
        '抑郁',
        '焦虑',
        '神经衰弱',
        '其他精神心理疾病',
        '脑外伤',
        '其它1',
        '其它2',
        '恶性肿瘤（癌症）'
    ];
    answerChanged = false;

    /**
     * 是否可编辑
     */
    editdisabled = false;

    constructor() {
        super();
    }
    ngOnInit () {
        this.hasThisIllness = new Array(this.illnessNames.length);
        this.firstSickAge = new Array(this.illnessNames.length);
        this.other = new Array(this.illnessNames.length);
        this.beingTreated = new Array(this.illnessNames.length);
        this.hospitalized = new Array(this.illnessNames.length);
        this.lastTimeInHospital = new Array(this.illnessNames.length);
    }
    answerChange() {
        const questionID = 'ID7_8';
        const res = []; // 结果暂存
        for (let i = 0; i < this.illnessNames.length; i++) {
            if ( this.other[i] && this.other[i] !== '' ) {
                res.push(
                    {
                        Record_ID: questionID + '_h_' + (i + 1),
                        Record_Value: this.other[i]
                    }
                );
            }
            if ( this.hasThisIllness[i] && this.hasThisIllness[i] === true) {
                res.push(
                    {
                        Record_ID: questionID + '_a_' + (i + 1),
                        Record_Value: true
                    }
                );
            }
            if ( this.firstSickAge [i] && this.firstSickAge[i] !== '') {
                res.push(
                    {
                        Record_ID: questionID + '_b_' + (i + 1),
                        Record_Value: this.firstSickAge[i]
                    }
                );
            }
            if ( this.beingTreated [i] && this.beingTreated [i] === true) {
                res.push(
                    {
                        Record_ID: questionID + '_c_' + ( i + 1),
                        Record_Value: true
                    }
                );
            }
            if ( this.hospitalized[i] && this.hospitalized[i] === true) {
                res.push(
                    {
                        Record_ID: questionID + '_d_' + ( i + 1),
                        Record_Value: true
                    }
                );
            }
            if ( this.lastTimeInHospital[i]) {
                res.push(
                    {
                        Record_ID: questionID + '_e_' + ( i + 1),
                        Record_Value: this.lastTimeInHospital[i]
                    }
                );
            }

        }
        console.log(res)
        this.answer = res;
    }
    answerCheck() {
        this.answerChange();
        for ( let i = 0; i < this.illnessNames.length; i++) {
            if (this.other[i] && this.other[i] !== '') return true;
            if ( this.firstSickAge [i] && this.firstSickAge[i] !== '' ) return true;
            if (this.hasThisIllness[i] && this.hasThisIllness[i] === true) return true;
            if (this.beingTreated [i] && this.beingTreated [i] === true) return true;
            if (this.hospitalized[i] && this.hospitalized[i] === true) return true;
            if (this.lastTimeInHospital[i]) return true;
        }
        return false;
    }

    getAnswer() {
        this.answerChange();
        return this.answer;
    }

}
