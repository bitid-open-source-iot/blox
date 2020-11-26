import * as _ from 'lodash';
import * as amcore from '@amcharts/amcharts4/core';
import * as amcharts from '@amcharts/amcharts4/charts';
import amthemes_animated from '@amcharts/amcharts4/themes/animated';
import { interval } from 'rxjs';
import { BloxSeriesComponent } from './series/series.component';
import { Input, OnInit, Component, ElementRef, QueryList, ContentChildren, AfterContentInit, ViewEncapsulation } from '@angular/core';

amcore.useTheme(amthemes_animated);

@Component({
    selector: 'blox-chart',
    styleUrls: ['./chart.component.scss'],
    templateUrl: './chart.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxChartComponent implements OnInit, AfterContentInit {

    @Input('id') public id: string;
    @Input('font') public font: any = {
        'color': '#000000',
        'opacity': 100
    };
    @Input('format') public format: string = 'YYYY/MM/DD';

    @ContentChildren(BloxSeriesComponent) public series: QueryList<BloxSeriesComponent>;

    constructor(el: ElementRef) {
        this.element = el.nativeElement;
    };

    public chart: amcharts.XYChart;
    public width: number = 0;
    public height: number = 0;
    public element: HTMLElement;
    public amseries: any[] = [];

    private async create() {
        try {
            this.chart = amcore.create(this.id, amcharts.XYChart);
            this.chart.legend = new amcharts.Legend();
            this.chart.cursor = new amcharts.XYCursor();
            this.chart.xAxes.push(new amcharts.DateAxis());
            this.chart.yAxes.push(new amcharts.ValueAxis());
            const series = this.series.map(o => {
                return {
                    'points': o.points.map(point => {
                        return {
                            'date': point.date,
                            [o.id]: point.value
                        };
                    }),
                    'id': o.id,
                    'type': o.type,
                    'label': o.label,
                    'color': o.color,
                    'opacity': (<any>o.opacity / 100)
                };
            });
            series.map(o => {
                switch(o.type) {
                    case ('line'):
                        const line = this.chart.series.push(new amcharts.LineSeries());
                        line.id = o.id;
                        line.name = o.label;
                        line.className = o.type;
                        line.strokeWidth = 2;
                        line.strokeOpacity = o.opacity;
                        line.properties.fill = amcore.color(o.color);
                        line.dataFields.dateX = 'date';
                        line.dataFields.valueY = o.id;
                        line.properties.stroke = amcore.color(o.color);
                        // line.segments.template.tooltipText = "{categoryX}: {valueY}";
    
                        const linebullet = line.bullets.push(new amcharts.Bullet());
                        const linepoint = linebullet.createChild(amcore.Circle);
                        linepoint.width = 5;
                        linepoint.height = 5;
                        linepoint.strokeWidth = 0;
                        linepoint.verticalCenter = "middle";
                        linepoint.horizontalCenter = "middle";
                        
                        this.amseries.push(line);
                        break;
                    case ('area'):
                        const area = this.chart.series.push(new amcharts.LineSeries());
                        area.id = o.id;
                        area.name = o.label;
                        area.className = o.type;
                        area.strokeWidth = 2;
                        area.fillOpacity = o.opacity;
                        area.properties.fill = amcore.color(o.color);
                        area.dataFields.dateX = 'date';
                        area.dataFields.valueY = o.id;
                        area.properties.stroke = amcore.color(o.color);

                        const areabullet = area.bullets.push(new amcharts.Bullet());
                        const areapoint = areabullet.createChild(amcore.Circle);
                        areapoint.width = 5;
                        areapoint.height = 5;
                        areapoint.strokeWidth = 0;
                        areapoint.verticalCenter = "middle";
                        areapoint.horizontalCenter = "middle";
                        
                        this.amseries.push(area);
                        break;
                    case ('column'):
                        const column = this.chart.series.push(new amcharts.ColumnSeries());
                        column.id = o.id;
                        column.name = o.label;
                        column.className = o.type;
                        column.strokeWidth = 2;
                        column.fillOpacity = o.opacity;
                        column.properties.fill = amcore.color(o.color);
                        column.dataFields.dateX = 'date';
                        column.dataFields.valueY = o.id;
                        column.properties.stroke = amcore.color(o.color);

                        this.amseries.push(column);
                        break;
                };
            });
            this.chart.data = [];
            const grouped = _.mapValues(_.groupBy(series.reduce((a, b) => a.concat(b.points), []), 'date'), item => item.map(o => _.omit(o, 'date')));
            Object.keys(grouped).map(key => {
                let tmp = {
                    'date': key
                };
                grouped[key].map(o => {
                    Object.keys(o).map(item => {
                        tmp[item] = o[item];
                    });
                });
                this.chart.data.push(tmp);
            });
            return true;
        } catch (error) {
            return false;
        };
    };
    
    private async change() {
        try {
            const series = this.series.map(o => {
                return {
                    'points': o.points.map(point => {
                        return {
                            'date': point.date,
                            [o.id]: point.value
                        };
                    }),
                    'id': o.id,
                    'type': o.type,
                    'label': o.label,
                    'color': o.color,
                    'opacity': (<any>o.opacity / 100)
                };
            });

            series.map(o => {
                let found = false;
                this.chart.series.values.map(item => {
                    if (o.id == item.id) {
                        found = true;
                        if (o.type != item.className) {
                            /*
                                Remove & Replace
                            */
                        } else {
                            /*
                                Update Properties
                            */
                           switch(o.type) {
                                case ('line'):
                                    item.name = o.label;
                                    item.strokeOpacity = o.opacity;
                                    item.properties.fill = amcore.color(o.color);
                                    item.properties.stroke = amcore.color(o.color);
                                    break;
                                case ('area'):
                                    item.name = o.label;
                                    item.fillOpacity = o.opacity;
                                    item.properties.fill = amcore.color(o.color);
                                    item.properties.stroke = amcore.color(o.color);
                                    break;
                                case ('column'):
                                    item.name = o.label;
                                    item.fillOpacity = o.opacity;
                                    item.properties.fill = amcore.color(o.color);
                                    item.properties.stroke = amcore.color(o.color);
                                    break;
                            };
                        };
                    };
                });
                if (!found) {
                    switch(o.type) {
                        case ('line'):
                            const line = this.chart.series.push(new amcharts.LineSeries());
                            line.id = o.id;
                            line.name = o.label;
                            line.strokeWidth = 2;
                            line.strokeOpacity = o.opacity;
                            line.properties.fill = amcore.color(o.color);
                            line.dataFields.dateX = 'date';
                            line.dataFields.valueY = o.id;
                            line.properties.stroke = amcore.color(o.color);
        
                            const linebullet = line.bullets.push(new amcharts.Bullet());
                            const linepoint = linebullet.createChild(amcore.Circle);
                            linepoint.width = 5;
                            linepoint.height = 5;
                            linepoint.strokeWidth = 0;
                            linepoint.verticalCenter = "middle";
                            linepoint.horizontalCenter = "middle";
                            this.amseries.push(line);
                            break;
                        case ('area'):
                            const area = this.chart.series.push(new amcharts.LineSeries());
                            area.id = o.id;
                            area.name = o.label;
                            area.strokeWidth = 2;
                            area.fillOpacity = o.opacity;
                            area.properties.fill = amcore.color(o.color);
                            area.dataFields.dateX = 'date';
                            area.dataFields.valueY = o.id;
                            area.properties.stroke = amcore.color(o.color);
        
                            const areabullet = area.bullets.push(new amcharts.Bullet());
                            const areapoint = areabullet.createChild(amcore.Circle);
                            areapoint.width = 5;
                            areapoint.height = 5;
                            areapoint.strokeWidth = 0;
                            areapoint.verticalCenter = "middle";
                            areapoint.horizontalCenter = "middle";
                            this.amseries.push(area);
                            break;
                        case ('column'):
                            const column = this.chart.series.push(new amcharts.ColumnSeries());
                            column.id = o.id;
                            column.name = o.label;
                            column.strokeWidth = 2;
                            column.fillOpacity = o.opacity;
                            column.properties.fill = amcore.color(o.color);
                            column.dataFields.dateX = 'date';
                            column.dataFields.valueY = o.id;
                            column.properties.stroke = amcore.color(o.color);
                            this.amseries.push(column);
                            break;
                    };
                    o.points.map(point => {
                        this.chart.data.map(item => {
                            if (item.date == point.date) {
                                item[o.id] = point[o.id];
                            };
                        });
                    });
                };
            });
            
            this.chart.validateData();
            return true;
        } catch (error) {
            return false;
        };
    };
    
    ngOnInit(): void {
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.element.id = this.id;

        interval(100).subscribe(count => {
            if (this.width != this.element.offsetWidth) {
                this.width = this.element.offsetWidth;
            };
            if (this.height != this.element.offsetHeight) {
                this.height = this.element.offsetHeight;
            };
        });
    };

    ngAfterContentInit(): void {
        this.create();

        this.series.changes.subscribe(event => {
            this.series.forEach(series => {
                if (series.changes.observers.length == 0) {
                    series.changes.subscribe(() => {
                        this.change();
                    });
                };
            });
            this.change();
        });
        
        this.series.forEach(series => {
            if (series.changes.observers.length == 0) {
                series.changes.subscribe(() => {
                    this.change();
                });
            };
        });
    };

}