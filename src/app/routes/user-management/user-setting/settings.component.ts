import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelCustomComponent } from './settings.modal.component';
import { LoginAuthService } from '@core/services/login.auth.service';
import { SettingsService } from '@core/services/settings.service';
import { HttpService } from '@core/services/http.service';
import { Router } from '@angular/router';

const UserData = {
    'email': '',
    'real_name': '',
    'password': '',
    'province': '陕西',
};

@Component({
    selector: 'app-extras-settings',
    templateUrl: './settings.component.html'
})


export class UserSettingsComponent implements OnInit {


    constructor(fb: FormBuilder,
                public msg: NzMessageService,
                private modal: NzModalService,
               // private _randomUser: RandomUserService,
                private loginService: LoginAuthService,
                private message: NzMessageService,
                public settings: SettingsService,
                private router: Router,
                private httpService: HttpService,
    ) {
        this.profileForm = fb.group({
            name: [null, Validators.compose([Validators.required, Validators.pattern(`^[-_a-zA-Z0-9]{4,20}$`)])],
            email: '',
            bio: [null, Validators.maxLength(160)],
            url: '',
            company: '',
            location: ''
        });
        this.valForm = fb.group({
            email: [null, Validators.compose([Validators.required])],
            real_first_name: [null],
            real_last_name: [null],
            password: [null, Validators.required],
            province: ['陕西', Validators.required],
        });
    }

    valForm: FormGroup;
    authority = {
        '1': '总管理员',
        '2': '省内管理员',
        '3': '高级用户',
        '4': '普通用户'
    };
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
        this.loginService.getUsers()
            .map(data => {
                data.Users.forEach(item => {
                    item.checked = false;
                    item.group = this.authority[item.group];
                    console.log(item);
                  //  item.price = +((Math.random() * (10000000 - 100)) + 100).toFixed(2);
                });
                return data;
            })
            .subscribe(data => {
                this.loading = false;
                this.list = data.Users;
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

    customCompModel(size: '' | 'lg' | 'sm' = '', user: object, group: string) {
        this.options = {
            wrapClassName: size ? 'modal-' + size : '',
            content: ModelCustomComponent,
            footer: false,
            componentParams: {
                user: user,
                authority: group
            }
        };
        this.modal.open(this.options).subscribe(result => {
           // this.msg.info(`subscribe status: ${JSON.stringify(result)}`);
        });
    }

    deleteUser(username) {
        this.loginService.remove(username).subscribe((res) => {
            console.log(res);
        });
    }
    ngOnInit() {
        this.load();
        this.profileForm.patchValue({
            name: localStorage.getItem('userID'),
            email: 'cipchk@qq.com',
            company: 'hospital'
        });
    }

    submit() {
        // tslint:disable-next-line:forin
        for (const i in this.valForm.controls) {
            this.valForm.controls[i].markAsDirty();
        }
        if (this.valForm.valid) {
            console.log('Valid!');
            console.log(this.valForm.value);
            const submitBody = {
                'province': this.valForm.value.province,
                'username': this.valForm.value.email,
                'first_name': this.valForm.value.real_first_name,
                'last_name': this.valForm.value.real_last_name,
                'password': this.valForm.value.password,
                'email': 'abc@163.com'
            };
            console.log(submitBody);
            this.httpService.register(submitBody)
                .subscribe((res) => {
                    console.log(res);
                    if (res.Return === 0) {
                        this.msg.info(res.Result);
                        this.router.navigate(['/user/detail']);
                    } else {
                        this.msg.info(res.Result);
                    }
                });
        }
    }
}
