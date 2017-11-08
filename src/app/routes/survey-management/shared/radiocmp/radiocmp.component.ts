import { Component, OnInit } from '@angular/core';

import { Question } from '../question';

import { AnswerInterface } from '../answerInterface';
@Component({
  selector: 'app-radiocmp',
  templateUrl: './radiocmp.component.html',
  styleUrls: ['./radiocmp.component.less']
})
export class RadiocmpComponent extends Question implements AnswerInterface {

  /**
   *  存储答案的变量数组
   */
  localAnswer = -1;

  /**
   * 存储问题是否填写的变量,默认false
   */
  answerChanged = false;

  constructor() { 
    super();
  }


  /**
   * 答案改变后触发
   */
  answerChange() {
    const numOfRadio = this.question.content.length;
    const res = new Array();
    for (let index = 0; index < numOfRadio ; index++) {
      const questionID = 'ID' + this.question.id.replace('.' , '_') + '_' + index;
      const item = {};
      item[questionID] = index === this.localAnswer ? 'true' : 'false';
      item['update_time'] = '';
      res.push(item);
    }
    this.answer = res;
    this.answerChanged =  true;
  }

  getAnswer() {
    const res = {
      available : this.answerChanged,
      answer : this.answer
    };
    return res;
  }
}
// import { Component, Input } from '@angular/core';
// import { Radio } from '../radio';

// @Component({
//     selector: 'app-radio',
//     templateUrl: './radiocmp.component.html',
//     styleUrls: ['./radiocmp.component.css']

// })
// export class RadiocmpComponent {

//     constructor() { }
//     @Input() radios: Radio[];
//     @Input() question: string;
//     @Input() Id: string;
//     selected: string;
// }
