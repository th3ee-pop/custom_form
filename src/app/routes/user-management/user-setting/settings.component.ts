import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { RandomUserService } from '../../tables/randomUser.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelCustomComponent } from './settings.modal.component';

@Component({
    selector: 'app-extras-settings',
    templateUrl: './settings.component.html'
})
export class UserSettingsComponent implements OnInit {


    constructor(fb: FormBuilder,
                public msg: NzMessageService,
                private modal: NzModalService,
                private _randomUser: RandomUserService,
                private message: NzMessageService) {
        this.profileForm = fb.group({
            name: [null, Validators.compose([Validators.required, Validators.pattern(`^[-_a-zA-Z0-9]{4,20}$`)])],
            email: '',
            bio: [null, Validators.maxLength(160)],
            url: '',
            company: '',
            location: ''
        });
    }

    selecteduser;
    options = {};
    active = 1;
    profileForm: FormGroup;
    pwd = {
        old_password: '',
        new_password: '',
        confirm_new_password: ''
    };
    // Email
    primary_email = 'cipchk@qq.com';

    pi = 1;
    ps = 10;
    total = 200; // mock total
    list = [];
    loading = false;
    args = {};
    _indeterminate = false;
    _allChecked = false;

    load(pi?: number) {
        if (typeof pi !== 'undefined') {
            this.pi = pi || 1;
        }

        this.loading = true;
        this._allChecked = false;
        this._indeterminate = false;
        this._randomUser.getUsers(this.pi, this.ps, this.args)
            .map(data => {
                data.results.forEach(item => {
                    item.checked = false;
                    item.price = +((Math.random() * (10000000 - 100)) + 100).toFixed(2);
                });
                return data;
            })
            .subscribe(data => {
                this.loading = false;
                this.list = data.results;
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


    showMsg(msg: string) {
        this.message.info(msg);
    }


    get name() { return this.profileForm.get('name'); }

    profileSave(event, value) {
        console.log('profile value', value);
    }

    pwdSave() {
        if (!this.pwd.old_password) {
            return this.msg.error('invalid old password');
        }
        if (!this.pwd.new_password) {
            return this.msg.error('invalid new password');
        }
        if (!this.pwd.confirm_new_password) {
            return this.msg.error('invalid confirm new password');
        }
        console.log('pwd value', this.pwd);
    }

    customCompModel(size: '' | 'lg' | 'sm' = '', user: object) {
        this.options = {
            wrapClassName: size ? 'modal-' + size : '',
            content: ModelCustomComponent,
            footer: false,
            componentParams: {
                user: user
            }
        };
        this.modal.open(this.options).subscribe(result => {
            this.msg.info(`subscribe status: ${JSON.stringify(result)}`);
        });
    }

    ngOnInit() {
        this.load();
        this.profileForm.patchValue({
            name: 'cipchk',
            email: 'cipchk@qq.com',
            company: 'hospital'
        });
    }
}
