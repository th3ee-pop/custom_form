import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../question';

@Component({
    selector: 'app-option',
    templateUrl: './option.component.html',
    styleUrls: ['./option.component.css']
})

export class OptionComponent extends Question implements OnInit {

    localAnswer = '';
    editdisabled = false;


    ngOnInit() {
        this.localAnswer = 'sss';
    }
    constructor() {
        super();
        this.localAnswer = '请点击选择';
    }
    answerChange() {
         console.log('options');
         console.log(this.localAnswer);
    }

}
