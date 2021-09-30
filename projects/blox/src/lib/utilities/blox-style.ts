import { ObjectId } from './id';
import { BloxFill, BLOXFILL } from './blox-fill';
import { BloxFont, BLOXFONT } from './blox-font';
import { BloxStroke, BLOXSTROKE } from './blox-stroke';
import { BloxBanner, BLOXBANNER } from './blox-banner';
import { BloxDefault, BLOXDEFAULT } from './blox-default';
import { BloxCondition, BLOXCONDITION } from './blox-condition';

/* --- STYLE --- */
export class BloxStyle {

    public id?: string = ObjectId();
    public fill?: BLOXFILL = new BloxFill();
    public font?: BLOXFONT = new BloxFont();
    public label = '';
    public width = 0;
    public stroke?: BLOXSTROKE = new BloxStroke();
    public banner?: BLOXBANNER = new BloxBanner();
    public default?: BLOXDEFAULT = new BloxDefault();
    public position = 0;
    public conditions?: BLOXCONDITION[] = [];

    constructor(bloxstyle?: BLOXSTYLE) {
        if (typeof(bloxstyle) != 'undefined' && bloxstyle != null) {
            this.default = new BloxDefault(bloxstyle);
            if (Array.isArray(bloxstyle.conditions)) {
                this.conditions = (bloxstyle.conditions.map(condition => new BloxCondition(condition)) as BLOXCONDITION[]);
            }
            if (typeof(bloxstyle.id) != 'undefined' && bloxstyle.id != null) {
                this.id = bloxstyle.id;
            }
            if (typeof(bloxstyle.fill) != 'undefined' && bloxstyle.fill != null) {
                this.fill = new BloxFill(bloxstyle.fill);
            }
            if (typeof(bloxstyle.font) != 'undefined' && bloxstyle.font != null) {
                this.font = new BloxFont(bloxstyle.font);
            }
            if (typeof(bloxstyle.label) != 'undefined' && bloxstyle.label != null) {
                this.label = bloxstyle.label;
            }
            if (typeof(bloxstyle.width) != 'undefined' && bloxstyle.width != null) {
                this.width = bloxstyle.width;
            }
            if (typeof(bloxstyle.stroke) != 'undefined' && bloxstyle.stroke != null) {
                this.stroke = new BloxStroke(bloxstyle.stroke);
            }
            if (typeof(bloxstyle.banner) != 'undefined' && bloxstyle.banner != null) {
                this.banner = new BloxBanner(bloxstyle.banner);
            }
            if (typeof(bloxstyle.position) != 'undefined' && bloxstyle.position != null) {
                this.position = bloxstyle.position;
            }
        }
    }

    public async restore() {
        if (typeof(this.default) != 'undefined' && this.default != null) {
            if (typeof(this.default.fill) != 'undefined' && this.default.fill != null) {
                this.fill = new BloxFill(this.default.fill);
            }
            if (typeof(this.default.font) != 'undefined' && this.default.font != null) {
                this.font = new BloxFont(this.default.font);
            }
            if (typeof(this.default.stroke) != 'undefined' && this.default.stroke != null) {
                this.stroke = new BloxStroke(this.default.stroke);
            }
            if (typeof(this.default.banner) != 'undefined' && this.default.banner != null) {
                this.banner = new BloxBanner(this.default.banner);
            }
        }
    }

}

export interface BLOXSTYLE {
    'id'?: string;
    'type'?: string;
    'fill'?: BLOXFILL;
    'font'?: BLOXFONT;
    'label'?: string;
    'width'?: number;
    'stroke'?: BLOXSTROKE;
    'banner'?: BLOXBANNER;
    'default'?: BLOXDEFAULT;
    'position'?: number;
    'conditions'?: BLOXCONDITION[];
}
