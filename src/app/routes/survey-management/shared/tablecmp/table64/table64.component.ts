import { Component, OnInit } from '@angular/core';
import {Question} from "../../question";

@Component({
  selector: 'app-table64',
  templateUrl: './table64.component.html',
  styleUrls: ['./table64.component.less']
})
export class Table64Component extends Question implements OnInit {

    localAnswer = [];
    answerChanged = false;
    editdisabled = false;

    mazui = ["局麻+心电血压监护", "全麻+心电血压监护"];
    gca = -1;
    gcd;
    chuanci = ["足背静脉", "股静脉", "股动脉"];
    rawname = ["胫后静脉","胫前静脉","腓静脉","腘静脉","股浅静脉","股静脉","髂静脉","髂外静脉","髂总静脉","大隐静脉","下腔静脉"];
    shenjm = ["否", "是"];

  constructor() { super(); }

  ngOnInit() {
      this.gcd = new Array(this.rawname.length);
      for (let i = 0; i < this.gcd.length; i++) { this.gcd[i] = new Array(this.question.id2[0].length); }
  }

    answerChange() {
        const res = [];
        const item = {
            Record_ID: '',
            Record_Value: ''
        }
        this.answer = res;
        if ( this.answerCheck() === true)
            this.answerChanged = true;
        else
            this.answerChanged = false;
    }

    answerCheck() {
        this.localAnswer.forEach(item => {
            item.forEach( colitem => {
                if ( item !== '')
                    return true;
            });
        });
        return false;
    }
}
