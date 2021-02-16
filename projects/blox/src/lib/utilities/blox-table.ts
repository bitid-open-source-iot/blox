import { BloxStyle, BLOXSTYLE } from './blox-style';

export class BloxTable extends BloxStyle {

    readonly type: string = 'table';


    constructor(bloxtable?: BLOXTABLE) {
        super(bloxtable);
    }

}

export interface BLOXTABLE extends BLOXSTYLE { }
