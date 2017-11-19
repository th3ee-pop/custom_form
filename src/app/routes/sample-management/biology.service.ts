import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import * as moment from 'moment';

import { TokenService } from '../../core/net/token/token.service';
import { TokenData } from '@core/net/token/token.type';
import { Headers, Http } from '@angular/http';

@Injectable()
export class BiologyService {

    baseUrl = 'http://59.110.52.133:9500';

    getParams(params: any): any {
        return 'q=' + JSON.stringify(params);
    }

    constructor(
        private http: HttpClient,
        private Http: Http,
        private injector: Injector) {
    }

    getRecordlist(): Observable<any> {
        const api = '/biology/recordlist/';
        return this.http.get(this.baseUrl + api)
            .do(() => { })
            .catch((res) => {
                console.log(res);
                return res;
            });
    }

    getBasicInfo(): Observable<any> {
        const api = '/biology/basicinfo/';
        const params = { 'PID': 1 };
        return this.http.get(this.baseUrl + api, { params: this.getParams(params) })
            .do(() => { })
            .catch((res) => {
                console.log(res);
                return res;
            });
    }


    getService(api, params?): Observable<any> {
        return this.http.get(this.baseUrl + api, { params: params ? this.getParams(params) : '' })
            .do(() => { })
            .catch((res) => {
                console.log(res);
                return res;
            });
    }

    deleteRecord(PID): Observable<any> {
        const params = { 'PID':PID };
        // console.log(params);
        const api = '/biology/recordop/';
        return this.Http.delete(this.baseUrl + api, {
            headers: new Headers({ 'X-CSRFToken': this.injector.get(TokenService).data.access_token }),
            body: params
        })
            .do(() => { })
            .catch((res) => {
                console.log(res);
                return res;
            });
    }

    /*

     body = {
     'Records':
     {
     'number': {'Record_Value': 1000000001,  'Updated_time': '' },
     'type': {'Record_Value': 1, 'Updated_time': '' },
     'user_info': {'Record_Value': [], 'Updated_time': '' }
     }
     };
     */
    putRecord(body): Observable<any> {
        console.log(body);
        const api = '/biology/recordop/';
        return this.http.put(this.baseUrl + api, body)
            .do(() => { })
            .catch((res) => {
                console.log(res);
                return res;
            });
    }

    // deleteService(api, params?: any): Observable<any> {
    //     return this.Http.delete(this.baseUrl + api, {
    //         body： params || '',
    //         headers: new Headers({'X-CSRFToken': this.injector.get(TokenService).data.access_token})
    //     });
    // }


}
