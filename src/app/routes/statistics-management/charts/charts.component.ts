import { Component, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { ActivatedRoute, Router, PreloadingStrategy, Params, NavigationStart, NavigationEnd} from '@angular/router';
import { AngularEchartsModule } from 'ngx-echarts';
import { ChartsOptions } from '../shared/charts_configure';
import { BarComponent } from '../shared/charts/bar/bar.component';
import { PatientData } from  '../shared/data/patient_data';
declare var echarts: any;

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit, AfterViewInit {
    @ViewChildren(BarComponent) BarItems: QueryList<BarComponent>;

    CID = '';
    titles = 'z';
    options = new ChartsOptions().options;
    option_list = []; // 初始化chart的option
    option_lists = []
    patient_sdata = new PatientData().patient_summary_data;
    patient_data = new PatientData().patient_data;
    option_s = {};
    ngOnInit() {

    }
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: HttpService,
        private charts: AngularEchartsModule
    ) {



        this.CID = this.route.params['value']['CID'];
        const step = parseInt(this.CID)
        if (this.CID) {
            this.titles = this.options[this.CID].menu_name;
            console.log(this.titles);
            this.option_list = this.options[this.CID].charts;
            console.log(this.CID);
        }
    }

    ngAfterViewInit() {




        this.option_s = {
            title: {
                text: '乳腺癌患病分布',
                subtext: '',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['iphone3']
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
                    name: 'iphone3s',
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
                        {name: '兴平市', value: 1 },

                        // {name: '天津',value: randomData() },
                        // {name: '上海',value: randomData() },
                        // {name: '重庆',value: randomData() },
                        // {name: '河北',value: randomData() },
                        // {name: '河南',value: randomData() },
                        // {name: '云南',value: randomData() },
                        // {name: '辽宁',value: randomData() },
                        // {name: '黑龙江',value: randomData() },
                        // {name: '湖南',value: randomData() },
                        // {name: '安徽',value: randomData() },
                        // {name: '山东',value: randomData() },
                        // {name: '新疆',value: randomData() },
                        // {name: '江苏',value: randomData() },
                        // {name: '浙江',value: randomData() },
                        // {name: '江西',value: }
                        //
                    ]
                }
            ]
            // ,
            // {
            //     name: 'iphone4',
            //     type: 'map',
            //     mapType: 'china',
            //     label: {
            //         normal: {
            //             show: true
            //         },
            //         emphasis: {
            //             show: true
            //         }
            //     },
            //     data:[
            //         {name: '北京',value: randomData() },
            //         {name: '天津',value: randomData() },
            //         {name: '上海',value: randomData() },
            //         {name: '重庆',value: randomData() },
            //         {name: '河北',value: randomData() },
            //         {name: '安徽',value: randomData() },
            //         {name: '新疆',value: randomData() },
            //         {name: '浙江',value: randomData() },
            //         {name: '江西',value: randomData() },
            //         {name: '山西',value: randomData() },
            //         {name: '内蒙古',value: randomData() },
            //         {name: '吉林',value: randomData() },
            //         {name: '福建',value: randomData() },
            //         {name: '广东',value: randomData() },
            //         {name: '西藏',value: randomData() },
            //         {name: '四川',value: randomData() },
            //         {name: '宁夏',value: randomData() },
            //         {name: '香港',value: randomData() },
            //         {name: '澳门',value: randomData() }
            //     ]
            // },
            // {
            //     name: 'iphone5',
            //     type: 'map',
            //     mapType: 'china',
            //     label: {
            //         normal: {
            //             show: true
            //         },
            //         emphasis: {
            //             show: true
            //         }
            //     },
            //     data:[
            //         {name: '北京',value: randomData() },
            //         {name: '天津',value: randomData() },
            //         {name: '上海',value: randomData() },
            //         {name: '广东',value: randomData() },
            //         {name: '台湾',value: randomData() },
            //         {name: '香港',value: randomData() },
            //         {name: '澳门',value: randomData() }
            //     ]
            // }
            // ]
        };

        this.router.events
            .filter((event) => event instanceof NavigationEnd)
            .subscribe((event: NavigationEnd) => {
                console.log('NavigationStart..............');
                const index = this.route.params['value']['CID'];
                this.option_list = this.options[index].charts;

                this.titles = this.options[index].menu_name;


            });
    }


}
