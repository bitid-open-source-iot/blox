import { Input, OnChanges, Component, ElementRef, SimpleChanges, ViewEncapsulation } from '@angular/core'
import { ObjectId } from '../../classes/id'

@Component({
    selector: 'blox-gauge-hand',
    styleUrls: ['./hand.component.scss'],
    templateUrl: './hand.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxGaugeHandComponent implements OnChanges {

    @Input('id') public id: string = ObjectId()
    @Input('color') public color: string = '#FFFFFF'
    @Input('value') public value: number = 0
    @Input('opacity') public opacity: number = 100

    constructor(private el: ElementRef) {
        this.el.nativeElement.id = this.id
    }

    public hand: any

    ngOnChanges(changes: SimpleChanges) {
        this.value = changes['value'].currentValue ? parseFloat(changes['value'].currentValue) : 0
        this.opacity = changes['opacity'].currentValue ? parseFloat(changes['opacity'].currentValue) : 0
    }

}
