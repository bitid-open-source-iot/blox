import * as _ from 'lodash';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import { interval } from 'rxjs';
import { BloxSeriesComponent } from './series/series.component';
import { BloxLegendComponent } from './legend/legend.component';
import { Input, QueryList, Component, ElementRef, ContentChild, ContentChildren, AfterContentInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'blox-chart',
    styleUrls: ['./chart.component.scss'],
    templateUrl: './chart.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BloxChartComponent implements AfterContentInit {

    @Input('id') public id: string;

    @ContentChild(BloxLegendComponent) private legend: BloxLegendComponent;
    @ContentChildren(BloxSeriesComponent) private series: QueryList<BloxSeriesComponent>;

    constructor(private el: ElementRef) {
        this.element = this.el.nativeElement;
        this.element.id = this.id;
    }

    public chart: am4charts.XYChart;
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

    ngAfterContentInit(): void {
        this.element.id = this.id;
        this.chart = am4core.create(this.id, am4charts.XYChart);
        this.chart.xAxes.push(new am4charts.DateAxis());
        this.chart.yAxes.push(new am4charts.ValueAxis());
        this.chart.data = this.data(this.series);
        this.chart.width = this.element.offsetWidth;
        this.chart.cursor = new am4charts.XYCursor();
        this.chart.height = this.element.offsetHeight;
        const grid = new am4charts.Grid();
        grid.fill = am4core.color('red');

        if (this.legend) {
            this.chart.legend = new am4charts.Legend();
        }

        interval(10).subscribe(() => {
            if (this.chart.width != this.element.offsetWidth) {
                this.chart.width = this.element.offsetWidth;
            }
            if (this.chart.height != this.element.offsetHeight) {
                this.chart.height = this.element.offsetHeight;
            }
        });

        this.series.changes.subscribe(() => {
            if (this.series.length > this.chart.series.length) {
                this.series.map(a => {
                    let found = false;
                    this.chart.series.values.map(b => {
                        if (a.id == b.id) {
                            found = true;
                        }
                    });
                    if (!found) {
                        switch (a.type) {
                            case ('line'):
                                const line = this.chart.series.push(new am4charts.LineSeries());
                                line.id = a.id;
                                line.name = a.label;
                                line.className = a.type;
                                line.strokeWidth = 2;
                                line.tooltipText = '{dateX}: [b]{valueY}';
                                line.strokeOpacity = a.opacity / 100;
                                line.properties.fill = am4core.color(a.color);
                                line.dataFields.dateX = 'date';
                                line.dataFields.valueY = a.id;
                                line.properties.stroke = am4core.color(a.color);
                                line.legendSettings.itemValueText = '{valueY}';

                                const linebullet = line.bullets.push(new am4charts.Bullet());
                                const linepoint = linebullet.createChild(am4core.Circle);
                                linepoint.width = 5;
                                linepoint.height = 5;
                                linepoint.strokeWidth = 0;
                                linepoint.verticalCenter = 'middle';
                                linepoint.horizontalCenter = 'middle';
                                break;
                            case ('area'):
                                const area = this.chart.series.push(new am4charts.LineSeries());
                                area.id = a.id;
                                area.name = a.label;
                                area.className = a.type;
                                area.strokeWidth = 2;
                                area.tooltipText = '{dateX}: [b]{valueY}';
                                area.fillOpacity = a.opacity / 100;
                                area.properties.fill = am4core.color(a.color);
                                area.dataFields.dateX = 'date';
                                area.dataFields.valueY = a.id;
                                area.properties.stroke = am4core.color(a.color);
                                area.legendSettings.itemValueText = '{valueY}';

                                const areabullet = area.bullets.push(new am4charts.Bullet());
                                const areapoint = areabullet.createChild(am4core.Circle);
                                areapoint.width = 5;
                                areapoint.height = 5;
                                areapoint.strokeWidth = 0;
                                areapoint.verticalCenter = 'middle';
                                areapoint.horizontalCenter = 'middle';
                                break;
                            case ('step'):
                                const step = this.chart.series.push(new am4charts.StepLineSeries());
                                step.id = a.id;
                                step.name = a.label;
                                step.className = a.type;
                                step.strokeWidth = 2;
                                step.tooltipText = '{dateX}: [b]{valueY}';
                                step.fillOpacity = a.opacity / 100;
                                step.properties.fill = am4core.color(a.color);
                                step.dataFields.dateX = 'date';
                                step.dataFields.valueY = a.id;
                                step.properties.stroke = am4core.color(a.color);
                                step.legendSettings.itemValueText = '{valueY}';

                                const stepbullet = step.bullets.push(new am4charts.Bullet());
                                const steppoint = stepbullet.createChild(am4core.Circle);
                                steppoint.width = 5;
                                steppoint.height = 5;
                                steppoint.strokeWidth = 0;
                                steppoint.verticalCenter = 'middle';
                                steppoint.horizontalCenter = 'middle';
                                break;
                            case ('column'):
                                const column = this.chart.series.push(new am4charts.ColumnSeries());
                                column.id = a.id;
                                column.name = a.label;
                                column.className = a.type;
                                column.tooltipText = '{dateX}: [b]{valueY}';
                                column.strokeWidth = 2;
                                column.fillOpacity = a.opacity / 100;
                                column.properties.fill = am4core.color(a.color);
                                column.dataFields.dateX = 'date';
                                column.dataFields.valueY = a.id;
                                column.properties.stroke = am4core.color(a.color);
                                column.legendSettings.itemValueText = '{valueY}';
                                break;
                        }
                        this.chart.data = this.data(this.series);
                        if (a.data.observers.length == 0) {
                            a.data.subscribe(() => {
                                this.chart.data = this.data(this.series);
                            });
                        }
                        if (a.changes.observers.length == 0) {
                            a.changes.subscribe(() => {
                                this.series.map(a => {
                                    for (let i = 0; i < this.chart.series.values.length; i++) {
                                        if (a.id == this.chart.series.values[i].id) {
                                            switch (a.type) {
                                                case ('line'):
                                                case ('step'):
                                                    this.chart.series.values[i].strokeOpacity = a.opacity / 100;
                                                    this.chart.series.values[i].properties.stroke = am4core.color(a.color);
                                                    break;
                                                case ('area'):
                                                case ('column'):
                                                    this.chart.series.values[i].fillOpacity = a.opacity / 100;
                                                    this.chart.series.values[i].properties.fill = am4core.color(a.color);
                                                    this.chart.series.values[i].properties.stroke = am4core.color(a.color);
                                                    break;
                                            }
                                            this.chart.series.values[i].name = a.label;
                                            if (a.type != this.chart.series.values[i].className) {
                                                this.chart.series.removeIndex(i);
                                                switch (a.type) {
                                                    case ('line'):
                                                        const line = this.chart.series.push(new am4charts.LineSeries());
                                                        line.id = a.id;
                                                        line.name = a.label;
                                                        line.className = a.type;
                                                        line.tooltipText = '{dateX}: [b]{valueY}';
                                                        line.strokeWidth = 2;
                                                        line.strokeOpacity = a.opacity / 100;
                                                        line.properties.fill = am4core.color(a.color);
                                                        line.dataFields.dateX = 'date';
                                                        line.dataFields.valueY = a.id;
                                                        line.properties.stroke = am4core.color(a.color);

                                                        const linebullet = line.bullets.push(new am4charts.Bullet());
                                                        const linepoint = linebullet.createChild(am4core.Circle);
                                                        linepoint.width = 5;
                                                        linepoint.height = 5;
                                                        linepoint.strokeWidth = 0;
                                                        linepoint.verticalCenter = 'middle';
                                                        linepoint.horizontalCenter = 'middle';
                                                        break;
                                                    case ('area'):
                                                        const area = this.chart.series.push(new am4charts.LineSeries());
                                                        area.id = a.id;
                                                        area.name = a.label;
                                                        area.className = a.type;
                                                        area.tooltipText = '{dateX}: [b]{valueY}';
                                                        area.strokeWidth = 2;
                                                        area.fillOpacity = a.opacity / 100;
                                                        area.properties.fill = am4core.color(a.color);
                                                        area.dataFields.dateX = 'date';
                                                        area.dataFields.valueY = a.id;
                                                        area.properties.stroke = am4core.color(a.color);

                                                        const areabullet = area.bullets.push(new am4charts.Bullet());
                                                        const areapoint = areabullet.createChild(am4core.Circle);
                                                        areapoint.width = 5;
                                                        areapoint.height = 5;
                                                        areapoint.strokeWidth = 0;
                                                        areapoint.verticalCenter = 'middle';
                                                        areapoint.horizontalCenter = 'middle';
                                                        break;
                                                    case ('step'):
                                                        const step = this.chart.series.push(new am4charts.StepLineSeries());
                                                        step.id = a.id;
                                                        step.name = a.label;
                                                        step.className = a.type;
                                                        step.tooltipText = '{dateX}: [b]{valueY}';
                                                        step.strokeWidth = 2;
                                                        step.fillOpacity = a.opacity / 100;
                                                        step.properties.fill = am4core.color(a.color);
                                                        step.dataFields.dateX = 'date';
                                                        step.dataFields.valueY = a.id;
                                                        step.properties.stroke = am4core.color(a.color);

                                                        const stepbullet = step.bullets.push(new am4charts.Bullet());
                                                        const steppoint = stepbullet.createChild(am4core.Circle);
                                                        steppoint.width = 5;
                                                        steppoint.height = 5;
                                                        steppoint.strokeWidth = 0;
                                                        steppoint.verticalCenter = 'middle';
                                                        steppoint.horizontalCenter = 'middle';
                                                        break;
                                                    case ('column'):
                                                        const column = this.chart.series.push(new am4charts.ColumnSeries());
                                                        column.id = a.id;
                                                        column.name = a.label;
                                                        column.className = a.type;
                                                        column.tooltipText = '{dateX}: [b]{valueY}';
                                                        column.strokeWidth = 2;
                                                        column.fillOpacity = a.opacity / 100;
                                                        column.properties.fill = am4core.color(a.color);
                                                        column.dataFields.dateX = 'date';
                                                        column.dataFields.valueY = a.id;
                                                        column.properties.stroke = am4core.color(a.color);
                                                        break;
                                                }
                                            }
                                            break;
                                        }
                                    }
                                });
                            });
                        }
                    }
                });
            } else if (this.series.length < this.chart.series.length) {
                for (let a = 0; a < this.chart.series.values.length; a++) {
                    let found = false;
                    this.series.map(series => {
                        if (this.chart.series.values[a].id == series.id) {
                            found = true;
                        }
                    });
                    if (!found) {
                        this.chart.series.removeIndex(a);
                        break;
                    }
                }
            } else {
                this.series.map(a => {
                    this.chart.series.values.map(b => {
                        if (a.id == b.id) {
                            b.name = a.label;
                            b.strokeWidth = 2;
                            b.fillOpacity = a.opacity / 100;
                            b.strokeOpacity = a.opacity / 100;
                            b.properties.fill = am4core.color(a.color);
                            b.properties.stroke = am4core.color(a.color);
                            if (a.type != b.className) {
                                for (let i = 0; i < this.chart.series.values.length; i++) {
                                    if (a.id == this.chart.series.values[i].id) {
                                        switch (a.type) {
                                            case ('line'):
                                            case ('step'):
                                                this.chart.series.values[i].strokeOpacity = a.opacity / 100;
                                                this.chart.series.values[i].properties.stroke = am4core.color(a.color);
                                                break;
                                            case ('area'):
                                            case ('column'):
                                                this.chart.series.values[i].fillOpacity = a.opacity / 100;
                                                this.chart.series.values[i].properties.fill = am4core.color(a.color);
                                                this.chart.series.values[i].properties.stroke = am4core.color(a.color);
                                                break;
                                        }
                                        if (a.type != this.chart.series.values[i].className) {
                                            this.chart.series.removeIndex(i);
                                            switch (a.type) {
                                                case ('line'):
                                                    const line = this.chart.series.push(new am4charts.LineSeries());
                                                    line.id = a.id;
                                                    line.name = a.label;
                                                    line.className = a.type;
                                                    line.strokeWidth = 2;
                                                    line.strokeOpacity = a.opacity / 100;
                                                    line.properties.fill = am4core.color(a.color);
                                                    line.dataFields.dateX = 'date';
                                                    line.dataFields.valueY = a.id;
                                                    line.properties.stroke = am4core.color(a.color);

                                                    const linebullet = line.bullets.push(new am4charts.Bullet());
                                                    const linepoint = linebullet.createChild(am4core.Circle);
                                                    linepoint.width = 5;
                                                    linepoint.height = 5;
                                                    linepoint.strokeWidth = 0;
                                                    linepoint.verticalCenter = 'middle';
                                                    linepoint.horizontalCenter = 'middle';
                                                    break;
                                                case ('area'):
                                                    const area = this.chart.series.push(new am4charts.LineSeries());
                                                    area.id = a.id;
                                                    area.name = a.label;
                                                    area.className = a.type;
                                                    area.strokeWidth = 2;
                                                    area.fillOpacity = a.opacity / 100;
                                                    area.properties.fill = am4core.color(a.color);
                                                    area.dataFields.dateX = 'date';
                                                    area.dataFields.valueY = a.id;
                                                    area.properties.stroke = am4core.color(a.color);

                                                    const areabullet = area.bullets.push(new am4charts.Bullet());
                                                    const areapoint = areabullet.createChild(am4core.Circle);
                                                    areapoint.width = 5;
                                                    areapoint.height = 5;
                                                    areapoint.strokeWidth = 0;
                                                    areapoint.verticalCenter = 'middle';
                                                    areapoint.horizontalCenter = 'middle';
                                                    break;
                                                case ('step'):
                                                    const step = this.chart.series.push(new am4charts.StepLineSeries());
                                                    step.id = a.id;
                                                    step.name = a.label;
                                                    step.className = a.type;
                                                    step.strokeWidth = 2;
                                                    step.fillOpacity = a.opacity / 100;
                                                    step.properties.fill = am4core.color(a.color);
                                                    step.dataFields.dateX = 'date';
                                                    step.dataFields.valueY = a.id;
                                                    step.properties.stroke = am4core.color(a.color);

                                                    const stepbullet = step.bullets.push(new am4charts.Bullet());
                                                    const steppoint = stepbullet.createChild(am4core.Circle);
                                                    steppoint.width = 5;
                                                    steppoint.height = 5;
                                                    steppoint.strokeWidth = 0;
                                                    steppoint.verticalCenter = 'middle';
                                                    steppoint.horizontalCenter = 'middle';
                                                    break;
                                                case ('column'):
                                                    const column = this.chart.series.push(new am4charts.ColumnSeries());
                                                    column.id = a.id;
                                                    column.name = a.label;
                                                    column.className = a.type;
                                                    column.strokeWidth = 2;
                                                    column.fillOpacity = a.opacity / 100;
                                                    column.properties.fill = am4core.color(a.color);
                                                    column.dataFields.dateX = 'date';
                                                    column.dataFields.valueY = a.id;
                                                    column.properties.stroke = am4core.color(a.color);
                                                    break;
                                            }
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                    });
                });
            }
        });

        this.series.forEach(series => {
            if (series.data.observers.length == 0) {
                series.data.subscribe(() => {
                    this.chart.data = this.data(this.series);
                });
            }
            if (series.changes.observers.length == 0) {
                series.changes.subscribe(() => {
                    this.series.map(a => {
                        this.chart.series.values.map(b => {
                            if (a.id == b.id) {
                                b.name = a.label;
                                b.strokeWidth = 2;
                                b.strokeOpacity = a.opacity / 100;
                                b.properties.fill = am4core.color(a.color);
                                b.properties.stroke = am4core.color(a.color);
                                if (a.type != b.className) {
                                    for (let i = 0; i < this.chart.series.values.length; i++) {
                                        if (a.id == this.chart.series.values[i].id) {
                                            this.chart.series.values[i].name = a.label;
                                            switch (a.type) {
                                                case ('line'):
                                                case ('step'):
                                                    this.chart.series.values[i].strokeOpacity = a.opacity / 100;
                                                    this.chart.series.values[i].properties.stroke = am4core.color(a.color);
                                                    break;
                                                case ('area'):
                                                case ('column'):
                                                    this.chart.series.values[i].fillOpacity = a.opacity / 100;
                                                    this.chart.series.values[i].properties.fill = am4core.color(a.color);
                                                    this.chart.series.values[i].properties.stroke = am4core.color(a.color);
                                                    break;
                                            }
                                            if (a.type != this.chart.series.values[i].className) {
                                                this.chart.series.removeIndex(i);
                                                switch (a.type) {
                                                    case ('line'):
                                                        const line = this.chart.series.push(new am4charts.LineSeries());
                                                        line.id = a.id;
                                                        line.name = a.label;
                                                        line.className = a.type;
                                                        line.strokeWidth = 2;
                                                        line.strokeOpacity = a.opacity / 100;
                                                        line.properties.fill = am4core.color(a.color);
                                                        line.dataFields.dateX = 'date';
                                                        line.dataFields.valueY = a.id;
                                                        line.properties.stroke = am4core.color(a.color);
                                                        line.legendSettings.itemValueText = '{valueY}';

                                                        const linebullet = line.bullets.push(new am4charts.Bullet());
                                                        const linepoint = linebullet.createChild(am4core.Circle);
                                                        linepoint.width = 5;
                                                        linepoint.height = 5;
                                                        linepoint.strokeWidth = 0;
                                                        linepoint.verticalCenter = 'middle';
                                                        linepoint.horizontalCenter = 'middle';
                                                        break;
                                                    case ('area'):
                                                        const area = this.chart.series.push(new am4charts.LineSeries());
                                                        area.id = a.id;
                                                        area.name = a.label;
                                                        area.className = a.type;
                                                        area.strokeWidth = 2;
                                                        area.fillOpacity = a.opacity / 100;
                                                        area.properties.fill = am4core.color(a.color);
                                                        area.dataFields.dateX = 'date';
                                                        area.dataFields.valueY = a.id;
                                                        area.properties.stroke = am4core.color(a.color);
                                                        area.legendSettings.itemValueText = '{valueY}';

                                                        const areabullet = area.bullets.push(new am4charts.Bullet());
                                                        const areapoint = areabullet.createChild(am4core.Circle);
                                                        areapoint.width = 5;
                                                        areapoint.height = 5;
                                                        areapoint.strokeWidth = 0;
                                                        areapoint.verticalCenter = 'middle';
                                                        areapoint.horizontalCenter = 'middle';
                                                        break;
                                                    case ('step'):
                                                        const step = this.chart.series.push(new am4charts.StepLineSeries());
                                                        step.id = a.id;
                                                        step.name = a.label;
                                                        step.className = a.type;
                                                        step.strokeWidth = 2;
                                                        step.fillOpacity = a.opacity / 100;
                                                        step.properties.fill = am4core.color(a.color);
                                                        step.dataFields.dateX = 'date';
                                                        step.dataFields.valueY = a.id;
                                                        step.properties.stroke = am4core.color(a.color);
                                                        step.legendSettings.itemValueText = '{valueY}';

                                                        const stepbullet = step.bullets.push(new am4charts.Bullet());
                                                        const steppoint = stepbullet.createChild(am4core.Circle);
                                                        steppoint.width = 5;
                                                        steppoint.height = 5;
                                                        steppoint.strokeWidth = 0;
                                                        steppoint.verticalCenter = 'middle';
                                                        steppoint.horizontalCenter = 'middle';
                                                        break;
                                                    case ('column'):
                                                        const column = this.chart.series.push(new am4charts.ColumnSeries());
                                                        column.id = a.id;
                                                        column.name = a.label;
                                                        column.className = a.type;
                                                        column.strokeWidth = 2;
                                                        column.fillOpacity = a.opacity / 100;
                                                        column.properties.fill = am4core.color(a.color);
                                                        column.dataFields.dateX = 'date';
                                                        column.dataFields.valueY = a.id;
                                                        column.properties.stroke = am4core.color(a.color);
                                                        column.legendSettings.itemValueText = '{valueY}';
                                                        break;
                                                }
                                            }
                                            break;
                                        }
                                    }
                                }
                            }
                        });
                    });
                });
            }
            switch (series.type) {
                case ('line'):
                    const line = this.chart.series.push(new am4charts.LineSeries());
                    line.id = series.id;
                    line.name = series.label;
                    line.className = series.type;
                    line.tooltipText = '{dateX}: [b]{valueY}';
                    line.strokeWidth = 2;
                    line.strokeOpacity = series.opacity / 100;
                    line.properties.fill = am4core.color(series.color);
                    line.dataFields.dateX = 'date';
                    line.dataFields.valueY = series.id;
                    line.properties.stroke = am4core.color(series.color);
                    line.legendSettings.itemValueText = '{valueY}';

                    const linebullet = line.bullets.push(new am4charts.Bullet());
                    const linepoint = linebullet.createChild(am4core.Circle);
                    linepoint.width = 5;
                    linepoint.height = 5;
                    linepoint.strokeWidth = 0;
                    linepoint.verticalCenter = 'middle';
                    linepoint.horizontalCenter = 'middle';
                    break;
                case ('area'):
                    const area = this.chart.series.push(new am4charts.LineSeries());
                    area.id = series.id;
                    area.name = series.label;
                    area.className = series.type;
                    area.tooltipText = '{dateX}: [b]{valueY}';
                    area.strokeWidth = 2;
                    area.fillOpacity = series.opacity / 100;
                    area.properties.fill = am4core.color(series.color);
                    area.dataFields.dateX = 'date';
                    area.dataFields.valueY = series.id;
                    area.properties.stroke = am4core.color(series.color);
                    area.legendSettings.itemValueText = '{valueY}';

                    const areabullet = area.bullets.push(new am4charts.Bullet());
                    const areapoint = areabullet.createChild(am4core.Circle);
                    areapoint.width = 5;
                    areapoint.height = 5;
                    areapoint.strokeWidth = 0;
                    areapoint.verticalCenter = 'middle';
                    areapoint.horizontalCenter = 'middle';
                    break;
                case ('step'):
                    const step = this.chart.series.push(new am4charts.StepLineSeries());
                    step.id = series.id;
                    step.name = series.label;
                    step.className = series.type;
                    step.tooltipText = '{dateX}: [b]{valueY}';
                    step.strokeWidth = 2;
                    step.fillOpacity = series.opacity / 100;
                    step.properties.fill = am4core.color(series.color);
                    step.dataFields.dateX = 'date';
                    step.dataFields.valueY = series.id;
                    step.properties.stroke = am4core.color(series.color);
                    step.legendSettings.itemValueText = '{valueY}';

                    const stepbullet = step.bullets.push(new am4charts.Bullet());
                    const steppoint = stepbullet.createChild(am4core.Circle);
                    steppoint.width = 5;
                    steppoint.height = 5;
                    steppoint.strokeWidth = 0;
                    steppoint.verticalCenter = 'middle';
                    steppoint.horizontalCenter = 'middle';
                    break;
                case ('column'):
                    const column = this.chart.series.push(new am4charts.ColumnSeries());
                    column.id = series.id;
                    column.name = series.label;
                    column.className = series.type;
                    column.tooltipText = '{dateX}: [b]{valueY}';
                    column.strokeWidth = 2;
                    column.fillOpacity = series.opacity;
                    column.properties.fill = am4core.color(series.color);
                    column.dataFields.dateX = 'date';
                    column.dataFields.valueY = series.id;
                    column.properties.stroke = am4core.color(series.color);
                    column.legendSettings.itemValueText = '{valueY}';
                    break;
            }
        });
    }

}
