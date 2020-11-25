import { Input, Component, OnChanges, EventEmitter, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'blox-point',
    styleUrls: ['./point.component.scss'],
    templateUrl: './point.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxPointComponent implements OnChanges {

    @Input('date') public date: string|Date;
    @Input('value') public value: number;

    public changes: EventEmitter<any> = new EventEmitter<any>();

    constructor() { };

    ngOnChanges(changes: SimpleChanges): void {
        if (typeof(changes.date) != 'undefined' && !changes.date.firstChange) {
            this.changes.next();
        };
        if (typeof(changes.value) != 'undefined' && !changes.value.firstChange) {
            this.changes.next();
        };
    };

}