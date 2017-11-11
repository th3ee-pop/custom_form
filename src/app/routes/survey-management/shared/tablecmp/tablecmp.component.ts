import { Component, OnInit } from '@angular/core';

import { Question } from '../question';

import { AnswerInterface } from '../answerInterface';

@Component({
  selector: 'app-tablecmp',
  templateUrl: './tablecmp.component.html',
  styleUrls: ['./tablecmp.component.less']
})
export class TablecmpComponent extends Question implements AnswerInterface {
  /**
   *  用checkbox模拟 radio,用来暂存勾选状态,最多十个互斥
   */
  radioState = new Array(10);

  localAnswer = {};
  constructor() { 
    super();
  }


  /**
   * 获取答案的函数，在父组件调用
   */
  getAnswer() {
    // return this.localAnswer;
  }


  radioChange(index) {
    console.log(index);
  }

}
