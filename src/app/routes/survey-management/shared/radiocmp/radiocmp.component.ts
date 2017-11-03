import { Component, Input } from '@angular/core';
import { Radio } from '../radio';

@Component({
    selector: 'app-radio',
    templateUrl: './radiocmp.component.html',
    styleUrls: ['./radiocmp.component.css']

})
export class RadiocmpComponent {

    constructor() { }
    @Input() radios: Radio[];
    @Input() question: string;
    @Input() Id: string;
    selected: string;
}
