import { Component, Input } from '@angular/core';
import { NzModalSubject, NzModalService, NzMessageService } from 'ng-zorro-antd';
import { ModalHelper } from '@shared/helper/modal.helper';

@Component({
    selector: 'app-model-custom',
    template: `
    <div class="modal-header">
        <div class="modal-title">关联问卷</div>
    </div>
    <h3>{{name}}</h3>
    <p>项目编码:{{owner}} </p>
     <p>生日: {{birth_date}}</p>
    <p>身份证:{{ID_card}} </p>
    <p>电话: {{phone}}</p>
    <p>民族: {{nationality}}</p>
    <p>居住地址: {{address}}</p>
    <div class="modal-footer">
        <button nz-button [nzType]="'primary'" [nzSize]="'large'" (click)="ok()">
            关闭
        </button>
    </div>
    `
})
export class ModelCustomComponent {

    @Input() name: string;

    constructor(
        private modalHelper: ModalHelper,
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
