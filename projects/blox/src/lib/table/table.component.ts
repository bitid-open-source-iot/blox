import { BloxTableColumn, BLOX_TABLE_COLUMN } from '../classes/blox-table-column'
import { Input, Component, ElementRef, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'blox-table',
    styleUrls: ['./table.component.scss'],
    templateUrl: './table.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxTableComponent {

    @Input('data') public data: any[] = []
    @Input('columns') public columns: BloxTableColumn[] | BLOX_TABLE_COLUMN[] = []

    constructor(private el: ElementRef) {
        this.element = this.el.nativeElement
    }
    public element: HTMLElement

}
