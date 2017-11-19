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
        'sample_info': {},
        'number': {},
        'repository': {},
        'type': {},
        'blood_type': {},
        'owner': {},
        'capcaity': {},
        'collect_time': {},
        'branch': {},
        'lost_msg': {},
        'collect_count': {},
        'pipe_num': {},
        'store_time': {},
        'placer':{},
        'requirement': {},
        'emergency': {},
        'belong_rep': {},
        'building': {},
        'ref': {},
        'shelf': {},
        'row': {},
        'col': {},
        'keeper': {},
        // 'user_info': [
        //     {
        //         'user': 'www',
        //         'use_time': '2017-9-9',
        //         'use_count': '200ml',
        //         'usage': '为了xxx'
        //     }],
        // 'accident_info': [
        //     {
        //         'acc_name': '试管泄漏',
        //         'acc_time': '2017-9-10',
        //         'duration': '10min',
        //         'resolvent': '更换试管',
        //         'influence': '剩余100ml'
        //     }
        // ]
    };

    validateForm: FormGroup;
    PID;

    provinces = ['陕西', '甘肃', '宁夏', '青海', '新疆'];

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private msg: NzMessageService,
        private service: BiologyService,
         private route:ActivatedRoute) {
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
        if(this.PID){
            const api = '/biology/recordop/',
                params = {'PID':parseInt(this.PID)};
            this.service.getService(api,params).subscribe(res => {
                console.log(res);
            })
        }
        this.validateForm = this.fb.group({
            number: [null, [Validators.required]],
            repository: [null, [Validators.required]],
            type: [null, [Validators.required]],
            blood_type:[null, [ Validators.required]],
            owner:[null, [ Validators.required]],
            collect_count:[null, [ Validators.required]],
            collect_time:[null, [ Validators.required]],
            branch:[null, [ Validators.required]],
            lost_msg:[null, [ Validators.required]],
            pipe_Num:[null, [ Validators.required, this.confirmationValidator]],
            store_time:[null, [ Validators.required]],
            placer:[null, [ Validators.required]],
            requirement:[null, [ Validators.required]],
            emergency:[null, [ Validators.required]],
            belong_rep:[null, [ Validators.required]],
            building: [null, [Validators.required]],
            ref: [null, [Validators.required ]],
            lay: [null, [Validators.required ]],
            col: [null, [Validators.required ]],
            row: [null, [Validators.required ]],
            shelf: [null, [Validators.required ]],
            // num: [null, [Validators.required, this.confirmationValidator]],
        });
        // console.log(this.newSample);
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
            this.msg.success('保存成功！');
        });
        // this.resetForm();
    }

    transfer(formData){
        let data = {};
        for( let key in formData){
            if(formData[key]){
                    data[key] = {
                        'Record_Value': formData[key],
                        'Updated_time':''
                    };
        }}
        data['capacity'] ={
            'Record_Value': formData['collect_count'] || 0,
            'Updated_time':''
        }
        console.log(data);
        return data;
    }

    getNowdate() {
        const date = new Date();
        let str = '';
        str = date.getFullYear() + '年' + date.getMonth() + '月' + date.getDate() + '日' + date.getHours() + '时'
            + date.getMinutes() + '分';
        return str;
    }

}

