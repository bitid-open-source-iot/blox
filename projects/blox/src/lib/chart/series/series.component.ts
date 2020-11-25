import { BloxPointComponent } from './point/point.component';
import { Input, QueryList, Component, ElementRef, EventEmitter, SimpleChanges, ContentChildren, ViewEncapsulation, AfterContentInit, OnChanges } from '@angular/core';

@Component({
    selector: 'blox-series',
    styleUrls: ['./series.component.scss'],
    templateUrl: './series.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxSeriesComponent implements OnChanges, AfterContentInit {

    @Input('id') public id: string;
    @Input('type') public type: string;
    @Input('label') public label: string;
    @Input('color') public color: string;
    @Input('opacity') public opacity: string;

    @ContentChildren(BloxPointComponent) public points: QueryList<BloxPointComponent>;

    constructor(private el: ElementRef) {
        this.element = this.el.nativeElement;
    };

    public changes: EventEmitter<any> = new EventEmitter<any>();

    public element: HTMLElement;

    ngOnChanges(changes: SimpleChanges): void {
        if (typeof(changes.id) != 'undefined' && !changes.id.firstChange) {
            this.changes.next();
        };
        if (typeof(changes.type) != 'undefined' && !changes.type.firstChange) {
            this.changes.next();
        };
        if (typeof(changes.label) != 'undefined' && !changes.label.firstChange) {
            this.changes.next();
        };
        if (typeof(changes.color) != 'undefined' && !changes.color.firstChange) {
            this.changes.next();
        };
        if (typeof(changes.opacity) != 'undefined' && !changes.opacity.firstChange) {
            this.changes.next();
        };
    };

    ngAfterContentInit(): void {
        this.points.changes.subscribe(event => {
            this.points.forEach(point => {
                if (point.changes.observers.length == 0) {
                    point.changes.subscribe(() => this.changes.next());
                };
            });
        });
        
        this.points.forEach(point => {
            if (point.changes.observers.length == 0) {
                point.changes.subscribe(() => this.changes.next());
            };
        });
    };

}