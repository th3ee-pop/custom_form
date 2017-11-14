import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import { HttpService } from '@core/services/http.service';

@Component({
    selector: 'app-sample-crossfilter',
    templateUrl: './sample-crossfilter.component.html',
    styleUrls: ['./sample-crossfilter.component.css']
})
export class SampleCrossfilterComponent implements OnInit {
    /**
     * crossfilter part
     *  */
    content = {
        "ZY010001329467": {
            "Stay_days": 13,
            "Name": "陈永亮",
            "Gender": "男",
            "Age": 60,
            "Score": 51.73456211058211,
            "Pathway_on": 0,
            "Cost": 91074.11
        },
        "ZY010001324105": {
            "Stay_days": 8,
            "Name": "李爱英",
            "Gender": "女",
            "Age": 69,
            "Score": 21.081372549019605,
            "Pathway_on": 0,
            "Cost": 17627.15
        },
        "ZY010001131581": {
            "Stay_days": 16,
            "Name": "雷益柱",
            "Gender": "男",
            "Age": 55,
            "Score": 42.7911575433247,
            "Pathway_on": 1,
            "Cost": 65697.77
        },
        "ZY030001211822": {
            "Stay_days": 21,
            "Name": "王会生",
            "Gender": "男",
            "Age": 53,
            "Score": 72.82804503980633,
            "Pathway_on": 1,
            "Cost": 95421.75
        },
        "ZY010001319160": {
            "Stay_days": 4,
            "Name": "翟满堂",
            "Gender": "男",
            "Age": 77,
            "Score": 2.509803921568628,
            "Pathway_on": 0,
            "Cost": 4721.56
        },
        "ZY030001306814": {
            "Stay_days": 7,
            "Name": "田根龙",
            "Gender": "男",
            "Age": 56,
            "Score": 6.7215686274509805,
            "Pathway_on": 0,
            "Cost": 22684.34
        }
    };

    records = [];

    constructor(
        private fb: FormBuilder,
        private service: HttpService
    ) { }

    ngOnInit() {

        /**
         * crossfilter part
         * @type {Array}
         */
        this.records = this.getData(this.content);
        const patientL = [];
        console.log(this.records);
        for(var key in this.records){
            if(this.records.hasOwnProperty(key)){
                var tempA = this.records[key];
                tempA.ID = key;
                if(tempA.Age < 26){
                    tempA.AgeRange = "0~25";
                }else if(tempA.Age < 46){
                    tempA.AgeRange = "26~45";
                }else if(tempA.Age < 61){
                    tempA.AgeRange = "46~60";
                }else if(tempA.Age <71){
                    tempA.AgeRange = "61~70";
                }else {
                    tempA.AgeRange = "70~";
                }
                if(tempA.Pathway_on === 0){
                    tempA.Pathway_on = "否";
                }else {
                    tempA.Pathway_on = "是";
                }
                console.log(tempA);
                patientL.push(tempA);
            }
        }
        let recordsCF = crossfilter(patientL);
        console.log(recordsCF);
        let path = {
            "gender":recordsCF.dimension(function (d) {
                return d.Gender;
            }),
            "ageRange":recordsCF.dimension(function (d) {
                return d.AgeRange;
            }),
            "score":recordsCF.dimension(function (d) {
                return d.Score;
            })
        };
        console.log(path);

        let genderGroup = path.gender.group().reduceCount(),
            ageRangeGroup = path.ageRange.group().reduceCount();
        // ageGroup = path.age.group().reduceCount
        let genderChart = dc.barChart("#gender"),
             ageRangeChart = dc.barChart("#age");

        // console.log(genderChart);
        // console.log(genderGroup);
        genderChart.margins().left = 60;
        ageRangeChart.margins().left = 60;
        let width = 250,
            height = 250;
        genderChart.width(width)
            .height(height)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            // .brushOn(true)
            .yAxisLabel("人数")
            .xAxisLabel("性别")
            .dimension(path.gender)
            .group(genderGroup)
            .elasticY(true)
            .controlsUseVisibility(true)
            .on("preRedraw",() => {
                const data = path.score.top(5);
                this.draw(data);
            });

        ageRangeChart.width(width)
            .height(height)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            // .brushOn(true)
            .yAxisLabel("人数")
            .xAxisLabel("年龄段")
            .dimension(path.ageRange)
            .group(ageRangeGroup)
            .elasticY(true)
            .controlsUseVisibility(true);

        dc.renderAll();

    }

    getData(content){
        let records = [];
        for (let key in content){
            records.push(content[key]);
        }
        return records;
    }

    draw(data){
        console.log(data);
        let width = 500,
            height = 400,

            divideLineX = width * 0.15;

        let svg = d3.select('#result').append("svg")
            .attr("width",500)
            .attr("height",400)
            .append("g");

        let  y = d3.scale.ordinal()
            .rangeRoundBands([-8,height],.2)
            .domain(data.map(function (d) {
                return d.ID;
            }));

        let x = d3.scale.linear().range([0,width - divideLineX - 50])
            .domain([2,72]);
        svg.selectAll()
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            // .attr("transform", "translate(0,30)")
            .attr("y", function(d) { return y(d.ID); })
            .attr("height", y.rangeBand())
            .attr("x", function(d) { return divideLineX - 10; })

        svg.selectAll()
            .data(data)
            .enter().append("text")
            .attr("class","featuretext")
            .attr("text-anchor","right")
            // .attr("transform","translate(0,30)")
            // .on("mouseover",tip.show)
            // .on("mouseout",tip.hide)
            // .attr("x",function(){return 0;})
            // .style({"opacity":0,"color":"steelblue"})
            // .transition()
            // .duration(500)
            // .transition()
            // .duration(800)
            .style("opacity",1)
            .attr("x",function(d){return x(d.Score) + divideLineX - 10})
            .attr("y",function(d){return y(d.ID);})
            .attr("dy",15)
            .attr("dx",4)
            .text(function(d){return (d.Score).toFixed(2)+"%";});

        return svg;
    }

}
