import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Question } from 'app/routes/survey-management/shared/question';
import { AnswerInterface } from 'app/routes/survey-management/shared/answerInterface';


@Component({
  selector: 'app-table46',
  templateUrl: './table46.component.html',
  styleUrls: ['./table46.component.less']
})
export class Table46Component extends Question implements AnswerInterface {

   /**
     * 存储答案的矩阵
     */
    localAnswer = [];

  /**
   * 是否必填，如果是true，则必填
   */
  required = false;

  /**
   * 每行前面的checkbox
   */
  selected = [];

  /**
   * 酒的种类
   */
  smokeNames = [
      '过滤嘴香烟', '无滤嘴香烟', '手卷烟', '烟斗/水烟', '雪茄'
  ];

  unit = [
      '支/天', '支/天', '两/月', '两/天', '支/天'
  ];

  /**
   * 答案的校验结果,true为校验成功
   */
  answerChanged = false;

  /**
   * 是否可编辑
   */
  editdisabled = false;


  constructor() {
      super();
      this.localAnswer = new Array(5);
      this.selected = new Array(5);
  }

  /**
   * 有数据改变,执行校验
   */
  answerChange() {
      this.answer = this.localAnswer;
      const questionID = 'ID4_6';
      const res = [];
      for (let row = 0; row < 5; row ++) {  // 行
        // 答案中的一项
        const item = {
            Record_ID : '',
            Record_Value: ''
        };
        item.Record_ID = questionID + '_' + String.fromCharCode(row + 'a'.charCodeAt(0));
        item.Record_Value = (this.localAnswer[row] === undefined) ? '' : this.localAnswer[row]; // 答案内容，如果没有填写，则改为空
        if ( item.Record_Value)
        res.push(item);
      }
      this.answer = res;
      console.log('table46', this.answer);
      if (this.required) {  // 如果表格必填
          if (this.answerCheck() === true) // 如果校验成功
              this.answerChanged = true;
          else
              this.answerChanged = false;
      }else {  // 如果非必填
          this.answerChanged = true;
      }
  }
  answerCheck() {
      // 本题只需校验checkbox勾选的一行，是否填写
      for (let row = 0; row < 5; row++) {
        if (this.localAnswer[row] !== undefined) // 至少有一个填写
            return true;
      }
      return false;
  }

  /**
   * 外部调用，用来获取本例答案
   */
  getAnswer() {
      this.answerChange();
      return this.answer;
  }
}
