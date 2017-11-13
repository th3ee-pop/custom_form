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

    //查询参数
    params = {
        'PID' : '003',
        'RecordID' : 'ID1'
};

    //新增记录
    putRecord = {
        'Records' : [
            {
                "ID1_1": "1000000001",
                "Updated_time": ""
            },
            {
                "ID1_2": "1000000001",
                "Updated_time": ""
            },
            {
                "ID1_4_2": "true",
                "Updated_time": ""
            }
        ]
    };

    //修改记录
    insertRecord = {
        'PID':'3',
        'Records':[{
                "ID1_5_1": "true",
                "Updated_time": ""//必须跟上一次修改时间一样
        }]
    };

    constructor(
        private service: HttpService
    ) { }

  ngOnInit() {
        this.submit();
  }

    submit(){
        //获取记录
        this.service.getRecord(this.params)
            .subscribe((res) => {
            console.log(res);
        },err => {
            console.log(err);
            });
        //添加信息
        this.service.putRecord(this.putRecord).subscribe((res) => {
            console.log(res);
        },err => {
            console.log(err);
        });
        //获取所有记录
        this.service.getPatientList().subscribe((res) =>{
            console.log(res);
        },err => {
                console.log(err);
            })
    }

}
