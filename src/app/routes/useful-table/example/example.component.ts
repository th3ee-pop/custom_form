import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.less']
})
export class ExampleComponent implements OnInit {

    startStr = 'ea';
    column = 20;
    row = 6;
    letterArray = [];
    initialArray = [];
    idArray = [];
    rowTitle = [ '走行', '内径', '宫腔', '静脉压缩性', '侧枝', '静脉瓣功能'];
    columnTitle = ['髂外静脉', '股总静脉', '股浅静脉', '股深静脉', '腘静脉', '胫后静脉', '颈前静脉', '大隐静脉', '腓静脉', '肌间静脉'];
    columnTitle_2 = ['左', '右'];
    secondLevelTitle = [];
    changedAnswer = [];

  constructor() { }

  ngOnInit() {

      for (let i = 97; i < 97 + this.column; i++) {
          this.letterArray.push(String.fromCharCode(i));
      }
      this.initArray();
      this.initId();
      this.initTitle2();
      console.log(this.letterArray);
      console.log(this.initialArray);
      console.log(this.idArray);
      console.log(this.columnTitle_2);
  }

  initArray() {
     for (let row = 0; row < this.row; row++) {
         this.initialArray.push([]);
         for (let column = 0; column < this.column; column++) {
           this.initialArray[row].push('');
         }
     }
  }

  initId() {
      for (let row = 0; row < this.row; row++) {
          this.idArray.push([]);
          this.letterArray.forEach(l => {
              this.idArray[row].push(this.startStr + (row + 1) + l);
          });
      }
  }

  initTitle2() {
    for (let i = 0; i < this.column / 2; i++) {
       this.secondLevelTitle = this.secondLevelTitle.concat(this.columnTitle_2);
    }
    console.log(this.columnTitle_2);
  }

  getAnswer() {
      this.changedAnswer = [];
      for (let row = 0; row < this.row; row++) {
          for (let column = 0; column < this.column; column++) {
              if (this.initialArray[row][column] !== '') {
                 this.changedAnswer.push({
                     id2: this.idArray[row][column],
                     value: this.initialArray[row][column]
                 });
              }
          }
      }
      console.log(this.changedAnswer);
  }
}
