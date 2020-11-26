import { ObjectId } from './id';
import { BloxStyle, BLOXSTYLE } from './blox-style';

export class BloxGauge extends BloxStyle {

    readonly type: string = 'gauge';

    public id?: string = ObjectId();
    public label?: string = '';
    public width?: number = 0;
    public position?: number = 0;

    constructor(bloxgauge?: BLOXGAUGE) {
        super(bloxgauge);
        if (typeof(bloxgauge) != 'undefined' && bloxgauge !== null) {
            if (typeof(bloxgauge.id) != 'undefined' && bloxgauge.id !== null) {
                this.id = bloxgauge.id;
            };
            if (typeof(bloxgauge.label) != 'undefined' && bloxgauge.label !== null) {
                this.label = bloxgauge.label;
            };
            if (typeof(bloxgauge.width) != 'undefined' && bloxgauge.width !== null) {
                this.width = bloxgauge.width;
            };
            if (typeof(bloxgauge.position) != 'undefined' && bloxgauge.position !== null) {
                this.position = bloxgauge.position;
            };
        };
    };

}

export interface BLOXGAUGE extends BLOXSTYLE {
    'id'?: string;
    'type'?: string;
    'label'?: string;
    'width'?: number;
    'position'?: number;
}