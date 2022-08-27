import { Input, Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'blox-point',
    styleUrls: ['./point.component.scss'],
    templateUrl: './point.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxPointComponent {

    @Input('fill') public fill: string = '#00000'
    @Input('date') public date: string | Date = new Date()
    @Input('value') public value: number = 0

    constructor() { }

}
