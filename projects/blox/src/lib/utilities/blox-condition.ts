import { ObjectId } from './id';
import { BloxFill, BLOXFILL } from './blox-fill';
import { BloxFont, BLOXFONT } from './blox-font';
import { BloxStroke, BLOXSTROKE } from './blox-stroke';
import { BloxBanner, BLOXBANNER } from './blox-banner';

export class BloxCondition {

    public id?: string =  ObjectId();
    public type?: string;
    public fill?: BLOXFILL = new BloxFill();
    public font?: BLOXFONT = new BloxFont();
    public stroke?: BLOXSTROKE = new BloxStroke();
    public banner?: BLOXBANNER = new BloxBanner();
    public analog?: any = {
        min: 0,
        max: 0
    };
    public digital?: any = {
        value: 0
    };
    public inputId?: string;
    public handler?: Function;
    public deviceId?: string;

    constructor(args?: BLOXCONDITION) {
        if (typeof(args) != 'undefined' && args !== null) {
            if (typeof(args.id) != 'undefined' && args.id !== null) {
                this.id = args.id;
            }
            if (typeof(args.fill) != 'undefined' && args.fill !== null) {
                this.fill = new BloxFill(args.fill);
            }
            if (typeof(args.font) != 'undefined' && args.font !== null) {
                this.font = new BloxFont(args.font);
            }
            if (typeof(args.type) != 'undefined' && args.type !== null) {
                this.type = args.type;
            }
            if (typeof(args.stroke) != 'undefined' && args.stroke !== null) {
                this.stroke = new BloxStroke(args.stroke);
            }
            if (typeof(args.banner) != 'undefined' && args.banner !== null) {
                this.banner = new BloxBanner(args.banner);
            }
            if (typeof(args.analog) != 'undefined' && args.analog !== null) {
                if (typeof(args.analog.min) != 'undefined' && args.analog.min !== null) {
                    this.analog.min = args.analog.min;
                }
                if (typeof(args.analog.max) != 'undefined' && args.analog.max !== null) {
                    this.analog.max = args.analog.max;
                }
            }
            if (typeof(args.digital) != 'undefined' && args.digital !== null) {
                if (typeof(args.digital.value) != 'undefined' && args.digital.value !== null) {
                    this.digital.value = args.digital.value;
                }
            }
            if (typeof(args.inputId) != 'undefined' && args.inputId !== null) {
                this.inputId = args.inputId;
            }
            if (typeof(args.handler) != 'undefined' && args.handler !== null) {
                this.handler = args.handler;
            }
            if (typeof(args.deviceId) != 'undefined' && args.deviceId !== null) {
                this.deviceId = args.deviceId;
            }
        }
    }

}

export interface BLOXCONDITION {
    'fill'?: BLOXFILL;
    'font'?: BLOXFONT;
    'stroke'?: BLOXSTROKE;
    'banner'?: BLOXBANNER;
    'analog'?: {
        'min': number;
        'max': number;
    };
    'digital'?: {
        'value': number;
    };
    'id': string;
    'type': string;
    'inputId': string;
    'handler'?: Function;
    'deviceId': string;
}
