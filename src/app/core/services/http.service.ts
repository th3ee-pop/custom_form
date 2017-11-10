import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import * as moment from 'moment';

import { TokenService } from '../net/token/token.service';
import {TokenData} from "@core/net/token/token.type";
import {Headers, CookieXSRFStrategy} from "@angular/http";

@Injectable()
export class HttpService {

    baseUrl = 'http://59.110.52.133:9500';
    api = '/healthexamination/recordop/';
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(
        private http: HttpClient,
        private injector: Injector
    ){}

    options = {
        headers:new HttpHeaders({"X-CSRFToken": this.injector.get(TokenService).data.access_token})
    };

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
            .get(this.baseUrl + api, {
                headers:new HttpHeaders({"X-CSRFToken": this.injector.get(TokenService).data.access_token}),
                params: this.getParams(params) })
            .do(() => {})
            .catch((res) => {
            // console.log(res);
                return res;
            });
    }

    putRecord(api: string, params?: any): Observable<any> {
        return this.http.put(this.baseUrl + api, params, this.options)
            .do(() => {})
            .catch((res) => {
                console.log(res);
                return res;
            })
    }

    getRecordList(): Observable<any>{
        return this.http.get(this.baseUrl + "/healthexamination/recordlist/",this.options)
            .do(()=>{})
            .catch((res)=>{
            console.log(res);
            return res;
            })
    }

    login(params){
        const api = "/account/login/";
        let login = {
            "username":params.email.split("@")[0],
            "password":params.password
        };
        console.log(login);
        return this.http.post(this.baseUrl + api, login)
               .do((res:any) => {
            console.log(res);
                   let localuser = new TokenService();
                   localuser.data = <TokenData>{
                       access_token:res.TOKEN,
                       expire_time: moment().add(7, 'days').unix(),
                       refresh_token: '234567890',
                       refresh_token_valid_time: moment().add(14, 'days').unix(),
                       user_name: login.username
                   };
                   console.log(localuser);
               })
               .catch((res) => {
               return res;
           })
    }


}
