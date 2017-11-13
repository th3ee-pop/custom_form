import { Component, OnInit } from '@angular/core';
import { NzMessageService,NzModalService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { ModelCustomComponent } from './custom.component';

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

        // this.loading = true;
        this._allChecked = false;
        this._indeterminate = false;
        this.list = [{
            'id1':'00000000000',
            'id2':'陕西省',
            'id3':'1',
            'id4':'xx楼',
            'id5':'xx号',
            'id6':'xx层',
            'id7':'1',
            'id8':'1',
            'id9':'1',
            'id10':'110000111'
        }];
        // this._randomUser.getUsers(this.pi, this.ps, this.args)
        //     .map(data => {
        //         data.results.forEach(item => {
        //             item.checked = false;
        //             item.price = +((Math.random() * (10000000 - 100)) + 100).toFixed(2);
        //         });
        //         return data;
        //     })
        //     .subscribe(data => {
        //         this.loading = false;
        //         this.list = data.results;
        //     });
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

    constructor(private message: NzMessageService,private router: Router,private modal: NzModalService,) {
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
            // cancelText: '取消',
            // onOk: () => {
            //     this.message.success('关闭');
            // },
            // onCancel: () => {
            //     this.message.error('Click Return!');
            // }
        });
    }

    goAdd(){
        this.router.navigate(['sample/add']);
    }
}
