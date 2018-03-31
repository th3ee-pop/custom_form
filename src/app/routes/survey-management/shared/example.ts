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
                }
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
                }
            ]
        }
    };

}

// 前端每次取出item,创建一个副本,只负责显示,在用户收集完内容后,将hidden的状态和内容传递到后端，后端存储的是 step_name, 内容, 是否显示
