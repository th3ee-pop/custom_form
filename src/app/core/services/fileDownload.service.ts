import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as moment from 'moment';

import { TokenService } from '../net/token/token.service';
import {Headers, Http} from '@angular/http';

import { saveAs } from 'file-saver';

@Injectable()
export class FileDownloadService {

    baseUrl = 'http://59.110.52.133:9500';

    constructor(
        private http: HttpClient,
        private Http: Http,
        private msgSrv: NzMessageService,
    ) {}


    /**
     * 
     * @param filename 
     * 文件下载，输入为文件名，自动与baseUrl拼接为文件地址
     */
    downloadFile(filename) {
        this.msgSrv.loading('正在下载' + filename);
        this.http.get(this.baseUrl + '/' + filename, {
            
            // params: this._http.parseParams(this.httpData || {}),
            // TODO: blob 并不会走TOKEN拦截器
            // headers: new HttpHeaders({'Content-Type' : 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*'}),
            headers: new HttpHeaders({'access-control-allow-origin': '*'}),
            responseType: 'blob',
            observe: 'response'
        }).subscribe((res: HttpResponse<Blob>) => {
            if (res.body.size <= 0) {
                this.msgSrv.error(`下载失败`, { nzDuration: 1000 * 3 });
                return;
            }
            const fileName = filename || res.headers.get('filename') || res.headers.get('x-filename');
            saveAs(res.body, decodeURI(fileName));
            this.msgSrv.success('下载成功');
        }, (err) => {
            this.msgSrv.error(`下载失败，${err}`, { nzDuration: 1000 * 3 });
        }, () => {
            // this.el.nativeElement.disabled = false;
        });
    }

}
