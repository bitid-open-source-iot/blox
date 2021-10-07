import { ObjectId } from './id';

export class BloxChartFixedLine {

    public filter = <{
        value: number;
        enabled: boolean;
        expression: string;
    }>{
        value: 0,
        enabled: false,
        expression: null
    };
    public id?: string = ObjectId();
    public type?: string;
    public color?: string = '#000000';
    public label?: string = '';
    public value?: number = 0;
    public opacity?: number = 100;
    public groupby?: string;
    public inputId?: string;
    public handler?: Function;
    public deviceId?: string;
    public expression?: string;

    constructor(args?: BLOX_CHART_FIXED_LINE) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.filter) != 'undefined' && args.filter != null) {
                if (typeof (args.filter.value) != 'undefined' && args.filter.value != null) {
                    this.filter.value = args.filter.value;
                }
                if (typeof (args.filter.enabled) != 'undefined' && args.filter.enabled != null) {
                    this.filter.enabled = args.filter.enabled;
                }
                if (typeof (args.filter.expression) != 'undefined' && args.filter.expression != null) {
                    this.filter.expression = args.filter.expression;
                }
            }
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
            if (typeof (args.groupby) != 'undefined' && args.groupby != null) {
                this.groupby = args.groupby;
            }
            if (typeof (args.inputId) != 'undefined' && args.inputId != null) {
                this.inputId = args.inputId;
            }
            if (typeof (args.handler) != 'undefined' && args.handler != null) {
                this.handler = args.handler;
            }
            if (typeof (args.deviceId) != 'undefined' && args.deviceId != null) {
                this.deviceId = args.deviceId;
            }
            if (typeof (args.expression) != 'undefined' && args.expression != null) {
                this.expression = args.expression;
            }
        }
    }

}

export interface BLOX_CHART_FIXED_LINE {
    filter?: {
        value?: number;
        enabled?: boolean;
        expression?: string;
    };
    id?: string;
    type?: string;
    color?: string;
    value?: number;
    label?: string;
    groupby?: string;
    opacity?: number;
    inputId?: string;
    handler?: Function;
    deviceId?: string;
    expression?: string;
}
