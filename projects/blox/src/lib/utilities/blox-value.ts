import { BloxStyle, BLOXSTYLE } from './blox-style';

export class BloxValue extends BloxStyle {

    readonly type: string = 'value';

    public inputId?: string;
    public deviceId?: string;
    public expression?: string;
    
    constructor(bloxvalue?: BLOXVALUE) {
        super(bloxvalue);

        if (typeof(bloxvalue) != 'undefined' && bloxvalue !== null) {
            if (typeof(bloxvalue.inputId) != 'undefined' && bloxvalue.inputId !== null) {
                this.inputId = bloxvalue.inputId;
            };
            if (typeof(bloxvalue.deviceId) != 'undefined' && bloxvalue.deviceId !== null) {
                this.deviceId = bloxvalue.deviceId;
            };
            if (typeof(bloxvalue.expression) != 'undefined' && bloxvalue.expression !== null) {
                this.expression = bloxvalue.expression;
            };
        };
    };

}

export interface BLOXVALUE extends BLOXSTYLE {
    'inputId'?: string;
    'deviceId'?: string;
    'expression'?: string;
}