import { Input, OnChanges, Component, ElementRef, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'blox-gauge-range',
    styleUrls: ['./range.component.scss'],
    templateUrl: './range.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxGaugeRangeComponent implements OnChanges {

    @Input('id') public id: string;
    @Input('end') public end: number = 0;
    @Input('start') public start: number = 0;
    @Input('color') public color: string = '#FFFFFF';

    constructor(private el: ElementRef) {
        this.el.nativeElement.id = this.id;
    }

    ngOnChanges(changes: SimpleChanges) {
        this.end = parseFloat(changes.end.currentValue);
        this.start = parseFloat(changes.start.currentValue);
    }

}
