import { Input, OnInit, OnChanges, Component, Renderer2, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'blox-image',
    styleUrls: ['./image.component.scss'],
    templateUrl: './image.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxImageComponent implements OnInit, OnChanges {

    @Input('src') public src: string = '';
    @Input('href') public href: string ='';
    @Input('target') public target: '_top' | '_self' | '_blank' | '_parent' = '_blank';

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.element = this.el.nativeElement;
    }

    public element: HTMLElement;

    private process() {
        this.renderer.setStyle(this.element, 'background-image', ['url(', this.src, ')'].join(''));
    }

    ngOnInit(): void {
        this.renderer.listen(this.element, 'click', (event: MouseEvent) => {
            if (typeof(this.href) !== 'undefined' && this.href !== null) {
                event.preventDefault();
                window.open(this.href, this.target);
            };
        });


        this.process();
    }

    ngOnChanges(): void {
        this.process();
    }

}
