import { ObjectId } from '../utilities/id';
import { BloxService } from '../blox.service';
import { BloxColumnComponent } from '../column/column.component';
import { BloxHandleComponent } from '../handle/handle.component';
import { Input, Component, Renderer2, OnChanges, QueryList, ElementRef, ContentChildren, AfterContentInit, ViewChild } from '@angular/core';

@Component({
    selector: 'blox-row',
    styleUrls: ['./row.component.scss'],
    templateUrl: './row.component.html'
})

export class BloxRowComponent implements OnChanges, AfterContentInit {
    
    @Input('id') public id: string = ObjectId();
    @Input('type') public type: string = 'dynamic';
    @Input('height') public height: number = 100;
    @Input('position') public position: number;
    
    @ViewChild(BloxHandleComponent, {'static': true}) private handle: BloxHandleComponent;
    @ContentChildren(BloxColumnComponent) public columns: QueryList<BloxColumnComponent>;

    constructor(private blox: BloxService, private el: ElementRef, private renderer: Renderer2) {
        this.element = this.el.nativeElement;

        this.process();
    };

    public element: HTMLElement;

    public hold() {
        this.blox.resize = 'row';
    };

    public async process() {
        this.renderer.setStyle(this.element, 'height', this.height + 'px');
        if (this.handle && this.type == 'static') {
            this.handle.hide();
        } else if (this.handle && this.type == 'dynamic') {
            this.handle.show();
        };
    };

    ngOnChanges(): void {
        this.process();
    };

    ngAfterContentInit(): void {
        this.process();

        this.element.addEventListener('mousedown', event => {
            this.blox.rowId = this.id;
        });
        
        this.element.addEventListener('touchstart', event => {
            this.blox.rowId = this.id;
        });
    };

}