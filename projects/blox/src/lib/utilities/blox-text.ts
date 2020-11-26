import { BloxStyle, BLOXSTYLE } from './blox-style';

export class BloxText extends BloxStyle {

    readonly type: string = 'text';

    public value?: string|number = '';

    constructor(bloxtext?: BLOXTEXT) {
        super(bloxtext);
        if (typeof(bloxtext) != 'undefined' && bloxtext !== null) {
            if (typeof(bloxtext.value) != 'undefined' && bloxtext.value !== null) {
                this.value = bloxtext.value;
            };
        };
    };

}

export interface BLOXTEXT extends BLOXSTYLE {
    'value'?: string|number;
}