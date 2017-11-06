import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
// import { Http } from '@angular/http';
import { InputcmpComponent } from '../shared/inputcmp/inputcmp.component';

@Component({
    selector: 'app-survey-management',
    templateUrl: './survey-management.component.html',
    styleUrls: ['./survey-management.component.css']
})



export class SurveyManagementComponent implements OnInit {

    questions = [
        {
            id : '1.1',
            tittle : '体检编号',
            type : 'input',
            content : [
                {
                    dataType : 'text',
                    inform : '（此项体检当天填写）'
                }
            ]
        },
        {
            id : '1.2',
            tittle : '你所在的单位名称',
            type : 'input',
            content : [
                {
                    dataType : 'text',
                    inform : ''
                }
            ]
        },
        {
            id : '1.3',
            tittle : '性别',
            type : 'radio',
            content : [
                '男',
                '女'
            ]
        },
        {
            id : '1.4',
            tittle : '出生日期',
            type : 'input',
            content : [
                {
                    dataType : 'number',
                    inform : '年'
                },
                {
                    dataType : 'number',
                    inform : '月'
                },
                {
                    dataType : 'number',
                    inform : '日'
                }
            ]
        },
        {
            id : '1.5',
            tittle : '身份证号',
            type : 'input',
            content : [
                {
                    dataType : 'text',
                    inform : ''
                }
            ]
        },
        {
            id : '1.6',
            tittle : '家庭住址',
            type : 'input',
            content : [
                {
                    dataType : 'text',
                    inform : '省'
                },
                {
                    dataType : 'text',
                    inform : '市'
                },
                {
                    dataType : 'text',
                    inform : '区/县'
                },
                {
                    dataType : 'text',
                    inform : '街道/乡镇'
                },
                {
                    dataType : 'text',
                    inform : '居委会/村'
                }
            ]
        },
        {
            id : '1.7.1',
            tittle : '你的手机号码',
            type : 'input',
            content : [
                {
                    dataType : 'text',
                    inform : ''
                }
            ]
        },
        {
            id : '1.7.2',
            tittle : '重要联系人手机号码',
            type : 'input',
            content : [
                {
                    dataType : 'text',
                    inform : ''
                }
            ]
        },
        {
            id : '1.8',
            tittle : '你的民族',
            type : 'radio',
            content : [
                '汉族',
                '回族',
                '维族',
                '哈萨克',
                '蒙古族',
                '其他'
            ]
        },
        {
            id : '1.9',
            tittle : '你是否有宗教信仰',
            type : 'radio',
            content : [
                '是',
                '不想回答',
                '否',
            ]
        },
        {
            id : '1.10.a',
            tittle : '你的宗教信仰是？',
            type : 'radio',
            content : [
                '伊斯兰教',
                '佛教',
                '基督教',
                '其他'
            ]
        },
        {
            id : '1.10',
            tittle : '你所接受过的最高教育是什么？',
            type : 'radio',
            content : [
                '未正规上过学',
                '小学',
                '初中',
                '高中（包括中专/技校）',
                '大专',
                '大学',
                '研究生以上'
            ]
        },
        {
            id : '1.11',
            tittle : '包括你自己在内，你全家共有几口人共同生活在一起？',
            type : 'input',
            content : [
                {
                    dataType : 'number',
                    inform : '人 (共同生活指长期共同吃住在一起，经济共担）'
                }
            ]
        },
        {
            id : '1.12',
            tittle : '你目前的婚姻状况如何？',
            type : 'radio',
            content : [
                '已婚',
                '丧偶',
                '分居/离婚',
                '未婚'
            ]
        },
        {
            id : '1.13',
            tittle : '你目前（或离退休前）所从事的主要是哪方面的职业？',
            type : 'radio',
            content : [
                '农林牧渔劳动者',
                '工人',
                '行政及管理人员',
                '专业技术人员（医生、教师、科技人员）',
                '销售及服务工作人员',
                '家务',
                '私营业主',
                '待业/下岗',
                '其他或不易分类者'
            ]
        },
        {
            id : '1.14',
            tittle : '去年你全家一年的总收入（包括各种来源）约为多少？',
            type : 'radio',
            content : [
                '<2,500元',
                '2,500-4,999元',
                '5,000-9,999元',
                '10,000-19,999元',
                '20,000-34,999元',
                '35,000-49,999元',
                '50,000-74,999元',
                '75,000-99,999元',
                '100,000-200,000元',
                '>=200,000元'
            ]
        },
        {
            id : '1.15',
            tittle : '去年你家平均一个月的日常支出（不含特殊支出如买房买车住院等）约为：',
            type : 'input',
            content : [
                {
                    dataType : 'number',
                    inform : '元'
                }
            ]
        },
        {
            id : '1.16',
            tittle : '你或你家目前是否有医疗保险并有以下财产和消费？',
            type : 'checkbox',
            content : [
                '医疗保险（公费、医保、商业保险及合作医疗） （针对调查对象本人）',
                '自家楼房（农村） 、五年内新装修单元房（城市）',
                '自家有自来水',
                '带抽水马桶的家庭独立卫生间',
                '汽车',
                '摩托车/其他机动车（如电动车、拖拉机）',
                '电脑',
                '互联网',
                '智能手机（如微信，qq等，针对调查对象本人）',
                '五年内曾自费外出旅游度假'
            ]
        },
        
    ];

    answers = {};
    editDisable = {};

    @ViewChildren('item') Items: QueryList<ElementRef>;
    constructor() { 
        
    }


    ngOnInit() {
        
    }

    log() {
        this.Items.forEach(item => {
            console.log(item['answer']);
        });
    }

}
