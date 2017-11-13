import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Question } from 'app/routes/survey-management/shared/question';
import { AnswerInterface } from 'app/routes/survey-management/shared/answerInterface';


@Component({
  selector: 'app-table58',
  templateUrl: './table58.component.html',
  styleUrls: ['./table58.component.less']
})
export class Table58Component extends Question implements AnswerInterface {
/**
   * 存储答案的矩阵
   */
  localAnswer = [];
  
  /**
   * 是否必填，如果是true，则必填
   */
  required = false;


  /**
   * 酒的种类
   */
  situationNames = [
      '体重明显下降', '因为食物短缺出现浮肿、严重贫血等相关疾病', '在此期间有家人、亲朋好友或邻居因食物短缺而死亡'
  ];

  /**
   * 答案的校验结果,true为校验成功
   */
  changed = false;


  constructor() {
      super();
      this.localAnswer =  new Array(3);
      for (let i =  0; i < 3; i++) {
        this.localAnswer[i] =  new Array(3);
      }
  }

  radioChange(row, col) {
    // 实现checkbox 之间的互斥
    for (let i = 0; i < 3; i++) {
        this.localAnswer[row][i] = false;
      }
      this.localAnswer[row][col] = true;

      this.answerChange();
  }
  /**
   * 有数据改变,执行校验
   */
  answerChange() {
      
    const questionID = 'ID5_8';
    const res = [];

    for (let row = 0; row < this.situationNames.length; row++) {  // 行
      for (let col = 0; col < 3; col++) {
          // 答案中的一项
          const item = {
              Record_ID : '',
              Record_Value: ''
          };
          // 答案id ,最够一项为了实现 a-e的序列
          item.Record_ID = questionID + '_' + (row + 1) + '_' + String.fromCharCode(col + 'a'.charCodeAt(0));  
          item.Record_Value = (this.localAnswer[row][col] === undefined) ? false : this.localAnswer[row][col]; // 答案内容，如果没有填写，则改为空
          res.push(item);
      }
      
    }

    this.answer = res;

    console.log(res);

      


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
      // 本题只需校验checkbox勾选的一行，是否填写
      for (let row = 0; row < 3; row++) {
          for (let line = 0; line < 3; line++) { // 逐行检查
              if (this.localAnswer[line][row] !== undefined) // 至少有一个填写
                  return true;
          }
      }
      return false;
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
