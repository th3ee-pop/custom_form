import { Component, OnInit } from '@angular/core';
import { Question } from '../../question';
import { AnswerInterface } from '../../answerInterface';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Component({
  selector: 'app-table51',
  templateUrl: './table51.component.html',
  styleUrls: ['./table51.component.less']
})
export class Table51Component  extends Question implements AnswerInterface {

  /**
     * 暂存答案的矩阵,24列*5行 ,在ngInit里面初始化为false
     */
  localAnswer = new Array(24);

  /**
   * 是否必填，如果是true，则必填
   */
  required = false;

  /**
   * 每行后面的input
   */
  amount = new Array(24);

  /**
   * 酒的种类
   */
  foodNames = [
      '大米', 
      '面食', 
      '杂粮（玉米、高粱、小米、青稞等）', 
      '大肉，牛羊肉等', 
      '家禽及制品', 
      '水产/海鲜品', 
      '蛋类及制品',
      '动物内脏类', 
      '新鲜蔬菜', 
      '新鲜瓜果', 
      '土豆红薯类', 
      '豆类及豆制品', 
      '牛、羊奶', 
      '酸奶', 
      '其他奶制品',
      '咸菜泡菜',
      '干菜',
      '坚果',
      '果干',
      '豆浆',
      '纯果汁',
      '碳酸饮料',
      '其他饮品' 
  ];

  /**
   * 答案的校验结果,true为校验成功
   */
  answerChanged = false;


  constructor() {
      super();

      for (let i = 0; i < 24; i++) {
        this.localAnswer[i] = new Array(5);
      }

  }

  /**
   * radio 选择
   */
  radioChange(row, col) {

      // 模拟radio,实现checkbox之间的互斥
      for (let i = 0; i < 5; i++) {
        this.localAnswer[row][i] = false;
      }
      this.localAnswer[row][col] = true;

      this.answerChange();
    

  }

  answerChange() {
    
    const questionID = 'ID5_1';
    const res = [];     


    // 获取右边摄入量
    for (let index = 0; index < this.foodNames.length; index ++) {  // 遍历每一行, 获取摄入量
      // 答案中的一项
      const item = {
          questionID : '',
          answer: ''
      };
      // 答案id
      item.questionID = questionID + '_' + (index + 1) + '_' + 'f';  
      item.answer = (this.amount[index] === undefined) ? '' : this.amount[index]; // 答案内容，如果没有填写，则改为空
      res.push(item);
    }


    // 获取中间checkbox内容
    for (let row = 0; row < this.foodNames.length; row ++) {
        for (let col = 0; col < 5; col ++ ) {
            const item = {
                Record_ID : '',
                Record_Value: ''
            };
            item.Record_ID = questionID + '_' + (row + 1) + '_' + String.fromCharCode(col + 'a'.charCodeAt(0));  
            item.Record_Value = (this.localAnswer[row][col] === undefined) ? false : this.localAnswer[row][col]; // 答案内容，如果没有填写，则改为空
            res.push(item);

        }
    }



    this.answer = res;

    console.log(res);


      if (this.required === true) {
        if (this.answerCheck() === true)
          this.answerChanged =  true;
        else
          this.answerChanged = false;
      } else {
        this.answerChanged = true;
      }
  }


  /**
   * 表格数据校验函数，若成功，返回true
   */
  answerCheck() {
      // 本题只需校验checkbox勾选的一行，是否填写
      for (let row = 0; row < 24; row++) {
          for (let col = 0; col < 5; col++) { // 逐行检查
              if (this.localAnswer[col][row] !== undefined) // 至少有一个填写
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
          available : this.answerChanged ? 'true' : 'false',

          // 此处answer需要根据api，在answerChanged里面修改
          answer : this.answer
      };
      return answer;
  }
}
