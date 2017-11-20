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
    ps = 10;
    total = 20; // mock total
    list = [];
    loading = false;
    args = {};
    _indeterminate = false;
    _allChecked = false;

    _manager = true;

    load(pi?: number) {
        if (typeof pi !== 'undefined') {
            this.pi = pi || 1;
        }

        this.loading = true;
        this._allChecked = false;
        this._indeterminate = false;
        this.service.getRecordlist().subscribe(data => {
            console.log(data);
            this.list = data.PID_info;
            this.loading = false;
        });
    }

    clear() {
        this.args = {};
        this.load(1);
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
}
