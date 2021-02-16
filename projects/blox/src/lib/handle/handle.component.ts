import { Component, Renderer2, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'blox-handle',
    styleUrls: ['./handle.component.scss'],
    templateUrl: './handle.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxHandleComponent {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.element = this.el.nativeElement;
    }

    public element: HTMLElement;

    public hide() {
        this.renderer.setStyle(this.element, 'display', 'none');
    }

    public show() {
        this.renderer.setStyle(this.element, 'display', 'block');
    }

}
