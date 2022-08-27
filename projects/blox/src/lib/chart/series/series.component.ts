import { BloxPointComponent } from './point/point.component'
import { Input, OnChanges, QueryList, Component, ElementRef, EventEmitter, ContentChildren, ViewEncapsulation, AfterContentInit } from '@angular/core'
import { ObjectId } from '../../classes/id'

@Component({
    selector: 'blox-chart-series',
    styleUrls: ['./series.component.scss'],
    templateUrl: './series.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxChartSeriesComponent implements OnChanges, AfterContentInit {

    @Input('id') public id: string = ObjectId()
    @Input('type') public type: string = ''
    @Input('label') public label: string = ''
    @Input('color') public color: string = ''
    @Input('opacity') public opacity: number = 100

    @ContentChildren(BloxPointComponent) public points: QueryList<BloxPointComponent> = new QueryList<BloxPointComponent>()

    constructor(private el: ElementRef) {
        this.element = this.el.nativeElement
    }

    public data: EventEmitter<any> = new EventEmitter<any>()
    public changes: EventEmitter<any> = new EventEmitter<any>()
    public element: HTMLElement

    ngOnChanges(): void {
        this.changes.next({
            id: this.id,
            type: this.type,
            label: this.label,
            color: this.color,
            opacity: this.opacity
        })
    }

    ngAfterContentInit(): void {
        this.points.changes.subscribe(event => this.data.next('CHANGE_EVENT'))
    }

}
