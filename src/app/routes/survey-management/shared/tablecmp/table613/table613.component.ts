import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Question } from 'app/routes/survey-management/shared/question';
import { AnswerInterface } from 'app/routes/survey-management/shared/answerInterface';


@Component({
  selector: 'app-table613',
  templateUrl: './table613.component.html',
  styleUrls: ['./table613.component.less']
})
export class Table613Component extends  Question implements AnswerInterface {

  /**
   * 是否暴露过
   */
  selected = [];
  
  /**
   * 暴露时间
   */
  exposureTime = [];

  /**
   * 烟雾种类
   */
  smokeNames = [
      '煤气/蒸汽/烟/雾', '粉尘（如：硅石/煤炭/棉花）', '纤维（如　石棉/纺织品）', '化学制品（如：苯/甲苯）'
  ];

  /**
   * 答案的校验结果,true为校验成功
   */
  changed = false;

  required = true;


  constructor() {
      super();
      this.selected =  new Array(this.smokeNames.length);
      this.exposureTime =  new Array(this.smokeNames.length);
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
