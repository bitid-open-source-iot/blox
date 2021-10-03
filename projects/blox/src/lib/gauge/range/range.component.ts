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
    @Input('color') public color: string = '#FFFFFF';
    @Input('start') public start: number = 0;
    @Input('opacity') public opacity: number = 100;

    constructor(private el: ElementRef) {
        this.el.nativeElement.id = this.id;
    }

    public range: any;

    ngOnChanges(changes: SimpleChanges) {
        if (changes?.end) {
            this.end = parseFloat(changes.end.currentValue);
        };
        if (changes?.start) {
            this.start = parseFloat(changes.start.currentValue);
        };
        if (changes?.opacity) {
            this.opacity = parseFloat(changes.opacity.currentValue);
        };
    }

}
