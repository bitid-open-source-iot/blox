import * as _ from 'lodash';
import { interval } from 'rxjs';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import { Input, QueryList, Component, ElementRef, ContentChildren, AfterContentInit, ViewEncapsulation } from '@angular/core';

/* --- COMPONENTS --- */
import { BloxGaugeHandComponent } from './hand/hand.component';
import { BloxGaugeRangeComponent } from './range/range.component';

@Component({
    selector: 'blox-gauge',
    styleUrls: ['./gauge.component.scss'],
    templateUrl: './gauge.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxGaugeComponent implements AfterContentInit {

    @Input('id') public id: string;

    @ContentChildren(BloxGaugeHandComponent) public hands: QueryList<BloxGaugeHandComponent> = new QueryList<BloxGaugeHandComponent>();
    @ContentChildren(BloxGaugeRangeComponent) public ranges: QueryList<BloxGaugeRangeComponent> = new QueryList<BloxGaugeRangeComponent>();

    constructor(private el: ElementRef) {
        this.element = this.el.nativeElement;
        this.element.id = this.id;
    }

    public chart: am4charts.GaugeChart;
    public element: HTMLElement;

    public data(series) {
        const data = [];
        series = series.reduce((items, item, i) => {
            const points = item.points.map(point => {
                return {
                    date: point.date,
                    [item.id]: point.value
                };
            });
            return items.concat(points);
        }, []);
        const grouped = _.mapValues(_.groupBy(series, 'date'), item => item.map(o => _.omit(o, 'date')));
        Object.keys(grouped).map(key => {
            const tmp = {
                date: new Date(key)
            };
            grouped[key].map(o => {
                Object.keys(o).map(item => {
                    tmp[item] = o[item];
                });
            });
            data.push(tmp);
        });
        return data;
    }

    public process() {
        this.hands.forEach(o => {
            o.hand.showValue(o.value, 1000, am4core.ease.cubicOut);
            o.hand.fill = am4core.color(o.color);
            o.hand.stroke = am4core.color(o.color);
        });
    }

    ngAfterContentInit(): void {
        this.element.id = this.id;
        this.chart = am4core.create(this.id, am4charts.GaugeChart);
        this.chart.innerRadius = -15;

        var axis = this.chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
        axis.min = 0;
        axis.max = 100;
        axis.strictMinMax = true;

        this.chart.paddingTop = 25;
        this.chart.paddingLeft = 40;
        this.chart.paddingRight = 40;
        this.chart.paddingBottom = 25;

        this.chart.endAngle = 360;
        this.chart.startAngle = 180;

        this.ranges.forEach(o => {
            var range = axis.axisRanges.create();
            range.value = o.start;
            range.endValue = o.end;
            range.axisFill.fillOpacity = 1;
            range.axisFill.fill = am4core.color(o.color);
        });

        this.hands.forEach(o => {
            o.hand = this.chart.hands.push(new am4charts.ClockHand());
            o.hand.fill = am4core.color(o.color);
            o.hand.stroke = am4core.color(o.color);
            o.hand.showValue(o.value);
        });
        // this.hands.changes.subscribe(hands => {
        //     hands.forEach(o => {
        //         o.hand.showValue(o.value);
        //     }); 
        // });

        interval(10).subscribe(() => {
            if (this.chart.width != this.element.offsetWidth) {
                this.chart.width = this.element.offsetWidth;
            }
            if (this.chart.height != this.element.offsetHeight) {
                this.chart.height = this.element.offsetHeight;
            }
        });
    }

}
