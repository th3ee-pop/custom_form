import { Component, OnInit } from '@angular/core';
import { Question } from '../../question';
import { AnswerInterface } from '../../answerInterface';

@Component({
  selector: 'app-table74',
  templateUrl: './table74.component.html',
  styleUrls: ['./table74.component.less']
})
export class Table74Component extends Question implements AnswerInterface {
/**
     * 是否患病
     */
    hasThisIllness = [];

    /**
     * 首次诊断年龄
     */
    firstSickAge = [];

    /**
     * 目前是否仍接受治疗
     */
    beingTreated = [];

    /**
     * 是否住过院
     */
    hospitalized = [];

    /**
     * 上次住院时间
     */
    lastTimeInHospital = [];
    
    /**
     * 是否必填，如果是true，则必填
     */
    required = true;

    /**
     * 疾病种类
     */
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
  
    /**
     * 答案的校验结果,true为校验成功
     */
    changed = false;
  
  
    constructor() {
      super();
      this.hasThisIllness = new Array(this.illnessNames.length);
      this.firstSickAge = new Array(this.illnessNames.length);
      this.beingTreated = new Array(this.illnessNames.length);
      this.hospitalized = new Array(this.illnessNames.length);
      this.lastTimeInHospital = new Array(this.illnessNames.length);
    }
  
    /**
     * 有数据改变,执行校验
     */
    answerChange(row, col) {
  
  
        if (this.required === true) {
          if (this.answerCheck() === true)
            this.changed =  true;
          else
            this.changed = false;
        } else {
          this.changed = true;
        }
  
    }
  
  
    /**
     * 表格数据校验函数，若成功，返回true
     */
    answerCheck() {
        
        return false;
    }
  
    /**
     * 外部调用，用来获取本例答案
     */
    getAnswer() {
        const answer = {
            available : this.changed ? 'true' : 'false',
  
            // 此处answer需要根据api，在answerChanged里面修改
            answer : this.answer
        };
        return answer;
    }

}
