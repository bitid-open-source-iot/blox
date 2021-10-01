import { BloxSeries } from './blox-series';

export class BloxChart {

    readonly type: string = 'chart';

    public series?: BloxSeries[] = [];

    constructor(args?: BLOX_CHART) {
        if (typeof(args) != 'undefined' && args != null) {
            if (Array.isArray(args.series)) {
                this.series = args.series.map(o => new BloxSeries(o));
            }
        }
    }

}

export interface BLOX_CHART {
    series?: BloxSeries[];
}
