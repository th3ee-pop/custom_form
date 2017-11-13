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
  data = [];

  constructor(private service: HttpService) { }

  ngOnInit() {
      this.service.getPatientList().subscribe( (res) => {
          console.log(res);
          this.data = res.PIDs;
      });
  }
  isVisible( data ): boolean {
      if (this.userGroup === '4') {
          return true;
      } else if (this.userGroup === '3' || '2') {
         return data.province === this.userProvince;
      } else if (this.userGroup === '1') {
          return data.completedBy === this.loggedUser;
      }
  }
}













