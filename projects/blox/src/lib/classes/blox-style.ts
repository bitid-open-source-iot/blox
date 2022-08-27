import { BloxFill, BLOX_FILL } from './blox-fill'
import { BloxFont, BLOX_FONT } from './blox-font'
import { BloxStroke, BLOX_STROKE } from './blox-stroke'
import { BloxBanner, BLOX_BANNER } from './blox-banner'
import { BloxCondition, BLOX_CONDITION } from './blox-condition'

export class BloxStyle {

    public fill: BloxFill = new BloxFill()
    public font: BloxFont = new BloxFont()
    public label: string = ''
    public width: number = 100
    public height: number = 100
    public stroke: BloxStroke = new BloxStroke()
    public banner: BloxBanner = new BloxBanner()
    public position: number = 0
    public conditions: BloxCondition[] = []

    constructor(args?: BLOX_STYLE) {
        if (typeof(args) !== 'undefined' && args !== null) {
            if (Array.isArray(args.conditions)) this.conditions = args.conditions.map((o: BLOX_CONDITION) => new BloxCondition(o))
            if (typeof(args.fill) !== 'undefined' && args.fill !== null) this.fill = new BloxFill(args.fill)
            if (typeof(args.font) !== 'undefined' && args.font !== null) this.font = new BloxFont(args.font)
            if (typeof(args.label) !== 'undefined' && args.label !== null) this.label = args.label
            if (typeof(args.width) !== 'undefined' && args.width !== null) this.width = args.width
            if (typeof(args.height) !== 'undefined' && args.height !== null) this.height = args.height
            if (typeof(args.stroke) !== 'undefined' && args.stroke !== null) this.stroke = new BloxStroke(args.stroke)
            if (typeof(args.banner) !== 'undefined' && args.banner !== null) this.banner = new BloxBanner(args.banner)
            if (typeof(args.position) !== 'undefined' && args.position !== null) this.position = args.position
        }
    }

}

export interface BLOX_STYLE {
    fill: BloxFill | BLOX_FILL
    font: BloxFont | BLOX_FONT
    label: string
    width: number
    height: number
    stroke: BloxStroke | BLOX_STROKE
    banner: BloxBanner | BLOX_BANNER
    position: number
    conditions: BloxCondition[] | BLOX_CONDITION[]
}
