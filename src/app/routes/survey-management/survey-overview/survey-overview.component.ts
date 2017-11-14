import { Component, OnInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';
@Component({
  selector: 'app-survey-overview',
  templateUrl: './survey-overview.component.html',
  styleUrls: ['./survey-overview.component.less']
})
export class SurveyOverviewComponent implements OnInit {

  localInfo = JSON.parse(localStorage.getItem('_user'));
  loggedUser = this.localInfo.user_name;
  userGroup = this.localInfo.user_group;
  userProvince = this.localInfo.user_province;
  data = [];

  constructor(private service: HttpService) { }

  ngOnInit() {
      console.log(this.localInfo);
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













