export class ChartsOptions {
    options = [
        {
            'menu_name': '业务统计',
            'charts': [
                {   'name': '医生业务量统计',
                    'type': 'bar',
                    'legend': [ '数量' ],
                    'legend_name': '',
                    'xAxis_name': 'diagnosis',
                    'xAxis': ['管海涛', '代志军', '闵卫利', '马宇光', '尹晓然', '刁岩', '梁亮', '惠文涛', '金迎迎', '马秀龙',
                        '王中卫', '康华峰', '王亚利', '', '昝瑛', '张淑群', '张寅斌', '白明华', '康华锋', '任宏涛',
                        '宋玲琴', '王宝峰', '马小斌', '赵阳', '刘棣', '薛兴欢', '郭亚', '这张淑群', '梁亮’', '柯悦',
                        '张淑琴', '官海天', '刘小旭'],
                    'series': [
                        [ 1331, 710, 688, 594, 572, 475, 471, 402, 401, 290, 283, 214, 213, 194, 176, 171, 164, 145, 69,
                            61, 51, 29, 27, 15, 12, 2, 1, 1, 1, 1, 1, 1, 1]
                    ]

                },
                {   'name': '城市分布统计',
                    'type': 'bar',
                    'legend': ['乳腺恶性肿瘤'],
                    'legend_name': 'diagnosis',
                    'xAxis_name': 'city',
                    'xAxis': ['西安市', '咸阳市', '渭南市', '延安市', '铜川市', '宝鸡市', '榆林市', '商洛市',
                        '韩城市', '安康市', '华阴市', '汉中市', '兴平市'],
                    'series': [
                        [ 674, 106, 63, 40, 39, 24, 15, 6, 5, 3, 3, 1, 1],

                    ]
                }

            ]
        },
        {
            'menu_name': '患者统计',
            'charts': [
                {   'name': '年龄统计',
                    'filter_name': 'diagnosis',
                    'type': 'bar',
                    'legend': ['患病'],
                    'xAxis': ['<20', '20-30', '30-40', '40-50', '50-60', '60-70', '>70'],
                    'series': [
                        [40, 351, 818, 2087, 2319, 1577, 584]
                    ]

                },
                {   'name': '城市分布统计',
                    'type': 'bar',
                    'legend': ['乳腺恶性肿瘤'],
                    'xAxis': ['西安市', '咸阳市', '渭南市', '延安市', '铜川市', '宝鸡市', '榆林市', '庆阳市', '商洛市',
                        '韩城市', '兰州市', '安康市', '华阴市', '汉中市', '兴平市'],
                    'series': [
                        [674, 106, 63, 40, 39, 24, 15, 8, 6, 5, 4, 3, 3, 1, 1]
                    ]
                },
                {
                    'name': '乳腺癌城市分布统计',
                    'type': 'map',
                    'legend': ['乳腺恶性肿瘤'],
                    'mapType': ['陕西'],
                    'series': [[
                        {name: '西安市', value: 674 },
                        {name: '咸阳市', value: 106 },
                        {name: '渭南市', value: 63 },
                        {name: '延安市', value: 40 },
                        {name: '铜川市', value: 39 },
                        {name: '宝鸡市', value: 24 },
                        {name: '榆林市', value: 15 },
                        {name: '商洛市', value: 6 },
                        {name: '安康市', value: 3 },
                        {name: '华阴市', value: 3 },
                        {name: '汉中市', value: 1 },
                        {name: '兴平市', value: 1 }
                    ]]
                }
            ]
        },
        {
            'menu_name': '医生统计',
            'charts': [
                {
                    'name': 'demo4',
                    'type': 'bar',
                    'legend': ['1', '2', '3'],
                    'xAxis': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    'series': [
                        [ 2, 3, 4, 5, 9, 11, 22, 3, 1, 10, 4, 1],
                        [ 16, 7, 3, 2, 8, 14, 21, 3, 1, 6, 3, 1],
                        [ 3, 4, 5, 9, 11, 22, 16, 7, 3, 2, 8, 14]
                    ]

                },
                {   'name': 'demo9',
                    'type': 'bar',
                    'legend': ['a', 'c', 'd'],
                    'xAxis': ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    'series': [
                        [ 16, 7, 3, 2, 8, 14, 22],
                        [ 22, 3, 1, 10, 4, 1, 21],
                        [ 3, 4, 5, 9, 11, 22, 16]
                    ]

                }
            ]
        }
    ];

}
