export class QuestionList {
    questions = [
        {
            'id': '1.1',
            'type': 'input',
            'content': [
                {
                    'dataType': 'text',
                    'inform': ''
                }
            ],
            'tittle': '基线调查研究编码（此处填写项目分配的调查编码，共十位）：'
        },
        {
            'id': '1.2',
            'type': 'input',
            'content': [
                {
                    'dataType': 'text',
                    'inform': ''
                }
            ],
            'tittle': '你所在单位的名称:'
        },
        {
            'id': '1.3',
            'type': 'input',
            'content': [
                {
                    'dataType': 'text',
                    'inform': ''
                }
            ],
            'tittle': '姓名'
        },
        {
            'id': '1.4',
            'type': 'radio',
            'content': [
                '男',
                '女'
            ],
            'tittle': '性别'
        },
        {
            'id': '1.6',
            'type': 'input',
            'content': [
                {
                    'dataType': 'text',
                    'inform': ''
                }
            ],
            'tittle': '身份证号码（必填）：'
        },
        {
            'id': '1.7',
            'type': 'input',
            'content': [
                {
                    'dataType': 'text',
                    'inform': ''
                }
            ],
            'tittle': '家庭住址（为便于今后长期随访，请详细填写）：'
        },
        {
            'id': '1.8',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '手机号码'
        },
        {
            'id': '1.9',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '重要联系人的手机号码:'
        },
        {
            'id': '1.10',
            'type': 'radio',
            'content': [
                '汉族',
                '回族',
                '维族',
                '其他'
            ],
            'tittle': '你的民族'
        },
        {
            'id': '1.10a',
            'type': 'input',
            'content': [
                {
                    'dataType': 'text',
                    'inform': ''
                }
            ],
            'tittle': '如果选择其他民族，具体是？'
        },
        {
            'id': '1.11',
            'type': 'radio',
            'content': [
                '是',
                '不想回答',
                '否'
            ],
            'tittle': '你是否有任何宗教信仰？'
        },
        {
            'id': '1.11b',
            'type': 'input',
            'content': [
                {
                    'dataType': 'text',
                    'inform': ''
                }
            ],
            'tittle': '如果信仰其他宗教，具体是？'
        },
        {
            'id': '1.11a',
            'type': 'radio',
            'content': [
                '伊斯兰教',
                '佛教',
                '基督教',
                '其他'
            ],
            'tittle': '如果有宗教信仰，具体宗教是？'
        },
        {
            'id': '1.13',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '包括你自己在内，你全家一共几口人共同生活在一起呢？'
        },
        {
            'id': '1.14',
            'type': 'radio',
            'content': [
                '已婚',
                '丧偶',
                '分居/离婚',
                '未婚'
            ],
            'tittle': '你目前的婚姻状况如何？'
        },
        {
            'id': '1.15',
            'type': 'radio',
            'content': [
                '农林牧渔劳动者',
                '工人',
                '行政及管理人员',
                '专业技术人员（医生、教师、科技人员）',
                '销售及服务工作人员',
                '离/退休',
                '家务',
                '私营业主',
                '待业/下岗',
                '其它或不易分类者'
            ],
            'tittle': '你目前所从事的主要是哪方面的职业？'
        },
        {
            'id': '1.15b',
            'type': 'radio',
            'content': [
                '已到法定退休年龄',
                '健康方面的原因（不包括外伤所致）',
                '其它'
            ],
            'tittle': '你离/退休的主要原因是什么？'
        },
        {
            'id': '1.15c',
            'type': 'input',
            'content': [
                {
                    'dataType': 'text',
                    'inform': ''
                }
            ],
            'tittle': '如果选择其他的离退休原因，具体是？'
        },
        {
            'id': '1.15a',
            'type': 'radio',
            'content': [
                '农林牧渔劳动者',
                '工人',
                '行政及管理人员',
                '专业技术人员（医生、教师、科技人员）',
                '销售及服务工作人员',
                '家务',
                '私营业主',
                '待业/下岗',
                '其它或不易分类者'
            ],
            'tittle': '你离/退休前的最后一份工作，主要从事哪方面的职业？'
        },
        {
            'id': '1.16',
            'type': 'radio',
            'content': [
                '<  2500元',
                '2,500-4,999元',
                '5,000-9,999元',
                '10,000-19,999元',
                '20,000-34,999元',
                '35,000-49,999元',
                '50,000-74,999元',
                '75,000-99,999元',
                '100,000-200,000元',
                '≥200,000元'
            ],
            'tittle': '去年你全家一年的总收入（包含各种来源）约为多少？'
        },
        {
            'id': '1.17',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '去年你全家平均一个月的日常支出（不含特殊支出如买车住院等）约为：'
        },
        {
            'id': '1.18',
            'type': 'checkbox',
            'content': [
                '医疗保险（公费、医保、商业保险及合作医疗）（限本人）',
                '自家楼房（农村）/五年内新装修单元房（城市）',
                '自家有自来水',
                '带抽水马桶的家庭独立卫生间',
                '汽车',
                '摩托车/电动车',
                '电脑',
                '互联网',
                '智能手机（如微信、QQ等，针对调查对象本人）',
                '五年内曾自费外出旅游度假'
            ],
            'tittle': '你目前是否有任何医疗保险并有一下财产及消费？'
        },
        {
            'id': '2.1',
            'type': 'radio',
            'content': [
                '从不或几乎从不喝茶',
                '只在特殊场合下（如节假日或做客时）偶尔喝',
                '一年当中只在几个月里常饮（如农忙或夏季），而其他季节一般不饮',
                '一年当中部分季节，每个月都饮，但频度不到每周一次',
                '一年当中不分季节，基本上每周都饮'
            ],
            'tittle': '在过去一年时间里，你大概多长时间喝一次茶？'
        },
        {
            'id': '2.2',
            'type': 'radio',
            'content': [
                '有',
                '无'
            ],
            'tittle': '请回忆一下，你以前是否曾经有过每周都喝茶并且至少持续一年时间的经历？'
        },
        {
            'id': '2.2a',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '若有，那停饮的时候大概是在多少年以前？（单位：年）'
        },
        {
            'id': '2.3',
            'type': 'radio',
            'content': [
                '1-2 天/周',
                '3-5天/周',
                '每天或几乎每天都喝'
            ],
            'tittle': '在过去一年时间里，你平均每周有几天喝茶？'
        },
        {
            'id': '2.4',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你大约从几岁开始养成每周喝茶的习惯？（单位：岁）'
        },
        {
            'id': '2.5',
            'type': 'radio',
            'content': [
                '绿茶（包括以绿茶味茶坯的花茶、白茶）',
                '乌龙茶/铁观音',
                '红茶（如滇红、祁红）',
                '其它（如普洱、砖茶）'
            ],
            'tittle': '当你喝茶时，最常喝哪种茶？'
        },
        {
            'id': '2.6',
            'type': 'input',
            'content': [
                {
                    'dataType': 'text',
                    'inform': ''
                }
            ],
            'tittle': '当你喝茶时，通常每次放的茶叶量大约是多少克？（单位：克/次）'
        },
        {
            'id': '2.7',
            'type': 'radio',
            'content': [
                '淡茶',
                '适度',
                '浓茶'
            ],
            'tittle': '你通常是喜欢喝清淡的茶还是浓茶？'
        },
        {
            'id': '2.9',
            'type': 'radio',
            'content': [
                '1-2天/周',
                '3-5天/周',
                '每天或几乎每天都喝'
            ],
            'tittle': '在过去一年里，你平均每周有几天喝咖啡？'
        },
        {
            'id': '2.10',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你大约从多大年龄开始养成每周都喝咖啡的习惯？'
        },
        {
            'id': '2.11a',
            'type': 'input',
            'content': [
                {
                    'dataType': 'text',
                    'inform': ''
                }
            ],
            'tittle': '一般一天喝几杯？（单位：杯/天 ，按250ml纸杯计量）'
        },
        {
            'id': '3.2',
            'type': 'radio',
            'content': [
                '是',
                '否'
            ],
            'tittle': '请回忆一下，你以前是否曾经有过每周都喝酒并且至少持续一年时间的经历？'
        },
        {
            'id': '3.2a',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '若是，那停止饮酒大概在多少年以前？（单位：年）'
        },
        {
            'id': '3.2c',
            'type': 'input',
            'content': [
                {
                    'dataType': 'text',
                    'inform': ''
                }
            ],
            'tittle': '选择其他，具体原因是？'
        },
        {
            'id': '3.3',
            'type': 'radio',
            'content': [
                '1-2天/周',
                '3-5天/周',
                '每天或几乎每天都饮'
            ],
            'tittle': '在过去一年里，你平均每周大约有几天喝酒？'
        },
        {
            'id': '3.4',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你大约从几岁开始养成每周都喝酒的习惯？'
        },
        {
            'id': '4.1',
            'type': 'radio',
            'content': [
                '不吸烟',
                '偶尔吸',
                '大部分天数吸',
                '每天都吸'
            ],
            'tittle': '你现在多长时间抽一次烟？'
        },
        {
            'id': '4.2',
            'type': 'radio',
            'content': [
                '从不吸',
                '偶尔吸',
                '曾经大部分天数吸',
                '曾经每天都吸'
            ],
            'tittle': '在以前，你通常多久吸一次烟？'
        },
        {
            'id': '4.3',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你过去曾吸烟现在已不吸，那你戒烟有多久了？（单位：年）'
        },
        {
            'id': '4.5',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你大约从几岁开始养成每天或基本上每天都吸烟的习惯？（单位：岁）'
        },
        {
            'id': '4.6d',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '吸烟斗/水烟，具体的量是多少？（单位：两/月）'
        },
        {
            'id': '4.6c',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '吸手卷烟/旱烟，具体的量是多少？（单位：两/月）'
        },
        {
            'id': '4.6e',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '吸雪茄，具体的量是多少？（单位：支/天）'
        },
        {
            'id': '4.6a',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '吸过滤嘴香烟，具体的量是多少？（单位：支/天）'
        },
        {
            'id': '4.6b',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '吸无滤嘴香烟，具体的量是多少？（单位：支/天）'
        },
        {
            'id': '4.7',
            'type': 'radio',
            'content': [
                '吸到口腔后即吐出',
                '吸到咽喉部',
                '深吸到肺部'
            ],
            'tittle': '你吸烟时通常将烟吸入到体内什么部位？'
        },
        {
            'id': '4.8',
            'type': 'radio',
            'content': [
                '是',
                '否'
            ],
            'tittle': '你是否曾经尝试过戒烟（需至少坚持1周才算）？'
        },
        {
            'id': '4.9',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你最近一次尝试戒烟是在几年以前？（单位：年）'
        },
        {
            'id': '4.10',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你最近一次尝试戒烟时，坚持了多长时间未吸烟？（单位：年）'
        },
        {
            'id': '5.4',
            'type': 'checkbox',
            'content': [
                '吃零食/小吃（包括夜宵）',
                '不吃早餐',
                '在餐馆或小吃店吃饭',
                '吃深度油炸的食物',
                '吃西式快餐（如比萨饼、汉堡等）'
            ],
            'tittle': '在过去一年里。你大约多久出现一次下面列举的情况？'
        },
        {
            'id': '5.5',
            'type': 'checkbox',
            'content': [
                '鱼肝油/鱼油',
                '维生素',
                '钙/铁/锌片',
                '中药',
                '其他保健补品'
            ],
            'tittle': '在过去一年里，你是否服用过下述营养品并且持续服用时间至少达到一个月？'
        },
        {
            'id': '5.6',
            'type': 'radio',
            'content': [
                '是',
                '否'
            ],
            'tittle': '你是否经历过严重的食物短缺？'
        },
        {
            'id': '5.7',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你所经历的食物短缺，最为严重的是在哪一年？（公历纪年）'
        },
        {
            'id': '5.8',
            'type': 'checkbox',
            'content': [
                '体重明显下降',
                '因为食物短缺而出现浮肿、严重贫血等相关疾病',
                '在此期间有家人、亲朋好友或邻居因食物短缺而死亡'
            ],
            'tittle': '请你回忆一下，在所经历的最严重的食物短缺时，你是否遇到过下列情况？'
        },
        {
            'id': '5.8a',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '若体重明显下降，大概下降了多少斤？（单位：斤）'
        },
        {
            'id': '5.9',
            'type': 'radio',
            'content': [
                '是',
                '否',
                '不清楚'
            ],
            'tittle': '据你所知，你母亲在怀你时是否经历了严重的食物短缺？'
        },
        {
            'id': '5.10',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '到目前为止你使用冰箱一共有多少年了（单位：年，若无则请填写0）？'
        },
        {
            'id': '5.12',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你大约从几岁开始养成每周吃辣食的习惯？（单位：岁）'
        },
        {
            'id': '5.13',
            'type': 'radio',
            'content': [
                '微辣',
                '较辣',
                '极辣'
            ],
            'tittle': '你通常是爱吃微辣的食物或是极辣的食物？'
        },
        {
            'id': '6.2',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '通常情况下，你每周吸入同住者二手烟的时间累计有多长？（单位：小时/周）'
        },
        {
            'id': '6.4',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '通常情况下，你每周在工作或公共场所吸入二手烟的时间累计有多长？（单位：小时/周）'
        },
        {
            'id': '6.5',
            'type': 'radio',
            'content': [
                '不足50米',
                '50-100米',
                '100-200米',
                '大于200米'
            ],
            'tittle': '你的居所距离交通主干道大约有多远的距离？'
        },
        {
            'id': '6.6',
            'type': 'radio',
            'content': [
                '是',
                '否'
            ],
            'tittle': '在你所居住的10公里范围内，是否有空气污染严重（如烟雾、煤气、粉尘）的工厂？'
        },
        {
            'id': '6.8',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你每周做饭时，大概累积有多长时间花在炉灶前？（单位：小时/周）'
        },
        {
            'id': '6.9',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你大概从几岁开始，经常在家做饭？（单位：岁）'
        },
        {
            'id': '6.10',
            'type': 'checkbox',
            'content': [
                '菜籽油',
                '花生油',
                '豆油',
                '猪油',
                '其它油'
            ],
            'tittle': '你现在做饭炒菜时最常用的食用油是什么？'
        },
        {
            'id': '6.11',
            'type': 'checkbox',
            'content': [
                '煤气/天然气',
                '电（包括微波炉/电磁炉）',
                '煤',
                '其他油',
                '柴/炭'
            ],
            'tittle': '现在你家里做饭或烧水时，通常用哪一种燃料？'
        },
        {
            'id': '6.11a',
            'type': 'radio',
            'content': [
                '无烟煤',
                '有烟煤',
                '煤球/煤饼（无烟）',
                '其它'
            ],
            'tittle': '请说明具体所使用煤制品的种类？'
        },
        {
            'id': '6.12',
            'type': 'radio',
            'content': [
                '全有',
                '不是全有',
                '全无'
            ],
            'tittle': '在你家里，是否所有的炉灶都有烟囱或排烟装置？'
        },
        {
            'id': '6.13',
            'type': 'radio',
            'content': [
                '是，一直有',
                '是，有时有',
                '无'
            ],
            'tittle': '除了做饭和烧水时，你家平时（尤其在冬天）是否有炉子全天不熄火？'
        },
        {
            'id': '6.14',
            'type': 'radio',
            'content': [
                '屋内',
                '屋外（如公共厨房，门外等）'
            ],
            'tittle': '平时家里不熄火的炉子，一般放在什么地方？'
        },
        {
            'id': '6.15',
            'type': 'radio',
            'content': [
                '是',
                '否'
            ],
            'tittle': '在你现居所，冬天屋内是否取暖？'
        },
        {
            'id': '6.17',
            'type': 'radio',
            'content': [
                '是',
                '否'
            ],
            'tittle': '冬天家里取暖后，在屋里你是否仍需要穿很多衣服才会觉得暖和？'
        },
        {
            'id': '6.18',
            'type': 'radio',
            'content': [
                '从未有过',
                '自从儿童期开始',
                '从_______年开始出现'
            ],
            'tittle': '请回忆一下，从何时开始你家屋内（尤其在冬天）出现燃煤污染？'
        },
        {
            'id': '6.18a',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '燃煤污染出现时间'
        },
        {
            'id': '6.19',
            'type': 'radio',
            'content': [
                '从______年起，不再出现',
                '目前仍有'
            ],
            'tittle': '从哪一年开始，你家屋内（尤其在冬天）不再出现燃煤污染？'
        },
        {
            'id': '6.19a',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '燃煤污染不再出现时间'
        },
        {
            'id': '6.20',
            'type': 'checkbox',
            'content': [
                '煤气/蒸汽/烟/雾：',
                '粉尘（如：硅石/煤炭/棉花）：',
                '纤维（如：石棉/纺织品）：',
                '化学制品（如：苯/甲醛）：'
            ],
            'tittle': '请你回忆一下，在你工作的这些年，是否曾经暴露于以下污染物，并且持续时间至少达6个月？'
        },
        {
            'id': '6.21a',
            'type': 'input',
            'content': [
                {
                    'dataType': 'text',
                    'inform': ''
                }
            ],
            'tittle': '其它防护措施具体是指'
        },
        {
            'id': '7.4',
            'type': 'radio',
            'content': [
                '是',
                '否',
                '糖尿病',
                '急性心梗（冠心病的一种）',
                '心绞痛（冠心病的一种）',
                '其他缺血性心脏病',
                '中风/小卒中发作（包括脑梗和脑溢血）',
                '高血压',
                '肺心病',
                '风湿性心脏病',
                '肺结核',
                '肺气肿',
                '慢性支气管炎',
                '慢阻肺',
                '哮喘',
                '慢性肝炎/肝硬化',
                '消化道溃疡',
                '胆结石/胆囊炎',
                '慢性肾病',
                '骨质疏松症',
                '骨折',
                '风湿性关节炎',
                '抑郁',
                '焦虑',
                '神经衰弱',
                '其他精神心理疾病',
                '脑外伤',
                '其它1',
                '其它2',
                '恶性肿瘤（癌症）'
            ],
            'tittle': '你是否曾被乡/区或以上医院医生诊断患有过心脑血管疾病、呼吸系统疾病、消化系统疾病、骨关节疾病、神经心理疾病、恶性肿瘤及其他疾病？'
        },
        {
            'id': '7.4e',
            'type': 'checkbox',
            'content': [
                '抗血小板药',
                '转换酶抑制剂',
                'β受体阻滞剂',
                '降脂药',
                '利尿剂',
                '钙拮抗剂',
                '降糖药',
                '胰岛素'
            ],
            'tittle': '如正在接受糖尿病、心脑血管病（急性心梗、心绞痛，其他缺血性心脏病和中风/小卒中发作）及高血压的药物治疗，请勾选使用药物。'
        },
        {
            'id': '7.4c',
            'type': 'checkbox',
            'content': [
                '糖尿病',
                '急性心梗（冠心病的一种）',
                '心绞痛（冠心病的一种）',
                '其他缺血性心脏病',
                '中风/小卒中发作（包括脑梗和脑溢血）',
                '高血压',
                '肺心病',
                '风湿性心脏病',
                '肺结核',
                '肺气肿',
                '慢性支气管炎',
                '慢阻肺',
                '哮喘',
                '慢性肝炎/肝硬化',
                '消化道溃疡',
                '胆结石/胆囊炎',
                '慢性肾病',
                '骨质疏松症',
                '骨折',
                '风湿性关节炎',
                '抑郁',
                '焦虑',
                '神经衰弱',
                '其他精神心理疾病',
                '脑外伤',
                '其它1',
                '其它2',
                '恶性肿瘤（癌症）'
            ],
            'tittle': '上述疾病目前是否住过院？'
        },
        {
            'id': '7.4b',
            'type': 'checkbox',
            'content': [
                '糖尿病',
                '急性心梗（冠心病的一种）',
                '心绞痛（冠心病的一种）',
                '其他缺血性心脏病',
                '中风/小卒中发作（包括脑梗和脑溢血）',
                '高血压',
                '肺心病',
                '风湿性心脏病',
                '肺结核',
                '肺气肿',
                '慢性支气管炎',
                '慢阻肺',
                '哮喘',
                '慢性肝炎/肝硬化',
                '消化道溃疡',
                '胆结石/胆囊炎',
                '慢性肾病',
                '骨质疏松症',
                '骨折',
                '风湿性关节炎',
                '抑郁',
                '焦虑',
                '神经衰弱',
                '其他精神心理疾病',
                '脑外伤',
                '其它1',
                '其它2',
                '恶性肿瘤（癌症）'
            ],
            'tittle': '上述疾病目前是否仍在接受治疗？'
        },
        {
            'id': '7.5',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '在过去一年里，你一共因病去医院看过几次门诊？（单位：次 ，如无请填0）'
        },
        {
            'id': '7.6',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '在过去一年里，你一共因病住过几次院？（单位：次 ，如无请填0）'
        },
        {
            'id': '7.7',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '到目前为止，你一共因患病等接受过多少次输血？（单位：次，如无请填0）'
        },
        {
            'id': '7.8',
            'type': 'input',
            'content': [
                {
                    'dataType': 'text',
                    'inform': ''
                }
            ],
            'tittle': '到目前为止，你一共献过几次血？（单位：次  ，如无请填0）'
        },
        {
            'id': '7.13',
            'type': 'radio',
            'content': [
                '是',
                '否',
                '不知道'
            ],
            'tittle': '你的生母是否仍在世？'
        },
        {
            'id': '7.13b',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你生母去世时的年龄是？（单位：岁）'
        },
        {
            'id': '7.13a',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你生母目前的年龄是？（单位：岁）'
        },
        {
            'id': '7.14',
            'type': 'radio',
            'content': [
                '是',
                '否',
                '不知道'
            ],
            'tittle': '你的生父是否仍在世？'
        },
        {
            'id': '7.15',
            'type': 'checkbox',
            'content': [
                '生母',
                '生父',
                '亲兄弟姐妹',
                '亲生子女'
            ],
            'tittle': '在你的直系亲属中，是否有人曾被乡/区级医院或以上单位医生诊断患有过下述疾病？'
        },
        {
            'id': '7.15c',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '亲兄弟姐妹患糖尿病的人数'
        },
        {
            'id': '7.15a',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '亲兄弟姐妹患中风的人数'
        },
        {
            'id': '7.15d',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '亲兄弟姐妹患抑郁症的人数'
        },
        {
            'id': '7.15f',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '亲兄弟姐妹患慢阻肺/肺气肿/肺心病/慢支的人数'
        },
        {
            'id': '7.15e',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '亲兄弟姐妹患恶性肿瘤的人数'
        },
        {
            'id': '7.15b',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '亲兄弟姐妹患急性心梗的人数'
        },
        {
            'id': '7.16',
            'type': 'radio',
            'content': [
                '是',
                '否'
            ],
            'tittle': '你是否知道你的出生体重？'
        },
        {
            'id': '7.16a',
            'type': 'input',
            'content': [
                {
                    'dataType': 'text',
                    'inform': ''
                }
            ],
            'tittle': '你的出生体重是多少？'
        },
        {
            'id': '7.17',
            'type': 'radio',
            'content': [
                '是',
                '否',
                '不确定'
            ],
            'tittle': '你出生时是否为早产儿？'
        },
        {
            'id': '7.18',
            'type': 'radio',
            'content': [
                '是',
                '否',
                '不确定'
            ],
            'tittle': '你出生时是经过剖腹产的吗？'
        },
        {
            'id': '7.19',
            'type': 'radio',
            'content': [
                '是',
                '否',
                '不确定'
            ],
            'tittle': '你出生时是否受过与生育有关的产伤？'
        },
        {
            'id': '7.15d1',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '亲生子女患抑郁症的人数'
        },
        {
            'id': '7.15b1',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '亲生子女患急性心梗的人数'
        },
        {
            'id': '7.15f1',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '亲生子女患慢阻肺/肺气肿/肺心病/慢支的人数'
        },
        {
            'id': '7.15e1',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '亲生子女患恶性肿瘤的人数'
        },
        {
            'id': '7.15c1',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '亲生子女患糖尿病的人数'
        },
        {
            'id': '7.15a1',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '亲生子女患中风的人数'
        },
        {
            'id': '8.2',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你每周平均工作多少天？'
        },
        {
            'id': '8.3',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你每天平均工作多少小时？'
        },
        {
            'id': '8.8',
            'type': 'radio',
            'content': [
                '步行',
                '骑摩托车',
                '骑自行车',
                '公共交通（车、地铁、渡船）',
                '私家车/出租',
                '通常在家里或在家附近上班'
            ],
            'tittle': '在过去一年里，你通常采用什么方式上下班或外出干活？'
        },
        {
            'id': '8.9',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你外出工作/干活时，每天花在路上的往返时间有多长？（单位：分钟）'
        },
        {
            'id': '8.10',
            'type': 'radio',
            'content': [
                '从不或几乎从不参加',
                '每月1-3次',
                '每周1-2次',
                '每周3-5次',
                '每天或几乎每天都锻炼'
            ],
            'tittle': '在过去一年里，你业余时间一般多长时间参加一次体育锻炼？'
        },
        {
            'id': '8.11',
            'type': 'radio',
            'content': [
                '太极拳/气功/散步',
                '长跑/健美操',
                '球类运动（篮球、乒乓球、羽毛球等）',
                '快走/扭秧歌/广场舞',
                '游泳',
                '其它（如爬山、跳绳、踢毽子）'
            ],
            'tittle': '你最常用的锻炼方式是哪一种？'
        },
        {
            'id': '8.12',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '在过去一年里，你每周参加业余体育锻炼的累计时间有多长？（单位：小时/周）'
        },
        {
            'id': '8.13',
            'type': 'radio',
            'content': [
                '从无或几乎从来没有',
                '偶尔有，但不到每周一次',
                '每周有1-2次',
                '每周有3-5次',
                '每天或几乎每天都有'
            ],
            'tittle': '在过去一年里，你平均每周有几天会因锻炼/劳动等强体力活动而出汗或心跳明显加快？'
        },
        {
            'id': '8.14',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你平均每周从事类似强体力活动的累计时间大约有多长？（单位：小时/周）'
        },
        {
            'id': '8.15',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你平均每天做各类家务活（包括带孩子）的时间有多长？（单位：小时/天）'
        },
        {
            'id': '8.16',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你平均每天业余时间用于坐立活动（包括看电视，读书报，吃饭，聚餐，下棋，打牌，玩电子游戏，上网等）的时间一共有多长？（单位：小时/天）'
        },
        {
            'id': '8.17',
            'type': 'checkbox',
            'content': [
                '看电视/碟片',
                '读书/看报',
                '吃饭/聚餐/闲聊',
                '下棋/打牌/打麻将',
                '上网/写作/文件整理'
            ],
            'tittle': '在过去一年里，你多久进行一次如下的坐立活动？'
        },
        {
            'id': '8.19',
            'type': 'radio',
            'content': [
                '是',
                '否'
            ],
            'tittle': '在过去一年里，你是否采取节食/服药等措施来减轻体重？'
        },
        {
            'id': '8.20',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你在25岁前后时，体重大约是多少斤？（如不清楚，请填写999）'
        },
        {
            'id': '9.1',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你第一次来月经时的实足年龄是多大？（单位：岁；若记不清，请填0）'
        },
        {
            'id': '9.2',
            'type': 'radio',
            'content': [
                '尚未闭经',
                '目前正处于更年期',
                '已完全闭经'
            ],
            'tittle': '你目前是否已完全闭经？'
        },
        {
            'id': '9.2b',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '如已经闭经，闭经的年龄是？（单位：岁）'
        },
        {
            'id': '9.2a',
            'type': 'radio',
            'content': [
                '是',
                '否'
            ],
            'tittle': '你今天是否在月经期？'
        },
        {
            'id': '9.3',
            'type': 'radio',
            'content': [
                '否',
                '是'
            ],
            'tittle': '你是否用过或正在服用雌激素替代治疗药物缓解更年期症状？'
        },
        {
            'id': '9.4',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '到现在为止一共怀孕过多少次？（单位：次，若无，填0）'
        },
        {
            'id': '9.5b',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '死产多少次？（单位：次，若无填0）'
        },
        {
            'id': '9.5d',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '人工流产多少次？（单位：次，若无填0）'
        },
        {
            'id': '9.5a',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '活产多少次？（单位：次，若无填0）'
        },
        {
            'id': '9.5c',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '自然流产多少次？（单位：次，若无填0）'
        },
        {
            'id': '9.7',
            'type': 'radio',
            'content': [
                '从未用过',
                '曾经用过',
                '目前仍用'
            ],
            'tittle': '你是否服用过口服避孕药？'
        },
        {
            'id': '9.7a',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你最近一次停用口服避孕药时龄是多少岁？（单位：岁）'
        },
        {
            'id': '9.8',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你首次开始服避孕药的年龄是多大？（单位：岁）'
        },
        {
            'id': '9.9',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '到目前为止，你使用口服避孕药累积年限有多长？（单位：年）'
        },
        {
            'id': '9.10',
            'type': 'radio',
            'content': [
                '从未用过',
                '曾经用过',
                '目前仍用'
            ],
            'tittle': '你是否使用过避孕环？'
        },
        {
            'id': '9.10a',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '请说明最近一次停用时的年龄？（单位：岁）'
        },
        {
            'id': '9.11',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '你首次放置避孕环的年龄？（单位：岁）'
        },
        {
            'id': '9.12',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '到目前为止，你一共累积使用了多少年的避孕环？（单位：年）'
        },
        {
            'id': '9.13',
            'type': 'checkbox',
            'content': [
                '子宫切除术',
                '卵巢（单侧或双侧）摘除术',
                '乳房肿块/肿瘤切除手术',
                '绝育术',
                '剖腹产'
            ],
            'tittle': '你是否接受过以下与妇科相关的手术？'
        },
        {
            'id': '10.1',
            'type': 'radio',
            'content': [
                '非常满意',
                '基本满意',
                '一般',
                '不满意',
                '很不满意'
            ],
            'tittle': '你对目前生活状况的满意程度如何？'
        },
        {
            'id': '10.2',
            'type': 'checkbox',
            'content': [
                '夫妻分居/离异/离婚',
                '失业/下岗/退休',
                '自营企业或家庭经济破产',
                '遭到暴力打击/被强暴',
                '严重的家庭内部矛盾或冲突',
                '严重创伤或车祸',
                '配偶死亡或患重病',
                '家庭其他成员死亡或患重病',
                '严重自然灾害（如旱、涝等）',
                '丧失经济来源/负债度日'
            ],
            'tittle': '请回忆一下，在过去两年里, 你是否经历过以下对你的生活有重大影响的事件?'
        },
        {
            'id': '10.3',
            'type': 'checkbox',
            'content': [
                '通常需要半小时以上方可入睡（包括半夜醒来后）',
                '早上很早醒来，并难以重新入睡',
                '至少有一天需要服安眠药（西药或中药）以帮助睡眠',
                '因睡眠不佳，白天在工作、吃饭或和别人交谈时难于保持清醒的头脑'
            ],
            'tittle': '最近一个月，你是否每周至少有三天出现下列睡眠问题？(排除外出旅游/倒时差等特殊情况）'
        },
        {
            'id': '10.4',
            'type': 'input',
            'content': [
                {
                    'dataType': 'text',
                    'inform': ''
                }
            ],
            'tittle': '你上面提到的睡眠问题持续有多久了？（年）'
        },
        {
            'id': '10.5',
            'type': 'radio',
            'content': [
                '一年四季均有',
                '有，但只在某些季节',
                '没有'
            ],
            'tittle': '你是否有午睡的习惯？'
        },
        {
            'id': '10.6',
            'type': 'radio',
            'content': [
                '是，经常有',
                '是，有时有',
                '否/不知道'
            ],
            'tittle': '你睡觉时是否有打呼噜的习惯？'
        },
        {
            'id': '10.7',
            'type': 'radio',
            'content': [
                '否',
                '是'
            ],
            'tittle': '在你现在或前一份工作中，是否需要上夜班？'
        },
        {
            'id': '10.7a',
            'type': 'radio',
            'content': [
                '每天',
                '每周',
                '每月'
            ],
            'tittle': '多久一次夜班？'
        },
        {
            'id': '10.7b',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '这种情况持续了多少年？'
        },
        {
            'id': '10.8',
            'type': 'input',
            'content': [
                {
                    'dataType': 'number',
                    'inform': ''
                }
            ],
            'tittle': '通常情况下，你平均每天睡几个小时（包括午睡）？'
        },
        {
            'id': '10.9',
            'type': 'checkbox',
            'content': [
                '总感觉心情很压抑，活得很痛苦，无论做什么事和活动都不能让自己高兴起来',
                '因感到绝望，对平时所喜爱吃的食物完全失去食欲',
                '总觉得自己很没用，生活中发生的所有不顺和坎坷都是自己的过错，对生活感到毫无希望'
            ],
            'tittle': '在你整个一生中，你是否经历过下述情况，并且持续时间至少有两周？'
        },
        {
            'id': '10.10',
            'type': 'checkbox',
            'content': [
                '总感觉紧张不安和恐慌，整天提心吊胆害怕出事，持续时间至少有一个月，严重影响日常生活和工作',
                '身体某部位常感到有原因不明的隐痛或不适，持续时间至少达3个月，并且影响日常生活',
                '有原因不明的突发性的恐惧、焦虑和不适感并且机体常伴随出现心跳加快脸红等症状',
                '在封闭的空间里（岩洞、电梯、飞机或火车等）或在人多及大庭广众下，会突然感到极度恐惧，以至于想方设法避免去上述场所'
            ],
            'tittle': '在你整个一生中，你是否出现过下述情况？'
        },
        {
            'id': '10.11',
            'type': 'radio',
            'content': [
                '非常好',
                '很好',
                '好',
                '一般',
                '差'
            ],
            'tittle': '总的来说，您认为您的健康状况：'
        },
        {
            'id': '10.12',
            'type': 'radio',
            'content': [
                '有',
                '没有'
            ],
            'tittle': '在过去一年里，您是否患上一些长期疾病？（注：长期疾病是指某一疾病已影响您已有一段很长的时间或您因某一疾病而有一段很长的时间已受到困扰）'
        },
        {
            'id': '10.13',
            'type': 'radio',
            'content': [
                '有',
                '没有'
            ],
            'tittle': '如有，您有否因这些疾病而限制了您的日常活动？'
        },
        {
            'id': '10.14',
            'type': 'radio',
            'content': [
                '有很大限制',
                '有一点限制',
                '无任何限制'
            ],
            'tittle': '中等强度的活动，如搬桌子、打太极拳、扫地、做操等：'
        },
        {
            'id': '10.15',
            'type': 'radio',
            'content': [
                '有很大限制',
                '有一点限制',
                '无任何限制'
            ],
            'tittle': '影响步行上楼梯：'
        },
        {
            'id': '10.16',
            'type': 'radio',
            'content': [
                '会',
                '不会'
            ],
            'tittle': '因为身体健康的原因，在工作或日常活动中感到力不从心？'
        },
        {
            'id': '10.17',
            'type': 'radio',
            'content': [
                '会',
                '不会'
            ],
            'tittle': '因为身体健康的原因而令您的工作或活动受到限制？'
        },
        {
            'id': '10.18',
            'type': 'radio',
            'content': [
                '会',
                '不会'
            ],
            'tittle': '因为情绪方面的原因（比如感到沮丧或者焦虑）而令您的工作或日常活动中感到力不从心？'
        },
        {
            'id': '10.19',
            'type': 'radio',
            'content': [
                '会',
                '不会'
            ],
            'tittle': '因为情绪方面的原因（比如感到沮丧或者焦虑）而令您的工作或活动受到限制？'
        },
        {
            'id': '10.20',
            'type': 'radio',
            'content': [
                '毫无影响',
                '有很少影响',
                '有一些影响',
                '较大影响',
                '影响非常大'
            ],
            'tittle': '在过去1月，您身体上的疼痛影响您的日常工作吗（包括上班和家务劳动）？'
        },
        {
            'id': '10.21',
            'type': 'checkbox',
            'content': [
                '您觉得心平气和：',
                '您感到精力充沛：',
                '您觉得心情不好，闷闷不乐：',
                '在过去1个月，有多少时间您的身体健康或情绪问题妨碍了您的社交活动（比如探亲、访友等）？'
            ],
            'tittle': '您在过去1个月里是否有以下的感觉和情绪体验，请给出与您想法最接近的一个选项'
        }
    ];

    public getQuestions(pageIndex) {
        const res = this.questions.filter( (ele, index, items) => {
            return ele.id.split('.')[0] === pageIndex.toString();  // filter the result
        });
        return res;
    }
}

