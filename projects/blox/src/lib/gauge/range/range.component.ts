import { Input, OnChanges, Component, ElementRef, SimpleChanges, ViewEncapsulation } from '@angular/core'
import { ObjectId } from '../../classes/id'

@Component({
    selector: 'blox-gauge-range',
    styleUrls: ['./range.component.scss'],
    templateUrl: './range.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxGaugeRangeComponent implements OnChanges {

    @Input('id') public id: string = ObjectId()
    @Input('end') public end: number = 0
    @Input('color') public color: string = '#FFFFFF'
    @Input('start') public start: number = 0
    @Input('opacity') public opacity: number = 100

    constructor(private el: ElementRef) {
        this.el.nativeElement.id = this.id
    }

    public range: any

    ngOnChanges(changes: SimpleChanges) {
        this.end = changes['end'].currentValue ? parseFloat(changes['end'].currentValue) : 0
        this.start = changes['start'].currentValue ? parseFloat(changes['start'].currentValue) : 0
        this.opacity = changes['opacity'].currentValue ? parseFloat(changes['opacity'].currentValue) : 0
    }

}
