import { Component, OnInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { ActivatedRoute, Router, PreloadingStrategy, Params} from '@angular/router';

@Component({
  selector: 'app-file-management',
  templateUrl: './file-management.component.html',
  styleUrls: ['./file-management.component.css']
})
export class FileManagementComponent implements OnInit {

    localInfo = JSON.parse(localStorage.getItem('_user'));
    loggedUser = this.localInfo.user_name;
    userGroup = this.localInfo.user_group;
    userProvince = this.localInfo.user_province;
    data = [];
    PID = '';


    constructor(private service: HttpService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit() {
        this.getTableData();
    }

    // 读取文件数据，调用读文件api
    getTableData() {
        this.service.getFileList().subscribe( (res) => {
            console.log(res);
            this.data = res.Files;
        });
    }

    // 下载文件，调用下载文件api
    downloadFile(id: string, name: string) {
        if (id && id !== '') {
            const link = document.createElement('a');
            const downloadId = { 'id': id };
            this.service.downloadFile(downloadId).subscribe((res) => {
                console.log('download file work!', res);

                // Blob转化为链接
                const blob = new Blob([res]);
                link.setAttribute('href', window.URL.createObjectURL(blob));
                link.setAttribute('download', name);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                // console.log('blob', blob);
            });
        }
    }

    // 删除文件，调用删除文件api
    deleteFile(id: string) {
        if (id && id !== '') {
            const deleteId = { 'id': id };
            this.service.deleteFile(deleteId).subscribe((res) => {
                console.log('delete file work!', res);
                this.getTableData();
            });
        }
    }

}
