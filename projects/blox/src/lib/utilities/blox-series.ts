import { ObjectId } from './id';

export class BloxSeries {

    public filter = {
        value: null,
        enabled: null,
        expression: null
    };
    public id?: string = ObjectId();
    public type?: string;
    public data?: any[] = [];
    public color = '#000000';
    public label = '';
    public opacity = 100;
    public groupby?: string;
    public inputId?: string;
    public handler?: Function;
    public deviceId?: string;
    public expression?: string;

    constructor(args?: BLOXSERIES) {
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

export interface BLOXSERIES {
    'filter'?: {
        'value'?: number;
        'enabled'?: boolean;
        'expression'?: string;
    };
    'id'?: string;
    'type'?: string;
    'data'?: any[];
    'color'?: string;
    'label'?: string;
    'groupby'?: string;
    'opacity'?: number;
    'inputId'?: string;
    'handler'?: Function;
    'deviceId'?: string;
    'expression'?: string;
}
