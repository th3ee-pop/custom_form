import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-overview',
  templateUrl: './survey-overview.component.html',
  styleUrls: ['./survey-overview.component.less']
})
export class SurveyOverviewComponent implements OnInit {

  data = [
    {
      PID : '001',
      name : '张三'

    },
    {
      PID : '002',
      name : '李四'

    },
    {
      PID : '003',
      name : '王二'

    },
  ];
  constructor() { }

  ngOnInit() {
  }

  
}
