export class QuestionList {
    questions = [
        [
            {
                'id2': 'name',
                'id1': '0.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '病人姓名',
                'hidden': false
            },
            {
                'id2': 'num',
                'id1': '0.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '住院号',
                'hidden': false
            },
            {
                'id2': 'Idnumber',
                'id1': '0.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '身份证号',
                'hidden': false
            },
            {
                'id2': 'doctor',
                'id1': '0.4',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '填表医师',
                'hidden': false
            },
            {
                'id2': 'type1',
                'id1': '0.5',
                'type': 'radio',
                'title': '介入手术类型：顺行性下肢静脉造影',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'type2',
                'id1': '0.6',
                'type': 'radio',
                'title': '介入手术类型：下腔静脉造影',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'type3',
                'id1': '0.7',
                'type': 'radio',
                'title': '介入手术类型：肺动脉造影',
                'content': ['否', '是'],
                'hiddenlist': [['0.7.1'], []],
                'hidden': false
            },
            {
                'id2': 'type3a',
                'id1': '0.7.1',
                'type': 'radio',
                'title': '肺动脉造影',
                'content': ['小面积', '次大面积', '大面积'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'type4',
                'id1': '0.8',
                'type': 'radio',
                'title': '介入手术类型: 滤器植入',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'type5',
                'id1': '0.9',
                'type': 'radio',
                'title': '介入手术类型: 置管术',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'diag',
                'id1': '0.10',
                'type': 'radio',
                'title': '最终诊断:左/右下肢静脉血栓形成',
                'content': ['否', '是'],
                'hiddenlist': [['0.10.1', '0.10.2', '0.10.3'], []],
                'hidden': false
            },
            {
                'id2': 'diaga1',
                'id1': '0.10.1',
                'type': 'radio',
                'title': '周围型',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'diaga2',
                'id1': '0.10.2',
                'type': 'radio',
                'title': '中央型',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'diaga3',
                'id1': '0.10.3',
                'type': 'radio',
                'title': '混合型',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'diagb',
                'id1': '0.11',
                'type': 'radio',
                'title': '最终诊断：下腔静脉血栓形成',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'diagc',
                'id1': '0.12',
                'type': 'radio',
                'title': '最终诊断：肺动脉栓塞',
                'content': ['否', '是'],
                'hiddenlist': [['1.12.1'], []],
                'hidden': false
            },
            {
                'id2': 'diagc1',
                'id1': '0.12.1',
                'type': 'radio',
                'title': '肺动脉栓塞面积',
                'content': ['小面积', '次大面积', '大面积'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'diagd1',
                'id1': '0.13',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '其它诊断1',
                'hidden': false
            },
            {
                'id2': 'diagd2',
                'id1': '0.14',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '其它诊断2',
                'hidden': false
            },
            {
                'id2': 'diagd3',
                'id1': '0.15',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '其它诊断3',
                'hidden': false
            },
        ],
        [
            {
                'id2': 'aa2',
                'id1': '1.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '出生年份',
                'hidden': false
            },
            {
                'id2': 'aa3',
                'id1': '1.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '出生月份',
                'hidden': false
            },
            {
                'id2': 'aa4',
                'id1': '1.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '发病年龄',
                'hidden': false
            },
            {
                'id2': 'aa5',
                'id1': '1.3',
                'type': 'radio',
                'title': '性别',
                'content': ['男', '女'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'ab2',
                'id1': '1.4',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '籍贯',
                'hidden': false
            },
            {
                'id2': 'ab3',
                'id1': '1.5',
                'type': 'radio',
                'title': '民族',
                'content': ['汉', '其他'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'ac1',
                'id1': '1.6',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '联系地址',
                'hidden': false
            },
            {
                'id2': 'ac2',
                'id1': '1.7',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '邮编',
                'hidden': false
            },
            {
                'id2': 'ac3',
                'id1': '1.8',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '手机',
                'hidden': false
            },
            {
                'id2': 'ac4',
                'id1': '1.9',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '固定电话',
                'hidden': false
            },
            {
                'id2': 'ad1',
                'id1': '1.10',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '联系人',
                'hidden': false
            },
            {
                'id2': 'ad2',
                'id1': '1.11',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '与患者关系',
                'hidden': false
            },
            {
                'id2': 'ad3',
                'id1': '1.12',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '联系人地址',
                'hidden': false
            },
            {
                'id2': 'ad4',
                'id1': '1.13',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '联系人手机',
                'hidden': false
            },
            {
                'id2': 'ae1',
                'id1': '1.14',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '联系人固定电话',
                'hidden': false
            },
            {
                'id2': 'ae2',
                'id1': '1.15',
                'type': 'date',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '入院日期',
                'hidden': false
            },
            {
                'id2': 'ae3',
                'id1': '1.16',
                'type': 'date',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '出院日期',
                'hidden': false
            },
            {
                'id2': 'ae4',
                'id1': '1.17',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '住院日',
                'hidden': false
            }
        ],
        [
            {
                'id2': 'ba1',
                'id1': '2.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '身高(m)',
                'hidden': false
            },
            {
                'id2': 'ba2',
                'id1': '2.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '体重(kg)',
                'hidden': false
            },
            {
                'id2': 'ba3',
                'id1': '2.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '体重指数',
                'hidden': false
            },
            {
                'id2': 'ba4',
                'id1': '2.4',
                'type': 'radio',
                'title': '职业',
                'content': ['农民', '工人', '职员', '经商', '学生', '教师', '医务人员', '军人', '家庭妇女'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'ba5',
                'id1': '2.5',
                'type': 'radio',
                'title': '学历',
                'content': ['本科及以上', '专科及高中', '初中', '小学', '不识字及识字很少'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'ba6',
                'id1': '2.6',
                'type': 'radio',
                'title': '婚姻状况',
                'content': ['未婚', '已婚', '分居', '离婚', '丧偶'],
                'hiddenlist': [['2.6.1'], [], [], [], []],
                'hidden': false
            },
            {
                'id2': 'ba7',
                'id1': '2.6.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '婚姻时间(年)',
                'hidden': false
            },
            {
                'id2': 'ba8',
                'id1': '2.7',
                'type': 'radio',
                'title': '家庭收入',
                'content': ['2万以下', '2-5万', '5-10万', '10万以上'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bb',
                'id1': '2.8',
                'type': 'radio',
                'title': '膳食',
                'content': ['无', '有'],
                'hiddenlist': [
                    [
                        '2.8.1', '2.8.2', '2.8.3', '2.8.4', '2.8.5', '2.8.6', '2.8.7',
                        '2.8.8', '2.8.9', '2.8.10', '2.8.11', '2.8.12'
                    ], []],
                'hidden': false
            },
            {
                'id2': 'bb1',
                'id1': '2.8.1',
                'type': 'radio',
                'title': '主食',
                'content': ['3两及以下', '4-6两', '7-9两', '1斤以上'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bb2',
                'id1': '2.8.2',
                'type': 'radio',
                'title': '食盐',
                'content': ['口重（13克以上）', '居中（7-12克）', '口轻（6克以下）'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bb3',
                'id1': '2.8.3',
                'type': 'radio',
                'title': '食用油',
                'content': ['纯植物油', '主要植物油', '主要动物油', '纯动物油'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bb4',
                'id1': '2.8.4',
                'type': 'radio',
                'title': '平均每月进食食用油量',
                'content': ['2斤以下', '2-5斤', '5-10斤', '10斤及以上'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bb5',
                'id1': '2.8.5',
                'type': 'radio',
                'title': '食用肉',
                'content': ['每周5次及以上', '每周3-5次', '每周1-2次', '不吃'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bb6',
                'id1': '2.8.6',
                'type': 'radio',
                'title': '食用鱼或虾',
                'content': ['经常吃', '有时吃', '基本不吃'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bb7',
                'id1': '2.8.7',
                'type': 'radio',
                'title': '食用蛋',
                'content': ['7个/周及以上', '5个/周', '1-3个/周', '不吃'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bb8',
                'id1': '2.8.8',
                'type': 'radio',
                'title': '乳制品',
                'content': ['经常喝', '有时喝', '基本不喝'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bb9',
                'id1': '2.8.9',
                'type': 'radio',
                'title': '食用豆制品',
                'content': ['几乎每天吃', '1-2次/周', '1-2次/月', '偶尔吃'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bb10',
                'id1': '2.8.10',
                'type': 'radio',
                'title': '食用蔬菜',
                'content': ['1斤/天及以上', '半斤/天', '<半斤/天', '不吃'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bb11',
                'id1': '2.8.11',
                'type': 'radio',
                'title': '食用新鲜水果',
                'content': ['经常吃', '有时吃', '基本不吃'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bb12',
                'id1': '2.8.12',
                'type': 'radio',
                'title': '在餐馆进食',
                'content': ['经常≥5次/周', '3-5次/周', '1-3次/周', '偶尔', '无'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bcyw',
                'id1': '2.9',
                'type': 'radio',
                'title': '体育锻炼',
                'content': ['无', '有'],
                'hiddenlist': [
                    [
                        '2.9.1', '2.9.1.1', '2.9.1.2', '2.9.1.3', '2.9.1.4', '2.9.1.5', '2.9.1.6', '2.9.1.7',
                        '2.9.1.8', '2.9.1.9', '2.9.1.10', '2.9.1.11', '2.9.1.12'
                    ], []],
                'hidden': false
            },
            {
                'id2': 'bc2',
                'id1': '2.9.1',
                'type': 'radio',
                'title': '活动',
                'content': ['否', '是'],
                'hiddenlist': [
                    [
                        '2.9.1.1', '2.9.1.2', '2.9.1.3', '2.9.1.4', '2.9.1.5', '2.9.1.6', '2.9.1.7', '2.9.1.8',
                        '2.9.1.9', '2.9.1.10', '2.9.1.11', '2.9.1.12'
                    ],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'bc1',
                'id1': '2.9.1.1',
                'type': 'radio',
                'title': '散步',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bc2',
                'id1': '2.9.1.2',
                'type': 'radio',
                'title': '做操',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bc3',
                'id1': '2.9.1.3',
                'type': 'radio',
                'title': '太极拳',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bc4',
                'id1': '2.9.1.4',
                'type': 'radio',
                'title': '气功',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bc5',
                'id1': '2.9.1.5',
                'type': 'radio',
                'title': '跑步',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bc6',
                'id1': '2.9.1.6',
                'type': 'radio',
                'title': '跳舞',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bc7',
                'id1': '2.9.1.7',
                'type': 'radio',
                'title': '球类',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bc8',
                'id1': '2.9.1.8',
                'type': 'radio',
                'title': '瑜伽',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bc9',
                'id1': '2.9.1.9',
                'type': 'radio',
                'title': '田间劳作',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bc10',
                'id1': '2.9.1.10',
                'type': 'radio',
                'title': '重体力劳动',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bc11',
                'id1': '2.9.1.11',
                'type': 'radio',
                'title': '活动频率',
                'content': ['每天活动', '5次/周', '3-5次/周', '<3次/周', '无'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bc12',
                'id1': '2.9.1.12',
                'type': 'radio',
                'title': '每次活动时间',
                'content': ['30分钟以下', '30-60分钟', '60分钟以上'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bd1',
                'id1': '2.10',
                'type': 'radio',
                'title': '吸烟',
                'content': ['否', '是'],
                'hiddenlist': [['2.10.1', '2.10.2', '2.10.3', '2.10.3.1'], []],
                'hidden': false
            },
            {
                'id2': 'bd2',
                'id1': '2.10.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '开始吸烟年龄',
                'hidden': false
            },
            {
                'id2': 'bd3',
                'id1': '2.10.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '累计吸烟（年）',
                'hidden': false
            },
            {
                'id2': 'bd4',
                'id1': '2.10.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '累积吸烟（支/日）',
                'hidden': false
            },
            {
                'id2': 'bd5',
                'id1': '2.10.3',
                'type': 'radio',
                'title': '戒烟',
                'content': ['否', '是'],
                'hiddenlist': [['2.10.3.1'], []],
                'hidden': false
            },
            {
                'id2': 'bd6',
                'id1': '2.10.3.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '戒烟（年）',
                'hidden': false
            },
            {
                'id2': 'be1',
                'id1': '2.11',
                'type': 'radio',
                'title': '饮酒',
                'content': ['否', '是'],
                'hiddenlist': [['2.11.1', '2.11.2', '2.11.3', '2.11.4', '2.11.5', '2.11.6', '2.11.6.1'], []],
                'hidden': false
            },
            {
                'id2': 'be2',
                'id1': '2.11.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '累计饮酒年数',
                'hidden': false
            },
            {
                'id2': 'be3',
                'id1': '2.11.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '累计饮酒（两/天）',
                'hidden': false
            },
            {
                'id2': 'be4',
                'id1': '2.11.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '最大每周饮酒量（次/周）',
                'hidden': false
            },
            {
                'id2': 'be5',
                'id1': '2.11.4',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '最大每周饮酒量（两/次）',
                'hidden': false
            },
            {
                'id2': 'be6',
                'id1': '2.11.5',
                'type': 'radio',
                'title': '饮酒品种',
                'content': ['白酒', '红酒', '啤酒', '不详'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'be7',
                'id1': '2.11.6',
                'type': 'radio',
                'title': '戒酒',
                'content': ['否', '是'],
                'hiddenlist': [['2.11.6.1'], []],
                'hidden': false
            },
            {
                'id2': 'be8',
                'id1': '2.11.6.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '戒酒时间',
                'hidden': false
            },
            {
                'id2': 'bf1',
                'id1': '2.12',
                'type': 'radio',
                'title': '近来睡眠',
                'content': ['好', '坏', '中等'],
                'hiddenlist': [['2.12.1', '2.12.1.1', '2.12.2', '2.12.3', '2.12.4'], [], []],
                'hidden': false
            },
            {
                'id2': 'bf2',
                'id1': '2.12.1',
                'type': 'radio',
                'title': '安眠药',
                'content': ['经常', '有时', '不服'],
                'hiddenlist': [[], [], ['2.12.1.1']],
                'hidden': false
            },
            {
                'id2': 'bf3',
                'id1': '2.12.1.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '安眠药名',
                'hidden': false
            },
            {
                'id2': 'bf4',
                'id1': '2.12.2',
                'type': 'radio',
                'title': '睡眠差表现',
                'content': ['入睡困难', '早醒', '间断睡眠', '睡不实，多梦'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bf5',
                'id1': '2.12.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '睡眠时间（小时/天）',
                'hidden': false
            },
            {
                'id2': 'bf6',
                'id1': '2.12.4',
                'type': 'radio',
                'title': '睡眠差的原因',
                'content': ['环境影响', '工作太忙、睡眠时间不多', '有烦恼的事情'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bg1',
                'id1': '2.13',
                'type': 'radio',
                'title': '近来体重变化',
                'content': ['增高', '下降', '无明显变化'],
                'hiddenlist': [[], [], ['2.13.1']],
                'hidden': false
            },
            {
                'id2': 'bg2',
                'id1': '2.13.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '变化体重（斤）',
                'hidden': false
            },
            {
                'id2': 'bha1',
                'id1': '2.14',
                'type': 'radio',
                'title': '大小便：小便',
                'content': ['正常', '异常'],
                'hiddenlist': [['2.14.1']],
                'hidden': false
            },
            {
                'id2': 'bha2',
                'id1': '2.14.1',
                'type': 'radio',
                'title': '小便症状',
                'content': ['尿频', '少尿', '血尿', '蛋白尿', '其他'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bhb1',
                'id1': '2.15',
                'type': 'radio',
                'title': '大小便：大便',
                'content': ['正常', '异常'],
                'hiddenlist': [['2.15.1'], []],
                'hidden': false
            },
            {
                'id2': 'bhb2',
                'id1': '2.15.1',
                'type': 'radio',
                'title': '大便症状',
                'content': ['腹泻', '便秘', '黑便', '其他'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bi',
                'id1': '2.16',
                'type': 'radio',
                'title': '家族史',
                'content': ['无', '有'],
                'hiddenlist': [
                    [
                        '2.16.1', '2.16.2', '2.16.3', '2.16.4', '2.16.5', '2.16.6', '2.16.7', '2.16.8',
                        '2.16.9', '2.16.10', '2.16.11'
                    ],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'bi1',
                'id1': '2.16.1',
                'type': 'radio',
                'title': '冠心病',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bi2',
                'id1': '2.16.2',
                'type': 'radio',
                'title': '高血压',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bi3',
                'id1': '2.16.3',
                'type': 'radio',
                'title': '糖尿病',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bi4',
                'id1': '2.16.4',
                'type': 'radio',
                'title': '脑血管病',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bi5',
                'id1': '2.16.5',
                'type': 'radio',
                'title': '癌症',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bi6',
                'id1': '2.16.6',
                'type': 'radio',
                'title': '静脉血栓性疾病',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bi7',
                'id1': '2.16.7',
                'type': 'radio',
                'title': '动脉血栓性疾病',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bi8',
                'id1': '2.16.8',
                'type': 'radio',
                'title': '结缔组织疾病',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bi9',
                'id1': '2.16.9',
                'type': 'radio',
                'title': '风湿免疫性疾病',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bi10',
                'id1': '2.16.10',
                'type': 'radio',
                'title': '猝死家族史',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'bi11',
                'id1': '2.16.11',
                'type': 'radio',
                'title': '长寿',
                'content': ['否', '是'],
                'hiddenlist': [],
                'hidden': false
            },
        ],
        [
            {
                'id2': 'caa1',
                'id1': '3.1',
                'type': 'radio',
                'title': '高血压',
                'content': [
                    '否',
                    '是',
                    '不详'
                ],
                'hiddenlist': [
                    ['3.1.1', '3.1.2', '3.1.3', '3.1.4', '3.1.5', '3.1.6.1', '3.1.6.2', '3.1.7.1', '3.1.7.2'],
                    [],
                    ['3.1.1', '3.1.2', '3.1.3', '3.1.4', '3.1.5', '3.1.6.1', '3.1.6.2', '3.1.7.1', '3.1.7.2']
                ],
                'hidden': false
            },
            {
                'id2': 'caa2',
                'id1': '3.1.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '病程',
                'hidden': false
            },
            {
                'id2': 'caa3',
                'id1': '3.1.2',
                'type': 'radio',
                'title': '近一年服药',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.1.3', '3.1.4'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'caa4',
                'id1': '3.1.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '药物种类',
                'hidden': false
            },
            {
                'id2': 'caa5',
                'id1': '3.1.4',
                'type': 'radio',
                'title': '服药间断情况',
                'content': [
                    '规律',
                    '间断'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caa6',
                'id1': '3.1.5',
                'type': 'radio',
                'title': '血压控制情况',
                'content': [
                    '未检测',
                    '检测',
                    '不清楚血压水平'
                ],
                'hiddenlist': [
                    ['3.1.6.1', '3.1.6.2', '3.1.7.1', '3.1.7.2'],
                    [],
                    ['3.1.6.1', '3.1.6.2', '3.1.7.1', '3.1.7.2']
                ],
                'hidden': false
            },
            {
                'id2': 'caa7',
                'id1': '3.1.6.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '平素血压1',
                'hidden': false
            },
            {
                'id2': 'caa8',
                'id1': '3.1.6.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '平素血压2',
                'hidden': false
            },
            {
                'id2': 'caa9',
                'id1': '3.1.7.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '最高血压1',
                'hidden': false
            },
            {
                'id2': 'caa10',
                'id1': '3.1.7.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '最高血压2',
                'hidden': false
            },
            {
                'id2': 'caab1',
                'id1': '3.2',
                'type': 'radio',
                'title': '糖尿病',
                'content': [
                    '否',
                    '是',
                    '不详'
                ],
                'hiddenlist': [
                    ['3.2.1', '3.2.2', '3.2.3', '3.2.4', '3.2.5', '3.2.6', '3.2.7'],
                    [],
                    ['3.2.1', '3.2.2', '3.2.3', '3.2.4', '3.2.5', '3.2.6', '3.2.7']
                ],
                'hidden': false
            },
            {
                'id2': 'caab2',
                'id1': '3.2.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '病程',
                'hidden': false
            },
            {
                'id2': 'caab3',
                'id1': '3.2.2',
                'type': 'radio',
                'title': '糖尿病控制情况',
                'content': [
                    '未检测',
                    '检测',
                    '不清楚血糖水平'
                ],
                'hiddenlist': [
                    ['3.2.3'],
                    [],
                    ['3.2.3']
                ],
                'hidden': false
            },
            {
                'id2': 'caab4',
                'id1': '3.2.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '平素血糖,单位：mmol/l',
                'hidden': false
            },
            {
                'id2': 'caab5',
                'id1': '3.2.4',
                'type': 'radio',
                'title': '是否服药',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.2.5', '3.2.6', '3.2.7'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'caab6',
                'id1': '3.2.5',
                'type': 'radio',
                'title': '药物种类',
                'content': [
                    '口服药',
                    '胰岛素',
                    '两者均用'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caab8',
                'id1': '3.2.6',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '药物名称',
                'hidden': false
            },
            {
                'id2': 'caab9',
                'id1': '3.2.7',
                'type': 'radio',
                'title': '服药规律',
                'content': [
                    '规律',
                    '间断'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cac1',
                'id1': '3.3',
                'type': 'radio',
                'title': '异常脂蛋白',
                'content': [
                    '否',
                    '是',
                    '不详'
                ],
                'hiddenlist': [
                    ['3.3.1', '3.3.2', '3.3.3', '3.3.4'],
                    [],
                    ['3.3.1', '3.3.2', '3.3.3', '3.3.4']
                ],
                'hidden': false
            },
            {
                'id2': 'cac2',
                'id1': '3.3.1',
                'type': 'radio',
                'title': '类型',
                'content': [
                    '高甘油三脂血症',
                    '低密度脂蛋白血症',
                    '低高密度脂蛋白血症',
                    '高胆固醇'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cac3',
                'id1': '3.3.2',
                'type': 'radio',
                'title': '近1年服药',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.3.3', '3.3.4'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cac4',
                'id1': '3.3.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '药物种类',
                'hidden': false
            },
            {
                'id2': 'cac5',
                'id1': '3.3.4',
                'type': 'radio',
                'title': '服药规律',
                'content': [
                    '规律',
                    '间断'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cad1',
                'id1': '3.4',
                'type': 'radio',
                'title': '心脏病',
                'content': [
                    '否',
                    '是',
                    '不详'
                ],
                'hiddenlist': [
                    [
                        '3.4.1', '3.4.1.1', '3.4.1.2', '3.4.1.3', '3.4.1.4', '3.4.2', '3.4.2.1', '3.4.2.2', '3.4.2.3',
                        '3.4.2.4', '3.4.2.5', '3.4.3', '3.4.3.1', '3.4.3.2', '3.4.3.3', '3.4.3.4', '3.4.3.5', '3.4.4',
                        '3.4.4.1', '3.4.4.2', '3.4.4.3', '3.4.4.4', '3.4.4.5'
                    ],
                    [],
                    [
                        '3.4.1', '3.4.1.1', '3.4.1.2', '3.4.1.3', '3.4.1.4', '3.4.2', '3.4.2.1', '3.4.2.2', '3.4.2.3',
                        '3.4.2.4', '3.4.2.5', '3.4.3', '3.4.3.1', '3.4.3.2', '3.4.3.3', '3.4.3.4', '3.4.3.5', '3.4.4',
                        '3.4.4.1', '3.4.4.2', '3.4.4.3', '3.4.4.4', '3.4.4.5'
                    ]
                ],
                'hidden': false
            },
            {
                'id2': 'cada1',
                'id1': '3.4.1',
                'type': 'radio',
                'title': '先天性心脏病',
                'content': [
                    '否',
                    '是',
                    '不详'
                ],
                'hiddenlist': [
                    ['3.4.1.1', '3.4.1.2', '3.4.1.3', '3.4.1.4'],
                    [],
                    ['3.4.1.1', '3.4.1.2', '3.4.1.3', '3.4.1.4']
                ],
                'hidden': false
            },
            {
                'id2': 'cada2',
                'id1': '3.4.1.1',
                'type': 'radio',
                'title': '先天性心脏病类型',
                'content': [
                    '房间隔缺损',
                    '室间隔缺损',
                    '动脉导管未闭',
                    '其他'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cada3',
                'id1': '3.4.1.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '病程 单位：年',
                'hidden': false
            },
            {
                'id2': 'cada4',
                'id1': '3.4.1.3',
                'type': 'radio',
                'title': '是否治疗',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.4.1.4'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cada5',
                'id1': '3.4.1.4',
                'type': 'radio',
                'title': '服药手术情况',
                'content': [
                    '服药',
                    '手术'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cadb1',
                'id1': '3.4.2',
                'type': 'radio',
                'title': '冠心病',
                'content': [
                    '否',
                    '是',
                    '不详'
                ],
                'hiddenlist': [
                    ['3.4.2.1', '3.4.2.2', '3.4.2.3', '3.4.2.4', '3.4.2.5'],
                    [],
                    ['3.4.2.1', '3.4.2.2', '3.4.2.3', '3.4.2.4', '3.4.2.5']
                ],
                'hidden': false
            },
            {
                'id2': 'cadb2',
                'id1': '3.4.2.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '病程',
                'hidden': false
            },
            {
                'id2': 'cadb3',
                'id1': '3.4.2.2',
                'type': 'radio',
                'title': '冠心病类型',
                'content': [
                    '心绞痛',
                    '心肌梗死',
                    '无症状心肌缺血',
                    '缺血性心肌病',
                    '类型不详'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cadb4',
                'id1': '3.4.2.3',
                'type': 'radio',
                'title': '是否治疗',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.4.2.4', '3.4.2.5'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cadb5',
                'id1': '3.4.2.4',
                'type': 'radio',
                'title': '服药手术情况',
                'content': [
                    '服药',
                    '手术'
                ],
                'hiddenlist': [
                    [],
                    ['3.4.2.5']
                ],
                'hidden': false
            },
            {
                'id2': 'cadb6',
                'id1': '3.4.2.5',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '药物种类',
                'hidden': false
            },
            {
                'id2': 'cadc1',
                'id1': '3.4.3',
                'type': 'radio',
                'title': '心肌病',
                'content': [
                    '否',
                    '是',
                    '不详'
                ],
                'hiddenlist': [
                    ['3.4.3.1', '3.4.3.2', '3.4.3.3', '3.4.3.4', '3.4.3.5'],
                    [],
                    ['3.4.3.1', '3.4.3.2', '3.4.3.3', '3.4.3.4', '3.4.3.5']
                ],
                'hidden': false
            },
            {
                'id2': 'cadc2',
                'id1': '3.4.3.1',
                'type': 'radio',
                'title': '心肌病类型',
                'content': [
                    '扩张心肌病',
                    '肥厚型心脏病',
                    '限制型心脏病',
                    '其它'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cadc3',
                'id1': '3.4.3.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '病程 单位：年',
                'hidden': false
            },
            {
                'id2': 'cadc4',
                'id1': '3.4.3.3',
                'type': 'radio',
                'title': '是否治疗',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.4.3.4', '3.4.3.5'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cadc5',
                'id1': '3.4.3.4',
                'type': 'radio',
                'title': '服药手术情况',
                'content': [
                    '服药',
                    '手术'
                ],
                'hiddenlist': [
                    [],
                    ['3.4.3.5']
                ],
                'hidden': false
            },
            {
                'id2': 'cadc6',
                'id1': '3.4.3.5',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '药物种类',
                'hidden': false
            },
            {
                'id2': 'cade1',
                'id1': '3.4.4',
                'type': 'radio',
                'title': '心律失常',
                'content': [
                    '否',
                    '是',
                    '不详'
                ],
                'hiddenlist': [
                    ['3.4.4.1', '3.4.4.2', '3.4.4.3', '3.4.4.4', '3.4.4.5'],
                    [],
                    ['3.4.4.1', '3.4.4.2', '3.4.4.3', '3.4.4.4', '3.4.4.5']
                ],
                'hidden': false
            },
            {
                'id2': 'cade2',
                'id1': '3.4.4.1',
                'type': 'radio',
                'title': '心律失常类型',
                'content': [
                    '窦性心率失常',
                    '房性心率失常',
                    '房室交界性心率失常',
                    '室性心率失常',
                    '心脏传导阻滞',
                    '其它'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cade3',
                'id1': '3.4.4.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '病程 单位:年',
                'hidden': false
            },
            {
                'id2': 'cade4',
                'id1': '3.4.4.3',
                'type': 'radio',
                'title': '是否治疗',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.4.4.4', '3.4.4.5'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cade5',
                'id1': '3.4.4.4',
                'type': 'radio',
                'title': '服药手术情况',
                'content': [
                    '服药',
                    '手术'
                ],
                'hiddenlist': [
                    [],
                    ['3.4.4.5']
                ],
                'hidden': false
            },
            {
                'id2': 'cade6',
                'id1': '3.4.4.5',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '药物种类',
                'hidden': false
            },
            {
                'id2': 'cae',
                'id1': '3.5',
                'type': 'radio',
                'title': '脑血管疾病',
                'content': [
                    '无',
                    '有'
                ],
                'hiddenlist': [
                    [
                        '3.5.1', '3.5.1.1', '3.5.1.2', '3.5.1.3', '3.5.2', '3.5.2.1', '3.5.2.2', '3.5.3', '3.5.3.1',
                        '3.5.3.2', '3.5.3.3', '3.5.4'
                    ],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'caea1',
                'id1': '3.5.1',
                'type': 'radio',
                'title': '脑梗塞',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.5.1.1', '3.5.1.2', '3.5.1.3'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'caea2',
                'id1': '3.5.1.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '病程 单位：年',
                'hidden': false
            },
            {
                'id2': 'caea3',
                'id1': '3.5.1.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '发病次数',
                'hidden': false
            },
            {
                'id2': 'caea4',
                'id1': '3.5.1.3',
                'type': 'radio',
                'title': '是否偏瘫',
                'content': [
                    '是',
                    '否'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caeb1',
                'id1': '3.5.2',
                'type': 'radio',
                'title': 'TTA',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.5.2.1', '3.5.2.2'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'caeb2',
                'id1': '3.5.2.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '发作次数',
                'hidden': false
            },
            {
                'id2': 'caeb3',
                'id1': '3.5.2.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '每次发作时间',
                'hidden': false
            },
            {
                'id2': 'caec1',
                'id1': '3.5.3',
                'type': 'radio',
                'title': '脑出血',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.5.3.1', '3.5.3.2', '3.5.3.3'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'caec2',
                'id1': '3.5.3.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '病程',
                'hidden': false
            },
            {
                'id2': 'caec3',
                'id1': '3.5.3.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '次数',
                'hidden': false
            },
            {
                'id2': 'caec4',
                'id1': '3.5.3.3',
                'type': 'radio',
                'title': '是否偏瘫',
                'content': [
                    '是',
                    '否'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caed',
                'id1': '3.5.4',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '其它',
                'hidden': false
            },
            {
                'id2': 'cafa',
                'id1': '3.6',
                'type': 'radio',
                'title': '传染病史',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.6.1', '3.6.1.1', '3.6.1.2', '3.6.1.3', '3.6.2', '3.6.2.1', '3.6.2.2', '3.6.3'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cafb1',
                'id1': '3.6.1',
                'type': 'radio',
                'title': '肝炎',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.6.1.1', '3.6.1.2', '3.1.6.3'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cafb2',
                'id1': '3.6.1.1',
                'type': 'radio',
                'title': '肝炎类型',
                'content': [
                    '甲型',
                    '乙型',
                    '丙型',
                    '其它'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cafb3',
                'id1': '3.6.1.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '病程 单位：年',
                'hidden': false
            },
            {
                'id2': 'cafb4',
                'id1': '3.6.1.3',
                'type': 'radio',
                'title': '是否治疗',
                'content': [
                    '是',
                    '否'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cafc1',
                'id1': '3.6.2',
                'type': 'radio',
                'title': '结核',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.6.2.1', '3.6.2.2'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cafc2',
                'id1': '3.6.2.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '病程 单位：年',
                'hidden': false
            },
            {
                'id2': 'cafc3',
                'id1': '3.6.2.2',
                'type': 'radio',
                'title': '是否治疗',
                'content': [
                    '是',
                    '否'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cafc4',
                'id1': '3.6.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '其它',
                'hidden': false
            },
            {
                'id2': 'cag',
                'id1': '3.7',
                'type': 'radio',
                'title': '外伤',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.7.1', '3.7.2'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cag1',
                'id1': '3.7.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '外伤后卧床或制动时间 天',
                'hidden': false
            },
            {
                'id2': 'cag2',
                'id1': '3.7.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '外伤后几天发病',
                'hidden': false
            },
            {
                'id2': 'caha',
                'id1': '3.8',
                'type': 'radio',
                'title': '手术',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.8.1', '3.8.2', '3.8.3'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'caha1',
                'id1': '3.8.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '手术持续时间',
                'hidden': false
            },
            {
                'id2': 'caha2',
                'id1': '3.8.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '术后卧床几天',
                'hidden': false
            },
            {
                'id2': 'caha3',
                'id1': '3.8.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '术后几天发病',
                'hidden': false
            },
            {
                'id2': 'cahb',
                'id1': '3.8.4',
                'type': 'radio',
                'title': '骨科外伤',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.8.4.1', '3.8.4.2', '3.8.4.3', '3.8.4.4'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cahb1',
                'id1': '3.8.4.1',
                'type': 'radio',
                'title': '脊柱外伤',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahb2',
                'id1': '3.8.4.2',
                'type': 'radio',
                'title': '骨盆外伤',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahb3',
                'id1': '3.8.4.3',
                'type': 'radio',
                'title': '四肢骨折',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahb4',
                'id1': '3.8.4.4',
                'type': 'radio',
                'title': '头颅损伤',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahc',
                'id1': '3.8.5',
                'type': 'radio',
                'title': '其它部位外伤',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.8.5.1', '3.8.5.2', '3.8.5.3'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cahc1',
                'id1': '3.8.5.1',
                'type': 'radio',
                'title': '胸腹部损伤',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahc2',
                'id1': '3.8.5.2',
                'type': 'radio',
                'title': '内脏破裂',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahc3',
                'id1': '3.8.5.3',
                'type': 'radio',
                'title': '其他部位软组织损伤',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahd',
                'id1': '3.8.6',
                'type': 'radio',
                'title': '骨科手术类型',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.8.6.1', '3.8.6.2', '3.8.6.3', '3.8.6.4', '3.8.6.5'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cahd1',
                'id1': '3.8.6.1',
                'type': 'radio',
                'title': '髋、膝关节置换术',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahd2',
                'id1': '3.8.6.2',
                'type': 'radio',
                'title': '髋关节骨折手术',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahd3',
                'id1': '3.8.6.3',
                'type': 'radio',
                'title': '下肢骨折',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahd4',
                'id1': '3.8.6.4',
                'type': 'radio',
                'title': '膝关节镜手术',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahd5',
                'id1': '3.8.6.5',
                'type': 'radio',
                'title': '下肢石膏固定术',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahe',
                'id1': '3.8.7',
                'type': 'radio',
                'title': '其它手术类型',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    [
                        '3.8.7.1', '3.8.7.2', '3.8.7.3', '3.8.7.4', '3.8.7.5', '3.8.7.6', '3.8.7.7', '3.8.7.8',
                        '3.8.7.9', '3.8.7.9.1', '3.8.7.9.2', '3.8.7.9.3', '3.8.7.10', '3.8.7.11'
                    ],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cahe1',
                'id1': '3.8.7.1',
                'type': 'radio',
                'title': '脊髓损伤手术',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahe2',
                'id1': '3.8.7.2',
                'type': 'radio',
                'title': '泌尿外科',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahe3',
                'id1': '3.8.7.3',
                'type': 'radio',
                'title': '妇科手术',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahe4',
                'id1': '3.8.7.4',
                'type': 'radio',
                'title': '神经外科手术',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahe5',
                'id1': '3.8.7.5',
                'type': 'radio',
                'title': '腹腔镜外壳',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahe6',
                'id1': '3.8.7.6',
                'type': 'radio',
                'title': '下肢石膏固定手术',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahe7',
                'id1': '3.8.7.7',
                'type': 'radio',
                'title': '腹部手术',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahe8',
                'id1': '3.8.7.8',
                'type': 'radio',
                'title': '心胸外科手术',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahe9',
                'id1': '3.8.7.9',
                'type': 'radio',
                'title': '介入外科',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.8.7.9.1', '3.8.7.9.2', '3.8.7.9.3'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cahe9a',
                'id1': '3.8.7.9.1',
                'type': 'radio',
                'title': '射频消融术',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahe9b',
                'id1': '3.8.7.9.2',
                'type': 'radio',
                'title': '起搏器植入术',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahe9c',
                'id1': '3.8.7.9.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '其他',
                'hidden': false
            },
            {
                'id2': 'cahe10',
                'id1': '3.8.7.10',
                'type': 'radio',
                'title': '器官移植',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cahe11',
                'id1': '3.8.7.11',
                'type': 'radio',
                'title': '其他',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caia',
                'id1': '3.9',
                'type': 'radio',
                'title': '久坐生活方式',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.9.1', '3.9.2'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'caia1',
                'id1': '3.9.1',
                'type': 'radio',
                'title': '每天久坐几小时',
                'content': [
                    '>=6h/天',
                    '6-10h/天',
                    '10-14h/天',
                    '14h以上/天'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caiaa',
                'id1': '3.9.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '长期卧床时间多少天',
                'hidden': false
            },
            {
                'id2': 'caib',
                'id1': '3.10',
                'type': 'radio',
                'title': '长途旅行',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.10.1', '3.10.1.1', '3.10.2', '3.10.2.1', '3.10.3', '3.10.3.1'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'caiba',
                'id1': '3.10.1',
                'type': 'radio',
                'title': '汽车',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.10.1.1'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'caibb',
                'id1': '3.10.1.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '时间',
                'hidden': false
            },
            {
                'id2': 'caibc',
                'id1': '3.10.2',
                'type': 'radio',
                'title': '火车',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.10.2.1'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'caibd',
                'id1': '3.10.2.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '时间',
                'hidden': false
            },
            {
                'id2': 'caibe',
                'id1': '3.10.3',
                'type': 'radio',
                'title': '飞机',
                'content': [],
                'hiddenlist': [
                    ['3.10.3.1'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'caibf',
                'id1': '3.10.3.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '时间',
                'hidden': false
            },
            {
                'id2': 'caic',
                'id1': '3.11',
                'type': 'radio',
                'title': '其他久坐方式',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.11.1', '3.11.2', '3.11.3', '3.11.3.1'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'caica',
                'id1': '3.11.1',
                'type': 'radio',
                'title': '打麻将',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caicb',
                'id1': '3.11.2',
                'type': 'radio',
                'title': '长时间电脑操作',
                'content': [],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caice',
                'id1': '3.11.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '其他',
                'hidden': false
            },
            {
                'id2': 'caicc',
                'id1': '3.11.3.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '时间',
                'hidden': false
            },
            {
                'id2': 'caj',
                'id1': '3.12',
                'type': 'radio',
                'title': '肿瘤',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    [
                        '3.12.1', '3.12.2', '3.12.3', '3.12.4', '3.12.5', '3.12.6', '3.12.7', '3.12.8', '3.12.9',
                        '3.12.10', '3.12.11', '3.12.12',  '3.12.13', '3.12.14', '3.12.15', '3.12.16', '3.12.17', '3.13',
                        '3.13.1', '3.13.2', '3.13.3', '3.13.4', '3.13.5', '3.13.6', '3.13.7', '3.13.8'
                    ],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'caj1',
                'id1': '3.12.1',
                'type': 'radio',
                'title': '肿瘤类型/肺癌',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj2',
                'id1': '3.12.2',
                'type': 'radio',
                'title': '泌尿道癌',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj3',
                'id1': '3.12.3',
                'type': 'radio',
                'title': '胰腺癌',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj4',
                'id1': '3.14.4',
                'type': 'radio',
                'title': '结肠癌',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj5',
                'id1': '3.12.5',
                'type': 'radio',
                'title': '乳腺癌',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj6',
                'id1': '3.12.6',
                'type': 'radio',
                'title': '胃癌',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj7',
                'id1': '3.12.7',
                'type': 'radio',
                'title': '妇科肿瘤',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj8',
                'id1': '3.12.8',
                'type': 'radio',
                'title': '淋巴瘤',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj9',
                'id1': '3.12.9',
                'type': 'radio',
                'title': '胚胎肿瘤',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj10',
                'id1': '3.12.10',
                'type': 'radio',
                'title': '白血病',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj11',
                'id1': '3.12.11',
                'type': 'radio',
                'title': '肝癌',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj12',
                'id1': '3.12.12',
                'type': 'radio',
                'title': '胆管癌',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj13',
                'id1': '3.12.13',
                'type': 'radio',
                'title': '胆囊癌',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj14',
                'id1': '3.12.14',
                'type': 'radio',
                'title': '肾癌',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj15',
                'id1': '3.14.15',
                'type': 'radio',
                'title': '骨癌',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj16',
                'id1': '3.12.16',
                'type': 'radio',
                'title': '骨髓增值性疾病',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj17',
                'id1': '3.12.17',
                'type': 'radio',
                'title': '其他',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj17a',
                'id1': '3.13',
                'type': 'radio',
                'title': '肿瘤分期',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.13.1'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'caj18',
                'id1': '3.13.1',
                'type': 'radio',
                'title': '具体哪一期',
                'content': [],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj19',
                'id1': '3.13.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '病程年',
                'hidden': false
            },
            {
                'id2': 'caj20',
                'id1': '3.13.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '月',
                'hidden': false
            },
            {
                'id2': 'caj21',
                'id1': '3.13.4',
                'type': 'radio',
                'title': '手术治疗',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj22',
                'id1': '3.13.5',
                'type': 'radio',
                'title': '化疗',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj23',
                'id1': '3.13.6',
                'type': 'radio',
                'title': '放疗',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj24',
                'id1': '3.13.7',
                'type': 'radio',
                'title': '姑息治疗',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caj25',
                'id1': '3.13.8',
                'type': 'radio',
                'title': '介入治疗',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cak',
                'id1': '3.14',
                'type': 'radio',
                'title': '妊娠',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.14.1', '3.14.2', '3.14.3', '3.14.4'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cak1',
                'id1': '3.14.1',
                'type': 'radio',
                'title': '类型',
                'content': [
                    '初产妇',
                    '经产妇'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cak2',
                'id1': '3.14.2',
                'type': 'radio',
                'title': '发病时间',
                'content': [
                    '妊娠前3月',
                    '妊娠3月至围产期',
                    '围产期',
                    '产后'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cak3',
                'id1': '3.14.3',
                'type': 'radio',
                'title': '生产方式',
                'content': [
                    '顺产',
                    '剖腹产'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cak4',
                'id1': '3.14.4',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '产后卧床时间',
                'hidden': false
            },
            {
                'id2': 'cal1',
                'id1': '3.15',
                'type': 'radio',
                'title': '肢体活动障碍',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.15.1', '3.15.2', '3.15.3', '3.15.4', '3.15.5', '3.15.6', '3.15.7', '3.15.8', '3.15.8.1'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cal2',
                'id1': '3.15.1',
                'type': 'radio',
                'title': '原因',
                'content': [
                    '外伤致',
                    '脑卒中',
                    '脑出血致',
                    '其他'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cal3',
                'id1': '3.15.2',
                'type': 'radio',
                'title': '类型',
                'content': [
                    '肢体活动不灵',
                    '肢体瘫痪'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cal4',
                'id1': '3.15.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '肌力 单位：级',
                'hidden': false
            },
            {
                'id2': 'cal10',
                'id1': '3.15.4',
                'type': 'radio',
                'title': '腱反射',
                'content': [
                    '亢进',
                    '减低'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cal5',
                'id1': '3.15.5',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '卧床时间年',
                'hidden': false
            },
            {
                'id2': 'cal6',
                'id1': '3.15.6',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '卧床时间月',
                'hidden': false
            },
            {
                'id2': 'cal7',
                'id1': '3.15.7',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '卧床时间天',
                'hidden': false
            },
            {
                'id2': 'cal8',
                'id1': '3.15.8',
                'type': 'radio',
                'title': '瘫痪护理',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.15.8.1'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cal9',
                'id1': '3.15.8.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '翻身拍背次数',
                'hidden': false
            },
            {
                'id2': 'cam1',
                'id1': '3.16',
                'type': 'radio',
                'title': '自身免疫性疾病',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    [
                        '3.16.1', '3.16.2', '3.16.3', '3.16.4', '3.16.5', '3.16.6', '3.16.7', '3.16.8', '3.16.9',
                        '3.16.10'
                    ],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cam2',
                'id1': '3.16.1',
                'type': 'radio',
                'title': '肾病综合征',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cam3',
                'id1': '3.16.2',
                'type': 'radio',
                'title': '系统性红斑狼疮',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cam4',
                'id1': '3.16.3',
                'type': 'radio',
                'title': '硬皮病',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cam5',
                'id1': '3.16.4',
                'type': 'radio',
                'title': '干燥综合征',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cam6',
                'id1': '3.16.5',
                'type': 'radio',
                'title': '自身免疫性溶血性贫血',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cam7',
                'id1': '3.16.6',
                'type': 'radio',
                'title': '类风湿性关节炎',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cam8',
                'id1': '3.16.7',
                'type': 'radio',
                'title': '痛风',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cam9',
                'id1': '3.16.8',
                'type': 'radio',
                'title': '强直性脊柱炎',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cam10',
                'id1': '3.16.9',
                'type': 'radio',
                'title': '白塞氏综合征',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cam11',
                'id1': '3.16.10',
                'type': 'radio',
                'title': '其他',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'can1',
                'id1': '3.17',
                'type': 'radio',
                'title': '目前特殊药物使用',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.17.1', '3.17.2', '3.17.3', '3.17.4', '3.17.5', '3.17.6', '3.17.6.1', '3.17.6.2'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'can2',
                'id1': '3.17.1',
                'type': 'radio',
                'title': '糖皮质激素',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'can3',
                'id1': '3.17.2',
                'type': 'radio',
                'title': '口服避孕药',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'can4',
                'id1': '3.17.3',
                'type': 'radio',
                'title': '雌激素',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'can5',
                'id1': '3.17.4',
                'type': 'radio',
                'title': '精神类用药',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'can6',
                'id1': '3.17.5',
                'type': 'radio',
                'title': '其他药物',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'can7',
                'id1': '3.17.6',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '药物使用时间年',
                'hidden': false
            },
            {
                'id2': 'can8',
                'id1': '3.17.6.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '药物使用时间月',
                'hidden': false
            },
            {
                'id2': 'can9',
                'id1': '3.17.6.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '药物使用时间天',
                'hidden': false
            },
            {
                'id2': 'cao1',
                'id1': '3.18',
                'type': 'radio',
                'title': '既往静脉血栓栓塞性疾病病史',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.18.1', '3.18.2', '3.18.3', '3.18.4'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cao2',
                'id1': '3.18.1',
                'type': 'radio',
                'title': '下肢深静脉血栓形成 ',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cao3',
                'id1': '3.18.2',
                'type': 'radio',
                'title': '肺栓塞',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cao4',
                'id1': '3.18.3',
                'type': 'radio',
                'title': '其他部位静脉血栓',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cao5',
                'id1': '3.18.4',
                'type': 'radio',
                'title': '家族性血栓病遗传病史',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cap1',
                'id1': '3.19',
                'type': 'radio',
                'title': '血型',
                'content': [
                    '不详',
                    'A型',
                    'B型',
                    'AB型',
                    'O型'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cap2',
                'id1': '3.19.1',
                'type': 'radio',
                'title': '阴性阳性',
                'content': [
                    '不详',
                    'Rh(+)',
                    'Rh(-)'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caq',
                'id1': '3.20',
                'type': 'radio',
                'title': '静脉内留置导管',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    [
                        '3.20.1', '3.20.1.1', '3.20.1.2', '3.20.1.3', '3.20.2', '3.20.3', '3.20.3.1', '3.20.4.1',
                        '3.20.4.2', '3.20.4.3', '3.20.4.4', '3.20.4.5'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'caq1',
                'id1': '3.20.1',
                'type': 'radio',
                'title': '中心静脉插管',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caq1a',
                'id1': '3.20.1.1',
                'type': 'radio',
                'title': '颈内静脉',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caq1b',
                'id1': '3.20.1.2',
                'type': 'radio',
                'title': '锁骨下静脉',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caq1c',
                'id1': '3.20.1.3',
                'type': 'radio',
                'title': '股静脉',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caq2',
                'id1': '3.20.2',
                'type': 'radio',
                'title': '外周静脉插管',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caq3',
                'id1': '3.20.3',
                'type': 'radio',
                'title': '其他部位',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.20.3.1'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'caq3a',
                'id1': '3.20.3.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '其他部位名称',
                'hidden': false
            },
            {
                'id2': 'caq4',
                'id1': '3.20.4.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '导管口径',
                'hidden': false
            },
            {
                'id2': 'caq5a',
                'id1': '3.20.4.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '导管放置时间年',
                'hidden': false
            },
            {
                'id2': 'caq5b',
                'id1': '3.20.4.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '导管放置时间月',
                'hidden': false
            },
            {
                'id2': 'caq5c',
                'id1': '3.20.4.4',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '导管放置时间天',
                'hidden': false
            },
            {
                'id2': 'caq6',
                'id1': '3.20.4.5',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '经导管给药成分',
                'hidden': false
            },
            {
                'id2': 'car',
                'id1': '3.21',
                'type': 'radio',
                'title': '血管相关性疾病',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    [
                        '3.21.1', '3.21.2', '3.21.3', '3.21.4', '3.21.5', '3.21.6', '3.21.7', '3.21.8', '3.21.9',
                        '3.21.10', '3.21.10.1', '3.21.11', '3.21.11.1', '3.21.11.2', '3.21.11.3'
                    ],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'car1',
                'id1': '3.21.1',
                'type': 'radio',
                'title': '腹主动脉瘤',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'car2',
                'id1': '3.21.2',
                'type': 'radio',
                'title': '血栓闭塞性脉管炎',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'car3',
                'id1': '3.21.3',
                'type': 'radio',
                'title': '血栓性浅静脉炎',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'car4',
                'id1': '3.21.4',
                'type': 'radio',
                'title': '下肢静脉曲张',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'car5',
                'id1': '3.21.5',
                'type': 'radio',
                'title': '动脉粥样硬化',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'car5a',
                'id1': '3.21.6',
                'type': 'radio',
                'title': '下肢动脉粥样硬化',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'car5b',
                'id1': '3.21.7',
                'type': 'radio',
                'title': '颈动脉粥样硬化',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'car5c',
                'id1': '3.21.8',
                'type': 'radio',
                'title': '冠状动脉粥样硬化',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'car7',
                'id1': '3.21.9',
                'type': 'radio',
                'title': '不详',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'car8a',
                'id1': '3.21.10',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '病程年',
                'hidden': false
            },
            {
                'id2': 'car8b',
                'id1': '3.21.10.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '病程月',
                'hidden': false
            },
            {
                'id2': 'car9',
                'id1': '3.21.11',
                'type': 'radio',
                'title': '治疗',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.21.11.1', '3.21.11.2', '3.21.11.3'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'car9a',
                'id1': '3.21.11.1',
                'type': 'radio',
                'title': '手术',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'car9b',
                'id1': '3.21.11.2',
                'type': 'radio',
                'title': '药物',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'car9c',
                'id1': '3.21.11.3',
                'type': 'radio',
                'title': '其他治疗',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cas',
                'id1': '3.22',
                'type': 'radio',
                'title': '月经生育史',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    [
                        '3.22.1', '3.22.1.1', '3.22.1.2', '3.22.1.3', '3.22.2', '3.22.2.1', '3.22.3', '3.22.3.1',
                        '3.22.3.2', '3.22.4', '3.22.5', '3.22.6', '3.22.6.1'
                    ],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'casa',
                'id1': '3.22.1',
                'type': 'radio',
                'title': '月经史',
                'content': [
                    '规律',
                    '不规律'
                ],
                'hiddenlist': [
                    ['3.22.1.1', '3.22.1.2', '3.22.1.3'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'casa1',
                'id1': '3.22.1.1',
                'type': 'radio',
                'title': '痛经',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'casa2',
                'id1': '3.22.1.2',
                'type': 'radio',
                'title': '经量异常',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'casa3',
                'id1': '3.22.1.3',
                'type': 'radio',
                'title': '颜色异常',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'casb1',
                'id1': '3.22.2',
                'type': 'radio',
                'title': '是否绝经',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.22.2.1'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'casb2',
                'id1': '3.22.2.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '绝经年龄',
                'hidden': false
            },
            {
                'id2': 'casc',
                'id1': '3.22.3',
                'type': 'radio',
                'title': '是否激素替代治疗',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.22.3.1', '3.22.3.2'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'casc1',
                'id1': '3.22.3.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '药物使用时间年',
                'hidden': false
            },
            {
                'id2': 'casc2',
                'id1': '3.22.3.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '药物使用时间月',
                'hidden': false
            },
            {
                'id2': 'casd1',
                'id1': '3.22.4',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '生育史，孕',
                'hidden': false
            },
            {
                'id2': 'casd2',
                'id1': '3.22.5',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '生育史，产',
                'hidden': false
            },
            {
                'id2': 'casd3',
                'id1': '3.22.6',
                'type': 'radio',
                'title': '有无流产史',
                'content': [
                    '无',
                    '有'
                ],
                'hiddenlist': [
                    ['3.22.6.1'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'casd4',
                'id1': '3.22.6.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '流产次数',
                'hidden': false
            },
            {
                'id2': 'cat',
                'id1': '3.23',
                'type': 'radio',
                'title': '输血',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    [
                        '3.23.1.1', '3.23.1.2', '3.23.1.3', '3.23.1.4', '3.23.1.5', '3.23.1.6', '3.23.1.6.a',
                        '3.23.1.7', '3.23.1.7.a', '3.23.2', '3.23.2.a'
                    ],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cat1',
                'id1': '3.23.1.1',
                'type': 'radio',
                'title': '输血原因:外伤',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cat2',
                'id1': '3.23.1.2',
                'type': 'radio',
                'title': '输血原因：贫血',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cat3',
                'id1': '3.23.1.3',
                'type': 'radio',
                'title': '白血病',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cat4',
                'id1': '3.23.1.4',
                'type': 'radio',
                'title': '血友病',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cat5',
                'id1': '3.23.1.5',
                'type': 'radio',
                'title': '感染',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cat6',
                'id1': '3.23.1.6',
                'type': 'radio',
                'title': '其它血液系统疾病',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.23.1.6.a'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cat6a',
                'id1': '3.23.1.6.a',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '其它血液系统疾病名称',
                'hidden': false
            },
            {
                'id2': 'cat7',
                'id1': '3.23.1.7',
                'type': 'radio',
                'title': '其它原因',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.23.1.7.a'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cat7a',
                'id1': '3.23.1.7.a',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '具体原因',
                'hidden': false
            },
            {
                'id2': 'cat8a',
                'id1': '3.23.2',
                'type': 'radio',
                'title': '输血成分',
                'content': [
                    '全血',
                    '红细胞',
                    '血浆',
                    '血小板',
                    '不详'
                ],
                'hiddenlist': [
                    [],
                    [],
                    [],
                    [],
                    ['3.23.2.a']
                ],
                'hidden': false
            },
            {
                'id2': 'cat8b',
                'id1': '3.23.2.a',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '输血量 单位：ml',
                'hidden': false
            },
            {
                'id2': 'cau',
                'id1': '3.24',
                'type': 'radio',
                'title': '感染性疾病',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    [
                        '3.24.1.1', '3.24.1.2', '3.24.1.3', '3.24.1.4', '3.24.1.5', '3.24.2.1', '3.24.2.2', '3.24.2.3',
                        '3.24.2.4', '3.24.2.5', '3.24.3', '3.24.3.1', '3.24.3.2'
                    ],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'caua1',
                'id1': '3.24.1.1',
                'type': 'radio',
                'title': '感染部位/呼吸道',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caua2',
                'id1': '3.24.1.2',
                'type': 'radio',
                'title': '上消化道',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caua3',
                'id1': '3.24.1.3',
                'type': 'radio',
                'title': '肠道',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caua4',
                'id1': '3.24.1.4',
                'type': 'radio',
                'title': '泌尿生殖系统',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caua5',
                'id1': '3.24.1.5',
                'type': 'radio',
                'title': '其他',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caub1',
                'id1': '3.24.2.1',
                'type': 'radio',
                'title': '感染类型是否是细菌感染',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caub2',
                'id1': '3.24.2.2',
                'type': 'radio',
                'title': '感染类型是否是病毒感染',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caub3',
                'id1': '3.24.2.3',
                'type': 'radio',
                'title': '感染类型是否是寄生虫感染',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caub4',
                'id1': '3.24.2.4',
                'type': 'radio',
                'title': '感染类型是否是支原体衣原体感染',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caub5',
                'id1': '3.24.2.5',
                'type': 'radio',
                'title': '感染类型是否是其他感染',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cauc1',
                'id1': '3.24.3',
                'type': 'radio',
                'title': '应用药物',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    ['3.24.3.1', '3.24.3.2'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cauc2',
                'id1': '3.24.3.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '种类',
                'hidden': false
            },
            {
                'id2': 'cauc3',
                'id1': '3.24.3.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '疗程',
                'hidden': false
            },
            {
                'id2': 'cav',
                'id1': '3.25',
                'type': 'radio',
                'title': '其它',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [
                    [
                        '3.25.1', '3.25.2', '3.25.3', '3.25.4', '3.25.5', '3.25.6', '3.25.6.a', '3.25.7', '3.25.7.a',
                        '3.25.8', '3.25.9', '3.25.10', '3.25.11'
                    ],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'cav1',
                'id1': '3.25.1',
                'type': 'radio',
                'title': '下肢脓肿',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cav2',
                'id1': '3.25.2',
                'type': 'radio',
                'title': '吸毒',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cav3',
                'id1': '3.25.3',
                'type': 'radio',
                'title': '下肢不洁净注射',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cav4',
                'id1': '3.25.4',
                'type': 'radio',
                'title': '静脉注入硬化剂',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cav5',
                'id1': '3.25.5',
                'type': 'radio',
                'title': '下肢受凉',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cav6',
                'id1': '3.25.6',
                'type': 'radio',
                'title': '烧伤',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cav6a',
                'id1': '3.25.6.a',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '烧伤面积 %',
                'hidden': false
            },
            {
                'id2': 'cav7',
                'id1': '3.25.7',
                'type': 'radio',
                'title': '心力衰竭',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cav7a',
                'id1': '3.25.7.a',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '心功能 级',
                'hidden': false
            },
            {
                'id2': 'cav8',
                'id1': '3.25.8',
                'type': 'radio',
                'title': '慢性呼吸系统疾病',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cav9',
                'id1': '3.25.9',
                'type': 'radio',
                'title': '炎症性肠病',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cav10',
                'id1': '3.25.10',
                'type': 'radio',
                'title': '肝肾功能不全',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'cav11',
                'id1': '3.25.11',
                'type': 'radio',
                'title': '其他',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'caw',
                'id1': '3.26',
                'type': 'radio',
                'title': '无明显诱因',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            }
        ],
        [
            {
                'id2': 'da1',
                'id1': '4.1.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '症状出现时间',
                'hidden': false
            },
            {
                'id2': 'da2',
                'id1': '4.1.2',
                'type': 'radio',
                'title': '发病时间',
                'content': ['首次发生', '复发'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'da3',
                'id1': '4.1.3',
                'type': 'radio',
                'title': '症状肢体',
                'content': ['双侧肢体', '单侧肢体'],
                'hiddenlist': [['4.1.3.1'], []],
                'hidden': false
            },
            {
                'id2': 'd31',
                'id1': '4.1.3.1',
                'type': 'radio',
                'title': '单侧肢体 ',
                'content': ['左', '右'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'da4a',
                'id1': '4.1.4',
                'type': 'radio',
                'title': '下肢肿胀',
                'content': ['轻度', '中度', '重度'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'da4b',
                'id1': '4.1.4.1',
                'type': 'radio',
                'title': '张力',
                'content': ['1+', '2+', '3+', '4+'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'da5',
                'id1': '4.1.5',
                'type': 'radio',
                'title': '下肢疼痛',
                'content': ['轻微疼痛', '疼痛明显，尚能忍受', '不能忍受', '无疼痛'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'da6',
                'id1': '4.1.6',
                'type': 'radio',
                'title': '上肢疼痛',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'da7',
                'id1': '4.1.7',
                'type': 'radio',
                'title': '腹痛、腹胀',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'da8',
                'id1': '4.1.8',
                'type': 'radio',
                'title': '发热',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'da9',
                'id1': '4.1.9',
                'type': 'radio',
                'title': '呼吸困难',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'da10',
                'id1': '4.1.10',
                'type': 'radio',
                'title': '胸闷气短',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'da11a',
                'id1': '4.1.11',
                'type': 'radio',
                'title': '咳血',
                'content': ['是', '否'],
                'hiddenlist': [[], ['4.1.11.1']],
                'hidden': false
            },
            {
                'id2': 'da11b',
                'id1': '4.1.11.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '咳血量',
                'hidden': false
            },
            {
                'id2': 'da12',
                'id1': '4.1.12',
                'type': 'radio',
                'title': '胸痛',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'da13a',
                'id1': '4.1.13',
                'type': 'radio',
                'title': '晕厥',
                'content': ['是', '否'],
                'hiddenlist': [[], ['4.1.13.1']],
                'hidden': false
            },
            {
                'id2': 'da13b',
                'id1': '4.1.13.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '发作次数',
                'hidden': false
            },
            {
                'id2': 'da14a',
                'id1': '4.1.14',
                'type': 'radio',
                'title': '咳嗽咳痰',
                'content': ['是', '否'],
                'hiddenlist': [[], ['4.1.14.1']],
                'hidden': false
            },
            {
                'id2': 'da14b',
                'id1': '4.1.14.1',
                'type': 'radio',
                'title': '咳痰症状',
                'content': ['痰白色', '黑色', '干咳', '黄疸', '其它'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'da15',
                'id1': '4.1.15',
                'type': 'radio',
                'title': '腹痛',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'da16',
                'id1': '4.1.16',
                'type': 'radio',
                'title': '发热大汗',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'da17',
                'id1': '4.1.17',
                'type': 'radio',
                'title': '面色苍白',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'da18',
                'id1': '4.1.18',
                'type': 'radio',
                'title': '恶心呕吐',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db1a',
                'id1': '4.2.1.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '生命体征 T（℃）',
                'hidden': false
            },
            {
                'id2': 'db1b',
                'id1': '4.2.1.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': 'P 次/分',
                'hidden': false
            },
            {
                'id2': 'db1c',
                'id1': '4.2.1.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': 'R 次/分',
                'hidden': false
            },
            {
                'id2': 'db2a',
                'id1': '4.2.2.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '血压1',
                'hidden': false
            },
            {
                'id2': 'db2b',
                'id1': '4.2.2.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '血压2',
                'hidden': false
            },
            {
                'id2': 'db3a',
                'id1': '4.2.3.1',
                'type': 'radio',
                'title': '听诊 正常',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db3b',
                'id1': '4.2.3.2',
                'type': 'radio',
                'title': '听诊 湿啰音',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db3c',
                'id1': '4.2.3.3',
                'type': 'radio',
                'title': '听诊哮鸣音',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db3d',
                'id1': '4.2.3.4',
                'type': 'radio',
                'title': '听诊肺血管杂音',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db3e',
                'id1': '4.2.3.5',
                'type': 'radio',
                'title': 'P2亢进',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db3f',
                'id1': '4.2.3.6',
                'type': 'radio',
                'title': '呼吸音减弱',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db4',
                'id1': '4.2.4',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '运动耐量',
                'hidden': false
            },
            {
                'id2': 'db5',
                'id1': '4.2.5',
                'type': 'radio',
                'title': '口唇青紫',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db6',
                'id1': '4.2.6',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '6分钟步行实验',
                'hidden': false
            },
            {
                'id2': 'db7',
                'id1': '4.2.7',
                'type': 'radio',
                'title': '呼吸困难评级',
                'content': ['1', '2', '3', '4'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db8a',
                'id1': '4.2.8.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '下肢周径差值 上(cm)',
                'hidden': false
            },
            {
                'id2': 'db8b',
                'id1': '4.2.8.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '下肢周径差值 下(cm)',
                'hidden': false
            },
            {
                'id2': 'db9',
                'id1': '4.2.9',
                'type': 'radio',
                'title': '皮肤色泽改变',
                'content': ['发红', '青紫', '发白', '色素沉着', '发黑', '无改变'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db10',
                'id1': '4.2.10',
                'type': 'radio',
                'title': '下肢浅表静脉隆起',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db11',
                'id1': '4.2.11',
                'type': 'radio',
                'title': '患肢是否肤色发青',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db12',
                'id1': '4.2.12',
                'type': 'radio',
                'title': '患肢动脉搏动',
                'content': ['减弱', '正常', '消失'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db13',
                'id1': '4.2.13',
                'type': 'radio',
                'title': '腹壁静脉曲张',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db14',
                'id1': '4.2.14',
                'type': 'radio',
                'title': '胸壁静脉曲张',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db15',
                'id1': '4.2.15',
                'type': 'radio',
                'title': '其余部位水肿',
                'content': ['臀部', '趾骨区', '外阴部肿胀', '无'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db16a',
                'id1': '4.2.16',
                'type': 'radio',
                'title': '静脉性跛行',
                'content': ['是', '否'],
                'hiddenlist': [[], ['4.2.16.1']],
                'hidden': false
            },
            {
                'id2': 'db16b',
                'id1': '4.2.16.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '静脉性跛行 m',
                'hidden': false
            },
            {
                'id2': 'db17',
                'id1': '4.2.17.1',
                'type': 'radio',
                'title': '患肢皮温升高',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db17a',
                'id1': '4.2.17.2',
                'type': 'radio',
                'title': '患肢皮温降低',
                'content': ['是', '否'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db18',
                'id1': '4.2.18',
                'type': 'radio',
                'title': '沿深静脉症状',
                'content': ['压痛', '红斑', '发绀', '无'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db19a',
                'id1': '4.2.19',
                'type': 'radio',
                'title': '局部疼痛',
                'content': ['是', '否'],
                'hiddenlist': [[], ['4.2.19.1']],
                'hidden': false
            },
            {
                'id2': 'db19b',
                'id1': '4.2.19.1',
                'type': 'radio',
                'title': '压痛部位',
                'content': ['小腿肌肉', '腘窝', '内收肌肉', '腹股沟下方'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db20',
                'id1': '4.2.20',
                'type': 'radio',
                'title': 'homans征',
                'content': ['+', '-'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db21',
                'id1': '4.2.21',
                'type': 'radio',
                'title': 'neuhof征',
                'content': ['+', '-'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'db22',
                'id1': '4.2.22',
                'type': 'radio',
                'title': '肠鸣音',
                'content': ['正常', '活跃', '亢进', '减弱', '消失'],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': ['dc1', 'dc2', 'dc3', 'dc4', 'dc5', 'dc6', 'dc7', 'dc8', 'dc9', 'dc9a', 'dc10'],
                'id1': '4.3',
                'type': 'singletable',
                'title': '发生深静脉(血栓形成)可能性的临床评估模型 Wels评分（①1分 ②2分）',
                'coltitle': ['危险因素', '临床评分'],
                'rawname': [
                    '合并癌症（治疗中或治疗后前6个月内或姑息治疗）',
                    '瘫痪、局部麻痹或近期下肢石膏固定史',
                    '近期卧床>3d或手术后四周内',
                    '炎深静脉走行的局限性压痛',
                    '整条腿肿',
                    '小腿周径肿胀侧较正常侧>3cm（胫骨结节下10cm处测量）',
                    '限于患肢的凹陷性水肿',
                    '浅静脉显现（除外静脉曲张）',
                    '有可替换的其他诊断,或可能性大于DVT的诊断',
                    '下肢静脉血栓病史',
                    '总分'
                ],
                'bottomTitle': '这是一条测试',
                'hidden': false
            },
            {
                'id2': ['dea1', 'deb1', 'dec1', 'ded1', 'dee1', 'def1', 'deg1', 'deh1', 'dei1', 'dej1', 'dek1', 'del1', 'dem1'],
                'id1': '4.4.1',
                'type': 'singletable',
                'title': 'PESI评分表原始版',
                'coltitle': ['内容', ' '],
                'rawname': [
                    '年龄',
                    '性别',
                    '心率',
                    '肿瘤或正在接受化疗',
                    '心衰',
                    '慢性肺部疾病',
                    '收缩压',
                    '呼吸频率',
                    '体温',
                    '神志',
                    '动脉血氧饱和度',
                    'PESI得分',
                    'PESI分级'
                ],
                'bottomTitle': '注： PESI分级标准： <= 65分为1级； 66-85分为2级； 86-105分为3级； 106-125分为4级， >125分为5级' +
                '0分 = 30天死亡率1%； >=1 分 = 30天死亡率10.9%',
                'hidden': false
            },
            {
                'id2': ['dea2', 'dec2', 'ded2', 'dee2', 'deg2', 'dek2', 'del2', 'dem2'],
                'id1': '4.4.2',
                'type': 'singletable',
                'title': 'PESI评分表简化版',
                'coltitle': ['内容', ' '],
                'rawname': [
                    '年龄',
                    '心率',
                    '肿瘤或正在接受化疗',
                    '心衰',
                    '收缩压',
                    '动脉血氧饱和度',
                    'PESI得分',
                    'PESI分级'
                ],
                'bottomTitle': '',
                'hidden': false
            },
            {
                'id2': ['dd1', 'dd2', 'dd3', 'dd4', 'dd5', 'dd6', 'dd7', 'dd8'],
                'id1': '4.5.1',
                'type': 'singletable',
                'title': 'Wells评分表原始版',
                'coltitle': ['危险因素', '临床评分'],
                'rawname': [
                    'DVT的临床症状和体征（水肿和疼痛）',
                    '心率>100次/min',
                    '连续卧床3d以上，或4周内曾行外科手术',
                    '曾患DVT或PE',
                    '与其它诊断相比，PE是可能或更可能的诊断',
                    '咯血',
                    '癌症活动期（正在治疗或6个月前治疗过，或姑息治疗）',
                    '总分'
                ],
                'bottomTitle': '',
                'hidden': false
            },
            {
                'id2': ['dd1a', 'dd2a', 'dd3a', 'dd4a', 'dd5a', 'dd6a', 'dd7a', 'dd8a'],
                'id1': '4.5.2',
                'type': 'singletable',
                'title': 'Wells评分表简化版',
                'coltitle': ['危险因素', '临床评分'],
                'rawname': [
                    'DVT的临床症状和体征（水肿和疼痛）',
                    '心率>100次/min',
                    '连续卧床3d以上，或4周内曾行外科手术',
                    '曾患DVT或PE',
                    '与其它诊断相比，PE是可能或更可能的诊断',
                    '咯血',
                    '癌症活动期（正在治疗或6个月前治疗过，或姑息治疗）',
                    '总分'
                ],
                'bottomTitle': '',
                'hidden': false
            },
            {
                'id2': ['dd9', 'dd10', 'dd11', 'dd12', 'dd13', 'dd14', 'dd15', 'dd16', 'dd17', 'dd18'],
                'id1': '4.6.1',
                'type': 'singletable',
                'title': 'Geneva评分表原始版',
                'coltitle': ['危险因素', '临床评分'],
                'rawname': [
                    '单侧下肢疼痛',
                    '下肢深静脉触痛及单侧水肿',
                    '年龄>65岁',
                    '心率75-94',
                    '心率>95',
                    '一个月内手术（全麻）骨折（下肢）',
                    '曾患DVT或PE',
                    '咯血',
                    '恶性肿瘤（实体或血液， 目前活动或者1年内治愈）',
                    '总分'
                ],
                'bottomTitle': '',
                'hidden': false
            },
            {
                'id2': ['dd9a', 'dd10a', 'dd11a', 'dd12a', 'dd13a', 'dd14a', 'dd15a', 'dd16a', 'dd17a', 'dd18a'],
                'id1': '4.6.2',
                'type': 'table462',
                'title': 'Geneva评分表简化版',
                'coltitle': ['危险因素', '临床评分'],
                'rawname': [
                    '单侧下肢疼痛',
                    '下肢深静脉触痛及单侧水肿',
                    '年龄>65岁',
                    '心率75-94',
                    '心率>95',
                    '一个月内手术（全麻）骨折（下肢）',
                    '曾患DVT或PE',
                    '咯血',
                    '恶性肿瘤（实体或血液， 目前活动或者1年内治愈）',
                    '总分'
                ],
                'bottomTitle': '',
                'hidden': false
            }
        ],
        [
            {
                'id2': 'ea',
                'id1': '5.1',
                'type': 'radio',
                'title': '下肢静脉超声',
                'content': ['否', '是'],
                'hiddenlist': [['5.1.1'], []],
                'hidden': false
            },
            {
                'id2': '',
                'id1': '5.1.1',
                'type': 'table51',
                'hidden': false
            },
            {
                'id2': 'eb',
                'id1': '5.2',
                'type': 'radio',
                'title': '心电图',
                'content': ['否', '是'],
                'hiddenlist': [['5.2.1'], []],
                'hidden': false
            },
            {
                'id2': '',
                'id1': '5.2.1',
                'type': 'table52',
                'hidden': false
            },
            {
                'id2': 'ec',
                'id1': '5.3',
                'type': 'radio',
                'title': '其他检查',
                'content': ['否', '是'],
                'hiddenlist': [['5.3.1'], []],
                'hidden': false
            },
            {
                'id2': '',
                'id1': '5.3.1',
                'type': 'table53',
                'hidden': false
            },
            {
                'id2': 'ed',
                'id1': '5.4',
                'type': 'radio',
                'title': '心脏超声',
                'content': ['否', '是'],
                'hiddenlist': [['5.4.1'], []],
                'hidden': false
            },
            {
                'id2': '',
                'id1': '5.4.1',
                'type': 'table54',
                'hidden': false
            },
            {
                'id2': '',
                'id1': '5.5.1',
                'title': '血常规',
                'hidden': false,
                'type': 'table551'
            },
            {
                'id2': '',
                'id1': '5.5.2',
                'title': '尿、粪常规(1.+- 2.+ 3.++ 4.+++或以上)',
                'hidden': false,
                'type': 'table552'
            },
            {
                'id2': '',
                'id1': '5.5.3',
                'title': '凝血项目',
                'hidden': false,
                'type': 'table553'
            },
            {
                'id2': '',
                'id1': '5.5.4',
                'title': '肝功',
                'hidden': false,
                'type': 'table554'
            },
            {
                'id2': '',
                'id1': '5.5.5',
                'title': '肾功、电解质',
                'hidden': false,
                'type': 'table555'
            },
            {
                'id2': '',
                'id1': '5.5.6',
                'title': '血脂',
                'hidden': false,
                'type': 'table556'
            },
            {
                'id2': 'eeg',
                'id1': '5.5.7',
                'type': 'radio',
                'title': '血气分析',
                'content': ['否', '是'],
                'hiddenlist': [['5.5.7.1'], []],
                'hidden': false
            },
            {
                'id2': '',
                'id1': '5.5.7.1',
                'hidden': false,
                'type': 'table557'
            },
            {
                'id2': 'eeh',
                'id1': '5.5.8',
                'type': 'radio',
                'title': '细胞免疫',
                'content': ['否', '是'],
                'hiddenlist': [['5.5.8.1'], []],
                'hidden': false
            },
            {
                'id2': '',
                'id1': '5.5.8.1',
                'hidden': false,
                'type': 'table558'
            },
            {
                'id2': '',
                'id1': '5.5.9',
                'hidden': false,
                'type': 'table559'
            },
            {
                'id2': 'eeig',
                'id1': '5.5.10',
                'type': 'radio',
                'title': '心肌酶谱',
                'content': ['否', '是'],
                'hiddenlist': [['5.5.10.1'], []],
                'hidden': false
            },
            {
                'id2': '',
                'id1': '5.5.10.1',
                'hidden': false,
                'type': 'table5510'
            },
            {
                'id2': 'eeih',
                'id1': '5.5.11',
                'type': 'radio',
                'title': '风湿三项',
                'content': ['否', '是'],
                'hiddenlist': [['5.5.11.1'], []],
                'hidden': false
            },
            {
                'id2': '',
                'id1': '5.5.11.1',
                'hidden': false,
                'type': 'table5511'
            },
            {
                'id2': 'eeii',
                'id1': '5.5.12',
                'type': 'radio',
                'title': '免疫八项',
                'content': ['否', '是'],
                'hiddenlist': [['5.5.12.1'], []],
                'hidden': false
            },
            {
                'id2': '',
                'id1': '5.5.12.1',
                'hidden': false,
                'type': 'table5512'
            },
            {
                'id2': 'eeij',
                'id1': '5.5.13',
                'type': 'radio',
                'title': '肿瘤系列',
                'content': ['否', '是'],
                'hiddenlist': [['5.5.13.1'], []],
                'hidden': false
            },
            {
                'id2': '',
                'id1': '5.5.13.1',
                'hidden': false,
                'type': 'table5513'
            },
            {
                'id2': 'eeik',
                'id1': '5.5.14',
                'type': 'radio',
                'title': '结缔组织全套',
                'content': ['否', '是'],
                'hiddenlist': [['5.5.14.1'], []],
                'hidden': false
            },
            {
                'id2': '',
                'id1': '5.5.14.1',
                'hidden': false,
                'type': 'table5514'
            },
            {
                'id2': 'eeil',
                'id1': '5.5.15',
                'type': 'radio',
                'title': '甲功',
                'content': ['否', '是'],
                'hiddenlist': [['5.5.15.1'], []],
                'hidden': false
            },
            {
                'id2': '',
                'id1': '5.5.15.1',
                'hidden': false,
                'type': 'table5515'
            }
        ],
        [
            {
                'id2': 'ga',
                'id1': '6.1',
                'type': 'radio',
                'title': '入院之前治疗情况',
                'content': [
                    '否',
                    '是'
                ],
                'hiddenlist': [],
                'hidden': false
            },
            {
                'id2': 'ga',
                'id1': '6.2',
                'type': 'table62',
                'title': '入院前治疗情况',
            },
            {
                'id2': 'gb',
                'id1': '6.3',
                'type': 'table63',
                'title': '术前用药',
                'hidden': false
            },
            {
                'id2': 'gc',
                'id1': '6.4',
                'type': 'table64',
                'title': '介入治疗',
                'hidden': false
            },
            {
                'id2': 'gd',
                'id1': '6.5',
                'type': 'table65',
                'title': '术后用药',
                'hidden': false
            },
            {
                'id2': 'geaa1',
                'id1': '6.5.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '所用华法林剂量',
                'hidden': false
            },
            {
                'id2': 'geaa2',
                'id1': '6.5.1.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': 'PT-INR',
                'hidden': false
            },
            {
                'id2': 'geab',
                'id1': '6.5.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '起始剂量',
                'hidden': false
            },
            {
                'id2': 'geac1',
                'id1': '6.5.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '达标剂量',
                'hidden': false
            },
            {
                'id2': 'geac2',
                'id1': '6.5.3.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': 'PT-INR',
                'hidden': false
            },
            {
                'id2': 'gead',
                'id1': '6.5.4',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '达标时间',
                'hidden': false
            },
            {
                'id2': 'geae',
                'id1': '6.5.5',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '达标时与低分子肝素重合使用时间',
                'hidden': false
            },
            {
                'id2': 'geaf',
                'id1': '6.5.6',
                'type': 'radio',
                'content': [
                    '法安明',
                    '速碧林',
                    '克赛',
                    '其他'
                ],
                'hiddenlist': [],
                'title': '低分子肝素类型',
                'hidden': false
            },
            {
                'id2': 'gfa',
                'id1': '6.6.1',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '出院医嘱：华法林',
                'hidden': false
            },
            {
                'id2': 'gfb',
                'id1': '6.6.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '迈之灵/威利坦',
                'hidden': false
            },
            {
                'id2': 'gfc',
                'id1': '6.6.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '着弹力袜',
                'hidden': false
            },
            {
                'id2': 'gfd',
                'id1': '6.6.4',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '其他',
                'hidden': false
            },
            {
                'id2': 'gfe',
                'id1': '6.6.5',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '监测PT-INR',
                'hidden': false
            }
        ],
        [
            {
                'id2': 'gha',
                'id1': '7.1',
                'type': 'table71',
                'title': '疗效观察',
                'hidden': false
            },
            {
                'id2': 'ghb',
                'id1': '7.2',
                'type': 'radio',
                'title': '不良反应',
                'content': [
                    '无',
                    '有'
                ],
                'hiddenlist': [
                    ['7.2.1', '7.2.2', '7.2.3', '7.2.4', '7.2.5', '7.2.6', '7.2.7', '7.2.8', '7.2.9', '7.2.10', '7.2.11'],
                    []
                ],
                'hidden': false
            },
            {
                'id2': 'ghba',
                'id1': '7.2.1',
                'type': 'radio',
                'title': '性别',
                'content': [
                    '男',
                    '女'
                ],
                'hiddenlist': [

                ],
                'hidden': false
            },
            {
                'id2': 'ghbb',
                'id1': '7.2.2',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '年龄',
                'hidden': false
            },
            {
                'id2': 'ghbc',
                'id1': '7.2.3',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': 'number',
                    'information': ''
                },
                'title': '体重',
                'hidden': false
            },
            {
                'id2': 'ghbd',
                'id1': '7.2.4',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '诊断',
                'hidden': false
            },
            {
                'id2': 'ghbe',
                'id1': '7.2.5',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '初始剂量',
                'hidden': false
            },
            {
                'id2': 'ghbf',
                'id1': '7.2.6',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '达标剂量',
                'hidden': false
            },
            {
                'id2': 'ghbg',
                'id1': '7.2.7',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '不良反应剂量',
                'hidden': false
            },
            {
                'id2': 'ghbh',
                'id1': '7.2.8',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '不良反应时用药时间',
                'hidden': false
            },
            {
                'id2': 'ghbi',
                'id1': '7.2.9',
                'type': 'radio',
                'content': [
                    '皮肤、粘膜',
                    '胃肠道',
                    '泌尿生殖道',
                    '肌肉',
                    '其他'
                ],
                'hiddenlist': [],
                'title': '出血部位',
                'hidden': false
            },
            {
                'id2': 'ghbg',
                'id1': '7.2.10',
                'type': 'radio',
                'content': [
                    '轻度',
                    '严重出血'
                ],
                'hiddenlist': [],
                'title': '出血程度',
                'hidden': false
            },
            {
                'id2': 'ghbk',
                'id1': '7.2.11',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '皮肤坏死',
                'hidden': false
            },
            {
                'id2': 'ghbl',
                'id1': '7.2.12',
                'type': 'input',
                'content': {
                    'datatype': 'text',
                    'validtype': '',
                    'information': ''
                },
                'title': '其他',
                'hidden': false
            }
        ]
    ];
}

