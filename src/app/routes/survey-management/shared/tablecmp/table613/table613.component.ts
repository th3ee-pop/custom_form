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
  answerChanged = false;

  required = true;


  constructor() {
      super();
      this.selected =  new Array(this.smokeNames.length);
      this.exposureTime =  new Array(this.smokeNames.length);
  }

  /**
   * 有数据改变,执行校验
   */
  answerChange() {

    const questionID = 'ID6_13';
    const res = []; // 结果暂存
    for (let row = 0; row < this.smokeNames.length; row++) {
        
        res.push({   // 生育时年龄
            Record_ID : questionID + '_' + (row + 1) + '_a' , // 题号
            Record_Value : this.selected[row] !== undefined ? this.selected[row] : false    // 如不为空，则push进
        });

        res.push({   // 母乳喂养时间
            Record_ID : questionID + '_' + (row + 1) + '_b' , // 题号
            Record_Value : this.exposureTime[row] !== undefined ? this.exposureTime[row] : ''    // 如不为空，则push进
        });
    }

    this.answer = res;

    console.log(res);
    
    if (this.required) {  // 如果表格必填
        if (this.answerCheck() === true) // 如果校验成功
            this.answerChanged = true;
        else 
            this.answerChanged = false;
    }else {  // 如果非必填
        this.answerChanged = true;
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
          available : this.answerChanged ? 'true' : 'false',
          answer : this.answer
      };
      return answer;
  }

}
