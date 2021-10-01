import { BloxBlank } from './blox-blank';
import { BloxChart } from './blox-chart';
import { BloxDefault } from './blox-default';
import { BloxGauge } from './blox-gauge';
import { BloxMap } from './blox-map';
import { BloxTable } from './blox-table';
import { BloxText } from './blox-text';
import { BloxValue } from './blox-value';
import { BloxVector } from './blox-vector';
import { ObjectId } from './id';

export class BloxRow {

    public id?: string = ObjectId();
    public height = 0;
    public columns?: any[] = [];
    public position = 0;

    constructor(bloxrow?: BLOXROW) {
        if (typeof(bloxrow) != 'undefined' && bloxrow != null) {
            if (Array.isArray(bloxrow.columns)) {
                this.columns = bloxrow.columns.map(o => {
                    switch(o.type) {
                        case('map'):
                            return new BloxMap(o);
                        case('text'):
                            return new BloxText(o);
                        case('table'):
                            return new BloxTable(o);
                        case('value'):
                            return new BloxValue(o);
                        case('blank'):
                            return new BloxBlank(o);
                        case('chart'):
                            return new BloxChart(o);
                        case('gauge'):
                            return new BloxGauge(o);
                        case('vector'):
                            return new BloxVector(o);
                        case('default'):
                            return new BloxDefault(o);
                        default:
                            return null;
                    };
                }).filter(o => typeof(o) != 'undefined' && o != null);
            }
            if (typeof(bloxrow.id) != 'undefined' && bloxrow.id != null) {
                this.id = bloxrow.id;
            }
            if (typeof(bloxrow.height) != 'undefined' && bloxrow.height != null) {
                this.height = bloxrow.height;
            }
            if (typeof(bloxrow.position) != 'undefined' && bloxrow.position != null) {
                this.position = bloxrow.position;
            }
        }
    }
}

export interface BLOXROW {
    'id'?: string;
    'height'?: number;
    'columns'?: any[];
    'position'?: number;
}
