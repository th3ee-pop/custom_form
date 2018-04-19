export class SaveList {
    step_key = ['step_one', 'step_two'];
    questions = {
        'step_one': {
            'name': 'step_one',
            'items': [
                {
                    'webId':  '1',
                    'dbId': 'record_ID',
                    'type': 'input',
                    'front_title': '病案号',
                    'behind_title': '',
                    'validtype': 'len_number',
                    'validcondition': {
                        'length': 6
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '2',
                    'dbId': 'patient_name',
                    'type': 'input',
                    'front_title': '姓名',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '3',
                    'dbId': 'age',
                    'type': 'input',
                    'front_title': '年龄(岁)',
                    'behind_title': '',
                    'validtype': 'number',
                    'validcondition': {
                        'min': 0,
                        'max': 150
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId': '4',
                    'dbId': 'birthday',
                    'type': 'date',
                    'front_title': '出生日期',
                    'behind_title': '',
                    'required': true,
                    'hidden': false
                },
                {
                    'webId':  '5',
                    'dbId': 'department_in',
                    'type': 'input',
                    'front_title': '入院科别',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId': '6',
                    'dbId': 'inday',
                    'type': 'date',
                    'front_title': '入院日期时间',
                    'behind_title': '',
                    'required': true,
                    'hidden': false
                },
                {
                    'webId': '7',
                    'dbId': 'outday',
                    'type': 'date',
                    'front_title': '出院日期时间',
                    'behind_title': '',
                    'required': true,
                    'hidden': false
                },
                {
                    'webId':  '8',
                    'dbId': 'department_out',
                    'type': 'input',
                    'front_title': '出院科别',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
<<<<<<< HEAD
                {
                    'webId':  '9',
                    'dbId': 'diagnosis_name',
                    'type': 'input',
                    'front_title': '出院诊断-主要名称',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '10',
                    'dbId': 'diagnosis_code',
                    'type': 'input',
                    'front_title': '出院诊断-主要诊断疾病编码',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
=======
                // {
                //     'webId':  '1',
                //     'dbId': 'number',
                //     'type': 'input',
                //     'front_title': '姓名',
                //     'behind_title': '',
                //     'validtype': 'number',
                //     'validcondition': {
                //         'min': 0,
                //         'max': 60
                //     },
                //     'length': '',
                //     'required': true,
                //     'hiddenlist': [],
                //     'hiddencondition': [],
                //     'hidden': false
                // },
                // {
                //     'webId':  '2',
                //     'dbId': 'len_number',
                //     'type': 'input',
                //     'front_title': '这是len_number类型',
                //     'behind_title': '',
                //     'validtype': 'len_number',
                //     'validcondition': {
                //         'length': 12
                //     },
                //     'length': '',
                //     'required': true,
                //     'hiddenlist': [],
                //     'hiddencondition': [],
                //     'hidden': false
                // },
                // {
                //     'webId':  '3',
                //     'dbId': 'text',
                //     'type': 'input',
                //     'front_title': '这是text类型',
                //     'behind_title': '',
                //     'validtype': 'text',
                //     'validcondition': {
                //
                //     },
                //     'length': '',
                //     'required': true,
                //     'hiddenlist': [],
                //     'hiddencondition': [],
                //     'hidden': false
                // },
                // {
                //     'webId':  '4',
                //     'dbId': 'len_text',
                //     'type': 'input',
                //     'front_title': '这是len_text类型',
                //     'behind_title': '',
                //     'validtype': 'len_text',
                //     'validcondition': {
                //         'length': 12
                //     },
                //     'length': '',
                //     'required': true,
                //     'hiddenlist': [],
                //     'hiddencondition': [],
                //     'hidden': false
                // },
                // {
                //     'webId': '5',
                //     'dbId': 'sex',
                //     'type': 'radio',
                //     'front_title': '性别',
                //     'behind_title': '',
                //     'required': true,
                //     'content': [
                //         '男', '女'
                //     ],
                //     'hiddenlist': [
                //         ['6'],
                //         ['3']
                //     ],
                //     'hidden': false
                // },
                 {
                     'webId': '6',
                     'dbId': 'diagnose',
                     'type': 'checkbox',
                     'front_title': '是否有以下疾病',
                     'behind_title': '',
                     'required': true,
                     'content': [
                         '心脏病', '糖尿病', '癌症', '脑炎'
                     ],
                     'hiddenlist': [
                     ],
                     'hidden': false
                 },
                {
                    'dbId': '',
                    'webId': '7',
                    'title': '血常规', // 标题
                    'hidden': false,
                    'type': 'high-table',
                    'rowTitle': ['第一次', '第二次', '第三次', '第四次', '第五次', '第六次', '第七次', '第八次', '第九次', '第十次'], // 各行标题，也就是最左一列
                    'columnTitle': ['RBC', 'WBC', 'Hb', 'PLT109/', 'NEUT', 'NEUT%', 'LYMPH', 'LYMPH%', 'MONO', 'MONO%'], // 各列标题，也就是最上面一行
                    'id_title': 'xcg', // 数据库中存储的前缀
                    'table_type': 'mix', // 表格类型，表示是混合表格，既有input，又有radio(mix)
                    'radio_setting': { // radio 的设置
                        'direction': 'column',  // radio 的分布类型，是以列分布还是以行分布
                        'index': [ 1, 2, 4 ], // 哪几行（列）是radio
                        'options': [{value: '1', display_value: '是'}, {value: '2', display_value: '否'}, {value: '3', display_value: '不明'}]
                        // radio的选项都有什么，对应的值是什么
>>>>>>> 2ff3b8051fa58c53f5150a522fdb142d39228c17
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
            ]

        },
        'step_two': {
            'name': 'step_two',
            'items': [
                {
                    'webId':  '11',
                    'dbId': 'surgery_code',
                    'type': 'input',
                    'front_title': '手术及操作编码',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId': '12',
                    'dbId': 'surgery_code',
                    'type': 'date',
                    'front_title': '手术及操作日期',
                    'behind_title': '',
                    'required': true,
                    'hidden': false
                },
                {
                    'webId':  '13',
                    'dbId': 'surgery_name',
                    'type': 'input',
                    'front_title': '手术及操作名称',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '14',
                    'dbId': 'in_out_diagnose_name',
                    'type': 'input',
                    'front_title': '出院诊断-主要诊断入院病情名称',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },

                {
                    'webId':  '15',
                    'dbId': 'surgical_incision_code',
                    'type': 'input',
                    'front_title': '手术切口类别代码',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },

                {
                    'webId':  '16',
                    'dbId': 'incision_heal_code',
                    'type': 'input',
                    'front_title': '切口愈合等级代码',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '17',
                    'dbId': 'depart_adm_name',
                    'type': 'input',
                    'front_title': '科室主任签名',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '18',
                    'dbId': 'depart_deadm_name',
                    'type': 'input',
                    'front_title': '主任(副主任)医师签名',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '19',
                    'dbId': 'zzdoctor_name',
                    'type': 'input',
                    'front_title': '主治医师签名',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '20',
                    'dbId': 'zydoctor_name',
                    'type': 'input',
                    'front_title': '住院医师签名',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId': '21',
                    'dbId': 'if_serious',
                    'type': 'radio',
                    'front_title': '是否急危重病人',
                    'behind_title': '',
                    'required': true,
                    'content': [
                        '是', '否'
                    ],
                    'hiddenlist': [

                    ],
                    'hidden': false
                },
                {
                    'webId': '22',
                    'dbId': 'if_difficult',
                    'type': 'radio',
                    'front_title': '是否疑难病例',
                    'behind_title': '',
                    'required': true,
                    'content': [
                        '是', '否'
                    ],
                    'hiddenlist': [

                    ],
                    'hidden': false
                },
                {
                    'webId':  '23',
                    'dbId': 'rescue_times',
                    'type': 'input',
                    'front_title': '抢救次数',
                    'behind_title': '',
                    'validtype': 'number',
                    'validcondition': {
                        'min': 0,
                        'max': 100
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '24',
                    'dbId': 'rescue_success_times',
                    'type': 'input',
                    'front_title': '成功次数',
                    'behind_title': '',
                    'validtype': 'number',
                    'validcondition': {
                        'min': 0,
                        'max': 100
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {

                    'webId': '25',
                    'dbId': 'pay_way',
                    'type': 'radio',
                    'front_title': '医疗付费方式',
                    'behind_title': '',
                    'required': true,
                    'content': [
                        '新型农村合作医疗', '城镇职工基本医疗保险', '其他社会保险', '商业医疗保险', '其他'
                    ],
                    'hiddenlist': [

                    ],
                    'hidden': false
                },
                {

                    'webId': '26',
                    'dbId': 'sex',
                    'type': 'radio',
                    'front_title': '性别',
                    'behind_title': '',
                    'required': true,

                    'content': [
                       '男', '女'
                    ],
                    'hiddenlist': [

                    ],

                    'hidden': false
                },
                {

                    'webId':  '27',
                    'dbId': 'in_way',
                    'type': 'input',
                    'front_title': '入院途径',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false

                },
                {

                    'webId':  '28',
                    'dbId': 'out_way',
                    'type': 'input',
                    'front_title': '离院方式',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false

                },
                {

                    'webId':  '29',
                    'dbId': 'out_way',
                    'type': 'input',
                    'front_title': '住院总费用',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false

                },
                {

                    'webId':  '30',
                    'dbId': 'pays',
                    'type': 'input',
                    'front_title': '实际住院天数',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false

                },
                {

                    'webId':  '31',
                    'dbId': 'intimes',
                    'type': 'input',
                    'front_title': '住院次数',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false

                },
                {

                    'webId':  '32',
                    'dbId': 'outreseason',
                    'type': 'input',
                    'front_title': '损伤中毒的外部原因',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false

                },
                {

                    'webId':  '33',
                    'dbId': 'outreseason_code',
                    'type': 'input',
                    'front_title': '损伤中毒的外部原因疾病编码',
                    'behind_title': '',
                    'validtype': 'text',
                    'validcondition': {
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false

                },


            ]
        }
    };

}




// [
//     {
//         'webId':  '1',
//         'dbId': 'name',
//         'type': 'input',
//         'front_title': '这是number类型',
//         'behind_title': '',
//         'validtype': 'number',
//         'validcondition': {
//             'min': 0,
//             'max': 60
//         },
//         'length': '',
//         'required': true,
//         'hiddenlist': [],
//         'hiddencondition': [],
//         'hidden': false
//     },
//     {
//         'webId':  '2',
//         'dbId': 'name',
//         'type': 'input',
//         'front_title': '这是len_number类型',
//         'behind_title': '',
//         'validtype': 'len_number',
//         'validcondition': {
//             'length': 12
//         },
//         'length': '',
//         'required': true,
//         'hiddenlist': [],
//         'hiddencondition': [],
//         'hidden': false
//     },
//     {
//         'webId':  '3',
//         'dbId': 'name',
//         'type': 'input',
//         'front_title': '这是text类型',
//         'behind_title': '',
//         'validtype': 'text',
//         'validcondition': {
//
//         },
//         'length': '',
//         'required': true,
//         'hiddenlist': [],
//         'hiddencondition': [],
//         'hidden': false
//     },
//     {
//         'webId':  '4',
//         'dbId': 'name',
//         'type': 'input',
//         'front_title': '这是len_text类型',
//         'behind_title': '',
//         'validtype': 'len_text',
//         'validcondition': {
//             'length': 12
//         },
//         'length': '',
//         'required': true,
//         'hiddenlist': [],
//         'hiddencondition': [],
//         'hidden': false
//     },
//     {
//         'webId': '5',
//         'dbId': 'sex',
//         'type': 'radio',
//         'front_title': '性别',
//         'behind_title': '',
//         'required': true,
//         'content': [
//             '男', '母'
//         ],
//         'hiddenlist': [
//             ['6'],
//             ['3']
//         ],
//         'hidden': false
//     },
//     {
//         'webId': '6',
//         'dbId': 'sex',
//         'type': 'addr',
//         'front_title': '联系人地址',
//         'behind_title': '',
//         'required': true,
//         'content': [
//             '男', '母'
//         ],
//         'hidden': false
//     },
//     {
//         'webId': '7',
//         'dbId': 'ID_number',
//         'type': 'idc',
//         'front_title': '身份证',
//         'behind_title': '',
//         'required': true,
//         'hidden': false
//     }
// ]
// // 前端每次取出item,创建一个副本,只负责显示,在用户收集完内容后,将hidden的状态和内容传递到后端，后端存储的是 step_name, 内容, 是否显示
// {
//     'dbId': '',
//     'webId': '7',
//     'title': '血常规', // 标题
//     'hidden': false,
//     'type': 'high-table',
//     'rowTitle': ['第一次', '第二次', '第三次', '第四次', '第五次', '第六次', '第七次', '第八次', '第九次', '第十次'], // 各行标题，也就是最左一列
//     'columnTitle': ['RBC', 'WBC', 'Hb', 'PLT109/', 'NEUT', 'NEUT%', 'LYMPH', 'LYMPH%', 'MONO', 'MONO%'], // 各列标题，也就是最上面一行
//     'id_title': 'xcg', // 数据库中存储的前缀
//     'table_type': 'mix', // 表格类型，表示是混合表格，既有input，又有radio(mix)
//     'radio_setting': { // radio 的设置
//     'direction': 'column',  // radio 的分布类型，是以列分布还是以行分布
//         'index': [ 1, 2, 4 ], // 哪几行（列）是radio
//         'options': [{value: '1', display_value: '是'}, {value: '2', display_value: '否'}, {value: '3', display_value: '不明'}]
//     // radio的选项都有什么，对应的值是什么
// },
//     'overall': true // 表格是否有总体评价的文字框
// },
// ]
