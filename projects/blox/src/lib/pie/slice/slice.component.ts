import { Input, OnChanges, Component, SimpleChanges, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'blox-pie-slice',
    styleUrls: ['./slice.component.scss'],
    templateUrl: './slice.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxPieSliceComponent implements OnChanges {

    @Input('key') public key: string = ''
    @Input('label') public label: string = ''
    @Input('color') public color: string = '#FFFFFF'
    @Input('value') public value: number = 0
    @Input('opacity') public opacity: number = 100

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        this.value = changes['value'].currentValue ? parseFloat(changes['value'].currentValue) : 0
        this.opacity = changes['opacity'].currentValue ? parseFloat(changes['opacity'].currentValue) : 0
    }

}
