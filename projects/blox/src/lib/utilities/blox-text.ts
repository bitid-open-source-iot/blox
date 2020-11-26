import { ObjectId } from './id';
import { BloxStyle, BLOXSTYLE } from './blox-style';

export class BloxText extends BloxStyle {

    readonly type: string = 'text';

    public id?: string = ObjectId();
    public label?: string = '';
    public value?: string|number = '';
    public width?: number = 0;
    public position?: number = 0;

    constructor(bloxtext?: BLOXTEXT) {
        super(bloxtext);
        if (typeof(bloxtext) != 'undefined' && bloxtext !== null) {
            if (typeof(bloxtext.id) != 'undefined' && bloxtext.id !== null) {
                this.id = bloxtext.id;
            };
            if (typeof(bloxtext.label) != 'undefined' && bloxtext.label !== null) {
                this.label = bloxtext.label;
            };
            if (typeof(bloxtext.width) != 'undefined' && bloxtext.width !== null) {
                this.width = bloxtext.width;
            };
            if (typeof(bloxtext.value) != 'undefined' && bloxtext.value !== null) {
                this.value = bloxtext.value;
            };
            if (typeof(bloxtext.position) != 'undefined' && bloxtext.position !== null) {
                this.position = bloxtext.position;
            };
        };
    };

}

export interface BLOXTEXT extends BLOXSTYLE {
    'id'?: string;
    'type'?: string;
    'label'?: string;
    'width'?: number;
    'value'?: string|number;
    'position'?: number;
}