import { ObjectId } from './id';
import { BloxStyle, BLOXSTYLE } from './blox-style';

export class BloxChart extends BloxStyle {

    readonly type: string = 'chart';
    
    public id?: string = ObjectId();
    public label?: string = '';
    public width?: number = 0;
    public series?: SERIES[] = [];
    public position?: number = 0;

    constructor(bloxchart?: BLOXCHART) {
        super(bloxchart);
        if (typeof(bloxchart) != 'undefined' && bloxchart !== null) {
            if (Array.isArray(bloxchart.series)) {
                this.series = bloxchart.series;
            };
            if (typeof(bloxchart.id) != 'undefined' && bloxchart.id !== null) {
                this.id = bloxchart.id;
            };
            if (typeof(bloxchart.label) != 'undefined' && bloxchart.label !== null) {
                this.label = bloxchart.label;
            };
            if (typeof(bloxchart.width) != 'undefined' && bloxchart.width !== null) {
                this.width = bloxchart.width;
            };
            if (typeof(bloxchart.position) != 'undefined' && bloxchart.position !== null) {
                this.position = bloxchart.position;
            };
        };
    };

}

export interface BLOXCHART extends BLOXSTYLE {
    'id'?: string;
    'type'?: string;
    'label'?: string;
    'width'?: number;
    'series'?: SERIES[];
    'position'?: number;
}

export interface SERIES {
    'id'?: string;
    'type'?: string;
    'data'?: any[];
    'color'?: string;
    'label'?: string;
    'opacity'?: number;
    'inputId'?: string;
    'deviceId'?: string;
}