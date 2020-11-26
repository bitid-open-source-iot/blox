import { ObjectId } from './id';
import { BloxStyle, BLOXSTYLE } from './blox-style';

export class BloxMap extends BloxStyle {

    readonly type: string = 'map';

    public id?: string = ObjectId();
    public label?: string = '';
    public width?: number = 0;
    public position?: number = 0;

    constructor(bloxmap?: BLOXMAP) {
        super(bloxmap);
        if (typeof(bloxmap) != 'undefined' && bloxmap !== null) {
            if (typeof(bloxmap.id) != 'undefined' && bloxmap.id !== null) {
                this.id = bloxmap.id;
            };
            if (typeof(bloxmap.label) != 'undefined' && bloxmap.label !== null) {
                this.label = bloxmap.label;
            };
            if (typeof(bloxmap.width) != 'undefined' && bloxmap.width !== null) {
                this.width = bloxmap.width;
            };
            if (typeof(bloxmap.position) != 'undefined' && bloxmap.position !== null) {
                this.position = bloxmap.position;
            };
        };
    };

}

export interface BLOXMAP extends BLOXSTYLE {
    'id'?: string;
    'type'?: string;
    'label'?: string;
    'width'?: number;
    'position'?: number;
}