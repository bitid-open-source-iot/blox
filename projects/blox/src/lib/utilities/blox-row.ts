import { ObjectId } from './id';
import { BloxColumn, BLOXCOLUMN } from './blox-column';

export class BloxRow {

    public id?: string = ObjectId();
    public height?: number = 0;
    public columns?: BLOXCOLUMN[] = [];
    public position?: number = 0;

    constructor(bloxrow?: BLOXROW) {
        if (typeof(bloxrow) != 'undefined' && bloxrow !== null) {
            if (Array.isArray(bloxrow.columns)) {
                this.columns = bloxrow.columns.map(o => new BloxColumn(o));
            };
            if (typeof(bloxrow) != 'undefined' && bloxrow !== null) {
                this.id = bloxrow.id;
            };
            if (typeof(bloxrow.height) != 'undefined' && bloxrow.height !== null) {
                this.height = bloxrow.height;
            };
            if (typeof(bloxrow.position) != 'undefined' && bloxrow.position !== null) {
                this.position = bloxrow.position;
            };
        };
    };
}

export interface BLOXROW {
    'id'?: string;
    'height'?: number;
    'columns'?: BLOXCOLUMN[];
    'position'?: number;
}