import { BloxFont, BLOX_FONT } from '../classes/blox-font'
import { BloxBanner, BLOX_BANNER } from '../classes/blox-banner'
import { Input, OnInit, OnChanges, Component, Renderer2, ElementRef, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'blox-text',
    styleUrls: ['./text.component.scss'],
    templateUrl: './text.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxTextComponent implements OnInit, OnChanges {

    @Input('font') public font: BloxFont | BLOX_FONT = new BloxFont()
    @Input('banner') public banner: BloxBanner | BLOX_BANNER = new BloxBanner()

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.element = this.el.nativeElement
    }

    public element: HTMLElement

    private process() {
        /* --- FONT --- */
        if (typeof(this.font) !== 'undefined' && this.font !== null) {
            this.renderer.setStyle(this.element, 'color', this.font.color)
            this.renderer.setStyle(this.element, 'opacity', this.font.opacity! / 100)
            this.renderer.setStyle(this.element, 'font-size', [this.font.size, 'px'].join(''))
            this.renderer.setStyle(this.element, 'line-height', [this.font.size, 'px'].join(''))
            this.renderer.setStyle(this.element, 'font-family', this.font.family)

            this.renderer.setStyle(this.element, 'align-items', 'unset')
            this.renderer.setStyle(this.element, 'justify-content', 'unset')

            switch (this.font.baseline) {
                case('top'):
                    this.renderer.setStyle(this.element, 'align-items', 'flex-start')
                    break
                case('center'):
                    this.renderer.setStyle(this.element, 'align-items', 'center')
                    break
                case('bottom'):
                    this.renderer.setStyle(this.element, 'align-items', 'flex-end')
                    break
            }

            switch (this.font.alignment) {
                case('left'):
                    this.renderer.setStyle(this.element, 'justify-content', 'flex-start')
                    break
                case('center'):
                    this.renderer.setStyle(this.element, 'justify-content', 'center')
                    break
                case('right'):
                    this.renderer.setStyle(this.element, 'justify-content', 'flex-end')
                    break
            }
        }
        if (typeof(this.banner) !== 'undefined' && this.banner !== null) {
            this.renderer.setStyle(this.element, 'top', [this.banner.size, 'px'].join(''))
        }
    }

    ngOnInit(): void {
        this.process()
    }

    ngOnChanges(): void {
        this.process()
    }

}
