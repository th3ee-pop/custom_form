import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { saveAs } from 'file-saver';
import { _HttpClient } from '@core/services/http.client';
import { HttpService } from '@core/services/http.service';
import {routes} from "../../routes";
// import { environment } from '../../../environments/environment';
// import { InputcmpComponent } from '../shared/inputcmp/inputcmp.component';

@Component({
    selector: 'app-survey-management',
    templateUrl: './survey-management.component.html',
    styleUrls: ['./survey-management.component.css']
})



export class SurveyManagementComponent implements OnInit {

    questions = [{
    id : '7.15',
    tittle : '在你的直系亲属中，是否有人被乡区级医院或以上单位医生诊断患有过下述疾病？',
    type : 'table',
    content : {
        head : {
            tittle : '活动名称',
            content : [
                '生母',
                '生父',
                '亲兄妹',
                '亲生子女'
                ]
        },
        body : [
            {
                tittle : '中风',
                type : 'checkbox'
            },
            {
                tittle : '急性心梗',
                type : 'checkbox'
            },
            {
                tittle : '急性心梗',
                type : 'checkbox'
            },
            {
                tittle : '急性心梗',
                type : 'checkbox'
            },
            {
                tittle : '急性心梗',
                type : 'checkbox'
            }
            ]
    }

}];

    answers = Array();

    api = '/healthexamination/recordop/';
    /**
     * 查询操作，PID 病人编号，RecordID 记录编号
     * @type {{PID: string; RecordID: string}}
     */
    params = {"PID":"003","RecordID":"ID1" };

    /**
     * 添加记录操作，ID1_1：题1的第一个选择，ID1_4_2: 题4的第二个选项
     * @type {{PID: string; Records: [{ID1_1: string; Updated_time: string},{ID1_4_2: string; Updated_time: string}]}}
     */
    putRecord = {
        "PID":"006",
        "Records": [
            { "ID1_1": "1000000001", "Updated_time": "" },
            { "ID1_4_2": "true", "Updated_time": "" }
            ]
    };

    constructor(
        private httpService: HttpService
    ) { }

    ngOnInit() {
        this.httpService.getRecord(this.api,this.params).subscribe((res) => {
            console.log(res);
        });
        console.log(this.questions);
    }

    submit(){
        this.httpService.putRecord(this.api, this.putRecord).subscribe((res) => {
            console.log(res);
        });
    }

}
