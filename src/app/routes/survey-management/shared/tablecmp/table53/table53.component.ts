import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Question } from 'app/routes/survey-management/shared/question';
import { AnswerInterface } from 'app/routes/survey-management/shared/answerInterface';


@Component({
  selector: 'app-table53',
  templateUrl: './table53.component.html',
  styleUrls: ['./table53.component.less']
})
export class Table53Component extends Question implements AnswerInterface {

    /**
     * 是否必填，如果是true，则必填
     */
    required = false;

    /**
     * 每行前面的checkbox
     */
    days = [];

    /**
     * 酒的种类
     */
    flavoringNames = [
        '一袋盐（500克）', '一瓶酱油（500毫升）', '一瓶醋(500毫升)', '一瓶食用油（1000毫升）' 
    ];

    /**
     * 答案的校验结果,true为校验成功
     */
    answerChanged = false;


    constructor() {
        super();
        this.days = new Array(this.flavoringNames.length); // 五行
    }

    /**
     * 有数据改变,执行校验
     */
    answerChange() {
        

        const questionID = 'ID5_3';
        const res = [];
  
        for (let row = 0; row < this.flavoringNames.length; row ++) {  // 行
          // 答案中的一项
          const item = {
              Record_ID : '',
              Record_Value: ''
          };
          // 答案id ,最够一项为了实现 a-e的序列
          item.Record_ID = questionID + '_' + (row + 1);  
          item.Record_Value = (this.days[row] === undefined) ? '' : this.days[row]; // 答案内容，如果没有填写，则改为空
          res.push(item);
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
        // 本题只需校验checkbox勾选的一行，是否填写
        
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
