import { BloxStyle, BLOXSTYLE } from './blox-style';

export class BloxMap extends BloxStyle {

    readonly type: string = 'map';

    constructor(bloxmap?: BLOXMAP) {
        super(bloxmap);
    };

}

export interface BLOXMAP extends BLOXSTYLE { }