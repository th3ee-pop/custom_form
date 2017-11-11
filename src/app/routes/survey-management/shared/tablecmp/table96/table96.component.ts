import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Question } from 'app/routes/survey-management/shared/question';
import { AnswerInterface } from 'app/routes/survey-management/shared/answerInterface';

@Component({
  selector: 'app-table96',
  templateUrl: './table96.component.html',
  styleUrls: ['./table96.component.less']
})
export class Table96Component extends Question implements AnswerInterface {
  /**
   * 生育时的年龄
   */
  birthAge = [];

  /**
   * 母乳喂养时间
   */
  feedMonths = [];

  /**
   * 多胞胎
   */
  isTwins = [false, false, false, false, false];

  /**
   * 活产次数
   */
  birthTimeList = [
      '首次', '第二次', '第三次', '第四次', '第五次'
  ];

  /**
   * 答案的校验结果,true为校验成功
   */
  changed = false;

  required = true;


  constructor() {
      super();
      this.birthAge =  new Array(this.birthTimeList.length);
      this.feedMonths =  new Array(this.birthTimeList.length);
  }

  /**
   * 有数据改变,执行校验
   */
  answerChange(row, col) {
      

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
