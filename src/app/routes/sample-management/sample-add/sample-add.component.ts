import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, convertToParamMap } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { Sample, Use_info, Accident_info} from '../sample';

@Component({
    selector: 'app-sample-add',
    templateUrl: 'sample-add.component.html',
    styleUrls: ['sample-add.component.css']
})
export class SampleAddComponent implements OnInit {

    Sample = {
        'sample_info': '',
        'number': 1,
        'repository': 1,
        'type': 1,
        'blood_type': 0,
        'owner': 10000000001,
        'capcaity': '500ml',
        'collect_time': '2017-5-7',
        'branch': 5,
        'lost_msg': '无',
        'collect_count': 5,
        'pipe_num': 110000111,
        'store_time': '2017-8-1',
        'placer': 'yyy',
        'requirement': '',
        'emergency': '',
        'belong_rep': 1,
        'building': 'xx楼',
        'ref': 1,
        'shelf': 1,
        'row': 1,
        'col': 1,
        'keeper': 'zzz',
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

    newSample = new Sample(
        '', 2, 1,  1, 10000000002, '500ml', new Date(), 1,  '', 5, 'c1',  '楼1', 1, 2, 3, 4, 'k1',110000211, new Date(), 'p1', '无', '无', 1
    );

    validateForm: FormGroup;

    provinces = ['陕西', '甘肃', '宁夏', '青海', '新疆'];

    constructor(private fb: FormBuilder, private router: Router, private msg: NzMessageService) {
    }

    updateConfirmValidator(key) {
        /** wait for refresh value */
        setTimeout(_ => {
            this.validateForm.controls[key].updateValueAndValidity();
        });
    }

    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        const temp = control.value;
        console.log(temp);
        if (!control.value) {
            return { required: true };
        } else if (temp[0] !== this.validateForm.value.province || temp[1] !== this.validateForm.value.point) {
            console.info('error');
            return { confirm: true, error: true };
        }
    }

    confirmationNum = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return { required: true };
        } else if (control.value < 0) {
            return { confirm: true, error: true };
        }
    }

    ngOnInit() {
        this.validateForm = this.fb.group({
            barcode: [null, [Validators.required]],
            province: [null, [Validators.required]],
            type: [null, [Validators.required]],
            building: [null, [Validators.required]],
            ref: [null, [Validators.required, this.confirmationNum]],
            lay: [null, [Validators.required, this.confirmationNum]],
            col: [null, [Validators.required, this.confirmationNum]],
            row: [null, [Validators.required, this.confirmationNum]],
            shelf: [null, [Validators.required, this.confirmationNum]],
            num: [null, [Validators.required, this.confirmationValidator]],
        });
        console.log(this.newSample);
    }

    getFormControl(name) {
        return this.validateForm.controls[name];
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
        this.msg.success('保存成功！');
        // this.resetForm();
    }

}

