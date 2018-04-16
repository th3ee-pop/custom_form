import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Options } from '../options';

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.css']
})

export class BarComponent extends Options implements OnInit {
    ngOnInit() {}
}
