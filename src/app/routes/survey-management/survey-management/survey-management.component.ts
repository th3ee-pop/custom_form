import { Component, OnInit } from '@angular/core';
import { Radio} from '../shared/radio';
import { Question} from '../shared/question';

const Questions: Question[] = [
    { Id: '1.3', question: '性别'},
    { Id: '1.8', question: '你的民族'}
]
const Radios: Radio[][] = [
    [
        {name: 'yes', value: 'yes'},
        {name: 'no', value: 'no'},
        {name: 'not sure', value: 'not sure'}
    ], [
        {name: '男', value: '男'},
        {name: '女', value: '女'},
        {name: '其他', value: '其他'}
    ]
]
@Component({
    selector: 'app-survey-management',
    templateUrl: './survey-management.component.html',
    styleUrls: ['./survey-management.component.css']
})
export class SurveyManagementComponent implements OnInit {
    radios = Radios;
    questions = Questions;
    constructor() { }

    ngOnInit() {
    }

}
