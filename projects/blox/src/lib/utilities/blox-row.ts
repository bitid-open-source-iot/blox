import { BloxMap } from './blox-map';
import { ObjectId } from './id';
import { BloxText } from './blox-text';
import { BloxBlank } from './blox-blank';
import { BloxChart } from './blox-chart';
import { BloxGauge } from './blox-gauge';
import { BloxTable } from './blox-table';
import { BloxValue } from './blox-value';
import { BloxVector } from './blox-vector';
import { BloxDefault } from './blox-default';

export class BloxRow {

    public id?: string = ObjectId();
    public height = 0;
    public columns: any[] = [];
    public position = 0;

    constructor(args?: BLOX_ROW) {
        if (typeof(args) != 'undefined' && args != null) {
            if (Array.isArray(args.columns)) {
                this.columns = args.columns.map(o => {
                    switch(o.type) {
                        case('map'):
                            return new BloxMap(o);
                        case('text'):
                            return new BloxText(o);
                        case('value'):
                            return new BloxValue(o);
                        case('chart'):
                            return new BloxChart(o);
                        case('table'):
                            return new BloxTable(o);
                        case('blank'):
                            return new BloxBlank(o);
                        case('gauge'):
                            return new BloxGauge(o);
                        case('vector'):
                            return new BloxVector(o);
                        case('default'):
                            return new BloxDefault(o);
                    };
                });
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
