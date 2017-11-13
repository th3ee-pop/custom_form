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
  answerChanged = false;

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


    const questionID = 'ID7_15';
    const res = []; // 结果暂存
    for (let col = 0; col < this.illnessNames.length; col++) {  // 本题结构和其他的不一样，所以需要横向遍历
        const colName = String.fromCharCode(col + 'a'.charCodeAt(0));  // 本列后缀，从a-f
        res.push({   // 母亲
            Record_ID : questionID + '_1_' +  colName, 
            Record_Value : this.mother[col] !== undefined ? this.mother[col] : false    // 如不为空，则push进
        });

        res.push({   // 父亲
          Record_ID : questionID + '_2_' +  colName, 
          Record_Value : this.father[col] !== undefined ? this.father[col] : false    // 如不为空，则push进
        });

        res.push({   // 兄弟姐妹
          Record_ID : questionID + '_3_' +  colName, 
          Record_Value : this.brothersAndSisters[col] !== undefined ? this.brothersAndSisters[col] : ''    // 如不为空，则push进
        });

        res.push({   // 兄弟姐妹
          Record_ID : questionID + '_4_' +  colName, 
          Record_Value : this.children[col] !== undefined ? this.children[col] : ''    // 如不为空，则push进
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
