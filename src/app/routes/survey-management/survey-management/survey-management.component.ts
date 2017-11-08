import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';


import { InputcmpComponent } from '../shared/inputcmp/inputcmp.component';
import { RadiocmpComponent } from '../shared/radiocmp/radiocmp.component';
import { QuestionList } from '../shared/questionList';

import { NzMessageService } from 'ng-zorro-antd';
import { Directive,  Input, HostListener } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { saveAs } from 'file-saver';
import { _HttpClient } from '@core/services/http.client';
import { HttpService } from '@core/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';

// import {routes} from "../../routes";
// import { environment } from '../../../environments/environment';
// import { InputcmpComponent } from '../shared/inputcmp/inputcmp.component';

@Component({
    selector: 'app-survey-management',
    templateUrl: './survey-management.component.html',
    styleUrls: ['./survey-management.component.css']
})



export class SurveyManagementComponent implements OnInit {
    schedule_list = [
        {
            status: '正在填写',
            descript: '一般信息'
        },
        {
            status: '等待填写',
            descript: '饮茶及咖啡情况'
        },
        {
            status: '等待填写',
            descript: '饮酒情况'
        },
        {
            status: '等待填写',
            descript: '吸烟情况'
        },
        {
            status: '等待填写',
            descript: '膳食情况'
        },
        {
            status: '等待填写',
            descript: '被动吸烟和室内空气污染'
        },
        {
            status: '等待填写',
            descript: '个人及家庭健康状况'
        },
        {
            status: '等待填写',
            descript: '体力活动情况'
        },
        {
            status: '等待填写',
            descript: '女性生育史情况'
        },
        {
            status: '等待填写',
            descript: '精神、睡眠、情绪状况及生活质量'
        }

    ];

    /**
     * 将数据转化为10个列表
     */
    questionList = new QuestionList();
    qlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => this.questionList.getQuestions(index));


    answers = {};
    editDisable = {};

    api = '/healthexamination/recordop/';
    params = {
        'PID' : '003',
        'RecordID' : 'ID1'
    };

    @ViewChildren(InputcmpComponent) InputItems: QueryList<InputcmpComponent>;
    @ViewChildren(RadiocmpComponent) RadioItems: QueryList<InputcmpComponent>;
    
    /**
     * 查询操作，PID 病人编号，RecordID 记录编号
     * @type {{PID: string; RecordID: string}}
     */

    /**
     * 添加记录操作，ID1_1：题1的第一个选择，ID1_4_2: 题4的第二个选项
     * @type {{PID: string; Records: [{ID1_1: string; Updated_time: string},{ID1_4_2: string; Updated_time: string}]}}
     */
    putRecord = {
        'PID' : '006',
        'Records' : [
            {
                 'ID1_1': '1000000001', 'Updated_time': ''
            },
            {
                'ID1_4_2': 'true', 'Updated_time': ''
            }
        ]
    };
    current = 0;
    constructor(
        private httpService: HttpService,
        private router: Router,
        private confirmServ: NzModalService
    ) { }

    ngOnInit() {
    }


    pre() {
        this.current -= 1;
        this.schedule_list[this.current].status = '正在填写';
        this.schedule_list[this.current + 1].status = '等待填写';
    }

    next() {
        this.confirmServ.error({
            title: '有必填项未完成',
            content: ''
        });
        if (true) { // 检查当前步骤是否合法，如果不合法禁止转向下一步
            this.current += 1;
            this.schedule_list[this.current].status = '正在填写';
            this.schedule_list[this.current - 1].status = '已完成';
        }
    }


    log() {
        this.RadioItems.forEach(item => {
            console.log(item['answer']);
        });

        console.log(this.RadioItems);
        // this.httpService.getRecord(this.api, this.params).subscribe((res) => {
        //     console.log(res);
        // });
        // console.log(this.questions);
        this.router.navigate(['/survey/detail']);
    }


    test() {
        console.log(this.qlist);
    }

    submit() {
        this.httpService.putRecord(this.api, this.putRecord).subscribe((res) => {
            console.log(res);
        });
    }

}
