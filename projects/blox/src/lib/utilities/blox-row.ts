import { ObjectId } from './id';
import { BloxColumn } from './blox-column';

export class BloxRow {

    public id?: string = ObjectId();
    public height = 0;
    public columns?: BloxColumn[] = [];
    public position = 0;

    constructor(args?: BLOX_ROW) {
        if (typeof(args) != 'undefined' && args != null) {
            if (Array.isArray(args.columns)) {
                this.columns = args.columns.map(o => new BloxColumn(o));
            }
            if (typeof(args.id) != 'undefined' && args.id != null) {
                this.id = args.id;
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
    'id'?: string;
    'height'?: number;
    'columns'?: any[];
    'position'?: number;
}
