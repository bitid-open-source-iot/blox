import { Input, OnChanges, Component, ElementRef, SimpleChanges, ViewEncapsulation, Inject } from '@angular/core';
import { BloxGaugeComponent } from '../gauge.component';

@Component({
    selector: 'blox-gauge-hand',
    styleUrls: ['./hand.component.scss'],
    templateUrl: './hand.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxGaugeHandComponent implements OnChanges {

    @Input('id') public id: string;
    @Input('value') public value: number = 0;
    @Input('color') public color: string = '#FFFFFF';

    constructor(private el: ElementRef, @Inject(BloxGaugeComponent) private parent: BloxGaugeComponent) {
        this.el.nativeElement.id = this.id;
    }

    public hand: any;

    ngOnChanges(changes: SimpleChanges) {
        this.value = parseFloat(changes.value.currentValue);
        this.parent.process();
    }

}
