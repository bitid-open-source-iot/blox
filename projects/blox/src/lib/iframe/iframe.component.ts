import { Input, OnInit, OnChanges, Component, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'blox-iframe',
    styleUrls: ['./iframe.component.scss'],
    templateUrl: './iframe.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxIframeComponent implements OnInit, OnChanges {

    @Input('value') public value: string = '';

    constructor(private el: ElementRef) { }

    ngOnInit(): void {
        (this.el.nativeElement as HTMLElement).innerHTML = this.value;
    }

    ngOnChanges(): void {
        (this.el.nativeElement as HTMLElement).innerHTML = this.value;
    }

}
