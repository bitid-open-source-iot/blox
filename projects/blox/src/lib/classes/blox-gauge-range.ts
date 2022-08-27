import { ObjectId } from './id'

export class BloxGaugeRange {

    public end: number = 0
    public color: string = '#000000'
    public start: number = 0
    public rangeId: string = ObjectId()
    public opacity: number = 100

    constructor(args?: BLOX_GAUGE_RANGE) {
        Object.assign(this, args)
    }

}

export interface BLOX_GAUGE_RANGE {
    end: number
    color: string
    start: number
    rangeId: string
    opacity: number
}