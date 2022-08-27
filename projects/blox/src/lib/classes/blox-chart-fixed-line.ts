import { ObjectId } from './id'

export class BloxChartFixedLine {

    public keys = <{
        value?: string
    }>{
        value: undefined
    }
    public id: string = ObjectId()
    public type: string = ''
    public color: string = '#000000'
    public label: string = ''
    public value: number = 0
    public opacity: number = 100
    public connector: Object = new Object()

    constructor(args?: BLOX_CHART_FIXED_LINE) {
        Object.assign(this, args)
    }

}

export interface BLOX_CHART_FIXED_LINE {
    keys?: {
        value?: string
    }
    id?: string
    type?: string
    color?: string
    value?: number
    label?: string
    opacity?: number
    connector?: Object
}
