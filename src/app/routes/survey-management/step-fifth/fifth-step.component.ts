/**
 *  input radio
 */
import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, PreloadingStrategy, Params} from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { HttpService } from '@core/services/http.service';

import { InputcmpComponent } from '../shared/inputcmp/inputcmp.component';
import { RadiocmpComponent } from '../shared/radiocmp/radiocmp.component';
import { Table51Component} from '../shared/tablecmp/table51/table51.component';
import { Table53Component} from '../shared/tablecmp/table53/table53.component';
import { Table54Component} from '../shared/tablecmp/table54/table54.component';
import { Table58Component} from '../shared/tablecmp/table58/table58.component';
import { QuestionList } from '../shared/questionList';
import { ScheduleList } from '../shared/scheduleList';


@Component({
    selector: 'app-fifth-step',
    templateUrl: './fifth-step.component.html',
    styleUrls: ['./fifth-step.component.css']
})

export class FifthStepComponent implements OnInit, AfterViewInit {
    @ViewChildren(InputcmpComponent) InputItems: QueryList<InputcmpComponent>;
    @ViewChildren(RadiocmpComponent) RadioItems: QueryList<RadiocmpComponent>;
    @ViewChildren(Table51Component) Table51Item: QueryList<Table51Component>;
    @ViewChildren(Table53Component) Table53Item: QueryList<Table53Component>;
    @ViewChildren(Table54Component) Table54Item: QueryList<Table54Component>;
    @ViewChildren(Table58Component) Table58Item: QueryList<Table58Component>;

