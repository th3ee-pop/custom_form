import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Question } from 'app/routes/survey-management/shared/question';
import { AnswerInterface } from 'app/routes/survey-management/shared/answerInterface';


@Component({
  selector: 'app-table715',
  templateUrl: './table715.component.html',
  styleUrls: ['./table715.component.less']
})
export class Table715Component extends Question implements AnswerInterface {

 /**
   * 生母是否患病　　（一行）
   */
  mother = [];
  
  /**
   * 生父
   */
  father = [];
  
  /**
   * 兄弟患病人数
   */
  brothersAndSisters = [];  

  /**
   * 兄弟
   */
  children = [];

  /**
   * 答案的校验结果,true为校验成功
   */
  changed = false;

  /**
   * 非必填项
   */
  required = false;

  /**
   * 疾病种类
   */
  illnessNames = [
    '中风', '急性心梗', '糖尿病', '抑郁症', '恶性肿瘤', '慢阻肺/肺气肿/肺心病/慢支'
  ];


  constructor() {
    super();
    this.mother =  new Array(5);
    this.father =  new Array(5);
    this.brothersAndSisters =  new Array(5);
    this.children =  new Array(5);
  }

  /**
   * 有数据改变,执行校验
   */
  answerChange() {


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
