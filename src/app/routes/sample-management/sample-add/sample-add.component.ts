import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { Sample, Use_info, Accident_info} from '../sample';
import { BiologyService } from '../biology.service';
import {element} from "protractor";

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
        'user_info':{
            'Record_Value':[],
            'Updated_time': ''
        },
        'accident_info': {
            'Record_Value': [],
            'Updated_time': ''
        }
    };

    validateForm: FormGroup;
    PID;
    loading = false;
    read: boolean;
    searchOptions = [];

    data;
    tempEditObject;
    Accdata;
    tempAccEditObject;
    editRow;
    editRow1;

    provinces = ['陕西', '甘肃', '宁夏', '青海', '新疆'];

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private msg: NzMessageService,
        private service: BiologyService,
         private route: ActivatedRoute) {
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
                        if(key.indexOf('time') == -1){
                            this.Sample[key].Record_Value = res.Records[key].Record_Value;
                        }else {
                            this.Sample[key].Record_Value = new Date(res.Records[key].Record_Value);
                        }
                        this.Sample[key].Updated_time = res.Records[key].Updated_time;
                    }
                    this.data = this.Sample.user_info.Record_Value;
                    this.Accdata = this.Sample.accident_info.Record_Value;
                    this.tempEditObject = {};
                    this.tempAccEditObject = {};
                    this.data.forEach(item => {
                        this.tempEditObject[ item.key] = {};
                    });
                    this.Accdata.forEach(item => {
                        this.tempAccEditObject[ item.key] = {};
                    });
                    this.editRow = null;
                    this.editRow1 = null;
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
        });
    }

    // confirmationNum = (control: FormControl): { [s: string]: boolean } => {
    //     if (!control.value) {
    //         return { required: true };
    //     } else if (control.value < 0) {
    //         return { confirm: true, error: true };
    //     }
    // }

    searchChange(searchText) {
        const api = '/healthexamination/autono/';
        const params = {'number': searchText};
        this.service.getService( api, params ).subscribe( res => {
            console.log(res);
            this.searchOptions = res.number_list;
        })
    }

    edit(data) {
        console.log(data);
        console.log(this.tempEditObject);
        this.tempEditObject[ data.key ] = { ...data };
        console.log(this.tempEditObject);
        // this.Sample.user_info.Record_Value[ data.key ] = { ...data };
        this.editRow = data.key;
    };
    editAcc(data) {
        console.log(data);
        console.log(this.tempAccEditObject);
        this.tempAccEditObject[ data.key ] = { ...data };
        console.log(this.tempAccEditObject);
        // this.Sample.user_info.Record_Value[ data.key ] = { ...data };
        this.editRow1 = data.key;
    }

    save(data) {
        console.log(data);
        Object.assign(data, this.tempEditObject[ data.key ]);
        // this.Sample.user_info.Record_Value = this.data;
        this.Sample.user_info.Record_Value[data.key] = data;
        // Object.assign(data, this.Sample.user_info.Record_Value[ data.key ]);
        this.editRow = null;
    }
    saveAcc(data) {
        console.log(data);
        Object.assign(data, this.tempAccEditObject[ data.key ]);
        // this.Sample.user_info.Record_Value = this.data;
        this.Sample.accident_info.Record_Value[data.key] = data;
        // Object.assign(data, this.Sample.user_info.Record_Value[ data.key ]);
        this.editRow1 = null;
    }

    cancel(data,id) {
        if(id === 0){
            this.tempEditObject[ data.key ] = {};
            this.editRow = null;
        }else if(id == 1){
            this.tempAccEditObject[ data.key ] = {};
            this.editRow1 = null;
        }
    }

    add(){
        let i = this.data.length;
        let newRecord = {
            key:i,
            user    : '',
            use_count   : '',
            use_time    : '',
            usage: '',
        };
        this.data.push(newRecord);
        this.tempEditObject[i] = { ...newRecord };
        this.editRow = this.data.length-1;
    }
    addAcc(){
        let i = this.Accdata.length;
        let newRecord = {
            key:i,
            accident    : '',
            acc_time   : '',
            duration    : '',
            resolvent: '',
            influence: '',
        };
        this.Accdata.push(newRecord);
        this.tempAccEditObject[i] = { ...newRecord };
        this.editRow1 = this.Accdata.length-1;
    }

    ngOnInit() {
        this.PID = this.route.params['value']['PID'];
        this.read = this.PID;
        this.defineForm();
    }
    ngAfterViewInit(){
        this.load(this.PID);
    }

    getFormControl(name) {
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
        if( !this.route.params['value']['PID']) {
            console.log('添加新记录');
            const data = {
                'Records': this.transfer(this.validateForm.value)
            };
            this.service.putRecord(data).subscribe(res => {console.log(res);});
        }else {
            console.log('修改记录！');
            this.modify();
        }
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
        data['user_info'] = this.Sample.user_info;
        data['accident_info'] = this.Sample.accident_info;
        console.log(data);
        return data;
    }

    modify(){
        const body = {
            'PID':parseInt(this.route.params['value']['PID']),
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
        this.service.putRecord(body).subscribe(res => {console.log(res);});
    }

    correct(){
        this.read = !this.read;
        this.PID = false;
    }

    getNowdate() {
        const date = new Date();
        let str = '';
        str = date.getFullYear() + '年' + date.getMonth() + '月' + date.getDate() + '日' + date.getHours() + '时'
            + date.getMinutes() + '分';
        return str;
    }

    // 时间格式转换
    GMTToStr(time) {
        console.log(time);
        const date = new Date(time);
        console.log(date);
        const Str = date.getFullYear() + '-' +
            (date.getMonth() + 1) + '-' +
            date.getDate() + ' ' +
            date.getHours() + ':' +
            date.getMinutes() + ':' +
            date.getSeconds();
        console.log(Str);
        return Str;
    }
}