    current = 4;                                        // 当前步骤
    // questionList = new QuestionList().questions[this.current];     // 问题总列表
    schedule_list =  new ScheduleList().schedule_list;  // 步骤列表
    resultList = [];                                    // 填写结果
    PID = '';
    finished = false;
    answerList = [];
    buttondisable = false;
    questionSave = [];
    questionList = [];
    sex = false;
    localInfo = JSON.parse(localStorage.getItem('_user'));

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: HttpService,
        private confirmServ: NzModalService,
        private ref: ChangeDetectorRef
    ) {
        this.PID = this.route.params['value']['PID'];
        if ( this.PID) {
            const getRecord = {
                'PID': this.PID,
                'RecordID': 'ID5'
            };
            this.service.getRecord(getRecord).subscribe( (res) => {
                const list = res.Records;
                this.answerList = list;
                for ( let i = 0; i < list.length; i++) {
                    if ( list[i]['ID0_0'] && list[i]['ID0_0'] !== '') {
                        this.questionList = list[i]['ID0_0'][4];
                        this.questionSave = list[i]['ID0_0'];
                        break;
                    }
                }
            });
        }
    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        const getRecord = {
            'PID': this.PID,
            'RecordID': 'ID1'
        };
        this.service.getRecord(getRecord).subscribe( (res) => {
            res.Records.forEach( it => {
                if (it['ID1_3_1'] === 'True' ) { this.sex  = true; }

            });
        });
        if ( this.PID ) {
            this.fillingAllanswer();
        }
    }
    onVoted (showAndhidden: any) {
        for ( let i = 0; i <  showAndhidden.hiddenshowlist.length; i++) {
            for ( let j = 0; j < this.questionList.length; j++) {
                if ( this.questionList[j].id === showAndhidden.hiddenshowlist[i] ) {
                    this.questionList[j]['hidden'] = false;
                }
            }
        }
        for (let i = 0; i < showAndhidden.hiddenlist.length; i++) {
            for ( let j = 0; j < this.questionList.length; j++) {
                if ( this.questionList[j].id === showAndhidden.hiddenlist[i] ) {
                    this.questionList[j]['hidden'] = true;
                }
            }
        }
    }
    pre() {
        this.collectAllanswer();
        const putRecord = {'PID': this.PID, 'Records': this.resultList};
        this.service.putRecord(putRecord).subscribe( (res) => {
        }, error => { });
        this.router.navigate( ['system/survey/forth_step/' + this.PID]);
    }
    next() {                                            // 下一步
        if ( this.confirm().confirms) {
            this.collectAllanswer();
            const putRecord = { 'Records': this.resultList, 'PID': this.PID};
            this.service.putRecord(putRecord).subscribe( (res) => {
                this.router.navigate(['system/survey/sixth_step/' + this.PID]);
            }, error => {
                console.log(error);
            });
        }else {
            let str = '';
            for ( let i = 0; i < this.confirm().confirmList.length; i++) {
                str = str + this.confirm().confirmList[i] + '、';
            }
            this.confirmServ.error({
                title: '您还有以下必填项没有完成： ',
                content: str
            });

        }
    }

    /**
     * 所有空间改为不可编辑状态
     */
    disabledAll() {
        this.buttondisable = true;
        this.InputItems.forEach(item => {
            item.editdisabled = true;
        });
        this.RadioItems.forEach(item => {
            item.editdisabled = true;
        });
        this.Table51Item.forEach(item => {
            item.editdisabled = true;
        });

        this.Table53Item.forEach(item => {
            item.editdisabled = true;
        });
        this.Table54Item.forEach(item => {
            item.editdisabled = true;
        });
        this.Table58Item.forEach(item => {
            item.editdisabled = true;
        });
    }

    /**
     *  点击steps上的按钮，进行步骤跳跃
     */
    jumpTo(step_index) {
        const numWords = ['first', 'second', 'third', 'forth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth'];
        if (this.PID && step_index !== this.current) { // 如果有病人编号，则跳跃
            console.log(step_index);
            if ( numWords[step_index] === 'ninth' && this.sex === true) {
                this.confirmServ.error({
                    title: '提示',
                    content: '男性无此记录'
                });
            }else {
                if ( this.confirm().confirms ) {
                    this.collectAllanswer();
                    let  putRecord = {};
                    if (!this.PID)  putRecord = { 'Records' : this.resultList };
                    else putRecord = { 'PID': this.PID, 'Records' : this.resultList };
                    this.service.putRecord(putRecord).subscribe( (res) => {
                        this.PID = res.PID;
                        this.router.navigate(['system/survey/' + numWords[step_index] + '_step/' + this.PID]);  // 拼接跳转链接
                    }, err => {
                        console.log(err);
                    });
                }else {
                    let str = '';
                    for ( let i = 0; i < this.confirm().confirmList.length; i++) {
                        str = str + this.confirm().confirmList[i] + '、';
                    }
                    this.confirmServ.error({
                        title: '您还有以下必填项没有完成： ',
                        content: str
                    });
                }
            }
        }

    }

    temporary_deposit() {                               // 暂存
        this.collectAllanswer();
        const putRecord = { 'PID': this.PID, 'Records' : this.resultList };
        this.service.putRecord(putRecord).subscribe( (res) => {
            this.router.navigate( ['system/survey/detail/']);
        }, error => { });
    }
    exit() {                                            // 退出
        this.router.navigate(['system/survey/detail/']);
    }
    confirm() {
        const confirmlist = [];
        let confirms = true;
        this.InputItems.forEach(item => { if ( item.question.hidden === false && item.answerChanged === false) {
            confirms = false; confirmlist.push(item.question.id);
        }});
        this.RadioItems.forEach(item => { if ( item.question.hidden === false && item.localAnswer === -1) {
            confirms = false; confirmlist.push(item.question.id);
        }});
        this.Table51Item.forEach( item => { if ( item.question.hidden === false && item.answerCheck() === false) {
            confirms = false; confirmlist.push(item.question.id);
        }});
        this.Table53Item.forEach( item => { if ( item.question.hidden === false && item.answerCheck() === false) {
            confirms = false; confirmlist.push(item.question.id);
        }});
        this.Table54Item.forEach( item => { if ( item.question.hidden === false && item.answerCheck() === false) {
            confirms = false; confirmlist.push(item.question.id);
        }});
        this.Table58Item.forEach( item => { if ( item.question.hidden === false && item.answerCheck() === false) {
            confirms = false; confirmlist.push( item.question.id);
        }});
        const confirmAll = {
            confirms: confirms,
            confirmList: confirmlist
        };
        return confirmAll;
    }
    collectAllanswer () {
        this.RadioItems.forEach(item => {
            if (item.answerChanged === true) { for ( let i = 0; i < item.answer.length; i++) { this.resultList.push(item.answer[i]); } }
        });
        this.InputItems.forEach(item => {
            if (item.answerChanged === true) { for ( let i = 0; i < item.answer.length; i++) { this.resultList.push(item.answer[i]); } }
        });
        this.Table51Item.forEach( item => {
            if ( item.answerCheck() === true ) { item.getAnswer().forEach( it => { this.resultList.push(it); }); }
        });
        this.Table53Item.forEach( item => {
            if ( item.answerCheck() === true ) { item.getAnswer().forEach( it => { this.resultList.push(it); }); }
        });
        this.Table54Item.forEach( item => {
            if ( item.answerCheck() === true ) { item.getAnswer().forEach( it => { this.resultList.push(it); }); }
        });
        this.Table58Item.forEach( item => {
            if ( item.answerCheck() === true ) { item.getAnswer().forEach( it => { this.resultList.push(it); }); }
        });
        if (this.confirm().confirms) {
            this.questionSave[4] = this.questionList;
            this.resultList.push(
                {'Record_ID': 'ID0_4', 'Record_Value': this.getNowdate()},
                {'Record_ID': 'ID5', 'Record_Value': 'finished'},
                {'Record_ID': 'ID0_0', 'Record_Value': this.questionSave });
        } else {
            this.resultList.push(
                {'Record_ID': 'ID0_4', 'Record_Value': this.getNowdate()},
                {'Record_ID': 'ID5', 'Record_Value': ''},
                {'Record_ID': 'ID0_2', 'Record_Value': '未完成'},
                {'Record_ID': 'ID0_0', 'Record_Value': this.questionSave });
        }
        for ( let i = 0; i < this.answerList.length; i ++) {
            for ( let j = 0; j < this.resultList.length; j++) {
                const id = this.resultList[j].Record_ID;
                if (this.answerList[i][id] || this.answerList[i][id] === 0) {
                    this.resultList[j]['Updated_time'] = this.answerList[i]['Updated_time'];
                }
            }
        }
    }

    rundisabledAll (completeby, province) {
        if ( this.localInfo.user_group > 1 ) {
            if ( this.localInfo.user_group === 4) {
                if ( completeby !== this.localInfo.user_name ) {
                    this.disabledAll();
                }
            }else {
                if ( province !== this.localInfo.province) {
                    this.disabledAll();
                }
            }
        }

    }


    fillingAllanswer() {
        const getRecord = {
            'PID': this.PID,
            'RecordID': 'ID5'
        };

        this.service.getRecord(getRecord).subscribe( (res) => {
            const fillingList = res.Records;
            this.answerList = fillingList;

            let province = '';
            let completeby = '';
            fillingList.forEach( it => {
                if ( it['ID5'] && it['ID5'] === 'finished') this.finished = true;
                if ( it['ID0_5'] && it['ID0_5'] !== '' )    { completeby = it['ID0_5']; }
                if ( it['ID0_3'] && it['ID0_3'] !== '' )    { province = it['ID0_3']; }
            });
            if ( province !== '' && completeby !== '')  this.rundisabledAll(completeby, province);


            console.log(fillingList);
            this.InputItems.forEach( item => { fillingList.forEach( it => {
                    let id = '';
                    id = this.getTransid( item.question.id );
                    if ( it[id] && it[id] !== '') {  item.localAnswer[0] = it[id]; }
                    if ( it[id] === 0) { item.localAnswer[0] = '0'; }
                }

            );
            });
            this.RadioItems.forEach( item => {
                for ( let i = 0; i < fillingList.length; i++) {
                    for ( let j = 1 ; j <= item.question.content.length; j++) {
                        const id = this.getTransid(item.question.id) + '_' + j;
                        if ( fillingList[i][id] && fillingList[i][id] !== '') {
                            const nums = id.split('_');
                            item.localAnswer = Number.parseInt( nums[nums.length - 1]) - 1 ;
                        }
                    }
                }
            });
            this.Table51Item.forEach( item => {
                for ( let i = 0 ; i < 23; i++) {
                    const y = i + 1;
                    const id = 'ID5_1_' + y;
                    fillingList.forEach( it => {
                        if ( it[id] && it[id] !== '' ) {
                            const col = Number.parseInt(it[id]);
                            item.localAnswer[i][col] = true;
                        }
                    });
                }
            });
            this.Table51Item.forEach( item => {
                for ( let i = 0 ; i < 23; i++) {
                    const id = 'ID5_1_' + ( i + 1) + '_' + 'b';
                    fillingList.forEach( it => {
                            if ( it[id] && it[id] !== '') {
                                item.amount[i] = it[id];
                            }
                        }
                    );
                }
            });
            this.Table53Item.forEach( item => {
                for (let i = 0; i < 4; i++) {
                    const y = i + 1;
                    const id = 'ID5_3_' + y;
                    fillingList.forEach( it => {
                        if ( it [id] && it [id] !== '') {
                            item.days[i] = it[id];
                        }
                    });
                }
            });

            this.Table54Item.forEach( item => {
                for (let i = 0; i < 5; i++) {
                    const y = i + 1;
                    const id = 'ID5_4_' + y;
                    fillingList.forEach( it => {
                        if ( it[id] && it[id] !== '' ) {
                            const col = Number.parseInt(it[id]);
                            item.localAnswer[i][col] = true;
                        }
                    });
                }
            });
            this.Table58Item.forEach( item => {
                for ( let i = 0; i < 3; i++) {
                    const y = i + 1;
                    const id = 'ID5_8_' + y;
                    fillingList.forEach(  it => {
                        if ( it[id] && it[id] !== '') {
                            const col = Number.parseInt(it[id]);
                            item.localAnswer[i][col] = true;
                        }
                    });
                }
            });
            this.Table58Item.forEach( item => {
                const id = 'ID5_8_a';
                fillingList.forEach( it => {
                    if ( it[id] && it [id] !== '') {
                        item.text = it[id];
                    }
                });
            });
            this.ref.detectChanges();

        }, error => {
            console.log(error);
        });
    }
    getNowdate() {
        const date = new Date();
        let str = '';
        str = date.getFullYear() + '年' + date.getMonth() + '月' + date.getDate() + '日' + date.getHours() + '时'
            + date.getMinutes() + '分';
        return str;
    }
    getTransid(str: string) {
        let id = 'ID';
        id = id + str.replace(/\./g, '_');
        return id;
    }

}
