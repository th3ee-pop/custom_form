import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { Sample, Use_info, Accident_info} from '../sample';
import { BiologyService } from '../biology.service';
import {sample} from "rxjs/operators";

@Component({
    selector: 'app-sample-add',
    templateUrl: 'sample-add.component.html',
    styleUrls: ['sample-add.component.css']
})
export class SampleAddComponent implements OnInit {

    Sample = {
        'sample_info': {
            'Record_Value': '',
            'Updated_time': ''
        },
        'number':  {
            'Record_Value': '',
            'Updated_time': ''
        },
        'repository': {
            'Record_Value': '',
            'Updated_time': ''
        },
        'type':{
            'Record_Value': '',
            'Updated_time': ''
        },
        'capacity':{
            'Record_Value': '',
            'Updated_time': ''
        },
        'blood_type': {
            'Record_Value': '',
            'Updated_time': ''
        },
        'owner': {
            'Record_Value': '',
            'Updated_time': ''
        },
        'capcaity': {
            'Record_Value': '',
            'Updated_time': ''
        },
        'collect_time': {
            'Record_Value': '',
            'Updated_time': ''
        },
        'branch': {
            'Record_Value': '',
            'Updated_time': ''
        },
        'lost_msg': {
            'Record_Value': '',
            'Updated_time': ''
        },
        'collect_count':{
            'Record_Value': '',
            'Updated_time': ''
        },
        'collecter':{
            'Record_Value': '',
            'Updated_time': ''
        },
        'pipe_Num':{
            'Record_Value': '',
            'Updated_time': ''
        },
        'store_time': {
            'Record_Value': '',
            'Updated_time': ''
        },
        'placer':{
            'Record_Value': '',
            'Updated_time': ''
        },
        'requirement':{
            'Record_Value': '',
            'Updated_time': ''
        },
        'emergency': {
            'Record_Value': '',
            'Updated_time': ''
        },
        'belong_rep': {
            'Record_Value': '',
            'Updated_time': ''
        },
        'building': {
            'Record_Value': '',
            'Updated_time': ''
        },
        'ref': {
            'Record_Value': '',
            'Updated_time': ''
        },
        'lay':{
            'Record_Value': '',
            'Updated_time': ''
        },
        'shelf': {
            'Record_Value': '',
            'Updated_time': ''
        },
        'row': {
            'Record_Value': '',
            'Updated_time': ''
        },
        'col': {
            'Record_Value': '',
            'Updated_time': ''
        },
        'keeper':{
            'Record_Value': '',
            'Updated_time': ''
        },
        'user_info': [
            {
                'user': 'www',
                'use_time': '2017-9-9',
                'use_count': '200ml',
                'usage': '为了xxx'
            }],
        'accident_info': [
            {
                'acc_name': '试管泄漏',
                'acc_time': '2017-9-10',
                'duration': '10min',
                'resolvent': '更换试管',
                'influence': '剩余100ml'
            }
        ]
    };

    validateForm: FormGroup;
    PID;
    loading = false;

    provinces = ['陕西', '甘肃', '宁夏', '青海', '新疆'];

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private msg: NzMessageService,
        private service: BiologyService,
         private route:ActivatedRoute) {
    }

    load(id?: number) {
        console.log(id);
                if( id ){
                const api = '/biology/recordop/',
                    params = {'PID':id};
                    this.loading = true;
                this.service.getService(api,params).subscribe(res => {
                    console.log(res);
                    for( let key in res.Records){
                        this.Sample[key].Record_Value = res.Records[key].Record_Value;
                        this.Sample[key].Updated_time = res.Records[key].Updated_time;
                    }
                    // this.Sample = res.Records;
                    console.log(this.Sample);
                    this.loading = false;
                })
            }
        }

    updateConfirmValidator(key) {
        /** wait for refresh value */
        setTimeout(_ => {
            this.validateForm.controls[key].updateValueAndValidity();
        });
    }

    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        const temp = control.value;
        // console.log(temp);
        if (!control.value) {
            return { required: true };
        } else if (temp[0] !== this.validateForm.value.repository) {
            console.info('error');
            return { confirm: true, error: true };
        }
    };

    defineForm(){
        this.validateForm = this.fb.group({
            number: [null, [Validators.required]],
            repository: [null, [Validators.required]],
            type: [null, [Validators.required]],
            blood_type:[null, [ ]],
            owner:[null, [ Validators.required]],
            collect_count:[null, [ Validators.required]],
            collect_time:[null, [ Validators.required]],
            collecter:[null, [ Validators.required]],
            branch:[null, [ Validators.required]],
            lost_msg:[null, [  ]],
            pipe_Num:[null, [ Validators.required, this.confirmationValidator]],
            store_time:[null, [ Validators.required]],
            placer:[null, [ Validators.required]],
            requirement:[null, [ ]],
            emergency:[null, [ ]],
            belong_rep:[null, [ ]],
            building: [null, [Validators.required]],
            ref: [null, [Validators.required ]],
            lay: [null, [Validators.required ]],
            col: [null, [Validators.required ]],
            row: [null, [Validators.required ]],
            shelf: [null, [Validators.required ]],
            keeper:[null,[ ]]
            // num: [null, [Validators.required, this.confirmationValidator]],
        });
    }

    // confirmationNum = (control: FormControl): { [s: string]: boolean } => {
    //     if (!control.value) {
    //         return { required: true };
    //     } else if (control.value < 0) {
    //         return { confirm: true, error: true };
    //     }
    // }

    ngOnInit() {
        this.PID = this.route.params['value']['PID'];
        this.defineForm();
        // console.log(this.newSample);
    }
    ngAfterViewInit(){
        this.load(this.PID);
    }

    getFormControl(name) {
        // console.log(this.validateForm.controls[name]);
        return this.validateForm.controls[name];
    }

    getTypeValue(){
        return this.validateForm.value.type;
    }

    resetForm() {
        this.validateForm.reset();
    }

    goBack() {
        this.router.navigate(['sample/detail']);
    }

    _submitForm() {
        for (const i in this.validateForm.controls) {
            if (this.validateForm.controls.hasOwnProperty(i)) {
                this.validateForm.controls[i].markAsDirty();
            }
        }
        console.log(this.validateForm.value);
        const data={
            'Records':this.transfer(this.validateForm.value)
        };
        this.service.putRecord(data).subscribe(res => {
            console.log(res);
        });
        // this.resetForm();
    }

    transfer(formData){
        let data = {};
        for( let key in formData){
            if(formData[key]){
                    data[key] = {
                        'Record_Value': formData[key],
                        'Updated_time': ''
                    };
        }}
        data['capacity'] ={
            'Record_Value': formData['collect_count'] || '0',
            'Updated_time':''
        };
        console.log(data);
        return data;
    }

    modify(){
        const body = {
            'PID':parseInt(this.PID),
            'Records':{}
        };
        for(let key in this.Sample){
            if( !this.Sample[key].Record_Value){
                console.log(key + 'is not added');
            }else {
                body.Records[key] = this.Sample[key];
            }
        }
        console.log(body);
        this.service.putRecord(body).subscribe(res => {
            console.log(res);
        });
    }

    getNowdate() {
        const date = new Date();
        let str = '';
        str = date.getFullYear() + '年' + date.getMonth() + '月' + date.getDate() + '日' + date.getHours() + '时'
            + date.getMinutes() + '分';
        return str;
    }

}

