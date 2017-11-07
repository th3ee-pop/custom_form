import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import * as moment from 'moment';

@Injectable()
export class HttpService {

    baseUrl = 'http://59.110.52.133:9500';
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(
        private http: HttpClient,
        private msgSrv: NzMessageService
    ){}

   private getParams(params: any):any{
       return 'q='+JSON.stringify(params);
    }

    getRecord(api: string, params?: any): Observable<any> {
            return this.http
            .get(this.baseUrl + api, { params: this.getParams(params) })
            .do(() => {
                // this.msgSrv.error(`测试do`, {nzDuration: 1000 * 3});
            })
            .catch((res) => {
            // console.log(res);
                return res;
            });
    }

    putRecord(api: string, params?: any): Observable<any> {
        return this.http.put(this.baseUrl + api, params)
            .do(() => {
                console.log("putDO!")
            })
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
