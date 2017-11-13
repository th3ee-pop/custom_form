import { Component, OnInit } from '@angular/core';
import { NzMessageService, NzModalService} from 'ng-zorro-antd';
import { ManageModelCustomComponent } from './management.modal.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

    constructor(public msg: NzMessageService, private modal: NzModalService) {

    }

    options = {};

    charactors = [
         {
            name: '赫尔克里 波洛',
            url: '../assets/img/polo.jpg',
            job: '著名侦探',
            introduction: '波洛是伟大的侦探，但又有高处不胜寒的感觉。他曾爱过一个女人，而在遇到无法解开的破案难题时，波洛会在车厢内掏出他珍藏的相框，对着照片中的女人自言自语，有着孤独而深情的一面。',
            experience: '波洛乘上东方快车，夜间三次被吵醒，第二天清晨便发现同车的美国富商雷切尔被人谋杀，死者被戳了12刀。大侦探赫尔克里·波洛根据他所观察到的各种可疑迹象以及同车人士的讯问，并结合美国实行的12人陪审团制度等情况进行逻辑推理，成功地揭开了这起奇案的面纱。'
        }
    ];
  ngOnInit() {
  }

    customCompModel(size: '' | 'lg' | 'sm' = '', charactor: object) {
        this.options = {
            wrapClassName: size ? 'modal-' + size : '',
            content: ManageModelCustomComponent,
            footer: false,
            componentParams: {
                charactor: charactor
            }
        };
        this.modal.open(this.options).subscribe(result => {
            this.msg.info(`subscribe status: ${JSON.stringify(result)}`);
        });
    }

}
