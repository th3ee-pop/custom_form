import { Component, Input } from '@angular/core';
import { NzModalSubject, NzModalService, NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'app-model-custom',
    template: `
    <div class="modal-header">
        <div class="modal-title">用户信息</div>
    </div>
    <h3>
        用户姓名
    </h3>
    <p>{{user.first_name}} {{user.last_name}}</p>
    <br>
    <h3>
        注册邮箱
    </h3>
    <p>{{user.email}}</p>
    <br>
    <h3>
        注册日期
    </h3>
    <p>2017年11月13日</p>
    <br>
    <h3>
        所属省份
    </h3>
    <p>{{user.province}}</p>
    <br>
    <h3>
        权限设定
    </h3>
    <nz-dropdown>
        <a class="ant-dropdown-link" nz-dropdown>
            {{authority}} <i class="anticon anticon-down"></i>
        </a>
        <ul nz-menu>
            <li nz-menu-item (click)="authority='省内管理员'">省内管理员</li>
            <li nz-menu-item (click)="authority='普通用户'">普通用户</li>
            <li nz-menu-item (click)="authority='高级用户'">高级用户</li>
        </ul>
    </nz-dropdown>
    <div class="modal-footer">
        <button nz-button [nzType]="'default'" [nzSize]="'large'" (click)="cancel()">
            关闭
        </button>
        <button nz-button [nzType]="'primary'" [nzSize]="'large'" (click)="ok()">
            确认
        </button>
    </div>
    `
})
export class ModelCustomComponent {

    @Input() user: object;
    @Input() authority: string;

    constructor(
        private model: NzModalService,
        private msg: NzMessageService,
        private subject: NzModalSubject) {}

    ok() {
        this.subject.next(`new time: ${+new Date}`);
        this.cancel();
    }

    cancel() {
        this.subject.destroy();
    }
}
