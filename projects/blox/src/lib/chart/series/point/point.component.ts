import { Input, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'blox-point',
    styleUrls: ['./point.component.scss'],
    templateUrl: './point.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxPointComponent {

    @Input('date') public date: string|Date;
    @Input('value') public value: number;

    constructor() { };

}