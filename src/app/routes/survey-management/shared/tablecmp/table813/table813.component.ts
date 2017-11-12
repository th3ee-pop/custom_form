import { Component, OnInit } from '@angular/core';
import { Question } from '../../question';
import { AnswerInterface } from '../../answerInterface';


@Component({
  selector: 'app-table813',
  templateUrl: './table813.component.html',
  styleUrls: ['./table813.component.less']
})
export class Table813Component extends Question implements AnswerInterface {

  /**
 * 暂存答案的矩阵,5行* 5列 ,在consttuctor里面初始化为false
 */
localAnswer = [];

  /**
   * 是否必填，如果是true，则必填
   */
  required = true;

  /**
   * 每行后面的input
   */
  time = [];

  /**
   * 酒的种类
   */
  activityNames = [
      '看电视/碟片', '读书/看报', '吃饭/聚餐/闲聊', '下棋/打牌/打麻将', '上网/写作/文件整理'
  ];

  /**
   * 答案的校验结果,true为校验成功
   */
  changed = false;


  constructor() {
      super();

      this.localAnswer = new Array(5); // 五行
      for (let i = 0; i < 5; i++) {
        this.localAnswer[i] = new Array(5); // 每行生成5列
      }

      this.time = new Array(5);

  }

  /**
   * 有数据改变,执行校验
   */
  answerChange(row, col) {

      // 模拟radio,实现每行checkbox之间的互斥
      for (let i = 0; i < 5; i++) {
        this.localAnswer[row][i] = false; // 其他置为false
      }
      this.localAnswer[row][col] = true; // 本列置为true

      if (this.required === true) {
        if (this.answerCheck() === true)
          this.changed =  true;
        else
          this.changed = false;
      } else {
        this.changed = true;
      }

  }


  /**
   * 表格数据校验函数，若成功，返回true
   */
  answerCheck() {
      // 本题只需校验checkbox勾选的一行，是否填写
      for (let row = 0; row < 5; row++) {
          for (let line = 0; line < 5; line++) { // 逐行检查
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

          // 此处answer需要根据api，在answerChanged里面修改
          answer : this.answer
      };
      return answer;
  }

}
