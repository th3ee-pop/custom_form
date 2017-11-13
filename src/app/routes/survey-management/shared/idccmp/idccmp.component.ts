import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'app-idccmp',
    templateUrl: './idccmp.component.html',
    styleUrls: ['./idccmp.component.css']
})
export class IdccmpComponent extends Question {
    localAnswer = ''; // 存储数据
    answerChanged = false;
    validateForm: FormGroup;
    flag = false;
    pwdOrtext = 'password';
    Onclick = function() {
        this.flag = !this.flag;
        if (this.flag === true) {
            this.pwdOrtext = 'text';
        }else {
            this.pwdOrtext = 'password';
        }
    };
    IDCVaildator = (control: FormControl): { [s: string]: boolean } => {
        const IDC_REGEXP = /((^\d{18}$)|(^\d{17}(\d|X|x)$))/;
        if (!control.value) {
            this.answerChanged = false;
            return {required: true};
        } else if (control.value.length !== 18 || !IDC_REGEXP.test(control.value)) {
            this.answerChanged = false;
            return {error: true, idc: true};
        }else {
            this.answerChanged = true;
        }
    }
    getFormControl(name) {
        return this.validateForm.controls[ name ];
    }
    constructor(private fb: FormBuilder) {
        super();
        this.validateForm = this.fb.group(
            {
                idc: ['', [ this.IDCVaildator]]
            }
        );
    }
    answerChange() {
        const res = [];
        const tem = {
            Record_ID: '',
            Record_Value: ''
        }
        const questionID = 'ID' + this.question.id.replace('.' , '_') + '_' + 0;
        tem.Record_ID = questionID;
        tem.Record_Value = this.localAnswer;
        res.push(tem);
        this.answer = res;
    }
}
