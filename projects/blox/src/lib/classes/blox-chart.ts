import { BloxChartSeries } from './blox-chart-series';
import { BloxChartFixedLine } from './blox-chart-fixed-line';

export class BloxChart {

    readonly type: string = 'chart';

    public fixes?: BloxChartFixedLine[] = [];
    public series?: BloxChartSeries[] = [];

    constructor(args?: BLOX_CHART) {
        if (typeof(args) != 'undefined' && args != null) {
            if (Array.isArray(args.fixes)) {
                this.fixes = args.fixes.map(o => new BloxChartFixedLine(o));
            }
            if (Array.isArray(args.series)) {
                this.series = args.series.map(o => new BloxChartSeries(o));
            }
        }
    }

}

export interface BLOX_CHART {
    fixes?: BloxChartFixedLine[];
    series?: BloxChartSeries[];
}
