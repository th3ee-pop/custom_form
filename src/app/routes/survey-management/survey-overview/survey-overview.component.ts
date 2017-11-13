import { Component, OnInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';
@Component({
  selector: 'app-survey-overview',
  templateUrl: './survey-overview.component.html',
  styleUrls: ['./survey-overview.component.less']
})
export class SurveyOverviewComponent implements OnInit {

  loggedUser = localStorage.getItem('userID');
  userGroup = localStorage.getItem('userGroup');
  userProvince = localStorage.getItem('userProvince');
  data = [
    {
      PID : '001',
      name : '张三',
      completedBy: '001',
      province: '陕西'

    },
    {
      PID : '002',
      name : '李四',
      completedBy: '001',
      province: '陕西'

    },
    {
      PID : '003',
      name : '王二',
      completedBy: '002',
      province: '陕西'
    },
    {
      PID : '004',
      name : '赵五',
      completedBy: '002',
      province: '陕西'
    },
  ];
  constructor(private service: HttpService) { }

  ngOnInit() {
      this.service.getPatientList().subscribe( (res) => {
          console.log(res);
          this.data = res.PIDs;
      });
      console.log(localStorage.getItem('userID'))
      console.log('loggedUser');
      console.log(this.loggedUser);
      console.log('userGroup');
      console.log(this.userGroup);
  }
  isVisible( data ): boolean {
      if (this.userGroup === '4') {
          return true;
      } else if (this.userGroup === '3' || '2') {
         return data.province === this.userProvince;
      } else if (this.userGroup === '1') {
          console.log(data.completedBy);
          return data.completedBy === this.loggedUser;
      }
  }
}
