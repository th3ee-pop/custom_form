import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import * as moment from 'moment';

@Injectable()
export class HttpService {

    baseUrl = 'http://59.110.52.133:9500';
    api = '/healthexamination/recordop/';
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(
        private http: HttpClient,
        private msgSrv: NzMessageService
    ){}

    getParams(params: any):any{
       return 'q='+JSON.stringify(params);
    }

    getRecordId(params: any):any{
        let recordId = [];
            params.Records.forEach(function (v) {
                for( let key in v ){
                    if (key != "Updated_time") {
                        recordId.push(key);
                    }
                }
            });
            return recordId;
    }

    getRecord(api: string, params?: any): Observable<any> {
            return this.http
            .get(this.baseUrl + api, { params: this.getParams(params) })
            .do(() => {})
            .catch((res) => {
            // console.log(res);
                return res;
            });
    }

    putRecord(api: string, params?: any): Observable<any> {
            console.log(params);
            let recordID = this.getRecordId(params);
            console.log(recordID);
        this.getRecordId(params).forEach(function () {

        });
        // this.getRecord(this.baseUrl + this.api, params).subscribe((res) => {
        //     console.log(res);
        // });
        return this.http.put(this.baseUrl + api, params)
            .do(() => {})
            .catch((res) => {
                console.log(res);
                return res;
            })
    }

    login(params){
           const api = "/account/login";
           const localUrl = '202.117.54.88:8000';
           return this.http.post(localUrl + api, { params: 'data='+ JSON.stringify(params)})
               .do(() => {
                   console.log("login!")
               })
               .catch((res) => {
                   console.log(res);
                   return res;
               })
    }


}
