import { ObjectId } from './id';
import { BloxStyle, BLOXSTYLE } from './blox-style';

export class BloxValue extends BloxStyle {

    readonly type: string = 'value';

    public id?: string = ObjectId();
    public label?: string = '';
    public width?: number = 0;
    public inputId?: string;
    public deviceId?: string;
    public position?: number = 0;
    public expression?: string;
    
    constructor(bloxvalue?: BLOXVALUE) {
        super(bloxvalue);

        if (typeof(bloxvalue) != 'undefined' && bloxvalue !== null) {
            if (typeof(bloxvalue.id) != 'undefined' && bloxvalue.id !== null) {
                this.id = bloxvalue.id;
            };
            if (typeof(bloxvalue.label) != 'undefined' && bloxvalue.label !== null) {
                this.label = bloxvalue.label;
            };
            if (typeof(bloxvalue.width) != 'undefined' && bloxvalue.width !== null) {
                this.width = bloxvalue.width;
            };
            if (typeof(bloxvalue.inputId) != 'undefined' && bloxvalue.inputId !== null) {
                this.inputId = bloxvalue.inputId;
            };
            if (typeof(bloxvalue.deviceId) != 'undefined' && bloxvalue.deviceId !== null) {
                this.deviceId = bloxvalue.deviceId;
            };
            if (typeof(bloxvalue.position) != 'undefined' && bloxvalue.position !== null) {
                this.position = bloxvalue.position;
            };
            if (typeof(bloxvalue.expression) != 'undefined' && bloxvalue.expression !== null) {
                this.expression = bloxvalue.expression;
            };
        };
    };

}

export interface BLOXVALUE extends BLOXSTYLE {
    'id'?: string;
    'type'?: string;
    'label'?: string;
    'width'?: number;
    'inputId'?: string;
    'deviceId'?: string;
    'position'?: number;
    'expression'?: string;
}