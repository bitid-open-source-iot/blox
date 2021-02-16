import { BloxStyle, BLOXSTYLE } from './blox-style';

export class BloxVector extends BloxStyle {

    readonly type: string = 'vector';

    public src = '';

    constructor(bloxvector?: BLOXVECTOR) {
        super(bloxvector);
        if (typeof(bloxvector) != 'undefined' && bloxvector !== null) {
            if (typeof(bloxvector.src) != 'undefined' && bloxvector.src !== null) {
                this.src = bloxvector.src;
            }
        }
    }

}

export interface BLOXVECTOR extends BLOXSTYLE {
    'src'?: string;
}
