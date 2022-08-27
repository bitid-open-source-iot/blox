import { ObjectId } from './id'
import { BloxFill } from './blox-fill'
import { BloxFont } from './blox-font'
import { BloxStroke } from './blox-stroke'
import { BloxBanner } from './blox-banner'

export class BloxCondition {

    public keys = <{
        value?: string
    }>{
        value: undefined
    }
    public id: string = ObjectId()
    public min: number = 0
    public max: number = 0
    public type: string = ''
    public fill: BloxFill = new BloxFill()
    public font: BloxFont = new BloxFont()
    public value: number = 0
    public stroke: BloxStroke = new BloxStroke()
    public banner: BloxBanner = new BloxBanner()
    public connector: Object = new Object()

    constructor(args?: BLOX_CONDITION) {
        if (typeof (args) !== 'undefined' && args !== null) {
            if (typeof (args.id) !== 'undefined' && args.id !== null) this.id = args.id
            if (typeof (args.keys) !== 'undefined' && args.keys !== null) {
                if (typeof (args.keys.value) !== 'undefined' && args.keys.value !== null) this.keys.value = args.keys.value
            }
            if (typeof (args.min) !== 'undefined' && args.min !== null) this.min = args.min
            if (typeof (args.max) !== 'undefined' && args.max !== null) this.max = args.max
            if (typeof (args.type) !== 'undefined' && args.type !== null) this.type = args.type
            if (typeof (args.fill) !== 'undefined' && args.fill !== null) this.fill = new BloxFill(args.fill)
            if (typeof (args.font) !== 'undefined' && args.font !== null) this.font = new BloxFont(args.font)
            if (typeof (args.value) !== 'undefined' && args.value !== null) this.value = args.value
            if (typeof (args.stroke) !== 'undefined' && args.stroke !== null) this.stroke = new BloxStroke(args.stroke)
            if (typeof (args.banner) !== 'undefined' && args.banner !== null) this.banner = new BloxBanner(args.banner)
            if (typeof (args.connector) !== 'undefined' && args.connector !== null) this.connector = args.connector
        }
    }

}

export interface BLOX_CONDITION {
    keys?: {
        value?: string
    }
    id?: string
    min?: number
    max?: number
    type?: string
    fill?: BloxFill
    font?: BloxFont
    value?: number
    stroke?: BloxStroke
    banner?: BloxBanner
    connector?: Object
}
