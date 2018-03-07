import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Question } from '../../survey-management/shared/question';
import {ScheduleList} from '../shared/scheduleList';

@Component({
    selector: 'app-info8-step',
    templateUrl: './info8.component.html',
    styleUrls: ['./info8.component.css']
})
export class Info8Component extends Question implements OnInit {

    PID = '';
    tabs = [

    ];
    tableCollection = ['5.1', '5.2', '5.3', '5.4', '5.5.10', '4.2.6', '5.5.1', '5.5.3', '5.5.9', '5.5.11.1']
    nzTabPosition = 'left';
    selectedIndex = 0;
    schedule_list = new ScheduleList().schedule_list;

    answerSet = {
        Id: '',
        answers: []
    }
    startStr = 'ea';
    column = 20;
    row = 6;
    letterArray = [];
    idArray = [];
    rowTitle_1 = [ '走行(1:正常,2:异常)', '内径(1:正常,2:变宽,3:变窄)', '宫腔(1:清晰,2:不清晰，可见暗淡回声填充,3:完全闭塞)', '静脉压缩性(1:好,2:差)', '侧枝(1:可见侧枝形成,2:无侧枝形成)', '静脉瓣功能(1:良好,2:关闭不全)'];
    columnTitle_1 = ['髂外静脉', '股总静脉', '股浅静脉', '股深静脉', '腘静脉', '胫后静脉', '胫前静脉', '大隐静脉', '腓静脉', '肌间静脉'];
    secondLevelTitle_1 = ['左', '右', '左', '右', '左', '右', '左', '右', '左', '右', '左', '右', '左', '右', '左', '右', '左', '右', '左', '右'];
    overallId = ['ea7a1', 'ea7a2', 'ea7a3', 'ea7a4'];

    rowTitle_2 = ['心率(次/分)', '心律', '电轴', '右束支传导阻滞', '肺性P波', 'SI QIII TIII', 'ST-T改变', 'T波倒置', '总体印象', '', ''];
    columnTitle_2 = ['入院', '治疗后3d', '治疗后5d', '治疗后1w'];

    rowTitle_3 = ['胸部CT', '肺灌注显像', '肺动脉CTA'];
    columnTitle_3 = ['', '', '', ''];

    initialArray = ['', '', '', '', '', '', '', '', '', '',
        '', '',
        '',
        '', '', '',
        '', '', '', '',
        '',
        '',
        '',
        '', '',
        '', '',
        '', ''
    ];

    rowTitle_5 = ['CK', 'CKMB(u/L)', 'CtnT(ng/ml)', 'MYO(ng/ml)'];
    columnTitle_5 = ['入院时', '第二次检查'];

    rowTitle_6 = ['第一次', '第二次', '第三次', '第四次', '第五次', '第六次', '第七次', '第八次', '第九次', '第十次'];
    columnTitle_6 = ['RBC', 'WBC', 'Hb', 'PLT109/', 'NEUT', 'NEUT%', 'LYMPH', 'LYMPH%', 'MONO', 'MONO%'];

    rowTitle_7 = ['第一次', '第二次', '第三次', '第四次', '第五次', '第六次', '第七次'];
    columnTitle_7 = ['PT', 'APTT', 'TT', 'INR', 'FIB', 'FDP', 'D-D'];

    rowTitle_8 = ['ESR', 'hsCRP', 'pro-BNP', 'ACA', 'ANCA', 'HCY(mmol/l)'];
    columnTitle_8 = ['入院时', '第二次检查'];

    rowTitle_9 = ['C反应蛋白(mg/L)'];
    columnTitle_9 = ['入院时', '第二次检查'];

    data_10 = [
        {category: '物理治疗', children: ['气压泵治疗', '硫酸镁冷敷', '着医用弹力袜']},
        {category: '消肿药物', children: ['草木犀流浸液片', '羟苯磺酸钙', '马栗种子提取物片', '地奥司明', '七叶皂苷钠', '其他']},
        {category: '扩管改善循环药', children: ['丹参注射液', '疏血通', '丹参多酚酸盐', '丹参川芎嗪', '其他']},
        {category: '抗凝药', children: ['普通肝素', '低分子肝素', '磺达肝癸钠', '阿加曲班', '比伐卢定', '华法林', '利伐沙班', '达比加群酯']},
        {category: '溶栓药', children: ['尿激酶', 'rtPA']},
        {category: '降肺压药', children: ['西地那非', '曲前列尼尔', '波生坦', '安立生坦', '贝前列素钠']},
        {category: '心血管药物', children: ['氢氯噻嗪', '安体舒通', '呋塞米', '地高辛']},
        {category: '其他特殊用药', children: ['']}
    ];
    columnTitle_10 = ['项目', '内容', '种类', '剂量', '用法', '频次', '用药时间'];
    rowTitle_10 = [];

    constructor(private router: Router,
                private route: ActivatedRoute) {

        super();
        this.PID = this.route.params['value']['PID'];
    }

    _console(args) {
        console.log(args);
    }

    ngOnInit() {
        for (let i = 0; i < 11; i++) {
            this.tabs.push({
                name   : `出院/术后 ${i}`,
                content: `Content of tab ${i}`
            });
        }


        this.data_10.forEach(d => {
            for (let i = 0; i < d.children.length; i++) {
                const sets = {
                    category: d.category,
                    value: d.children[i],
                    length: d.children.length,
                    start: i === 0
                };
                this.rowTitle_10.push(sets);
            }
            });
        console.log(this.rowTitle_10);
    }

    initAnswerBox(row: number, column: number, id: string) {
        
    }
}
