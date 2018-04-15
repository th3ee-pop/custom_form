import { Component, OnInit} from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { ActivatedRoute, Router, PreloadingStrategy, Params} from '@angular/router';

import {AngularEchartsModule} from 'ngx-echarts';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit {
    CID = '';
    contents = [];
    content = '';
    ngOnInit() {}
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: HttpService
    ) {
        this.contents = ['这是第一个menu的内容', '这是第二个menu的内容', '这是第三个menu的内容']
        this.CID = this.route.params['value']['CID'];
        const step = parseInt(this.CID)
        if (this.CID) {
            this.content = this.contents[step];
        }
    }

}


