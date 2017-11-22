import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router, PreloadingStrategy, Params} from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { FileUploader } from 'ng2-file-upload';
import {TokenService} from '@core/net/token/token.service';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit, AfterViewInit {

    uploader: FileUploader = new FileUploader({
        url: 'http://202.117.54.95:9500/filesystem/fileop/',    // http://202.117.54.95:8888/filesystem/fileop/
        method: 'POST',
        isHTML5: true,
        queueLimit: 10, // 最大上传文件数量
        authToken: this.injector.get(TokenService).data.access_token
    });

    hasBaseDropZoneOver = false;
    files: any[] = [];

    fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    constructor(private router: Router,
                private service: HttpService,
                private injector: Injector) {
        this.uploader.onBeforeUploadItem = (item) => {
            item.withCredentials = false;
        };
        this.uploader.onAfterAddingFile = (f) => {
            this.files = this.uploader.queue;
            console.log('onAfterAddingFile');
            return f;
        };
        // this.uploader.queue[0].onSuccess = (response, status, headers) => {
        //     // 上传文件成功
        //     if (status === 200) {
        //         // 上传文件后获取服务器返回的数据
        //         const tempRes = JSON.parse(response);
        //         console.log(tempRes);
        //     }else {
        //         // 上传文件后获取服务器返回的数据错误
        //         console.log('上传失败');
        //     }
        // };
        // this.uploader.queue[0].upload(); // 开始上传
    }

    ngOnInit() {

    }

    ngAfterViewInit() {

    }

    // 退出，直接跳转回原页面
    exit() {
        this.router.navigate( ['/file/detail/']);
    }

}
