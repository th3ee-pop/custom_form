import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as moment from 'moment';

import { TokenService } from '../net/token/token.service';
import {TokenData} from '@core/net/token/token.type';
import {Headers, Http} from '@angular/http';


export class Record {
    constructor(
        public Complete_by: string,
        public Name: string,
        public No: string,
        public Province: string,
        public Status: string,
        public Updated_time: string
    ) {}
}
@Injectable()
export class HttpService {

    baseUrl = 'http://59.110.52.133:9500';

    constructor(
        private http: HttpClient,
        private Http: Http,
        private injector: Injector
    ) {}

    options = {
        headers: new HttpHeaders({'X-CSRFToken': this.injector.get(TokenService).data.access_token})
    };

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error); // ?
    }

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

    getRecordInfo(params: string): Observable<any> {
        return this.http.get(this.baseUrl + '/healthexamination/basicinfo/', {
            params: this.getParams({'PID': params})
        })
            .map((res: any) => {
            return res.Records;
            })
            .do((res) => console.log(res));
    }

    getRecordInfoPromise(params: string): Promise<any> {
        return this.http.get(this.baseUrl + '/healthexamination/basicinfo/', {
            params: this.getParams({'PID': params})
        })
            .toPromise()
            .then((res) => console.log(res))
            .catch(this.handleError);
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
     * 'PID':'3'
     'Records' :
     '[
     {"Record_ID":"ID1_1","Record_Value": "1000000001", "Updated_time": "" },
     {"Record_ID":"ID1_3_2","Record_Value": "true", "Updated_time": "" },
     {"Record_ID":"ID1_9_2","Record_Value": "true", "Updated_time": "" },
     {"Record_ID":"ID2_2_2","Record_Value": "true", "Updated_time": "" }
     ]'
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
            });
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
    // deleteId = { 'PID': '1'};
    deleteRecord(deleteId): Observable<any> {
        return this.Http.delete(this.baseUrl + '/healthexamination/recordop/', {
            body: deleteId,
            headers: new Headers({'X-CSRFToken': this.injector.get(TokenService).data.access_token})
        })
            .do(() => {
            console.log('delete!');
            } )
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
                    user_group: res.group,
                    user_province: res.province
                };
                console.log(localuser);
            })
            .catch((res) => {
                return res;
            });
    }

    register(body) {
        const api = '/account/register/';
        console.log(body);
        return this.http.post(this.baseUrl + api, JSON.stringify(body))
            .do((res: any) => {
            /*const localuser = new TokenService();
            localuser.data = <TokenData>{
                access_token: res.TOKEN,
                expire_time: moment().add(7, 'days').unix(),
                refresh_token: '',
                refresh_token_valid_time: moment().add(14, 'days').unix(),
                user_name: body.username,
                user_group: '4',
                user_province: body.province
            };*/
           // console.log(localuser);
            })
            .catch((res) => {
                return res;
            });
    }

    getUser(conditions) {
        const body = {
            'filter_dict': conditions.filter,
            'sorted_key': conditions.sorted_key,
            'start': conditions.start,
            'offset': conditions.offset
        };
        const api = '/account/userlist/';
        console.log(conditions);
        return this.http.post(this.baseUrl + api, JSON.stringify(body))
            .do((res: any) => {
            console.log(res);
            })
            .catch((res) => {
            return res;
        });
    }

    /**
     * 用例参照思睿师兄写的getUser
     * @param api
     * @param conditions
     * @returns {Observable<R|T>}
     */
    getList(api, conditions) {
        const body = {
            'filter_dict': conditions.filter,
            'sorted_key': conditions.sorted_key,
            'start': conditions.start,
            'offset': conditions.offset
        };
        // const api = '/account/userlist/';
        console.log(conditions);
        return this.http.post(this.baseUrl + api, JSON.stringify(body))
            .do((res: any) => {
                console.log(res);
            })
            .catch((res) => {
                return res;
            });
    }


}
