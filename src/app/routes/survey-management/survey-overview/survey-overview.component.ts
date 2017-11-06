import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-overview',
  templateUrl: './survey-overview.component.html',
  styleUrls: ['./survey-overview.component.less']
})
export class SurveyOverviewComponent implements OnInit {

  data = [
    {
      name : 'haha',
      age : '12',
      address : '兴庆宫k'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  
}
