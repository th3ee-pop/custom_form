import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { InputcmpComponent } from '../shared/inputcmp/inputcmp.component';
import { RadiocmpComponent } from '../shared/radiocmp/radiocmp.component';
import { saveAs } from 'file-saver';
import { HttpService } from '@core/services/http.service';
import { ActivatedRoute, Router, PreloadingStrategy} from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { CheckboxcmpComponent} from '../shared/checkboxcmp/checkboxcmp.component';
import { TablecmpComponent} from '../shared/tablecmp/tablecmp.component';
import { IdccmpComponent} from '../shared/idccmp/idccmp.component';
import { PhoneComponent } from '../shared/phonecmp/phonecmp.component';
import { SelectivePreloadingStrategy} from './selective-preloading-strategy';

@Component({
    selector: 'app-survey-management',
    templateUrl: './survey-management.component.html',
    styleUrls: ['./survey-management.component.css']
})



export class SurveyManagementComponent implements OnInit {


    schedule_list = [
        {
            status: '一般信息',
            descript: '一般信息'
        },
        {
            status: '饮茶及咖啡情况',
            descript: '饮茶及咖啡情况'
        },
        {
            status: '饮酒情况',
            descript: '饮酒情况'
        },
        {
            status: '吸烟情况',
            descript: '吸烟情况'
        },
        {
            status: '膳食情况',
            descript: '膳食情况'
        },
        {
            status: '空气污染',
            descript: '被动吸烟和室内空气污染'
        },
        {
            status: '健康状况',
            descript: '个人及家庭健康状况'
        },
        {
            status: '体力活动',
            descript: '体力活动情况'
        },
        {
            status: '女性生育史',
            descript: '女性生育史情况'
        },
        {
            status: '精神及生活质量',
            descript: '精神、睡眠、情绪状况及生活质量'
        }

    ];

    /**
     * 将数据转化为10个列表
     */

    questionList = new QuestionList();
    qlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => this.questionList.getQuestions(index));
    answerlist = [];
    hiddens = [false, true, true, true, true, true, true, true, true, true] ;
    confirmlist = [];
    manOrwoman = true; // ture 表示女 false 表示男
    singleif = '';
    answers = {};
    editDisable = {};

    @ViewChildren(InputcmpComponent) InputItems: QueryList<InputcmpComponent>;
    @ViewChildren(RadiocmpComponent) RadioItems: QueryList<RadiocmpComponent>;
    @ViewChildren(CheckboxcmpComponent) Checkbox: QueryList<CheckboxcmpComponent>;
    @ViewChildren(IdccmpComponent) Idc: QueryList<IdccmpComponent>;
    @ViewChildren(PhoneComponent) Phone: QueryList<PhoneComponent>;
    // @ViewChildren(IdccmpComponent) Idc: QueryList<TablecmpComponent>;


    current = 0;
    constructor(
        private router: Router,
        private confirmServ: NzModalService,
        private preloadStrategy: SelectivePreloadingStrategy
    ) {
        this.singleif = preloadStrategy.preloadedModules;
    }
    // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //
    //    console.log(route.data);
    // }
    ngOnInit() {

    }

    changeHiddens(current: number) {
        for (let i = 0; i <= 9; i++) {
            if ( i === current) {
                this.hiddens[i] = false;
            }else {
                this.hiddens[i] = true;
            }
        }
    }

    pre() {
        this.current -= 1;
        // this.RadioItems.forEach(item => {
        //     item.answer.a
        //    console.log(item.answer);
        // });
        //

        this.changeHiddens(this.current);
    }
    confirm() {
        let confirms = true;
        this.confirmlist = [];
        this.InputItems.forEach(item => {
            if (item.answerChanged === false) {
                confirms = false;
                this.confirmlist.push(item.question.id);
            }
        });
        this.RadioItems.forEach(item => {
            if (item.answerChanged === false) {
                confirms = false;
                this.confirmlist.push(item.question.id);
            }
        });
        this.Checkbox.forEach(item => {
            if (item.answerChanged === false) {
                confirms = false;
                this.confirmlist.push(item.question.id);
            }
        });

        // if (current_list[index].type === 'table') {
        //     this.Table.forEach(item => {
        //         console.log(item.getAnswer().available);
        //  });
        const confirmall = {
            confirms: confirms,
            confirmslist: this.confirmlist
        };

        return confirmall;

        // if (current_list[index].type === 'table') {
        //     this.Table.forEach(item => {
        //         console.log(item.getAnswer().available);
        //  });

    }
    next() { // 跳转至下一步
        if (this.current === 0) {
            this.RadioItems.forEach(item => {
                if ( item.answerChanged === true)
                    for (let i = 0; i < item.answer.length; i++) {
                        if (item.answer[i].questionID === 'ID1_3_0') {
                            if ( item.answer[i].answer === true ) {
                                this.manOrwoman = false;
                                break;
                            }else {
                                this.manOrwoman = true;
                            }
                        }
                    }
            });
        }
        // if (this.confirm().confirms) { // 检查当前步骤是否合法，如果不合法禁止转向下一步
        //     this.current += 1;
        // }
        if (true) { // 检查当前步骤是否合法，如果不合法禁止转向下一步
            if (this.current === 7) {
                if (this.manOrwoman === false) {
                    this.current += 2;
                }else {
                    this.current += 1;
                }
            }else {
                this.current += 1;
            }
        }else {
            // let str = '';
            // for (let i = 0; i < this.confirm().confirmslist.length; i++){
            //     str = str + this.confirm().confirmslist[i] + '、';
            // }
            // this.confirmServ.error({
            //     title: '您还有以下必填项未完成：' ,
            //     content: str
            // });
        }
        this.changeHiddens(this.current);
    }

    collectallAnswer() {
        this.RadioItems.forEach(item => {
            if (item.answerChanged === true)
                for ( let i = 0; i < item.answer.length; i++) {
                    this.answerlist.push(item.answer[i]);
                }
        });
        this.Checkbox.forEach(item => {
            if (item.answerChanged === true)
                for ( let i = 0; i < item.answer.length; i++) {
                    this.answerlist.push(item.answer[i]);
                }
        });
        this.InputItems.forEach(item => {
            if (item.answerChanged === true)
                for ( let i = 0; i < item.answer.length; i++) {
                    this.answerlist.push(item.answer[i]);
                }
        });
        this.Idc.forEach(item => {
            if (item.answerChanged === true)
                for ( let i = 0; i < item.answer.length; i++) {
                    this.answerlist.push(item.answer[i]);
                }
        });
        this.Phone.forEach(item => {
            if (item.answerChanged === true)
                for ( let i = 0; i < item.answer.length; i++) {
                    this.answerlist.push(item.answer[i]);
                }
        });
    }
    log() { // 暂存
        this.collectallAnswer();
        console.log(this.answerlist);
        this.router.navigate(['/survey/detail']);
    }

}
