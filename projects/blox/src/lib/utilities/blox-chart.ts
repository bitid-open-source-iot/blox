import { BloxStyle, BLOXSTYLE } from './blox-style';
import { BloxSeries, BLOXSERIES } from './blox-series';

export class BloxChart extends BloxStyle {

    readonly type: string = 'chart';

    public series?: BLOXSERIES[] = [];

    constructor(bloxchart?: BLOXCHART) {
        super(bloxchart);
        if (typeof(bloxchart) != 'undefined' && bloxchart !== null) {
            if (Array.isArray(bloxchart.series)) {
                this.series = bloxchart.series.map(o => new BloxSeries(o));
            }
        }
    }

}

export interface BLOXCHART extends BLOXSTYLE {
    'series'?: BLOXSERIES[];
}
