import { ObjectId } from './id';

export class BloxGaugeRange {

    public id: string = ObjectId();
    public end: number = 0;
    public color: string;
    public start: number = 0;
    public opacity?: number = 100;

    constructor(args?: BLOX_GAUGE_RANGE) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.id) != 'undefined' && args.id != null) {
                this.id = args.id;
            };
            if (typeof (args.end) != 'undefined' && args.end != null) {
                this.end = args.end;
            };
            if (typeof (args.color) != 'undefined' && args.color != null) {
                this.color = args.color;
            };
            if (typeof (args.start) != 'undefined' && args.start != null) {
                this.start = args.start;
            };
            if (typeof (args.opacity) != 'undefined' && args.opacity != null) {
                this.opacity = args.opacity;
            };
        };
    }

}

export interface BLOX_GAUGE_RANGE {
    id?: string;
    end?: number;
    color?: string;
    start?: number;
    opacity?: number;
}