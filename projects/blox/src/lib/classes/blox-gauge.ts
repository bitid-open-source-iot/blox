import { BloxGaugeHand, BLOX_GAUGE_HAND } from './blox-gauge-hand'
import { BloxGaugeRange, BLOX_GAUGE_RANGE } from './blox-gauge-range'

export class BloxGauge {

    readonly type: string = 'gauge'
    
    public min: number = 0
    public max: number = 100
    public hands: BloxGaugeHand[] = []
    public ranges: BloxGaugeRange[] = []
    public endAngle: number = 360
    public connector: Object = new Object()
    public startAngle: number = 180

    constructor(args?: BLOX_GAUGE) {
        if (typeof (args) !== 'undefined' && args !== null) {
            if (typeof (args.min) !== 'undefined' && args.min !== null) this.min = args.min
            if (typeof (args.max) !== 'undefined' && args.max !== null) this.max = args.max
            if (typeof (args.hands) !== 'undefined' && args.hands !== null) this.hands = args.hands.map((o: BLOX_GAUGE_HAND) => new BloxGaugeHand(o))
            if (typeof (args.ranges) !== 'undefined' && args.ranges !== null) this.ranges = args.ranges.map((o: BLOX_GAUGE_RANGE) => new BloxGaugeRange(o))
            if (typeof (args.endAngle) !== 'undefined' && args.endAngle !== null) this.endAngle = args.endAngle
            if (typeof (args.connector) !== 'undefined' && args.connector !== null) this.connector = args.connector
            if (typeof (args.startAngle) !== 'undefined' && args.startAngle !== null) this.startAngle = args.startAngle
        }
    }

}

export interface BLOX_GAUGE {
    min?: number
    max?: number
    hands?: BloxGaugeHand[] | BLOX_GAUGE_HAND[]
    ranges?: BloxGaugeRange[] | BLOX_GAUGE_RANGE[]
    endAngle?: number
    connector?: Object
    startAngle?: number
}