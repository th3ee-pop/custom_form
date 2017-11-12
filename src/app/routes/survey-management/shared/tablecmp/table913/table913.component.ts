import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Question } from 'app/routes/survey-management/shared/question';
import { AnswerInterface } from 'app/routes/survey-management/shared/answerInterface';


@Component({
  selector: 'app-table913',
  templateUrl: './table913.component.html',
  styleUrls: ['./table913.component.less']
})
export class Table913Component extends Question implements AnswerInterface {

  /**
   * 是否暴露过
   */
  selected = [];
  
  /**
   * 暴露时间
   */
  operationAge = [];

  /**
   * 烟雾种类
   */
  operationNames = [
      '子宫切除术', '卵巢（单侧或双侧）摘除术', '乳房肿块/肿瘤摘除术', '绝育术', '剖腹产'
  ];

  /**
   * 答案的校验结果,true为校验成功
   */
  changed = false;


  /**
   * 是否必填 ,本题非必填
   */
  required = false;


  constructor() {
      super();
      this.selected =  new Array(this.operationNames.length);
      this.operationAge =  new Array(this.operationNames.length);
  }

  /**
   * 有数据改变,执行校验
   */
  answerChange(row) {

    if (this.operationAge[row] !== undefined) // 如果用户填写了第row行的数据，则帮助用户勾选
      this.selected[row] = true;
    
      if (this.required) {  // 如果表格必填
          if (this.answerCheck() === true) // 如果校验成功
              this.changed = true;
          else 
              this.changed = false;
      }else {  // 如果非必填
          this.changed = true;
      }
  }


  /**
   * 表格数据校验函数，若成功，返回true
   */
  answerCheck() {
      return true;
  }

  /**
   * 外部调用，用来获取本例答案
   */
  getAnswer() {
      const answer = {
          available : this.changed ? 'true' : 'false',
          answer : this.answer
      };
      return answer;
  }

}
