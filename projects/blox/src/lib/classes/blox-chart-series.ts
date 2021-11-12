import { ObjectId } from './id';

export class BloxChartSeries {

    public keys = <{
        fill?: string;
        date?: string;
        value?: string;
    }>{
        fill: null,
        date: null,
        value: null
    };
    public id?: string = ObjectId();
    public type?: string;
    public data?: any[] = [];
    public color?: string = '#000000';
    public label?: string = '';
    public opacity?: number = 100;
    public connector?: Object = new Object();

    constructor(args?: BLOX_SERIES) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.id) != 'undefined' && args.id != null) {
                this.id = args.id;
            }
            if (typeof (args.keys) != 'undefined' && args.keys != null) {
                if (typeof (args.keys.fill) != 'undefined' && args.keys.fill != null) {
                    this.keys.fill = args.keys.fill;
                }
                if (typeof (args.keys.date) != 'undefined' && args.keys.date != null) {
                    this.keys.date = args.keys.date;
                }
                if (typeof (args.keys.value) != 'undefined' && args.keys.value != null) {
                    this.keys.value = args.keys.value;
                }
            }
            if (typeof (args.data) != 'undefined' && args.data != null) {
                this.data = args.data;
            }
            if (typeof (args.type) != 'undefined' && args.type != null) {
                this.type = args.type;
            }
            if (typeof (args.color) != 'undefined' && args.color != null) {
                this.color = args.color;
            }
            if (typeof (args.label) != 'undefined' && args.label != null) {
                this.label = args.label;
            }
            if (typeof (args.opacity) != 'undefined' && args.opacity != null) {
                this.opacity = args.opacity;
            }
            if (typeof (args.connector) != 'undefined' && args.connector != null) {
                this.connector = args.connector;
            }
        }
    }

}

export interface BLOX_SERIES {
    keys?: {
        fill?: string;
        date?: string;
        value?: string;
    };
    id?: string;
    key?: string;
    type?: string;
    data?: any[];
    color?: string;
    label?: string;
    opacity?: number;
    connector?: Object;
}
