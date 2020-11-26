import { BloxStyle, BLOXSTYLE } from './blox-style';

export class BloxGauge extends BloxStyle {

    readonly type: string = 'gauge';

    constructor(bloxgauge?: BLOXGAUGE) {
        super(bloxgauge);
    };

}

export interface BLOXGAUGE extends BLOXSTYLE { }