import { ObjectId } from '../../classes/id'
import { Input, Component, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'blox-chart-fixed-line',
    styleUrls: ['./fixed-line.component.scss'],
    templateUrl: './fixed-line.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxChartFixedLineComponent implements OnChanges {

    @Input('id') public id: string = ObjectId()
    @Input('value') public value: number = 0
    @Input('label') public label: string = ''
    @Input('color') public color: string = '#ffffff'
    @Input('opacity') public opacity: number = 100

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        this.value = changes['value'].currentValue ? parseFloat(changes['value'].currentValue) : 0
        this.opacity = changes['opacity'].currentValue ? parseFloat(changes['opacity'].currentValue) : 0
    }

}
