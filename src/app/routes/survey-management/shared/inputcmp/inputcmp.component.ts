import { Component, OnInit } from '@angular/core';

import { Question } from '../question';

import { AnswerInterface } from '../answerInterface';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
@Component({
    selector: 'app-inputcmp',
    templateUrl: './inputcmp.component.html',
    styleUrls: ['./inputcmp.component.css']
})
export class InputcmpComponent extends Question  implements AnswerInterface {
    localAnswer= new Array(10); // 存储数据
    changed = false;
    validateForm: FormGroup;
    idctem = '';
    phonetem = '';

    onidcBlur = function(event) {
        this.idctem = this.localAnswer[0];
        const str = this.localAnswer[0];
        if (event.length === 18)
            this.localAnswer[0] = str.substring(0, 6) + '********' + str.substring(14);
    };
    onidcFocus = function () {
        if (this.idctem !== '')
            this.localAnswer[0] = this.idctem;
    };
    onphoneBlur = function(event) {
        this.phonetem = this.localAnswer[0];
        const str = this.localAnswer[0];
        if (event.length === 11)
            this.localAnswer[0] = str.substring(0, 3) + '****' + str.substring(7);
    };
    onphoneFocus = function () {
        if (this.phonetem !== '')
            this.localAnswer[0] = this.phonetem;
    };

    numberVaildator = (control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /^[0-9]*$/;
        if (!control.value) {
            this.changed = false;
            return {required: true};
        }else if (control.value.length !== 11 || !NUM_REGEXP.test(control.value)) {
            this.changed = false;
            return { error: true, number: true};
        }else {
            this.changed = true;
        }
    }
    IDCVaildator = (control: FormControl): { [s: string]: boolean } => {
        const IDC_REGEXP = /((^\d{18}$)|(^\d{17}(\d|X|x)$))||((^\d{6}[\*]{8}(\d{3}|\d{4})))/;
        if (!control.value) {
            this.changed = false;
            return {required: true};
        } else if (control.value.length !== 18 || !IDC_REGEXP.test(control.value)) {
            this.changed = false;
            return {error: true, idc: true};
        }else {
            this.changed = true;
        }
    }
    phoneVaildator = (control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /^([0-9]*)|(^\d{3}[\*]{4}\d{4}})$/;
        if (!control.value) {
            this.changed = false;
            return {required: true};
        }else if (control.value.length !== 11 || !NUM_REGEXP.test(control.value)) {
            this.changed = false;
            return { error: true, phone: true};
        }else {
            this.changed = true;
        }
    }


    twonumValidator = ( control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /^[0-9]*$/;
        if (!control.value) {
            this.changed = false;
            return {required: true};
        }else if (control.value.length > 2 || !NUM_REGEXP.test(control.value)) {
            this.changed = false;
            return { error: true, twonum: true};
        }else {
            this.changed = true;
        }
    }
    onenumValidator = ( control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /^[0-9]*$/;
        if (!control.value) {
            this.changed = false;
            return {required: true};
        }else if (control.value.length > 1 || !NUM_REGEXP.test(control.value)) {
            this.changed = false;
            return { error: true, onenum: true};
        }else {
            this.changed = true;
        }
    }
    threenumValidator = ( control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /^[0-9]*$/;
        if (!control.value) {
            this.changed = false;
            return {required: true};
        }else if (control.value.length > 3 || !NUM_REGEXP.test(control.value)) {
            this.changed = false;
            return { error: true, threenum: true};
        }else {
            this.changed = true;
        }
    }
    fivenumValidator = ( control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /^[0-9]*$/;
        if (!control.value) {
            this.changed = false;
            return {required: true};
        }else if (control.value.length > 5 || !NUM_REGEXP.test(control.value)) {
            this.changed = false;
            return { error: true, fivenum: true};
        }else {
            this.changed = true;
        }
    }
    otherValidator = ( control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            this.changed = false;
            return {required: true};
        }else {
            this.changed = true;
        }
    }
    getFormControl(name) {
        return this.validateForm.controls[ name ];
    }
    constructor(private fb: FormBuilder) {
        super();
        this.validateForm = this.fb.group(
            {
                number : ['', [ this.numberVaildator]],
                idc: ['', [ this.IDCVaildator]],
                phone: ['', [ this.phoneVaildator]],
                twonum: ['', [ this.twonumValidator]],
                onenum: ['', [ this.onenumValidator]],
                threenum: ['', [ this.threenumValidator]],
                fivenum: ['', [ this.fivenumValidator]],
                other: ['', [this.otherValidator]]
            }
        );
    }

    answerChange() {
        const question = this.question;
        const res = new Array();
        for (const index in this.localAnswer) {
            if (this.localAnswer[index] !== '') {
                const questionID = 'ID' + question.id;
                const item = {};
                // item[questionID] = this.localAnswer
                res.push(item);
            }
        }
        this.answer = res;
    }

    getAnswer() {
        const answer = {
            available : this.changed ? 'true' : 'false',
            data : this.answer
        };

        return answer;
    }

}
