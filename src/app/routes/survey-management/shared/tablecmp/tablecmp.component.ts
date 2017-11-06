import { Component, OnInit } from '@angular/core';

import { Question } from '../question';


@Component({
  selector: 'app-tablecmp',
  templateUrl: './tablecmp.component.html',
  styleUrls: ['./tablecmp.component.less']
})
export class TablecmpComponent extends Question {
  
  constructor() { 
    super();
  }

}
