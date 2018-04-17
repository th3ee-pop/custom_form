import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Options } from '../options';

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.css']
})

export class BarComponent extends Options implements OnInit {

    option: any;
    ngOnInit() {
        this.option =  {
            title : {
                text: this.options.name,
                subtext: '纯属虚构'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data: this.options.legend
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : this.options.xAxis
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [

            ]
        };
        for ( let i = 0; i < this.options.legend.length; i++) {
            const series_item = {
                name: this.options.legend[i],
                type: 'bar',
                data: this.options.series[i],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            };
            this.option.series.push(series_item);
        }

    }
    onChartEvent(event: any, type: string) {
        // console.log('chart event:', type, event);
    }
}
// {
//     name:'蒸发量',
//     type:'bar',
//     data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
//     markPoint : {
//         data : [
//             {type : 'max', name: '最大值'},
//             {type : 'min', name: '最小值'}
//         ]
//     },
//     markLine : {
//         data : [
//             {type : 'average', name: '平均值'}
//         ]
//     }
// },
// {
//     name:'降水量',
//     type:'bar',
//     data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
//     markPoint : {
//         data : [
//             {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize: 18 },
//             {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
//         ]
//     },
//     markLine : {
//         data : [
//             {type : 'average', name : '平均值'}
//         ]
//     }
// }
