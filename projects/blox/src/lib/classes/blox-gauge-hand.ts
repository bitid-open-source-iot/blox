import { ObjectId } from './id'

export class BloxGaugeHand {

    public keys = <{
        value: string
    }>{
            value: ''
        }
    public type: 'clock' = 'clock'
    public label: string = ''
    public color: string = '#000000'
    public value: number = 0
    public handId: string = ObjectId()
    public opacity: number = 100

    constructor(args?: BLOX_GAUGE_HAND) {
        Object.assign(this, args)
    }

}

export interface BLOX_GAUGE_HAND {
    keys: {
        value: string
    }
    type: 'clock'
    label: string
    color: string
    value: number
    handId: string
    opacity: number
}