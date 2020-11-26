import { BloxFill, BLOXFILL } from './blox-fill';
import { BloxFont, BLOXFONT } from './blox-font';
import { BloxStroke, BLOXSTROKE } from './blox-stroke';
import { BloxBanner, BLOXBANNER } from './blox-banner';
import { BloxDefault, BLOXDEFAULT } from './blox-default';
import { BloxCondition, BLOXCONDITION } from './blox-condition';

/* --- STYLE --- */
export class BloxStyle {

    public fill?: BLOXFILL = new BloxFill();
    public font?: BLOXFONT = new BloxFont();
    public stroke?: BLOXSTROKE = new BloxStroke();
    public banner?: BLOXBANNER = new BloxBanner();
    public default?: BLOXDEFAULT = new BloxDefault();
    public conditions?: BLOXCONDITION[] = [];

    constructor(style?: BLOXSTYLE) {
        if (typeof(style) != 'undefined' && style !== null) {
            this.default = new BloxDefault(style);
            if (Array.isArray(style.conditions)) {
                this.conditions = <BLOXCONDITION[]>style.conditions.map(condition => new BloxCondition(condition));
            };
            if (typeof(style.fill) != 'undefined' && style.fill !== null) {
                this.fill = new BloxFill(style.fill);
            };
            if (typeof(style.font) != 'undefined' && style.font !== null) {
                this.font = new BloxFont(style.font);
            };
            if (typeof(style.stroke) != 'undefined' && style.stroke !== null) {
                this.stroke = new BloxStroke(style.stroke);
            };
            if (typeof(style.banner) != 'undefined' && style.banner !== null) {
                this.banner = new BloxBanner(style.banner);
            };
        };
    };

}

export interface BLOXSTYLE {
    'fill'?: BLOXFILL;
    'font'?: BLOXFONT;
    'stroke'?: BLOXSTROKE;
    'banner'?: BLOXBANNER;
    'default'?: BLOXDEFAULT;
    'conditions'?: BLOXCONDITION[];
}