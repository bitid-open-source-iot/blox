import { BloxFill, BLOXFILL } from './blox-fill';
import { ObjectId } from './id';

export class BloxColumn {

    public id?: string = ObjectId();
    public fill?: BLOXFILL = new BloxFill()
    public width?: number = 0;
    public position?: number = 0;

    constructor(bloxcolumn?: BLOXCOLUMN) {
        if (typeof(bloxcolumn) != 'undefined' && bloxcolumn !== null) {
            if (typeof(bloxcolumn.id) != 'undefined' && bloxcolumn.id !== null) {
                this.id = bloxcolumn.id;
            };
            if (typeof(bloxcolumn.fill) != 'undefined' && bloxcolumn.fill !== null) {
                this.fill = new BloxFill(bloxcolumn.fill);
            };
            if (typeof(bloxcolumn.width) != 'undefined' && bloxcolumn.width !== null) {
                this.width = bloxcolumn.width;
            };
            if (typeof(bloxcolumn.position) != 'undefined' && bloxcolumn.position !== null) {
                this.position = bloxcolumn.position;
            };
        };
    };
}

export interface BLOXCOLUMN {
    'id'?: string;
    'fill'?: BLOXFILL;
    'width'?: number;
    'position'?: number;
}