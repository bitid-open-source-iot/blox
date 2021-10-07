import { BloxTableColumn } from "./blox-table-column";

export class BloxTable {

    readonly type: string = 'table';
    
    public data: any[] = [];
    public columns: BloxTableColumn[] = [];

    constructor(args?: BLOX_TABLE) {
        if (typeof(args) != 'undefined' && args != null) {
            if (typeof(args.data) != 'undefined' && args.data != null) {
                this.data = args.data;
            };
            if (typeof(args.columns) != 'undefined' && args.columns != null) {
                this.columns = args.columns.map(o => new BloxTableColumn(o));
            };
        }
    }

}

export interface BLOX_TABLE {
    data: any[];
    columns: BloxTableColumn[];
}
