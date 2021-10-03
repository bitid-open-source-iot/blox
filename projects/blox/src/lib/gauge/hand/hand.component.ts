import { Input, OnChanges, Component, ElementRef, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'blox-gauge-hand',
    styleUrls: ['./hand.component.scss'],
    templateUrl: './hand.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxGaugeHandComponent implements OnChanges {

    @Input('id') public id: string;
    @Input('color') public color: string = '#FFFFFF';
    @Input('value') public value: number = 0;
    @Input('opacity') public opacity: number = 100;

    constructor(private el: ElementRef) {
        this.el.nativeElement.id = this.id;
    }

    public hand: any;

    ngOnChanges(changes: SimpleChanges) {
        if (changes?.value) {
            this.value = parseFloat(changes.value.currentValue);
        };
        if (changes?.opacity) {
            this.opacity = parseFloat(changes.opacity.currentValue);
        };
    }

}
