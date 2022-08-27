import { BloxChartSeries, BLOX_CHART_SERIES } from './blox-chart-series'
import { BloxChartFixedLine, BLOX_CHART_FIXED_LINE } from './blox-chart-fixed-line'

export class BloxChart {

    readonly type: string = 'chart'

    public fixes: BloxChartFixedLine[] = []
    public series: BloxChartSeries[] = []

    constructor(args?: BLOX_CHART) {
        if (typeof(args) !== 'undefined' && args !== null) {
            if (Array.isArray(args.fixes)) this.fixes = args.fixes.map((o: BLOX_CHART_FIXED_LINE) => new BloxChartFixedLine(o))
            if (Array.isArray(args.series)) this.series = args.series.map((o: BLOX_CHART_SERIES) => new BloxChartSeries(o))
        }
    }

}

export interface BLOX_CHART {
    fixes: BloxChartFixedLine[] | BLOX_CHART_FIXED_LINE[]
    series: BloxChartSeries[] | BLOX_CHART_SERIES[]
}
