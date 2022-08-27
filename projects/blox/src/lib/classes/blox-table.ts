import { BloxTableColumn } from "./blox-table-column"

export class BloxTable {

    readonly type: string = 'table'
    
    public data: any[] = []
    public columns: BloxTableColumn[] = []
    public connector: Object = new Object()

    constructor(args?: BLOX_TABLE) {
        Object.assign(this, args)
    }

}

export interface BLOX_TABLE {
    data?: any[]
    columns?: BloxTableColumn[]
    connector?: Object
}
