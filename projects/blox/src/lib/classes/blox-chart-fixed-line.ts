import { ObjectId } from './id';

export class BloxChartFixedLine {

    public id?: string = ObjectId();
    public type?: string;
    public color?: string = '#000000';
    public label?: string = '';
    public value?: number = 0;
    public opacity?: number = 100;
    public connector?: Object = new Object();

    constructor(args?: BLOX_CHART_FIXED_LINE) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.id) != 'undefined' && args.id != null) {
                this.id = args.id;
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
            if (typeof (args.value) != 'undefined' && args.value != null) {
                this.value = args.value;
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

export interface BLOX_CHART_FIXED_LINE {
    id?: string;
    type?: string;
    color?: string;
    value?: number;
    label?: string;
    opacity?: number;
    connector?: Object;
}
