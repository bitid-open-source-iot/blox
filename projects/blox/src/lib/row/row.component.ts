import { ObjectId } from '../classes/id';
import { BloxService } from '../blox.service';
import { BloxColumnComponent } from '../column/column.component';
import { BloxHandleComponent } from '../handle/handle.component';
import { Input, Component, Renderer2, ViewChild, OnDestroy, OnChanges, QueryList, ElementRef, ContentChildren, AfterContentInit } from '@angular/core';

@Component({
    selector: 'blox-row',
    styleUrls: ['./row.component.scss'],
    templateUrl: './row.component.html'
})

export class BloxRowComponent implements OnChanges, OnDestroy, AfterContentInit {

    @Input('type') public type = 'dynamic';
    @Input('rowId') public rowId: string = ObjectId();
    @Input('height') public height = 100;
    @Input('position') public position: number;

    @ViewChild(BloxHandleComponent, { static: true }) private handle: BloxHandleComponent;
    @ContentChildren(BloxColumnComponent) public columns: QueryList<BloxColumnComponent>;

    constructor(private blox: BloxService, private el: ElementRef, private renderer: Renderer2) {
        this.element = this.el.nativeElement;

        this.process();
    }

    public element: HTMLElement;
    private subscriptions: any = {};

    public hold() {
        this.blox.resize = 'row';
    }

    public async process() {
        if (Array.isArray(this.columns)) {
            this.columns.forEach(column => {
                column.process();
            });
        };
        this.renderer.setStyle(this.element, 'height', this.height + 'px');
        this.renderer.setStyle(this.element, 'min-height', this.height + 'px');
        if (this.handle && this.type == 'static') {
            this.handle.hide();
        } else if (this.handle && this.type == 'dynamic') {
            this.handle.show();
        }
    }

    ngOnChanges(): void {
        this.process();
    }

    ngOnDestroy(): void {
        this.subscriptions.editing.unsubscribe();
    }

    ngAfterContentInit(): void {
        this.process();

        this.element.addEventListener('mousedown', event => {
            this.blox.rowId = this.rowId;
        });

        this.element.addEventListener('touchstart', event => {
            this.blox.rowId = this.rowId;
        });

        this.subscriptions.editing = this.blox.editing.subscribe(editing => {
            if (editing && this.type == 'dynamic') {
                this.handle.show();
            } else {
                this.handle.hide();
            }
        });
    }

}
