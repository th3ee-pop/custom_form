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

    numberVaildator = (control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /[0-9]*/;

        if (!control.value) {
            return {required: true};
        }else if (control.value.length !== 11 || !NUM_REGEXP.test(control.value)) {
            return { error: true, number: true};
        }
    }
    IDCVaildator = (control: FormControl): { [s: string]: boolean } => {
        const IDC_REGEXP = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (!control.value) {
            return {required: true};
        }else if (control.value.length !== 18 || !IDC_REGEXP.test(control.value)) {
            return { error: true, idc: true};
        }
    }
    phoneVaildator = (control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /[0-9]*/;
        if (!control.value) {
            return {required: true};
        }else if (control.value.length !== 11 || !NUM_REGEXP.test(control.value)) {
            return { error: true, phone: true};
        }
    }
    twonumValidator = ( control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /[0-9]*/;
        if (!control.value) {
           return {required: true};
        }else if (control.value.length > 2 || !NUM_REGEXP.test(control.value)) {
            return { error: true, twonum: true};
        }
    }
    onenumValidator = ( control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /[0-9]*/;
        if (!control.value) {
            return {required: true};
        }else if (control.value.length > 1 || !NUM_REGEXP.test(control.value)) {
            return { error: true, onenum: true};
        }
    }
    threenumValidator = ( control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /[0-9]*/;
        if (!control.value) {
            return {required: true};
        }else if (control.value.length > 3 || !NUM_REGEXP.test(control.value)) {
            return { error: true, threenum: true};
        }
    }
    fivenumValidator = ( control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /[0-9]*/;
        if (!control.value) {
            return {required: true};
        }else if (control.value.length > 5 || !NUM_REGEXP.test(control.value)) {
            return { error: true, fivenum: true};
        }
    }
    otherValidator = ( control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return {required: true};
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
                this.changed = true;
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
