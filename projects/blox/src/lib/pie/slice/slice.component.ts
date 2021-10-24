import { Input, OnChanges, Component, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'blox-pie-slice',
    styleUrls: ['./slice.component.scss'],
    templateUrl: './slice.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxPieSliceComponent implements OnChanges {

    @Input('label') public label: string = '';
    @Input('color') public color: string = '#FFFFFF';
    @Input('value') public value: number = 0;
    @Input('opacity') public opacity: number = 100;

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
