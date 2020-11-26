import { ObjectId } from './id';
import { BloxStyle, BLOXSTYLE } from './blox-style';

export class BloxVector extends BloxStyle {

    readonly type: string = 'vector';

    public id?: string = ObjectId();
    public src?: string = '';
    public label?: string = '';
    public width?: number = 0;
    public position?: number = 0;

    constructor(bloxvector?: BLOXVECTOR) {
        super(bloxvector);
        if (typeof(bloxvector) != 'undefined' && bloxvector !== null) {
            if (typeof(bloxvector.id) != 'undefined' && bloxvector.id !== null) {
                this.id = bloxvector.id;
            };
            if (typeof(bloxvector.src) != 'undefined' && bloxvector.src !== null) {
                this.src = bloxvector.src;
            };
            if (typeof(bloxvector.label) != 'undefined' && bloxvector.label !== null) {
                this.label = bloxvector.label;
            };
            if (typeof(bloxvector.width) != 'undefined' && bloxvector.width !== null) {
                this.width = bloxvector.width;
            };
            if (typeof(bloxvector.position) != 'undefined' && bloxvector.position !== null) {
                this.position = bloxvector.position;
            };
        };
    };

}

export interface BLOXVECTOR extends BLOXSTYLE {
    'id'?: string;
    'src'?: string;
    'type'?: string;
    'label'?: string;
    'width'?: number;
    'position'?: number;
}