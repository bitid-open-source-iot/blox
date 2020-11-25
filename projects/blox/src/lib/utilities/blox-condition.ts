import { ObjectId } from './id';
import { BloxFill, BLOXFILL } from './blox-fill';
import { BloxFont, BLOXFONT } from './blox-font';
import { BloxStroke, BLOXSTROKE } from './blox-stroke';
import { BloxBanner, BLOXBANNER } from './blox-banner';

export class BloxbloxCondition {

    public id?: string =  ObjectId();
    public type?: string;
    public fill?: BLOXFILL = new BloxFill();
    public font?: BLOXFONT = new BloxFont();
    public stroke?: BLOXSTROKE = new BloxStroke();
    public banner?: BLOXBANNER = new BloxBanner();
    public analog?: any = {
        'min': 0,
        'max': 0
    };
    public digital?: any = {
        'value': 0
    };
    public inputId?: string;
    public deviceId?: string;
    
    constructor(bloxcondition?: BLOXCONDITION) {
        if (typeof(bloxcondition) != 'undefined' && bloxcondition !== null) {
            if (typeof(bloxcondition.id) != 'undefined' && bloxcondition.id !== null) {
                this.id = bloxcondition.id;
            };
            if (typeof(bloxcondition.fill) != 'undefined' && bloxcondition.fill !== null) {
                this.fill = new BloxFill(bloxcondition.fill);
            };
            if (typeof(bloxcondition.font) != 'undefined' && bloxcondition.font !== null) {
                this.font = new BloxFont(bloxcondition.font);
            };
            if (typeof(bloxcondition.type) != 'undefined' && bloxcondition.type !== null) {
                this.type = bloxcondition.type;
            };
            if (typeof(bloxcondition.stroke) != 'undefined' && bloxcondition.stroke !== null) {
                this.stroke = new BloxStroke(bloxcondition.stroke);
            };
            if (typeof(bloxcondition.banner) != 'undefined' && bloxcondition.banner !== null) {
                this.banner = new BloxBanner(bloxcondition.banner);
            };
            if (typeof(bloxcondition.analog) != 'undefined' && bloxcondition.analog !== null) {
                if (typeof(bloxcondition.analog.min) != 'undefined' && bloxcondition.analog.min !== null) {
                    this.analog.min = bloxcondition.analog.min;
                };
                if (typeof(bloxcondition.analog.max) != 'undefined' && bloxcondition.analog.max !== null) {
                    this.analog.max = bloxcondition.analog.max;
                };
            };
            if (typeof(bloxcondition.digital) != 'undefined' && bloxcondition.digital !== null) {
                if (typeof(bloxcondition.digital.value) != 'undefined' && bloxcondition.digital.value !== null) {
                    this.digital.value = bloxcondition.digital.value;
                };
            };
            if (typeof(bloxcondition.inputId) != 'undefined' && bloxcondition.inputId !== null) {
                this.inputId = bloxcondition.inputId;
            };
            if (typeof(bloxcondition.deviceId) != 'undefined' && bloxcondition.deviceId !== null) {
                this.deviceId = bloxcondition.deviceId;
            };
        };
    };

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
    'deviceId': string;
}