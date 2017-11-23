import { Component, OnInit } from '@angular/core';
import { NzMessageService,NzModalService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { ModelCustomComponent } from './custom.component';
import { BiologyService } from '../biology.service';

@Component({
    selector: 'app-sample-form',
    templateUrl: 'sample-form.component.html'
})
export class SampleFormComponent implements OnInit {

    pi = 1;
    ps = 5;
    total = 200; // mock total
    list = [];
    loading = false;
    args = {};
    _indeterminate = false;
    _allChecked = false;
    start_time = '';
    end_time = '';

    _manager = true;

    province = {
        '1':'陕西',
        '2':'甘肃',
        '3':'宁夏',
        '4':'青海',
        '5':'新疆'
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
            'date_joined': []
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
                        item.type = this.type[item.type];
                        item.blood_type = this.blood_type[item.blood_type];
                        // item.date_joined = item.date_joined.substring(0, 19);
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
        for (const key in this.conditions.filter) {
            if (this.conditions.filter[key])
                delete this.conditions.filter[key];
        }
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

    constructor(private message: NzMessageService,private router: Router,private modal: NzModalService,private service: BiologyService) {
    }

    ngOnInit() {
        this.load();
    }

    showMsg(msg: string) {
        this.message.info(msg);
    }

    confirmModel(contentTpl) {
        this.modal.open({
            title: '详细信息',
            content: contentTpl,
            okText: '关闭',
            cancelText: '查看详情',
            // onOk: () => {
            //     this.message.success('关闭');
            // },
            onCancel: () => {
                this.message.info('跳转到相应页面');
            }
        });
    }

    deleteRecord(id){
        this.service.deleteRecord(id).subscribe(res =>{
            console.log(res);
            this.showMsg("已删除！");
        });
        this.load();
    }
    goAdd(id?){
        if(id) {
            this.router.navigate(['sample/add/' + id]);
        }else {
            this.router.navigate(['sample/add']);
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
        if (this.start_time === '' || this.end_time === '') {
            delete this.conditions.filter.date_joined;
        } else {
            this.conditions.filter.date_joined = [];
            this.conditions.filter.date_joined.push(this.GMTToStr(this.start_time));
            this.conditions.filter.date_joined.push(this.GMTToStr(this.end_time));
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
}
