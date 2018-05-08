import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Options } from '../options';

@Component({
    selector: 'app-map',
    templateUrl: './mapd.component.html',
    styleUrls: ['./mapd.component.css']
})

export class MapdComponent extends Options implements OnInit {

    option: any;
    ngOnInit() {
        this.option = {
            title: {
                // text: '乳腺癌患病分布',
                text: this.options.title,
                subtext: '',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['乳腺恶性肿瘤']
            },
            visualMap: {
                min: 0,
                max: 674,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'],           // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },

            series: [
                {
                    name: '乳腺恶性肿瘤',
                    type: 'map',
                    mapType: '陕西',
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [
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
                    ]
                }
            ]
        };
        // console.log(this.options.legend.length);
        // for ( let i = 0; i < this.options.legend.length; i++) {
        //     const series_item = {
        //         name: this.options.legend[i],
        //         type: 'map',
        //         mayType: this.options.mapType[i],
        //         roam: false,
        //         label: {
        //             normal: {
        //                 show: true
        //             },
        //             emphasis: {
        //                 show: true
        //             }
        //         },
        //         data: this.options.series[i]
        //     };
        //     this.option.series.push(series_item);
        //     console.log(this.option);
        // }
    }
    onChartEvent(event: any, type: string) {
        // console.log('chart event:', type, event);
    }
}
