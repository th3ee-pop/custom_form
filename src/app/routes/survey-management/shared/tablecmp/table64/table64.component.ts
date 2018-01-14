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
    gcb;
    gcd;gcq;
    chuanci = ["足背静脉", "股静脉", "股动脉"];
    rawname1 = ["胫后静脉","胫前静脉","腓静脉","腘静脉","股浅静脉","股静脉","髂静脉","髂外静脉","髂总静脉","大隐静脉","下腔静脉"];
    rawname2 = ["肺动脉主干压力","右肺动脉","左肺动脉","肺楔压","右室压力","右房压力"];
    tf = ["否", "是"];
    gcp;
    gcpa1;gcpa2;gcpa3;gcpa4;
    gcpb1;gcpb2;gcpb3;gcpb4;
    jmpart = ["腰1", "腰2"];
    gcw;
    gcwa;
    gcx = ["Trapease", "Tulip", "Optease"];
    gcy = ["股静脉置管","腘静脉置管","股动脉置管","肺动脉置管"];
    gcz = ["过敏反应","呼吸困难","出血、穿刺意外","其他"];
    gcz4;

  constructor() { super(); }

  ngOnInit() {
      this.gcd = new Array(this.rawname1.length);
      for (let i = 0; i < this.gcd.length; i++) { this.gcd[i] = new Array(2); }
      this.gcq = new Array(this.rawname2.length);
      for (let i = 0; i < this.gcq.length; i++) { this.gcq[i] = new Array(2); }
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
