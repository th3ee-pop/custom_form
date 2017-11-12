import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import { HttpService } from '@core/services/http.service';

@Component({
  selector: 'app-sample-management',
  templateUrl: './sample-management.component.html',
  styleUrls: ['./sample-management.component.css']
})
export class SampleManagementComponent implements OnInit {

    constructor(
        private service: HttpService
    ) { }

  ngOnInit() {
  }

    submit(){
        // //获取记录
        // this.service.getRecord(this.api, this.params)
        //     .subscribe((res) => {
        //     console.log(res);
        // },err => {
        //     console.log(err);
        //     });
        // //添加信息
        // this.service.putRecord(this.api, this.putRecord).subscribe((res) => {
        //     console.log(res);
        // },err => {
        //     console.log(err);
        // });
        // //获取所有记录
        // this.service.getRecordList().subscribe((res) =>{
        //     console.log(res);
        // },err => {
        //         console.log(err);
        //     })
    }

}
