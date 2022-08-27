import { ObjectId } from './id'

export class BloxChartSeries {

    public keys = <{
        fill?: string
        date?: string
        value?: string
    }>{
            fill: undefined,
            date: undefined,
            value: undefined
        }
    public id: string = ObjectId()
    public type: string = ''
    public data: any[] = []
    public color: string = '#000000'
    public label: string = ''
    public opacity: number = 100
    public connector: Object = new Object()

    constructor(args?: BLOX_SERIES) {
        Object.assign(this, args)
    }

}

export interface BLOX_SERIES {
    keys?: {
        fill?: string
        date?: string
        value?: string
    }
    id?: string
    key?: string
    type?: string
    data?: any[]
    color?: string
    label?: string
    opacity?: number
    connector?: Object
}
