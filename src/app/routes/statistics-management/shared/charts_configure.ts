export class ChartsOptions {
    options = [
        {
            'menu_name': '业务统计',
            'charts': [
                {
                    'name': '医生业务量统计',
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
                {
                    'name': '医疗付费方式',
                    'type': 'pie',
                    'legend': [
                        '新型农村合作医疗', '城镇职工基本医疗保险', '城镇居民基本医疗保险', '全自费', '全公费',
                        '其他社会保险', '商业医疗保险', '其他', '不详'],
                    'series': [
                        {
                            name: '医疗付费方式',
                            type: 'pie',
                            radius : [30, 110],
                            center : ['50%', 200],
                            roseType : 'area',
                            x: '50%',
                            max: 2107,
                            sort : 'ascending',
                            data: [
                                {value: 1574, name: '新型农村合作医疗'},
                                {value: 2107, name: '城镇职工基本医疗保险'},
                                {value: 483, name: '城镇居民基本医疗保险'},
                                {value: 247, name: '全自费'},
                                {value: 4, name: '全公费'},
                                {value: 48, name: '其他社会保险'},
                                {value: 3, name: '商业医疗保险'},
                                {value: 2025, name: '其他'},
                                {value: 1285, name: '不详'}
                            ]
                        }]
                },
                {
                    'name': '各组平均住院日',
                    'type': 'bar',
                    'legend': [ '2017.3-2018.3' ],
                    'legend_name': '',
                    'xAxis_name': 'diagnosis',
                    'xAxis': ['梁亮', '昝瑛', '马一楠', '马宇光', '马小斌', '包兴', '尹晓然', '惠文涛', '林帅', '高晓燕',
                        '张扬', '马秀龙', '刘棣', '张寅斌', '刁岩', '赵阳', '郭亚', '贾丽君', '张寅', '单昌友', '王敏聪',
                        '赵小瑶', '王文俊', '潘凤', '黄珊', '闵卫利', '柯悦', '韩丽丽', '金迎迎', '贺改霞', '杨倩',
                        '薛改霞', '王梦', '宋玲琴', '代志军', '杨彭涛', '恵文涛', '郭昱言', '刘敏'],
                    'series': [
                        [
                            5.989736070381231, 6.7974683544303796, 6.094262295081967, 6.147651006711409,
                            7.280966767371601, 7.850828729281768, 6.677248677248677, 5.8453865336658355, 6.878873239436619,
                            7.112, 6.946882217090069, 8.390845070422536, 6.886792452830188, 7.942168674698795,
                            7.68,  6.794642857142857, 8.012145748987853, 6.684729064039409, 8.0, 6.7908745247148286,
                            7.992957746478873, 7.523076923076923, 8.105263157894736, 7.5,
                            9.307692307692308, 6.826589595375722, 7.322175732217573, 6.564885496183206,
                            4.5, 5.0, 12.0, 4.0, 14.0, 6.931034482758621, 18.0, 6.8734177215189876, 15.0, 8.586206896551724,
                            4.976744186046512
                        ]
                    ]
                },
                {
                    'name': '各组平均住院花费',
                    'type': 'bar',
                    'legend': [ '2017.3-2018.3' ],
                    'legend_name': '',
                    'xAxis_name': 'diagnosis',
                    'xAxis': ['管海涛', '张淑群', '马宇光', '马小斌', '白明华', '尹晓然', '惠文涛', '闵卫利', '康华峰',
                        '马秀龙', '代志军', '刘棣', '张寅斌', '王中卫', '刘小旭', '康华锋', '薛兴欢', '金迎迎', '王亚利',
                        '梁亮', '张淑琴', '这张淑群', '刁岩', '官海天', '昝瑛', '宋玲琴', '赵阳', '郭亚',
                        '任宏涛', '王宝峰', '柯悦', '梁亮'],
                    'series': [
                        [
                            13457.836577540105,
                            10068.934269005853,
                            11735.94161616161,
                            10523.065185185185,
                            14928.51296551725,
                            13248.774195804192,
                            12510.228457711457,
                            14580.172456140333,
                            14140.623427230043,
                            15768.395896551727,
                            13465.622153179189,
                            11199.284166666665,
                            13613.519573170737,
                            18742.96134275617,
                            10586.04,
                            13474.37231884058,
                            11388.165,
                            18135.697206982542,
                            16556.01084507043,
                            13717.824818763318,
                            4799.7,
                            13228.88,
                            17407.428270042197,
                            16423.84,
                            13858.057885714283,
                            15274.207254901961,
                            14961.094000000001,
                            12769.07,
                            16562.387704918034,
                            19498.81586206896,
                            15219.0,
                            10371.23
                        ]
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
