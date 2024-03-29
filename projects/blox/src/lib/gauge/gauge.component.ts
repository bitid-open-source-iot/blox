import * as _ from 'lodash'
import { ObjectId } from '../classes/id'
import { interval } from 'rxjs'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { Input, QueryList, Component, ElementRef, ContentChildren, AfterContentInit, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core'
import { BloxFont, BLOX_FONT } from '../classes/blox-font'

/* --- COMPONENTS --- */
import { BloxGaugeHandComponent } from './hand/hand.component'
import { BloxGaugeRangeComponent } from './range/range.component'

@Component({
    selector: 'blox-gauge',
    styleUrls: ['./gauge.component.scss'],
    templateUrl: './gauge.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxGaugeComponent implements OnChanges, AfterContentInit {

    @Input('min') public min: number = 0
    @Input('max') public max: number = 100
    @Input('endAngle') public endAngle: number = 360
    @Input('startAngle') public startAngle: number = 180
    // @Input('labelColour') public labelColour: string = '#A0CA92'
    @Input('font') public font: BLOX_FONT = new BloxFont()


    @ContentChildren(BloxGaugeHandComponent) public hands: QueryList<BloxGaugeHandComponent> = new QueryList<BloxGaugeHandComponent>()
    @ContentChildren(BloxGaugeRangeComponent) public ranges: QueryList<BloxGaugeRangeComponent> = new QueryList<BloxGaugeRangeComponent>()

    constructor(private el: ElementRef) {
        this.el.nativeElement.id = ObjectId()
    }

    private axis!: am4charts.ValueAxis
    private chart!: am4charts.GaugeChart

    private async update() {
        this.axis.min = this.min
        this.axis.max = this.max
        // this.axis.renderer.labels.template.fill = am4core.color(this.labelColour)
        this.axis.renderer.labels.template.fill = am4core.color(this.font.color)
        this.chart.endAngle = this.endAngle
        this.chart.startAngle = this.startAngle
        if (this.chart.width !== this.el.nativeElement.offsetWidth) {
            this.chart.width = this.el.nativeElement.offsetWidth
        }
        if (this.chart.height !== this.el.nativeElement.offsetHeight) {
            this.chart.height = this.el.nativeElement.offsetHeight
        }
        this.hands.forEach(o => {
            if (typeof (o.value) !== 'undefined' && o.value !== null) {
                if (o.hand.value !== o.value) {
                    o.hand.value = o.value
                }
            }
            if (o.hand.fill.hex !== o.color) {
                o.hand.fill = am4core.color(o.color)
                o.hand.stroke = am4core.color(o.color)
            }
            if (o.hand.fillOpacity !== (o.opacity / 100)) {
                o.hand.fillOpacity = o.opacity / 100
                o.hand.strokeOpacity = o.opacity / 100
            }
        })
        this.ranges.forEach(o => {
            if (typeof (o.start) !== 'undefined' && o.start !== null) {
                if (o.range.value !== o.start) {
                    o.range.value = o.start
                }
            }
            if (typeof (o.end) !== 'undefined' && o.end !== null) {
                if (o.range.endValue !== o.end) {
                    o.range.endValue = o.end
                }
            }
            if (o.range.axisFill.fill.hex !== o.color) {
                o.range.axisFill.fill = am4core.color(o.color)
            }
            if (o.range.axisFill.fillOpacity !== (o.opacity / 100)) {
                o.range.axisFill.fillOpacity = (o.opacity / 100)
            }
            // o.range.axis.stroke = am4core.color('#000000')
        })
        this.chart.validateData()
        window.requestAnimationFrame(() => this.update())
    }

    ngOnChanges(changes: SimpleChanges) {
        this.min = parseFloat(changes['min'].currentValue)
        this.max = parseFloat(changes['max'].currentValue)
        this.endAngle = parseFloat(changes['endAngle'].currentValue)
        this.startAngle = parseFloat(changes['startAngle'].currentValue)
        // this.labelColour = changes['labelColour'].currentValue || '#A0CA92'
    }

    ngAfterContentInit(): void {
        this.chart = <am4charts.GaugeChart>am4core.createFromConfig({
            logo: {
                disabled: true
            },
            endAngle: 360,
            paddingTop: 25,
            startAngle: 180,
            innerRadius: -15,
            paddingLeft: 40,
            paddingRight: 40,
            paddingBottom: 0,
        }, this.el.nativeElement.id, am4charts.GaugeChart)

        this.axis = this.chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>())
        this.axis.min = 0
        this.axis.max = 100
        this.axis.strictMinMax = true
        this.hands.forEach(o => {
            o.hand = this.chart.hands.push(new am4charts.ClockHand())
        })
        this.ranges.forEach(o => {
            o.range = this.axis.axisRanges.create()
        })
        this.update()
    }

}
