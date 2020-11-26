import { ObjectId } from './id';
import { BloxStyle, BLOXSTYLE } from './blox-style';

export class BloxTable extends BloxStyle {

    readonly type: string = 'table';

    public id?: string = ObjectId();
    public label?: string = '';
    public width?: number = 0;
    public position?: number = 0;

    constructor(bloxtable?: BLOXTABLE) {
        super(bloxtable);
        if (typeof(bloxtable) != 'undefined' && bloxtable !== null) {
            if (typeof(bloxtable.id) != 'undefined' && bloxtable.id !== null) {
                this.id = bloxtable.id;
            };
            if (typeof(bloxtable.label) != 'undefined' && bloxtable.label !== null) {
                this.label = bloxtable.label;
            };
            if (typeof(bloxtable.width) != 'undefined' && bloxtable.width !== null) {
                this.width = bloxtable.width;
            };
            if (typeof(bloxtable.position) != 'undefined' && bloxtable.position !== null) {
                this.position = bloxtable.position;
            };
        };
    };

}

export interface BLOXTABLE extends BLOXSTYLE {
    'id'?: string;
    'type'?: string;
    'label'?: string;
    'width'?: number;
    'position'?: number;
}