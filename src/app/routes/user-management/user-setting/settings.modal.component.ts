import { Component, Input } from '@angular/core';
import { NzModalSubject, NzModalService, NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'app-model-custom',
    template: `
    <div class="modal-header">
        <div class="modal-title">用户信息</div>
    </div>
    <p>用户姓名: {{user.name.first}} {{user.name.last}}</p>
    <p>
        Popconfirm 气泡确认框：
        <nz-popconfirm [nzTitle]="'确定要删除这个任务吗？'">
            <a nz-popconfirm>删除</a>
        </nz-popconfirm>
    </p>
    <div class="modal-footer">
        <button nz-button [nzType]="'default'" [nzSize]="'large'" (click)="cancel()">
            Cancel
        </button>
        <button nz-button [nzType]="'primary'" [nzSize]="'large'" (click)="ok()">
            OK
        </button>
    </div>
    `
})
export class ModelCustomComponent {

    @Input() user: object;

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
