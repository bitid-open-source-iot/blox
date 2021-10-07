import { ObjectId } from '../../classes/id';
import { Input, Component, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'blox-chart-fixed-line',
    styleUrls: ['./fixed-line.component.scss'],
    templateUrl: './fixed-line.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxChartFixedLineComponent implements OnChanges {

    @Input('id') public id?: string = ObjectId();
    @Input('value') public value?: number = 0;
    @Input('label') public label?: string = '';
    @Input('color') public color?: string = '#ffffff';
    @Input('opacity') public opacity?: number = 100;

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes?.value) {
            this.value = parseFloat(changes.value.currentValue);
        };
        if (changes?.opacity) {
            this.opacity = parseFloat(changes.opacity.currentValue);
        };
    }

}
