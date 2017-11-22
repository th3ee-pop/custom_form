import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelCustomComponent } from './settings.modal.component';
import { ModelRegisterComponent } from './settings.register.modal.component';
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
    templateUrl: './settings.component.html',
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

    }

    // 分页信息，pi表示第几页，ps表示1页的条目数，total为条目总数。
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

    // 所有的过滤条件在这个对象里添加
    conditions = {
        'filter': {
            'date_joined': []
        },
        'sorted_key': 'username',
        'start': (this.pi - 1) * this.ps,
        'offset': this.ps,
    };

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


    //  数据加载
    load(pi?: number) {
        if (typeof pi !== 'undefined') {
            this.pi = pi || 1;
        }
        this.setTime();
        this.changePage();
        console.log(this.pi);
        this.loading = true;
        this._allChecked = false;
        this._indeterminate = false;
        this.httpService.getUser(this.conditions)
            .map(data => {
                console.log(data);
                if (data.Return !== 1) {
                    data.Users.forEach(item => {
                        item.checked = false;
                        item.group = this.authority[item.group];
                        item.date_joined = item.date_joined.substring(0, 19);
                    });
                }
                return data;
            })
            .subscribe(data => {
                this.loading = false;
                this.list = data.Users;
                this.total = data.Count_total;
                console.log(this.list);
            });
    }

    // 改变分页和页面
    changePage() {
        this.conditions.start = (this.pi - 1) * this.ps;
        this.conditions.offset = this.ps;
    }

    // 点击查询按钮
    showConditions() {
        this.load();
    }

    // 清除所有条件
    clear() {
        for (const key in this.conditions.filter) {
            if (this.conditions.filter[key])
            delete this.conditions.filter[key];
        }
        this.load();
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

    showMsg(msg: string) {
        this.message.info(msg);
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

    registerCompModel() {
        this.options = {
            content: ModelRegisterComponent,
            footer: false,
            componentParams: {
            }
        };
        this.modal.open(this.options).subscribe(result => {
            // this.msg.info(`subscribe status: ${JSON.stringify(result)}`);
        });
    }

    deleteUser(username) {
        this.loginService.remove(username).subscribe((res) => {
            console.log(res);
            this.load();
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

    sort(title, value) {
        console.log(value);
        if (value === 'ascend')
        this.conditions.sorted_key = title;
        else this.conditions.sorted_key = '-' + title;
        this.load();
    }


}
