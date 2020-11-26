import { color } from '../color';
import { ObjectId } from '../utilities/id';
import { BloxService } from '../blox.service';
import { BloxFont, BLOXFONT } from '../utilities/blox-font';
import { BloxFill, BLOXFILL } from '../utilities/blox-fill';
import { BloxStroke, BLOXSTROKE } from '../utilities/blox-stroke';
import { Input, Component, Renderer2, OnChanges, ElementRef, AfterContentInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'blox-column',
    styleUrls: ['./column.component.scss'],
    templateUrl: './column.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxColumnComponent implements OnChanges, AfterContentInit {
    
    @Input('id') public id: string = ObjectId();
    @Input('font') public font: BLOXFONT = new BloxFont();
    @Input('fill') public fill: BLOXFILL = new BloxFill();
    @Input('width') public width: number = 100;
    @Input('stroke') public stroke: BLOXSTROKE = new BloxStroke();
    @Input('position') public position: number;

    constructor(private blox: BloxService, private el: ElementRef, private renderer: Renderer2) {
        this.element = this.el.nativeElement;

        this.process();
    };

    public element: HTMLElement;

    public hold() {
        this.blox.resize = 'column';
    };

    public async process() {
        this.renderer.setStyle(this.element, 'flex', '0 calc(' + this.width + '% - 10px)');
        /* --- FONT --- */
        if (typeof(this.font) != 'undefined' && this.font != null && this.font != '') {
            this.renderer.setStyle(this.element, 'color', color(this.font.color, this.font.opacity / 100));
            this.renderer.setStyle(this.element, 'font-size', this.font.size);
            this.renderer.setStyle(this.element, 'font-family', this.font.family);
        };
        /* --- FILL --- */
        if (typeof(this.fill) != 'undefined' && this.fill != null && this.fill != '') {
            this.renderer.setStyle(this.element, 'background-color', color(this.fill.color, this.fill.opacity / 100));
        };
        /* --- STROKE --- */
        if (typeof(this.stroke) != 'undefined' && this.stroke != null && this.stroke != '') {
            this.renderer.setStyle(this.element, 'border-width', this.stroke.width + 'px');
            this.renderer.setStyle(this.element, 'border-style', this.stroke.style);
            this.renderer.setStyle(this.element, 'border-color', color(this.stroke.color, this.stroke.opacity / 100));
        };
    };

    ngOnChanges(): void {
        this.process();
    };

    ngAfterContentInit(): void {
        this.process();

        this.element.addEventListener('mousedown', event => {
            this.blox.columnId = this.id;
        });

        this.element.addEventListener('touchstart', event => {
            this.blox.columnId = this.id;
        });
    };

}