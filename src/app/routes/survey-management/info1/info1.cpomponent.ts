/**
 *  input radio idc phone checkbox date
 */
import {AfterViewInit, Component, OnInit, QueryList, ViewChildren, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '@core/services/http.service';
import {NzModalService} from 'ng-zorro-antd';

import {InputcmpComponent} from '../shared/inputcmp/inputcmp.component';
import {RadiocmpComponent} from '../shared/radiocmp/radiocmp.component';
import {DatecmpComponent} from '../shared/datecmp/datecmp.component';

import {ScheduleList} from '../shared/scheduleList';
import {AddrcmpComponent} from "../shared/addrcmp/addrcmp.component";

@Component({
    selector: 'app-infor1-step',
    templateUrl: './info1.component.html',
    styleUrls: ['./info1.component.css']
})
export class Info1Component implements OnInit, AfterViewInit {

    @ViewChildren(InputcmpComponent) InputItems: QueryList<InputcmpComponent>;
    @ViewChildren(RadiocmpComponent) RadioItems: QueryList<RadiocmpComponent>;
    @ViewChildren(DatecmpComponent) DateItem: QueryList<DatecmpComponent>;
    @ViewChildren(AddrcmpComponent) AddrItem: QueryList<AddrcmpComponent>;

    current = 1;
    questionSave = []; // 用来传到后端
    questionList = [];
    schedule_list = new ScheduleList().schedule_list; // 步骤条的list
    resultList = [];                                  // 用于封装答案
    PID = '';
    fillingList = [];                                 // 用于从后端获取答案
    answerList = [];
    putRecord = {};

    /** 备用变量 **/
    buttondisable = false;
    finished = '';
    currentModal; // 模态框

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: HttpService,
        private confirmServ: NzModalService,
        private ref: ChangeDetectorRef
    ) {
        this.PID = this.route.params['value']['PID'];
        if (this.PID) {
            const getRecord = {
                'PID': this.PID
            };
            this.service.getRecord(getRecord).subscribe( (res) => {
                const list = res.Records;
                this.answerList = list;
                for ( let i = 0; i < list.length; i++) {
                    if ( list[i]['questionlist'] && list[i]['questionlist'] !== '') {
                        this.questionList = list[i]['questionlist'][this.current];
                        this.questionSave = list[i]['questionlist'];
                        break;
                    }
                }
                this.fillingAllanswer();
            });
        }
    }


    ngOnInit() {
    }

    ngAfterViewInit() {
        if (this.PID) {
            this.fillingAllanswer();
        }
    }

    /** 事件处理 **/
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
    onDateVoted(votedata:any){
        const inDate = votedata.in_date;
        const outDate = votedata.out_date;
        if( inDate && inDate !== null ){
            this.DateItem.forEach( item => {
                if( item.question.id1 === '1.15' && item.date !== null ){
                    const answer = Date.parse((item.date).toString()) - Date.parse(inDate);
                    this.InputItems.forEach( aitem => {
                        if( aitem.question.id1 === '1.16'){
                            console.log(answer);
                            aitem.localAnswer =  (answer/60/60/24/1000).toFixed(0)+'天';
                        }
                    })
                }
            })
        } else if( outDate && outDate !== null ){
            this.DateItem.forEach( item => {
                if( item.question.id1 === '1.13' && item.date !== null ){
                    const answer = Date.parse(outDate) - Date.parse((item.date).toString());
                    this.InputItems.forEach( aitem => {
                        if( aitem.question.id1 === '1.16'){
                            console.log(answer);
                            aitem.localAnswer =  (answer/60/60/24/1000).toFixed(0)+'天';
                        }
                    })
                }
            })
        }
    }

    /** 下一步 **/
    next(step_index? : any) {
        const numWords = ['info0', 'info1', 'info2', 'info3', 'info4', 'info5', 'info6', 'info7', 'info8'];
        this.initPutRecord();
        this.service.putRecord(this.putRecord).subscribe( (res) => {
            this.router.navigate(['system/survey/' + numWords[step_index] + '/' + this.PID]);  // 拼接跳转链接
        });
    }

    /** 暂存 **/
    temporary_deposit() {
        this.initPutRecord();
        this.service.putRecord(this.putRecord).subscribe( (res) => {
            this.router.navigate( ['system/survey/detail/']);
        }, error => { });
    }

    /** 退出 **/
    exit () {
        this.router.navigate( ['system/survey/detail/']);
    }

    /** 返回上一步 **/
    pre() {
        this.initPutRecord();
        this.service.putRecord(this.putRecord).subscribe( (res) => {
        }, error => { });
        this.router.navigate( ['system/survey/info0/' + this.PID]);
    }

    /** 封装答案和请求参数 **/
    initPutRecord() {
        this.collecAllanswer();
        if (this.PID) {
            this.putRecord = { 'Records': this.resultList, 'PID': this.PID };
        }else {
            this.putRecord = { 'Records': this.resultList };
        }
    }

    /**
     *  页面跳转，弹窗检验是否填完，若选择确定则继续跳转，否则留在当前页面
     */
    jumpTo(step_index , footer) {
        const numWords = ['info0', 'info1', 'info2', 'info3', 'info4', 'info5', 'info6', 'info7', 'info8'];
        if (this.PID && step_index !== this.current) { // 如果有病人编号，则跳跃
            if (this.buttondisable === true) {
                this.router.navigate(['system/survey/' + numWords[step_index] + '/' + this.PID]);  // 拼接跳转链接
            } else {
                if (this.confirm().confirms) {
                    this.next(step_index);
                }else {
                    console.log('test and model show!');
                    let rest = '（本页剩余：' + (this.confirm().confirmP*100).toFixed(3) + '%）';
                    let str = '';
                    for ( let i = 0; i < this.confirm().confirmList.length; i++) {
                        str = str + this.confirm().confirmList[i] + '、';
                    }
                    this.currentModal = this.confirmServ.open({
                        title: '您还有以下必填项没有完成' + rest ,
                        content: str,
                        footer: footer,
                        onOk() {
                            console.log('Click ok');
                        },
                        onCancel() {
                            console.log('Click cancel');
                        }
                    });
                }
            }
        }
    }

    /**
     * 取消跳转
     */
    handleCancel() {
        this.currentModal.destroy('onCancel');
    }

    /**
     * 选择确定，则跳转到指定页面
     * @param step_index
     */
    handleOk(step_index) {
        console.log("step_index");
        /* destroy方法可以传入onOk或者onCancel。默认是onCancel */
        this.currentModal.destroy('onOk');
        this.currentModal = null;
        this.next(step_index);
    }

    /** 表单验证 **/
    confirm() {
        const confirmlist = [];
        let confirmnum = 0;
        let confirms = true;
        this.InputItems.forEach(item => {
            confirmnum ++;
            if (item.question.hidden === false && item.answerChanged === false) {
            confirms = false;
            confirmlist.push(item.question.id1);
        }});
        this.RadioItems.forEach(item => {
            confirmnum ++;
            if (item.question.hidden === false && item.localAnswer === -1) {
            confirms = false;
            confirmlist.push(item.question.id1);
        }});
        this.DateItem.forEach(item => {
            confirmnum ++;
            if (item.question.hidden === false && item.answerChanged === false ) {
            confirms = false;
            confirmlist.push(item.question.id1);
        }});
        this.AddrItem.forEach(item => {
            confirmnum ++;
            if(item.question.hidden === false && item.answerChanged === false) {
                confirms = false;
                confirmlist.push(item.question.id1);
            }
        });
        const confirmAll = {
            confirms: confirms,
            confirmList: confirmlist,
            confirmP: confirmlist.length/confirmnum
        };
        return confirmAll;
    }

    /** 收集答案 **/
    collecAllanswer() {
        this.RadioItems.forEach(item => {
            if (item.answerChanged === true) {
                for (let i = 0; i < item.answer.length; i++) {
                    this.resultList.push(item.answer[i]);
                }
            }
        });
        this.InputItems.forEach(item => {
            if (item.answerChanged === true) {
                for (let i = 0; i < item.answer.length; i++) {
                    this.resultList.push(item.answer[i]);
                }
            }
        });
        this.AddrItem.forEach(item => {
            if(item.answer){
                for (let i = 0; i < item.answer.length; i++) {
                    this.resultList.push(item.answer[i]);
                }
            }
        });
        this.DateItem.forEach(item => {
            if (item.answerChanged === true) { this.resultList.push(item.answer[0]); }
        });
        this.questionSave[this.current] = this.questionList;
        this.resultList.push(
            {'Record_ID': 'questionlist', 'Record_Value': this.questionSave }
        );
        // console.log(this.resultList);
        for (let i = 0; i < this.fillingList.length; i++) {
            for (let j = 0; j < this.resultList.length; j++) {
                const id = this.resultList[j].Record_ID;
                if (this.fillingList[i][id] || this.fillingList[i][id] === 0) {
                    this.resultList[j]['Updated_time'] = this.fillingList[i]['Updated_time'];
                }
            }
        }
    }

    /** 回填答案 **/
    fillingAllanswer() {
        const getRecord = {
            'PID': this.PID
        };
        this.service.getRecord(getRecord).subscribe(
            (res) => {
                this.fillingList = res.Records;
                const pageOne = [];
                this.fillingList.forEach(d => {
                    for (const key in d) {
                        if (key.substr(0, 1) === 'a') {
                            pageOne.push(d);
                        }
                    }
                });
                console.log(pageOne);
                if (this.fillingList && this.fillingList.length !== 0) {
                    this.InputItems.forEach(item => {
                        pageOne.forEach( fl => {
                            const id = item.question.id2;
                            if (fl[id] && fl[id] !== '') {
                                item.localAnswer = fl[id];
                            }
                            if (fl[id] === 0) {
                                item.localAnswer = '0';
                            }
                        });
                    });
                }
                this.RadioItems.forEach(item => {
                    for (let i = 0; i < pageOne.length; i++) {
                        const id = item.question.id2;
                        if (pageOne[i][id] && pageOne[i][id] !== '') {
                            item.localAnswer = pageOne[i][id] - 1;
                        }
                    }
                });
                this.AddrItem.forEach(item => {
                    console.log(item);
                    pageOne.forEach( fl => {
                        const id = item.question.id2;
                        if (fl[id] && fl[id] !== '') {
                            // console.log(fl[id]);
                            // item.transfer(fl[id]);
                            item.initArray = fl[id].split(' ');
                        }
                    });
                });
                this.DateItem.forEach( item => {
                    const id = item.question.id2;
                    for (let i = 0; i < pageOne.length; i++) {
                        if (pageOne[i][id] && pageOne[i][id] !== '') { item.date = new Date(pageOne[i][id]); }
                    }
                });
            }, error => {
                console.log(error);
            }
        );
    }
}
