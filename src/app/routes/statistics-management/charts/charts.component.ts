import { Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { ActivatedRoute, Router, PreloadingStrategy, Params} from '@angular/router';

import { AngularEchartsModule } from 'ngx-echarts';
import { ChartsOptions } from '../shared/charts_configure';
import { BarComponent } from '../shared/charts/bar/bar.component';

declare var echarts: any;

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit {
    @ViewChildren(BarComponent) BarItems: QueryList<BarComponent>;

    CID = '';
    titles = 'z';
    options = new ChartsOptions().options;
    option_list = []; // 初始化chart的option
    ngOnInit() {

    }
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: HttpService,
        private charts: AngularEchartsModule
    ) {
        // this.contents = ['这是第一个menu的内容', '这是第二个menu的内容', '这是第三个menu的内容']
        this.CID = this.route.params['value']['CID'];
        const step = parseInt(this.CID)
        if (this.CID) {
            this.titles = this.options[this.CID].menu_name;
            console.log(this.titles);
            this.option_list = this.options[this.CID].charts;
        }
    }
}


// let dataAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
// let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
// let yMax = 500;
// let dataShadow = [];
//
// for (let i = 0; i < data.length; i++) {
//     dataShadow.push(yMax);
// }
//
// this.options =  {
//     title : {
//         text: '某地区蒸发量和降水量',
//         subtext: '纯属虚构'
//     },
//     tooltip : {
//         trigger: 'axis'
//     },
//     legend: {
//         data:['蒸发量','降水量']
//     },
//     toolbox: {
//         show : true,
//         feature : {
//             mark : {show: true},
//             dataView : {show: true, readOnly: false},
//             magicType : {show: true, type: ['line', 'bar']},
//             restore : {show: true},
//             saveAsImage : {show: true}
//         }
//     },
//     calculable : true,
//     xAxis : [
//         {
//             type : 'category',
//             data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
//         }
//     ],
//     yAxis : [
//         {
//             type : 'value'
//         }
//     ],
//     series : [
//         {
//             name:'蒸发量',
//             type:'bar',
//             data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
//             markPoint : {
//                 data : [
//                     {type : 'max', name: '最大值'},
//                     {type : 'min', name: '最小值'}
//                 ]
//             },
//             markLine : {
//                 data : [
//                     {type : 'average', name: '平均值'}
//                 ]
//             }
//         },
//         {
//             name:'降水量',
//             type:'bar',
//             data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
//             markPoint : {
//                 data : [
//                     {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize: 18 },
//                     {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
//                 ]
//             },
//             markLine : {
//                 data : [
//                     {type : 'average', name : '平均值'}
//                 ]
//             }
//         }
//     ]
// };
