import { BloxStyle, BLOXSTYLE } from './blox-style';

export class BloxValue extends BloxStyle {

    readonly type: string = 'value';

    public filter = {
        value: null,
        enabled: null,
        expression: null
    };
    public inputId?: string;
    public handler?: Function;
    public groupby?: string;
    public deviceId?: string;
    public expression?: string;

    constructor(args?: BLOXVALUE) {
        super(args);
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
            if (typeof (args.inputId) != 'undefined' && args.inputId != null) {
                this.inputId = args.inputId;
            }
            if (typeof (args.handler) != 'undefined' && args.handler != null) {
                this.handler = args.handler;
            }
            if (typeof (args.deviceId) != 'undefined' && args.deviceId != null) {
                this.deviceId = args.deviceId;
            }
            if (typeof (args.groupby) != 'undefined' && args.groupby != null) {
                this.groupby = args.groupby;
            }
            if (typeof (args.expression) != 'undefined' && args.expression != null) {
                this.expression = args.expression;
            }
        }
    }

    public valid() {
        let valid = true;
        if (typeof (this.inputId) == 'undefined' || this.inputId == null || this.inputId.length < 24) {
            valid = false;
        }
        if (typeof (this.deviceId) == 'undefined' || this.deviceId == null || this.deviceId.length < 24) {
            valid = false;
        }
        if (typeof (this.expression) == 'undefined' || this.expression == null || this.expression.length == 0) {
            valid = false;
        }
        return valid;
    }

}

export interface BLOXVALUE extends BLOXSTYLE {
    'filter'?: {
        'value'?: number;
        'enabled'?: boolean;
        'expression'?: string;
    };
    'inputId'?: string;
    'handler'?: Function;
    'groupby'?: string;
    'deviceId'?: string;
    'expression'?: string;
}
