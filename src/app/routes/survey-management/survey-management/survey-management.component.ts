import { Component, OnInit } from '@angular/core';

import { InputcmpComponent } from '../shared/inputcmp/inputcmp.component';

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

    constructor() { }


    ngOnInit() {
    }

}
