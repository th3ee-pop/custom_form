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
