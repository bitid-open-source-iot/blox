import { BLOX_TABLE_COLUMN } from '../classes/blox-table-column';
import { Input, Component, Renderer2, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'blox-table',
    styleUrls: ['./table.component.scss'],
    templateUrl: './table.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxTableComponent {

    @Input('data') public data: any[] = [];
    @Input('columns') public columns: BLOX_TABLE_COLUMN[] = [];

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.element = this.el.nativeElement;
    }
    public element: HTMLElement;

}
