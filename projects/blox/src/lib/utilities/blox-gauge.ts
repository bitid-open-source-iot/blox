import { BloxGaugeHand } from './blox-gauge-hand';
import { BloxGaugeRange } from './blox-gauge-range';
import { BloxStyle, BLOXSTYLE } from './blox-style';

export class BloxGauge extends BloxStyle {

    readonly type: string = 'gauge';

    public hands: BloxGaugeHand[] = [];
    public ranges: BloxGaugeRange[] = [];

    constructor(args?: BLOXGAUGE) {
        super(args);
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.hands) != 'undefined' && args.hands != null) {
                this.hands = args.hands.map(o => new BloxGaugeHand(o));
            };
            if (typeof (args.ranges) != 'undefined' && args.ranges != null) {
                this.ranges = args.ranges.map(o => new BloxGaugeRange(o));
            };
        };
    }

}

export interface BLOXGAUGE extends BLOXSTYLE {
    hands: BloxGaugeHand[];
    ranges: BloxGaugeRange[];
}