import { ObjectId } from './id';
import { BloxStyle, BLOXSTYLE } from './blox-style';

export class BloxBlank extends BloxStyle {

    readonly type: string = 'blank';
    
    public id?: string = ObjectId();
    public label?: string = '';
    public width?: number = 0;
    public position?: number = 0;

    constructor(bloxblank?: BLOXBLANK) {
        super(bloxblank);
        if (typeof(bloxblank) != 'undefined' && bloxblank !== null) {
            if (typeof(bloxblank.id) != 'undefined' && bloxblank.id !== null) {
                this.id = bloxblank.id;
            };
            if (typeof(bloxblank.label) != 'undefined' && bloxblank.label !== null) {
                this.label = bloxblank.label;
            };
            if (typeof(bloxblank.width) != 'undefined' && bloxblank.width !== null) {
                this.width = bloxblank.width;
            };
            if (typeof(bloxblank.position) != 'undefined' && bloxblank.position !== null) {
                this.position = bloxblank.position;
            };
        };
    };

}

export interface BLOXBLANK extends BLOXSTYLE {
    'id'?: string;
    'type'?: string;
    'width'?: number;
    'label'?: string;
    'position'?: number;
}