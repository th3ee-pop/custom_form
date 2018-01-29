import { Component, OnInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import {Question} from "../question";

@Component({
  selector: 'app-addrcmp',
  templateUrl: './addrcmp.component.html',
  styleUrls: ['./addrcmp.component.less']
})
export class AddrcmpComponent extends Question implements OnInit {

    localAnswer = ''; // 存储数据
    answerChanged = false;

    areas;
    provinces;provincesName;
    cities;
    streets;

    initArray = new Array(5);
    nameArray = new Array(5);

  constructor(
      private service: HttpService
  ) { super() }

  ngOnInit() {
      this.getProvince();
      this.getCity();
      this.getArea();
      this.getStreet();
  }

    getProvince(){
        this.service.getChinaDivision("provinces").subscribe(res => {
            this.provinces = res.json().map(province => ({
                    label: province.name,
                    value: province.code
                }
            ));
        });
    }
    getCity(){
        this.cities = [];
        this.service.getChinaDivision("cities").subscribe(res => {
            const cities = res.json();
            console.log(this.initArray[0]);
            console.log(cities);
            // const matchProvince = this.provinces.filter((province) => {
            //     console.log(province);
            //     return province.name === this.initArry[0];
            // });
            // console.log(matchProvince);
            cities.forEach((city)=>{
                if( city.parent_code === this.initArray[0]){
                    this.cities.push({
                        label:city.name,
                        value:city.code
                    })
                }
            });
            console.log(this.cities);
        })
    }
    getArea(){
        this.areas = [];
        this.service.getChinaDivision("areas").subscribe(res => {
            const areas = res.json();
            console.log(this.initArray[1]);
            console.log(areas);
            areas.forEach((area)=>{
                if( area.parent_code === this.initArray[1]){
                    this.areas.push({
                        label:area.name,
                        value:area.code
                    })
                }
            });
            console.log(this.areas);
        })
    }
    getStreet(){
        this.streets = [];
        this.service.getChinaDivision("streets").subscribe(res => {
            const streets = res.json();
            console.log(this.initArray[2]);
            console.log(streets);
            streets.forEach((street)=>{
                if( street.parent_code === this.initArray[2]){
                    this.streets.push({
                        label:street.name,
                        value:street.code
                    })
                }
            });
            console.log(this.streets);
        })
    }
    answerChange(){
        const res = [];
        const tem = {
            Record_ID: '',
            Record_Value: ''
        };
        const questionID = this.question.id2;
        tem.Record_ID = questionID;
        tem.Record_Value = this.initArray.join('/');
        res.push(tem);
        console.log(res);
        this.answer = res;
    }
}
