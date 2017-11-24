import { Component, OnInit } from '@angular/core';
import { NzMessageService,NzModalService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { ModelCustomComponent } from './custom.component';
import { BiologyService } from '../biology.service';
import { FileDownloadService } from '@core/services/fileDownload.service';

@Component({
    selector: 'app-sample-form',
    templateUrl: 'sample-form.component.html'
})
export class SampleFormComponent implements OnInit {

    pi = 1;
    ps = 10;
    total = 200; // mock total
    list = [];
    loading = false;
    args = {};
    _indeterminate = false;
    _allChecked = false;
    start_time = null;
    end_time = null;
    sortMap = {
        'number':null,
        'reposity':null,
        'type':null,
        'owner':null,
        'capacity':null,
        'collect_time':null,
    };
    options;
    localInfo = JSON.parse(localStorage.getItem('_user'));
    _manager;

    province = {
        '1':'陕西',
        '2':'甘肃',
        '3':'宁夏',
        '4':'青海',
        '5':'新疆'
    };

    provinceToNum = {
        '陕西':'1',
        '甘肃':'2',
        '宁夏':'3',
        '青海':'4',
        '新疆':'5'
    };

    type = {
        '1':'血样',
        '2':'尿液',
        '3':'粪',
        '4':'毛发'
    };

    blood_type = {
        '1':'全血',
        '2':'血浆',
        '3':'白膜层',
        '4':'血清'
    };

    // 所有的过滤条件在这个对象里添加
    conditions = {
        'filter': {
            'collect_time': []
        },
        'sorted_key': 'number',
        'start': (this.pi - 1) * this.ps,
        'offset': this.ps,
    };

    load(pi?: number) {
        if (typeof pi !== 'undefined') {
            this.pi = pi || 1;
        }

        this.setTime();
        this.changePage();
        this.loading = true;
        this._allChecked = false;
        this._indeterminate = false;
        this.service.getList(this.conditions)
            .map( data => {
                console.log(data);
                if(data.Return !==1 ){
                    data.PID_info.forEach(item => {
                        console.log(item);
                        item.checked = false;
                        item.repository = this.province[item.repository];
                        item.collect_time = this.GMTToStr(item.collect_time);
                        item.type = this.type[item.type];
                        item.blood_type = this.blood_type[item.blood_type];
                        // item.collect_time = item.collect_time.substring(0, 19);
                    });
                }
                return data;
            })
            .subscribe((data) => {
            console.log(data);
            this.list = data.PID_info;
            this.total = data.Count_total;
            this.loading = false;
        });
    }

    clear() {
        console.log(this.conditions);
        for (const key in this.conditions.filter) {
            if (this.conditions.filter[key])
                delete this.conditions.filter[key];
        }
        this.start_time = null;
        this.end_time = null;
        this.load();
    }

    _checkAll() {
        this.list.forEach(item => item.checked = this._allChecked);
        this.refChecked();
    }
    refChecked() {
        const checkedCount = this.list.filter(w => w.checked).length;
        this._allChecked = checkedCount === this.list.length;
        this._indeterminate = this._allChecked ? false : checkedCount > 0;
    }

    constructor(
        private message: NzMessageService,
        private router: Router,
        private modal: NzModalService,
        private service: BiologyService,
        private fileDownloader: FileDownloadService,) {
    }

    ngOnInit() {
        this.load();
        // console.log(this.localInfo);
        this._manager = this.localInfo.user_group<4;
    }

    showMsg(msg: string) {
        this.message.info(msg);
    }

    confirmModel(PID) {
        console.log(PID);
        this.service.getBasicInfo(PID).subscribe(res => {
            const info = res.basic_info;
            this.options = {
                wrapClassName: '',
                content: ModelCustomComponent,
                footer: false,
                componentParams: info
            };
            this.modal.open(this.options).subscribe(result => {});
        });
    }

    deleteRecord(id){
        this.service.deleteRecord(id).subscribe(res =>{
            console.log(res);
            this.load();
            this.showMsg("已删除！");
        });
    }
    goAdd(id?){
        if(id) {
            this.router.navigate(['system/sample/add/' + id]);
        }else {
            this.router.navigate(['system/sample/add']);
        }
    }

    download(PID?){
        const filePath = 'biology/exportcsv/';
        if(!PID){
            console.log(this.list);
            const PIDs = [];
            this.list.forEach(item => {
                if(item.checked){
                    console.log(item);
                    PIDs.push(item.PID);
                }
            })
            const fileName = PIDs.length + '个生物样本集.csv';
            this.fileDownloader.downloadFile(filePath, {'PID': PIDs}, fileName);
        }else {
            const fileName = '生物样本' + PID + '.csv';
            this.fileDownloader.downloadFile(filePath, {'PID': [PID]}, fileName);
        }
    }

    deleteAll(){
        const deleteAll = '/biology/deleteallrecord/';
        this.service.getService(deleteAll).subscribe(res => {
            console.log(res);
        });
        this.load();
    }

    // 时间设置
    setTime() {
        if (this.start_time === null || this.end_time === null) {
            delete this.conditions.filter.collect_time;
        } else {
            this.conditions.filter.collect_time = [];
            this.conditions.filter.collect_time.push(this.start_time);
            this.conditions.filter.collect_time.push(this.end_time);
        }
    }

    // 改变分页和页面
    changePage() {
        this.conditions.start = (this.pi - 1) * this.ps;
        this.conditions.offset = this.ps;
    }

    // 时间格式转换
    GMTToStr(time) {
        const date = new Date(time);
        const Str = date.getFullYear() + '-' +
            (date.getMonth() + 1) + '-' +
            date.getDate() + ' ' +
            date.getHours() + ':' +
            date.getMinutes() + ':' +
            date.getSeconds();
        return Str;
    }

    sort(title, value) {
        console.log(value);
        if (value === 'ascend')
            this.conditions.sorted_key = title;
        else this.conditions.sorted_key = '-' + title;
        Object.keys(this.sortMap).forEach(key => {
            if (key !== title) {
                this.sortMap[ key ] = null;
            } else {
                this.sortMap[ key ] = value;
            }
        });
        this.load();
    }
}
