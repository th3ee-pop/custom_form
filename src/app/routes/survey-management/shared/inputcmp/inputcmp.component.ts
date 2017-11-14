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
export class InputcmpComponent extends Question implements OnInit {
    localAnswer = []; // 存储数据
    answerChanged = false;
    validateForm: FormGroup;
    idctem = '';
    phonetem = '';
    ngOnInit() {
        this.localAnswer = new Array(this.question.content.length);
    }
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
            this.answerChanged = false;
            return {required: true};
        }else if (control.value.length !== 11 || !NUM_REGEXP.test(control.value)) {
            this.answerChanged = false;
            return { error: true, number: true};
        }else {
            this.answerChanged = true;
        }
    }
    IDCVaildator = (control: FormControl): { [s: string]: boolean } => {
        const IDC_REGEXP = /((^\d{18}$)|(^\d{17}(\d|X|x)$))||((^\d{6}[\*]{8}(\d{3}|\d{4})))/;
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
    phoneVaildator = (control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /^([0-9]*)|(^\d{3}[\*]{4}\d{4}})$/;
        if (!control.value) {
            this.answerChanged = false;
            return {required: true};
        }else if (control.value.length !== 11 || !NUM_REGEXP.test(control.value)) {
            this.answerChanged = false;
            return { error: true, phone: true};
        }else {
            this.answerChanged = true;
        }
    }


    twonumValidator = ( control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /^[0-9]*$/;
        if (!control.value) {
            this.answerChanged = false;
            return {required: true};
        }else if (control.value.length > 2 || !NUM_REGEXP.test(control.value)) {
            this.answerChanged = false;
            return { error: true, twonum: true};
        }else {
            this.answerChanged = true;
        }
    }
    onenumValidator = ( control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /^[0-9]*$/;
        if (!control.value) {
            this.answerChanged = false;
            return {required: true};
        }else if (control.value.length > 1 || !NUM_REGEXP.test(control.value)) {
            this.answerChanged = false;
            return { error: true, onenum: true};
        }else {
            this.answerChanged = true;
        }
    }
    threenumValidator = ( control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /^[0-9]*$/;
        if (!control.value) {
            this.answerChanged = false;
            return {required: true};
        }else if (control.value.length > 3 || !NUM_REGEXP.test(control.value)) {
            this.answerChanged = false;
            return { error: true, threenum: true};
        }else {
            this.answerChanged = true;
        }
    }
    fivenumValidator = ( control: FormControl): { [s: string]: boolean } => {
        const NUM_REGEXP = /^[0-9]*$/;
        if (!control.value) {
            this.answerChanged = false;
            return {required: true};
        }else if (control.value.length > 5 || !NUM_REGEXP.test(control.value)) {
            this.answerChanged = false;
            return { error: true, fivenum: true};
        }else {
            this.answerChanged = true;
        }
    }
    otherValidator = ( control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            this.answerChanged = false;
            return {required: true};
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
        const res = [];
        if (this.question.content.length !== 1) {
            for ( let index = 1; index <= this.question.content.length; index++) {
                const tem = {
                    Record_ID: '',
                    Record_Value: ''
                };
                const questionID = 'ID' + this.question.id.replace(/\./g , '_') + '_' + index;
                tem.Record_ID = questionID;
                tem.Record_Value = this.localAnswer[index - 1];
                res.push(tem);
            }

        }  else {
            const tem = {
                Record_ID: '',
                Record_Value: ''
            };
            if (this.question.id === '1.0' ) {
                const questionID = 'ID0_1';
                tem.Record_ID = questionID;
            } else {
                const questionID = 'ID' + this.question.id.replace(/\./g, '_');
                tem.Record_ID = questionID;
            }
            tem.Record_Value = this.localAnswer[0];
            res.push(tem);
        }
        if (this.answerChanged === true)
            this.answer = res;
    }
}
