import { ObjectId } from './id'
import { BloxFont, BLOX_FONT } from './blox-font'

export class BloxTableColumn {
    
    public keys = <{
        value: string
    }>{
            value: ''
        }
    public id: string = ObjectId()
    public font: BloxFont = new BloxFont()
    public value: string | number = ''

    constructor(args?: BLOX_TABLE_COLUMN) {
        Object.assign(this, args)
    }

}

export interface BLOX_TABLE_COLUMN {
    keys?: {
        value?: string
    }
    id?: string
    font?: BloxFont | BLOX_FONT
    value?: string | number
}
