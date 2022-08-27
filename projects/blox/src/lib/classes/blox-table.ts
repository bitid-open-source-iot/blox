import { BloxTableColumn, BLOX_TABLE_COLUMN } from "./blox-table-column"

export class BloxTable {

    readonly type: string = 'table'
    
    public data: any[] = []
    public columns: BloxTableColumn[] = []
    public connector: Object = new Object()

    constructor(args?: BLOX_TABLE) {
        Object.assign(this, args)
        if (typeof (args) !== 'undefined' && args !== null) {
            if (Array.isArray(args.columns)) this.columns = args.columns.map((o: BLOX_TABLE_COLUMN) => new BloxTableColumn(o))
        }
    }

}

export interface BLOX_TABLE {
    data: any[]
    columns: BloxTableColumn[] | BLOX_TABLE_COLUMN[]
    connector: Object
}
