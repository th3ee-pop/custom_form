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
    ps = 5;
    total = 200; // mock total
    loading = false;
    args = {};
    _indeterminate = false;
    _allChecked = false;
    start_time = '';
    end_time = '';
    list = [];
    nowuser = JSON.parse(localStorage.getItem('_user'));

    // 所有的过滤条件在这个对象里添加
    conditions = {
        'filter': {
            'date_joined': []
        },
        'sorted_key': 'username',
        'start': (this.pi - 1) * this.ps,
        'offset': this.ps,
    };

    ngOnInit() {
        this.getTableData();
    }

    getTableData() {
        const conditions = {
            'sorted_key' : 'Province',
            'start' : '0',
            'offset' : '20',
            'filter_dict' : { 'PID': [0, 30] }

        };
        this.loading = true;
        this._allChecked = false;
        this._indeterminate = false;
        this.service.getPatientList(conditions).subscribe( (res) => {
            this.list = res.PID_info;
            console.log(this.list);
            this.loading = false;
           // this.total = res.Count_total;
        });
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
    downloadByPID(PID) {
        const filePath = 'healthexamination/exportcsv/';
        const fileName = 'PID' + PID + '.csv';
        this.fileDownloader.downloadFile(filePath, {'PID': PID}, fileName);
    }
    downloadAll() {
        const filePath = 'healthexamination/exportcsv/';
        this.fileDownloader.downloadFile(filePath, {}, 'All.csv');
    }

    filterData() {
        console.log('filtering');
    }


}













