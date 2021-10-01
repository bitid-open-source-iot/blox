import { ObjectId } from './id';
import { BloxColumn } from './blox-column';

export class BloxRow {

    public rowId?: string = ObjectId();
    public height?: number = 0;
    public columns?: BloxColumn[] = [];
    public position?: number = 0;

    constructor(args?: BLOX_ROW) {
        if (typeof(args) != 'undefined' && args != null) {
            if (Array.isArray(args.columns)) {
                this.columns = args.columns.map(o => new BloxColumn(o));
            }
            if (typeof(args.rowId) != 'undefined' && args.rowId != null) {
                this.rowId = args.rowId;
            }
            if (typeof(args.height) != 'undefined' && args.height != null) {
                this.height = args.height;
            }
            if (typeof(args.position) != 'undefined' && args.position != null) {
                this.position = args.position;
            }
        }
    }
}

export interface BLOX_ROW {
    rowId?: string;
    height?: number;
    columns?: BloxColumn[];
    position?: number;
}
