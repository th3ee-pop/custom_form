import { Component, OnInit} from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { ActivatedRoute, Router, PreloadingStrategy, Params} from '@angular/router';

import {AngularEchartsModule} from 'ngx-echarts';
declare var echarts: any;
@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit {
    CID = '';
    contents = [];
    content = '';
    options: any;
    ngOnInit() {
        let dataAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
        let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
        let yMax = 500;
        let dataShadow = [];

        for (let i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
        }

        this.options = {
            title: {
                text: 'Check Console for Events'
            },
            xAxis: {
                data: dataAxis,
                axisLabel: {
                    inside: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                { // For shadow
                    type: 'bar',
                    itemStyle: {
                        normal: { color: 'rgba(0,0,0,0.05)' }
                    },
                    barGap: '-100%',
                    barCategoryGap: '40%',
                    data: dataShadow,
                    animation: false
                },
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: '#83bff6' },
                                    { offset: 0.5, color: '#188df0' },
                                    { offset: 1, color: '#188df0' }
                                ]
                            )
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: '#2378f7' },
                                    { offset: 0.7, color: '#2378f7' },
                                    { offset: 1, color: '#83bff6' }
                                ]
                            )
                        }
                    },
                    data: data
                }
            ]
        };
    }
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: HttpService,
        private charts: AngularEchartsModule
    ) {
        this.contents = ['这是第一个menu的内容', '这是第二个menu的内容', '这是第三个menu的内容']
        this.CID = this.route.params['value']['CID'];
        const step = parseInt(this.CID)
        if (this.CID) {
            this.content = this.contents[step];
        }

    }
    onChartEvent(event: any, type: string) {
        console.log('chart event:', type, event);
    }

}


