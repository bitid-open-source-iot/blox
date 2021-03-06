import { BloxFont, BLOXFONT } from '../utilities/blox-font';
import { BloxBanner, BLOXBANNER } from '../utilities/blox-banner';
import { Input, OnInit, OnChanges, Component, Renderer2, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'blox-value',
    styleUrls: ['./value.component.scss'],
    templateUrl: './value.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxValueComponent implements OnInit, OnChanges {

    @Input('font') public font: BLOXFONT = new BloxFont();
    @Input('banner') public banner: BLOXBANNER = new BloxBanner();

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.element = this.el.nativeElement;
    }

    public element: HTMLElement;

    private process() {
        /* --- FONT --- */
        if (typeof(this.font) != 'undefined' && this.font != null && this.font != '') {
            this.renderer.setStyle(this.element, 'color', this.font.color);
            this.renderer.setStyle(this.element, 'opacity', this.font.opacity / 100);
            this.renderer.setStyle(this.element, 'font-size', [this.font.size, 'px'].join(''));
            this.renderer.setStyle(this.element, 'line-height', [this.font.size, 'px'].join(''));
            this.renderer.setStyle(this.element, 'font-family', this.font.family);

            this.renderer.setStyle(this.element, 'align-items', 'unset');
            this.renderer.setStyle(this.element, 'justify-content', 'unset');

            switch (this.font.baseline) {
                case('top'):
                    this.renderer.setStyle(this.element, 'align-items', 'flex-start');
                    break;
                case('middle'):
                    this.renderer.setStyle(this.element, 'align-items', 'center');
                    break;
                case('bottom'):
                    this.renderer.setStyle(this.element, 'align-items', 'flex-end');
                    break;
            }

            switch (this.font.alignment) {
                case('left'):
                    this.renderer.setStyle(this.element, 'justify-content', 'flex-start');
                    break;
                case('center'):
                    this.renderer.setStyle(this.element, 'justify-content', 'center');
                    break;
                case('right'):
                    this.renderer.setStyle(this.element, 'justify-content', 'flex-end');
                    break;
            }
        }
    }

    ngOnInit(): void {
        this.process();
    }

    ngOnChanges(): void {
        this.process();
    }

}
