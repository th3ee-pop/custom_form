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

    questions = {
        '1.1.1' : {
            id : '1.1.1',
            tittle : '体检编号'
        },
        '1.2.1' : {
            id : '1.2.1',
            tittle : '你所在的单位名称'
        }

    };

    answers = Array();

    api = '/healthexamination/recordop/';
    params = {"PID":"003","RecordID":"ID1" };

    constructor(
        private httpService: HttpService
    ) { }

    ngOnInit() {
        this.httpService.getRecord(this.api,this.params).subscribe((res) => {
            console.log(res);
        })
        console.log(this.questions);
    }

}
