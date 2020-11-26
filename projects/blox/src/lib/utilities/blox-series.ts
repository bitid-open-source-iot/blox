import { ObjectId } from './id';

export class BloxSeries {

    public id?: string = ObjectId();
    public type?: string;
    public data?: any[] = [];
    public color?: string = '#000000';
    public label?: string = '';
    public opacity?: number = 100;
    public inputId?: string;
    public deviceId?: string;

    constructor(bloxseries?: BLOXSERIES) {
        if (typeof(bloxseries) != 'undefined' && bloxseries !== null) {
            if (typeof(bloxseries.id) != 'undefined' && bloxseries.id !== null) {
                this.id = bloxseries.id;
            };
            if (typeof(bloxseries.data) != 'undefined' && bloxseries.data !== null) {
                this.data = bloxseries.data;
            };
            if (typeof(bloxseries.type) != 'undefined' && bloxseries.type !== null) {
                this.type = bloxseries.type;
            };
            if (typeof(bloxseries.color) != 'undefined' && bloxseries.color !== null) {
                this.color = bloxseries.color;
            };
            if (typeof(bloxseries.label) != 'undefined' && bloxseries.label !== null) {
                this.label = bloxseries.label;
            };
            if (typeof(bloxseries.opacity) != 'undefined' && bloxseries.opacity !== null) {
                this.opacity = bloxseries.opacity;
            };
            if (typeof(bloxseries.inputId) != 'undefined' && bloxseries.inputId !== null) {
                this.inputId = bloxseries.inputId;
            };
            if (typeof(bloxseries.deviceId) != 'undefined' && bloxseries.deviceId !== null) {
                this.deviceId = bloxseries.deviceId;
            };
        };
    };

}

export interface BLOXSERIES {
    'id'?: string;
    'type'?: string;
    'data'?: any[];
    'color'?: string;
    'label'?: string;
    'opacity'?: number;
    'inputId'?: string;
    'deviceId'?: string;
}