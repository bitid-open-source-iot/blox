import { BloxStyle, BLOXSTYLE } from './blox-style';

export class BloxValue extends BloxStyle {

    readonly type: string = 'value';

    public inputId?: string;
    public handler?: Function;
    public deviceId?: string;
    public expression?: string;
    
    constructor(bloxvalue?: BLOXVALUE) {
        super(bloxvalue);
        if (typeof(bloxvalue) != 'undefined' && bloxvalue !== null) {
            if (typeof(bloxvalue.inputId) != 'undefined' && bloxvalue.inputId !== null) {
                this.inputId = bloxvalue.inputId;
            };
            if (typeof(bloxvalue.handler) != 'undefined' && bloxvalue.handler !== null) {
                this.handler = bloxvalue.handler;
            };
            if (typeof(bloxvalue.deviceId) != 'undefined' && bloxvalue.deviceId !== null) {
                this.deviceId = bloxvalue.deviceId;
            };
            if (typeof(bloxvalue.expression) != 'undefined' && bloxvalue.expression !== null) {
                this.expression = bloxvalue.expression;
            };
        };
    };

    public valid() {
        let valid = true;
        if (typeof(this.inputId) == 'undefined' || this.inputId == null || this.inputId.length < 24) {
            valid = false;
        };
        if (typeof(this.deviceId) == 'undefined' || this.deviceId == null || this.deviceId.length < 24) {
            valid = false;
        };
        if (typeof(this.expression) == 'undefined' || this.expression == null || this.expression.length == 0) {
            valid = false;
        };
        return valid;
    };

}

export interface BLOXVALUE extends BLOXSTYLE {
    'inputId'?: string;
    'handler'?: Function;
    'deviceId'?: string;
    'expression'?: string;
}