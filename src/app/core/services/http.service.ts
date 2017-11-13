import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import * as moment from 'moment';

import { TokenService } from '../net/token/token.service';
import {TokenData} from '@core/net/token/token.type';
import {Headers, CookieXSRFStrategy} from '@angular/http';

@Injectable()
export class HttpService {

    baseUrl = 'http://59.110.52.133:9500';

    constructor(
        private http: HttpClient,
        private injector: Injector
    ) {}

    options = {
        headers: new HttpHeaders({'X-CSRFToken': this.injector.get(TokenService).data.access_token})
    };

    getParams(params: any): any {
       return 'q=' + JSON.stringify(params);
    }


    getRecordId(params: any): any {
        const recordId = [];
            params.Records.forEach(function (v) {
                for ( const key in v ) {
                    if (key !== 'Updated_time') {
                        recordId.push(key);
                    }
                }
            });
            return recordId;
    }

    /**
     * 查询操作，PID 病人编号，RecordID 记录编号
     * @parmas {{PID: string; RecordID: string}}
     * params = {
        'PID' : '003',
        'RecordID' : 'ID1' 返回第一部分的所有答案。检索ID返回该用户全部答案。
    };
     */
    getRecord(params: any): Observable<any> {
            return this.http
            .get(this.baseUrl + '/healthexamination/recordop/', {
                headers: new HttpHeaders({'X-CSRFToken': this.injector.get(TokenService).data.access_token}),
                params: this.getParams(params) })
            .do(() => {})
            .catch((res) => {
            // console.log(res);
                return res;
            });
    }

    /**
     * 添加记录操作，ID1_1：题1的第一个选择，ID1_4_2: 题4的第二个选项
     * @params {{PID: string; Records: [{ID1_1: string; Updated_time: string},{ID1_4_2: string; Updated_time: string}]}}
     *  params = {
        'PID' : '006',
        'Records' : [
    {
      "ID1_1": "1000000001",
      "Updated_time": "2017-11-04T23:31:23.339478"
    },
    {
      "ID1_2": "1000000001",
      "Updated_time": "2017-11-07T16:46:01.615804"
    },
    {
      "ID1_4_2": "true",
      "Updated_time": "2017-11-04T23:52:08.196347"
    }
  ]
    };
     * @returns {Observable<R|T>}
     * {
     */
    putRecord(params: any): Observable<any> {
        return this.http.put(this.baseUrl + '/healthexamination/recordop/', params, this.options)
            .do(() => {})
            .catch((res) => {
                console.log(res);
                return res;
            })
    }

    /**
     * 获取所有问卷及基本信息（上一次填写记录时间暂未增加）
     * @returns {Observable<R|T>}
     * {
     * "Count": 2,
     * "PIDs": [{
       "PID": 3,
      "体检编号": "1000000001",
      "表格是否完成": "",
      "姓名": ""
    },
     {
       "PID": 4,
       "体检编号": "1000000001",
       "表格是否完成": "",
       "姓名": ""
     }]
     }
     */
    getPatientList(): Observable<any> {
        return this.http.get(this.baseUrl + '/healthexamination/recordlist/', this.options)
            .do(() => {} )
            .catch((res) => {
            console.log(res);
            return res;
            });
    }

    /**
     * 登录，并将token添加到localstorage中
     * @param user
     * user{
            "username":params.username,
            "password":params.password
        };
     */
    login(user) {
        const api = '/account/login/';
        console.log(user);
        return this.http.post(this.baseUrl + api, user)
               .do((res: any) => {
                   const localuser = new TokenService();
                   localuser.data = <TokenData>{
                       access_token: res.TOKEN,
                       expire_time: moment().add(7, 'days').unix(),
                       refresh_token: '',
                       refresh_token_valid_time: moment().add(14, 'days').unix(),
                       user_name: user.username,
                   };
                   console.log(localuser);
               })
               .catch((res) => {
               return res;
           });
    }


}
