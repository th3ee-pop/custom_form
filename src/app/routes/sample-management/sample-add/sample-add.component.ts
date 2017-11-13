import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, convertToParamMap} from '@angular/router';

@Component({
    selector: 'app-sample-add',
    templateUrl: 'sample-add.component.html',
    styleUrls: ['sample-add.component.css']
})
export class SampleAddComponent implements OnInit {

    validateForm: FormGroup;

    provinces=['陕西','甘肃','宁夏','青海','新疆'];

    _submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[ i ].markAsDirty();
        }
        console.log("submit!");

    }

    constructor(private fb: FormBuilder, private router: Router) {
    }

    updateConfirmValidator(key) {
        /** wait for refresh value */
        setTimeout(_ => {
            this.validateForm.controls[ key ].updateValueAndValidity();
        });
    }

    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        const temp = control.value;
        console.log(temp);
        if (!control.value) {
            return { required: true };
        } else if ( temp[0] !== this.validateForm.value.province ||  temp[1]!== this.validateForm.value.point ) {
            console.info("error");
            return { confirm: true, error: true };
        }
    };

    confirmationNum = (control: FormControl): { [s: string]: boolean } => {
        if(!control.value){
            return { required: true };
        }else if( control.value < 0 ){
            return { confirm: true, error: true};
        }
    };

    ngOnInit() {
        this.validateForm = this.fb.group({
            barcode:[null, [ Validators.required]],
            province:[null, [ Validators.required]],
            point:[null, [ Validators.required]],
            building:[null, [ Validators.required]],
            ref:[null, [ Validators.required, this.confirmationNum]],
            lay:[null, [ Validators.required, this.confirmationNum]],
            col:[null, [ Validators.required, this.confirmationNum]],
            row:[null, [ Validators.required, this.confirmationNum]],
            shelf:[null, [ Validators.required, this.confirmationNum]],
            num:[null, [ Validators.required, this.confirmationValidator]],
        });
    }

    getFormControl(name) {
        return this.validateForm.controls[ name ];
    }

    resetForm() {
        this.validateForm.reset();
    }

    goBack(){
        this.router.navigate(['sample/detail']);
    }
}

