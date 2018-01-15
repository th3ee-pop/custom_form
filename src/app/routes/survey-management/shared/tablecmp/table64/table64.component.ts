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
    gcb;gcc;
    array1;array2;
    chuanci = ["足背静脉", "股静脉", "股动脉"];
    rawname1 = ["胫后静脉","胫前静脉","腓静脉","腘静脉","股浅静脉","股静脉","髂静脉","髂外静脉","髂总静脉","大隐静脉"];
    rawname2 = ["肺动脉主干压力","右肺动脉","左肺动脉","肺楔压","右室压力","右房压力"];
    tf = ["否", "是"];
    gcpa1;gcpa2;gcpa3;gcpa4;
    gcpb1;gcpb2;gcpb3;gcpb4;
    jmpart = ["腰1", "腰2"];

    initialArray = [
        '', '', '',
        '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '',
        '', '', '', '', '', '', '',
        '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '', '', ''

    ];
    idArray = [
        'gca', 'gcb', 'gcc',
        'gcd1', 'gcd2', 'gce1', 'gce2', 'gcf1', 'gcf2', 'gcg1', 'gcg2', 'gch1', 'gch2', 'gci1', 'gci2', 'gcj1', 'gcj2', 'gck1', 'gck2', 'gcl1', 'gcl2', 'gcm1', 'gcm2',
        'gcn', 'gco1', 'gco2', 'gco3', 'gco4',
        'gcpa1', 'gcpa2', 'gcpa3', 'gcpa4', 'gcpa5', 'gcpa6', 'gcpa7',
        'gcpb1', 'gcpb2', 'gcpb3', 'gcpb4', 'gcpb5', 'gcpb6', 'gcpa7',
        'gcq1', 'gcq2', 'gcr1', 'gcr2', 'gcs1', 'gcs2', 'gct1', 'gct2', 'gcu1', 'gcu2', 'gcv1', 'gcv2'
    ]

  constructor() { super(); }

  ngOnInit() {
      this.array1 = new Array(this.rawname1.length);
      for (let i = 0; i < this.array1.length; i++) { this.array1[i] = new Array(2); }
      this.array2 = new Array(this.rawname2.length);
      for (let i = 0; i < this.array2.length; i++) { this.array2[i] = new Array(2); }
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
