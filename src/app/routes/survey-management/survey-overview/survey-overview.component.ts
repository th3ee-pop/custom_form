import { Component, OnInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { ActivatedRoute, Router, PreloadingStrategy, Params} from '@angular/router';
import { FileDownloadService } from '@core/services/fileDownload.service';

@Component({
    selector: 'app-survey-overview',
    templateUrl: './survey-overview.component.html',
    styleUrls: ['./survey-overview.component.less']
})
export class SurveyOverviewComponent implements OnInit {

    localInfo = JSON.parse(localStorage.getItem('_user'));
    loggedUser = this.localInfo.user_name;
    userGroup = this.localInfo.user_group;
    userProvince = this.localInfo.user_province;
    PID = '';
    constructor(
        private service: HttpService,
        private route: ActivatedRoute,
        private router: Router,
        private fileDownloader: FileDownloadService,
    ) { }

    pi = 1;
    ps = 10;
    total = 200; // mock total
    loading = false;
    args = {};
    _indeterminate = false;
    _allChecked = false;
    start_time = ''; // 开始时间
    end_time = '';   // 结束时间
    data = [];
    nowuser = JSON.parse(localStorage.getItem('_user'));

    // 所有的过滤条件在这个对象里添加
    conditions = {
        'filter_dict': {
            'Updated_time': []
        },
        'sorted_key': 'PID',
        'start': (this.pi - 1) * this.ps,
        'offset': this.ps,
    };

    ngOnInit() {
        this.getTableData();
    }
    changePage() {
        this.conditions.start = (this.pi - 1) * this.ps;
        this.conditions.offset = this.ps;
    }

    showConditions() {
        this.load();
    }

    clear() {
        for (const key in this.conditions.filter_dict) {
            if (this.conditions.filter_dict[key])
                delete this.conditions.filter_dict[key];
        }
        this.start_time = '';
        this.end_time = '';
        this.load();
    }
    load(pi?: number) {
        if (typeof pi !== 'undefined') {
            this.pi = pi || 1;
        }
        this.setTime();
        this.changePage();
        this.loading = true;
        this._allChecked = false;
        this._indeterminate = false;
        this.service.getPatientList(this.conditions).subscribe( (res) => {
            this.data = res.PID_info;
            this.loading = false;
        });
    }
    getTableData() {
        const conditions = {
            'sorted_key' : 'PID',
            'start' : this.pi - 1,
            'offset' : this.ps,
            'filter_dict' : { 'PID': [0, 30] }

        };
        this.loading = true;
        this._allChecked = false;
        this._indeterminate = false;
        this.service.getPatientList(conditions).subscribe( (res) => {
            this.data = res.PID_info;
            this.loading = false;
        });
    }


    // 时间格式转换
    GMTToStr(time) {
        const date = new Date(time);
        const Str = date.getFullYear() + '-' +
            (date.getMonth() + 1) + '-' +
            date.getDate() + ' ' +
            date.getHours() + ':' +
            date.getMinutes() + ':' +
            date.getSeconds();
        return Str;
    }

    // 时间设置
    setTime() {
        if (this.start_time === '' || this.end_time === '') {
            delete this.conditions.filter_dict.Updated_time;
        } else {
            this.conditions.filter_dict.Updated_time = [];
            this.conditions.filter_dict.Updated_time.push(this.GMTToStr(this.start_time));
            this.conditions.filter_dict.Updated_time.push(this.GMTToStr(this.end_time));
        }
    }


    deleteRecord(pid: string) {
        if (pid && pid !== '') {
            const deleteId = { 'PID': pid };
            this.service.deleteRecord(deleteId).subscribe((res) => {
                this.getTableData();
            });
        }
    }
    isVisible( data ): boolean {
        if (this.userGroup === '4') {
            return true;
        } else if (this.userGroup === '3' || '2') {
            return data.province === this.userProvince;
        } else if (this.userGroup === '1') {
            return data.completedBy === this.loggedUser;
        }
    }

    /**
     *
     * @param PID 根据pid下载单个数据
     */
    downloadByPID(PID) {
        const filePath = 'healthexamination/exportcsv/';
        const fileName = 'PID' + PID + '.csv';
        const PIDs = [PID];  // 单个元素
        this.fileDownloader.downloadFile(filePath, {'PID_list': [PID]}, fileName);
    }

    /**
     * 下载当前页面所有记录
     */
    downloadAll() {
        const PIDs = this.data.map(item => {  // 遍历读取表格中的pid，并合成list
            return item.PID;
        });
        const filePath = 'healthexamination/exportcsv/';
        this.fileDownloader.downloadFile(filePath, {'PID_list': PIDs}, 'All.csv');
    }

    filterData() {
        console.log('filtering');
    }


}













