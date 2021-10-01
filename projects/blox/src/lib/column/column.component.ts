import { color } from '../classes/color';
import { ObjectId } from '../classes/id';
import { BloxFont } from '../classes/blox-font';
import { BloxFill } from '../classes/blox-fill';
import { BloxStroke } from '../classes/blox-stroke';
import { BloxService } from '../blox.service';
import { BloxHandleComponent } from '../handle/handle.component';
import { Input, Component, ViewChild, Renderer2, OnChanges, ElementRef, AfterContentInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'blox-column',
    styleUrls: ['./column.component.scss'],
    templateUrl: './column.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxColumnComponent implements OnChanges, AfterContentInit {

    @Input('id') public id: string = ObjectId();
    @Input('font') public font: BloxFont = new BloxFont();
    @Input('fill') public fill: BloxFill = new BloxFill();
    @Input('width') public width = 100;
    @Input('height') public height = 100;
    @Input('stroke') public stroke: BloxStroke = new BloxStroke();
    @Input('position') public position: number = 0;

    @ViewChild(BloxHandleComponent, { static: true }) private handle: BloxHandleComponent;

    constructor(private blox: BloxService, private el: ElementRef, private renderer: Renderer2) {
        this.element = this.el.nativeElement;

        this.process();
    }

    public element: HTMLElement;
    private subscriptions: any = {};

    public hold() {
        this.blox.resize = 'column';
    }

    public async process() {
        this.renderer.setStyle(this.element, 'min-height', this.height + 'px');
        this.renderer.setStyle(this.element, 'flex', '0 calc(' + this.width + '% - 10px)');
        /* --- FONT --- */
        if (typeof (this.font) != 'undefined' && this.font != null) {
            this.renderer.setStyle(this.element, 'color', color(this.font.color, this.font.opacity / 100));
            this.renderer.setStyle(this.element, 'font-size', this.font.size);
            this.renderer.setStyle(this.element, 'font-family', this.font.family);
        }
        /* --- FILL --- */
        if (typeof (this.fill) != 'undefined' && this.fill != null) {
            this.renderer.setStyle(this.element, 'background-color', color(this.fill.color, this.fill.opacity / 100));
        }
        /* --- STROKE --- */
        if (typeof (this.stroke) != 'undefined' && this.stroke != null) {
            this.renderer.setStyle(this.element, 'border-width', this.stroke.width + 'px');
            this.renderer.setStyle(this.element, 'border-style', this.stroke.style);
            this.renderer.setStyle(this.element, 'border-color', color(this.stroke.color, this.stroke.opacity / 100));
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
            this.blox.columnId = this.id;
        });

        this.element.addEventListener('touchstart', event => {
            this.blox.columnId = this.id;
        });

        this.subscriptions.editing = this.blox.editing.subscribe(editing => {
            if (editing) {
                this.handle.show();
            } else {
                this.handle.hide();
            }
        });
    }

}
