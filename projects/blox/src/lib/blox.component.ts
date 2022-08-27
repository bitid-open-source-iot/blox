import { color } from './classes/color'
import { BloxService } from './blox.service'
import { BloxRowComponent } from './row/row.component'
import { BloxFont, BLOX_FONT } from './classes/blox-font'
import { BloxFill, BLOX_FILL } from './classes/blox-fill'
import { BloxStroke, BLOX_STROKE } from './classes/blox-stroke'
import { Input, Output, Component, QueryList, Renderer2, OnChanges, ElementRef, EventEmitter, AfterContentInit, ViewEncapsulation, ContentChildren } from '@angular/core'

@Component({
    selector: 'blox',
    styleUrls: ['./blox.component.scss'],
    templateUrl: './blox.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxComponent implements OnChanges, AfterContentInit {

    public element: HTMLElement

    @Input('font') public font: BLOX_FONT = new BloxFont()
    @Input('fill') public fill: BLOX_FILL = new BloxFill()
    @Input('stroke') public stroke: BLOX_STROKE = new BloxStroke()
    @Input('editing') public editing: boolean = false

    @Output('changes') public changes: EventEmitter<any> = new EventEmitter<any>()

    @ContentChildren(BloxRowComponent) public rows!: QueryList<BloxRowComponent>

    constructor(private el: ElementRef, private blox: BloxService, private renderer: Renderer2) {
        this.element = this.el.nativeElement
    }

    private pageX: number = 0
    private pageY: number = 0

    private end(event: MouseEvent | TouchEvent) {
        event.preventDefault()
        this.blox.rowId = ''
        this.blox.resize = ''
        this.blox.columnId = ''
        const rows = this.rows.filter(row => row.type !== 'static').map(row => {
            return {
                columns: row.columns.map(column => {
                    return {
                        width: column.width,
                        columnId: column.columnId
                    }
                }),
                rowId: row.rowId,
                height: row.height
            }
        })
        this.changes.emit(rows)
    }

    private start(event: MouseEvent | TouchEvent) {
        if (event instanceof MouseEvent) {
            this.pageX = event.pageX
            this.pageY = event.pageY
        } else {
            this.pageX = event.touches[0].pageX
            this.pageY = event.touches[0].pageY
        }
    }

    private resize(event: MouseEvent | TouchEvent) {
        this.rows.map(row => {
            if (row.rowId === this.blox.rowId) {
                if (this.blox.resize === 'row') {
                    if (row.rowId === this.blox.rowId) {
                        let height = row.height
                        if (event instanceof MouseEvent) {
                            height = row.height - (this.pageY - event.pageY)
                            this.pageY = event.pageY
                        } else if (event instanceof TouchEvent) {
                            height = row.height - (this.pageY - event.touches[0].pageY)
                            this.pageY = event.touches[0].pageY
                        }
                        if (height > 50) {
                            row.height = height
                            row.process()
                        }
                    }
                } else if (this.blox.resize === 'column') {
                    let difference = 0
                    if (event instanceof MouseEvent) {
                        difference = this.pageX - event.pageX
                        this.pageX = event.pageX
                    } else if (event instanceof TouchEvent) {
                        difference = this.pageX - event.touches[0].pageX
                        this.pageX = event.touches[0].pageX
                    }
                    row.columns.forEach((a, ai) => {
                        if (a.columnId === this.blox.columnId) {
                            a.width -= parseFloat(((difference / this.element.clientWidth) * 100).toFixed(2))
                            a.process()
                            row.columns.forEach((b, bi) => {
                                if (ai + 1 === bi) {
                                    b.width += parseFloat(((difference / this.element.clientWidth) * 100).toFixed(2))
                                    b.process()
                                }
                            })
                        }
                    })
                }
            }
        })
    }

    private process() {
        /* --- FONT --- */
        if (typeof (this.font) !== 'undefined' && this.font !== null) {
            this.renderer.setStyle(this.element, 'color', color(this.font.color!, this.font.opacity! / 100))
        }
        /* --- FILL --- */
        if (typeof (this.fill) !== 'undefined' && this.fill !== null) {
            this.renderer.setStyle(this.element, 'background-color', color(this.fill.color!, this.fill.opacity! / 100))
        }
        this.blox.editing.next(this.editing)
    }

    ngOnChanges(): void {
        this.process()
    }

    ngAfterContentInit(): void {
        this.process()

        this.element.addEventListener('mouseup', event => this.end(event))
        this.element.addEventListener('touchend', event => this.end(event))
        this.element.addEventListener('mousemove', event => this.resize(event))
        this.element.addEventListener('touchmove', event => this.resize(event))
        this.element.addEventListener('mousedown', event => this.start(event))
        this.element.addEventListener('touchstart', event => this.start(event))
    }

}
