import { ObjectId } from './id';

export class BloxRow {

    public id?: string = ObjectId();
    public height?: number = 0;
    public columns?: any[] = [];
    public position?: number = 0;

    constructor(bloxrow?: BLOXROW) {
        if (typeof(bloxrow) != 'undefined' && bloxrow !== null) {
            if (Array.isArray(bloxrow.columns)) {
                this.columns = bloxrow.columns;
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
    'columns'?: any[];
    'position'?: number;
}