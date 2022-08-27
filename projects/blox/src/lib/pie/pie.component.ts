import * as _ from 'lodash'
import { ObjectId } from '../classes/id'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { Input, QueryList, Component, ElementRef, ContentChildren, AfterContentInit, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core'

/* --- COMPONENTS --- */
import { BloxPieSliceComponent } from './slice/slice.component'

@Component({
    selector: 'blox-pie',
    styleUrls: ['./pie.component.scss'],
    templateUrl: './pie.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxPieComponent implements OnChanges, AfterContentInit {

    @Input('min') public min: number = 0
    @Input('max') public max: number = 100
    @Input('endAngle') public endAngle: number = 360
    @Input('startAngle') public startAngle: number = 180

    @ContentChildren(BloxPieSliceComponent) public slices: QueryList<BloxPieSliceComponent> = new QueryList<BloxPieSliceComponent>()

    constructor(private el: ElementRef) {
        this.el.nativeElement.id = ObjectId()
    }

    private chart!: am4charts.PieChart
    private series: any

    private async update() {
        if (this.chart.width !== this.el.nativeElement.offsetWidth) {
            this.chart.width = this.el.nativeElement.offsetWidth
        }
        if (this.chart.height !== this.el.nativeElement.offsetHeight) {
            this.chart.height = this.el.nativeElement.offsetHeight
        }
        window.requestAnimationFrame(() => this.update())
    }

    ngOnChanges(changes: SimpleChanges) {
        this.min = changes['min'].currentValue ? parseFloat(changes['min'].currentValue) : 0
        this.max = changes['max'].currentValue ? parseFloat(changes['max'].currentValue) : 0
        this.endAngle = changes['endAngle'].currentValue ? parseFloat(changes['endAngle'].currentValue) : 0
        this.startAngle = changes['startAngle'].currentValue ? parseFloat(changes['startAngle'].currentValue) : 0
    }

    ngAfterContentInit(): void {
        this.chart = <am4charts.PieChart>am4core.createFromConfig({
            logo: {
                disabled: true
            },
            paddingTop: 25,
            paddingLeft: 40,
            paddingRight: 40,
            paddingBottom: 0,
        }, this.el.nativeElement.id, am4charts.PieChart)

        this.series = this.chart.series.push(new am4charts.PieSeries())
        this.series.dataFields.value = 'value'
        this.series.dataFields.category = 'label'
        // this.series.slices.template.propertyFields.fill = 'color'
        // this.series.slices.template.propertyFields.fillOpacity = 'opacity'

        this.chart.data = this.slices.map(o => {
            return {
                label: o.label,
                value: o.value,
                // color: am4core.color(o.color),
                // opacity: o.opacity / 100
            }
        })

        setInterval(() => {
            this.chart.data = this.slices.map(o => {
                return {
                    label: o.label,
                    value: o.value,
                    // color: am4core.color(o.color),
                    // opacity: o.opacity / 100
                }
            })
        }, 1000)

        this.update()
    }

}
