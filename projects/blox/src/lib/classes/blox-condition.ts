import { ObjectId } from './id';
import { BloxFill } from './blox-fill';
import { BloxFont } from './blox-font';
import { BloxStroke } from './blox-stroke';
import { BloxBanner } from './blox-banner';

export class BloxCondition {

    public filter = <{
        value: number;
        enabled: boolean;
        expression: string;
    }>{
        value: 0,
        enabled: false,
        expression: null
    };
    public id?: string =  ObjectId();
    public min?: number;
    public max?: number;
    public type?: string;
    public fill?: BloxFill = new BloxFill();
    public font?: BloxFont = new BloxFont();
    public value?: number;
    public stroke?: BloxStroke = new BloxStroke();
    public banner?: BloxBanner = new BloxBanner();
    public groupby?: string;
    public inputId?: string;
    public deviceId?: string;
    public expression?: string;

    constructor(args?: BLOX_CONDITION) {
        if (typeof(args) != 'undefined' && args != null) {
            if (typeof (args.filter) != 'undefined' && args.filter != null) {
                if (typeof (args.filter.value) != 'undefined' && args.filter.value != null) {
                    this.filter.value = args.filter.value;
                };
                if (typeof (args.filter.enabled) != 'undefined' && args.filter.enabled != null) {
                    this.filter.enabled = args.filter.enabled;
                };
                if (typeof (args.filter.expression) != 'undefined' && args.filter.expression != null) {
                    this.filter.expression = args.filter.expression;
                };
            };
            if (typeof(args.id) != 'undefined' && args.id != null) {
                this.id = args.id;
            }
            if (typeof(args.min) != 'undefined' && args.min != null) {
                this.min = args.min;
            }
            if (typeof(args.max) != 'undefined' && args.max != null) {
                this.max = args.max;
            }
            if (typeof(args.type) != 'undefined' && args.type != null) {
                this.type = args.type;
            }
            if (typeof(args.fill) != 'undefined' && args.fill != null) {
                this.fill = new BloxFill(args.fill);
            }
            if (typeof(args.font) != 'undefined' && args.font != null) {
                this.font = new BloxFont(args.font);
            }
            if (typeof(args.value) != 'undefined' && args.value != null) {
                this.value = args.value;
            }
            if (typeof(args.stroke) != 'undefined' && args.stroke != null) {
                this.stroke = new BloxStroke(args.stroke);
            }
            if (typeof(args.banner) != 'undefined' && args.banner != null) {
                this.banner = new BloxBanner(args.banner);
            }
            if (typeof(args.groupby) != 'undefined' && args.groupby != null) {
                this.groupby = args.groupby;
            }
            if (typeof(args.inputId) != 'undefined' && args.inputId != null) {
                this.inputId = args.inputId;
            }
            if (typeof(args.deviceId) != 'undefined' && args.deviceId != null) {
                this.deviceId = args.deviceId;
            }
            if (typeof(args.expression) != 'undefined' && args.expression != null) {
                this.expression = args.expression;
            }
        }
    }

}

export interface BLOX_CONDITION {
    filter?: {
        value?: number;
        enabled?: boolean;
        expression?: string;
    };
    id?: string;
    min?: number;
    max?: number;
    type?: string;
    fill?: BloxFill;
    font?: BloxFont;
    value?: number;
    stroke?: BloxStroke;
    banner?: BloxBanner;
    groupby?: string;
    inputId?: string;
    deviceId?: string;
    expression?: string;
}
