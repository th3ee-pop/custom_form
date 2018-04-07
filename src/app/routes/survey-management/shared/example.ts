export class SaveList {
    step_key = ['step_one', 'step_two'];
    questions = {
        'step_one': {
            'name': 'step_one',
            'items': [
                {
                    'webId':  '1',
                    'dbId': 'name',
                    'type': 'input',
                    'front_title': '这是number类型',
                    'behind_title': '',
                    'validtype': 'number',
                    'validcondition': {
                        'min': 0,
                        'max': 60
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '2',
                    'dbId': 'name',
                    'type': 'input',
                    'front_title': '这是len_number类型',
                    'behind_title': '',
                    'validtype': 'len_number',
                    'validcondition': {
                        'length': 12
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '3',
                    'dbId': 'name',
                    'type': 'input',
                    'front_title': '这是text类型',
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
                    'webId':  '4',
                    'dbId': 'name',
                    'type': 'input',
                    'front_title': '这是len_text类型',
                    'behind_title': '',
                    'validtype': 'len_text',
                    'validcondition': {
                        'length': 12
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId': '5',
                    'dbId': 'sex',
                    'type': 'radio',
                    'front_title': '性别',
                    'behind_title': '',
                    'required': true,
                    'content': [
                        '男', '女'
                    ],
                    'hiddenlist': [
                        ['6'],
                        ['3']
                    ],
                    'hidden': false
                },
                {
                    'webId': '6',
                    'dbId': 'diagnose',
                    'type': 'checkbox',
                    'front_title': '是否有过以下疾病',
                    'behind_title': '',
                    'required': true,
                    'content': [
                        '心脏病', '糖尿病', '癌症', '脑炎'
                    ],
                    'hiddenlist': [
                        ['5'],
                        ['1'],
                        ['3'],
                        ['2']
                    ],
                    'hidden': false
                },
                {
                    'webId': '7',
                    'dbId': 'birthday',
                    'type': 'date',
                    'front_title': '出生日期',
                    'behind_title': '',
                    'required': true,
                    'hidden': false
                },
                {
                    'dbId': '',
                    'webId': '5.5.1',
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
                    },
                    'overall': true // 表格是否有总体评价的文字框
                },
            ]
        },
        'step_two': {
            'name': 'step_two',
            'items': [
                {
                    'webId':  '1',
                    'dbId': 'name',
                    'type': 'input',
                    'front_title': '这是number类型',
                    'behind_title': '',
                    'validtype': 'number',
                    'validcondition': {
                        'min': 0,
                        'max': 60
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '2',
                    'dbId': 'name',
                    'type': 'input',
                    'front_title': '这是len_number类型',
                    'behind_title': '',
                    'validtype': 'len_number',
                    'validcondition': {
                        'length': 12
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId':  '3',
                    'dbId': 'name',
                    'type': 'input',
                    'front_title': '这是text类型',
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
                    'webId':  '4',
                    'dbId': 'name',
                    'type': 'input',
                    'front_title': '这是len_text类型',
                    'behind_title': '',
                    'validtype': 'len_text',
                    'validcondition': {
                        'length': 12
                    },
                    'length': '',
                    'required': true,
                    'hiddenlist': [],
                    'hiddencondition': [],
                    'hidden': false
                },
                {
                    'webId': '5',
                    'dbId': 'sex',
                    'type': 'radio',
                    'front_title': '性别',
                    'behind_title': '',
                    'required': true,
                    'content': [
                        '男', '母'
                    ],
                    'hiddenlist': [
                        ['6'],
                        ['3']
                    ],
                    'hidden': false
                },
                {
                    'webId': '6',
                    'dbId': 'sex',
                    'type': 'addr',
                    'front_title': '联系人地址',
                    'behind_title': '',
                    'required': true,
                    'content': [
                        '男', '母'
                    ],
                    'hidden': false
                },
                {
                    'webId': '7',
                    'dbId': 'ID_number',
                    'type': 'idc',
                    'front_title': '身份证',
                    'behind_title': '',
                    'required': true,
                    'hidden': false
                }
            ]
        }
    };

}

// 前端每次取出item,创建一个副本,只负责显示,在用户收集完内容后,将hidden的状态和内容传递到后端，后端存储的是 step_name, 内容, 是否显示
