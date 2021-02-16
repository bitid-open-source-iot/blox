import { ObjectId } from './id';
import { BloxFill, BLOXFILL } from './blox-fill';
import { BloxFont, BLOXFONT } from './blox-font';
import { BloxStroke, BLOXSTROKE } from './blox-stroke';
import { BloxBanner, BLOXBANNER } from './blox-banner';

export class BloxCondition {

    public id?: string =  ObjectId();
    public min?: number;
    public max?: number;
    public fill?: BLOXFILL = new BloxFill();
    public font?: BLOXFONT = new BloxFont();
    public value?: number;
    public stroke?: BLOXSTROKE = new BloxStroke();
    public banner?: BLOXBANNER = new BloxBanner();
    public groupby?: string;
    public inputId?: string;
    public deviceId?: string;
    public expression?: string;

    constructor(args?: BLOXCONDITION) {
        if (typeof(args) != 'undefined' && args !== null) {
            if (typeof(args.id) != 'undefined' && args.id !== null) {
                this.id = args.id;
            }
            if (typeof(args.min) != 'undefined' && args.min !== null) {
                this.min = args.min;
            }
            if (typeof(args.max) != 'undefined' && args.max !== null) {
                this.max = args.max;
            }
            if (typeof(args.fill) != 'undefined' && args.fill !== null) {
                this.fill = new BloxFill(args.fill);
            }
            if (typeof(args.font) != 'undefined' && args.font !== null) {
                this.font = new BloxFont(args.font);
            }
            if (typeof(args.value) != 'undefined' && args.value !== null) {
                this.value = args.value;
            }
            if (typeof(args.stroke) != 'undefined' && args.stroke !== null) {
                this.stroke = new BloxStroke(args.stroke);
            }
            if (typeof(args.banner) != 'undefined' && args.banner !== null) {
                this.banner = new BloxBanner(args.banner);
            }
            if (typeof(args.groupby) != 'undefined' && args.groupby !== null) {
                this.groupby = args.groupby;
            }
            if (typeof(args.inputId) != 'undefined' && args.inputId !== null) {
                this.inputId = args.inputId;
            }
            if (typeof(args.deviceId) != 'undefined' && args.deviceId !== null) {
                this.deviceId = args.deviceId;
            }
            if (typeof(args.expression) != 'undefined' && args.expression !== null) {
                this.expression = args.expression;
            }
        }
    }

}

export interface BLOXCONDITION {
    id?: string;
    min?: number;
    max?: number;
    fill?: BLOXFILL;
    font?: BLOXFONT;
    value?: number;
    stroke?: BLOXSTROKE;
    banner?: BLOXBANNER;
    groupby?: string;
    inputId?: string;
    deviceId?: string;
    expression?: string;
}
