import { Component, OnInit } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpService } from '@core/services/http.service';
import { ActivatedRoute, Router, PreloadingStrategy, Params} from '@angular/router';
import { FileDownloadService } from '@core/services/fileDownload.service';
import { Initdb } from '../../database-management/database-setting/Initdb';

@Component({
    selector: 'app-retrieval-overview',
    templateUrl: './retrieval-overview.component.html',
    styleUrls: ['./retrieval-overview.component.css']

})
export class RetrievalOverviewComponent implements OnInit {


    // searchOptions;
    condition_type = ['入院科别', '主治医师', '现住址-省', '现住址-市', '年龄', '性别', '离院方式']

    conditions: any = [
        {
            add_remove: true,
            ico: 'anticon anticon-plus',
            condition_type: '入院科别',
            selectedMultipleOption: [],
            andOrnot: true,
            searchOptions: []
        }
    ]

    add_ico = 'anticon anticon-plus';
    remove_ico = 'anticon anticon-minus';



    /* table data variable*/
    data = [{Pid: 0, No: 12345}]
    pi = 1;
    ps = 10;
    total = 200; // mock total
    constructor(private jsonp: Jsonp) {
    }
    ngOnInit() {

    }

    searchChange(searchText, item) {
        const query = encodeURI(searchText);
        (this.jsonp.get(`https://suggest.taobao.com/sug?code=utf-8&q=${query}&callback=JSONP_CALLBACK`).
        map(res => res.json()) as Observable<Response>).subscribe((data: any) => {
            item.searchOptions = data.result;
            console.log(item.searchOptions);
        });
    }

    add_remove_click(item) {
        if ( item.add_remove === true) {

            this.conditions.push(
                {
                    add_remove: false,
                    ico: this.remove_ico,
                    condition_type: '入院科别',
                    selectedMultipleOption: [],
                    andOrnot: true
                }
            );
        } else {

            const index = this.conditions.indexOf(item)
            this.conditions.splice(index, 1);
        }
    }

    retrieval() {
        const And_conditions = [];
        const Not_conditions = [];
        for (const item of this.conditions ){
            const con = { fields: item.condition_type, element: []}
            for (const selected of item.selectedMultipleOption) {
                con.element.push(selected);
            }
            if (item.andOrnot) {
                And_conditions.push(con);
            }else {
                Not_conditions.push(con);
            }
        }

        console.log(And_conditions);
        console.log(Not_conditions);
    }

    getTableData(pageChange: boolean) {

    }

    downloadByPID(PID) {

    }

    generateByPID(PID) {

    }

    /**
     * 下载当前页面所有记录
     */
    downloadAll() {

    }

    /**
     * 下载选中内容
     */
    downSelected() {

    }


}













