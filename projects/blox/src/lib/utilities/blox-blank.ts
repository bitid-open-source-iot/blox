import { BloxStyle, BLOXSTYLE } from './blox-style';

export class BloxBlank extends BloxStyle {

    readonly type: string = 'blank';
    
    constructor(bloxblank?: BLOXBLANK) {
        super(bloxblank);
    };

}

export interface BLOXBLANK extends BLOXSTYLE { }