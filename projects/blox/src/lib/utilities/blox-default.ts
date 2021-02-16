import { BloxFill, BLOXFILL } from './blox-fill';
import { BloxFont, BLOXFONT } from './blox-font';
import { BloxStroke, BLOXSTROKE } from './blox-stroke';
import { BloxBanner, BLOXBANNER } from './blox-banner';

export class BloxDefault {

    public fill?: BLOXFILL = new BloxFill();
    public font?: BLOXFONT = new BloxFont();
    public stroke?: BLOXSTROKE = new BloxStroke();
    public banner?: BLOXBANNER = new BloxBanner();

    constructor(bloxdefault?: BLOXDEFAULT) {
        if (typeof(bloxdefault) != 'undefined' && bloxdefault !== null) {
            if (typeof(bloxdefault.fill) != 'undefined' && bloxdefault.fill !== null) {
                this.fill = new BloxFill(bloxdefault.fill);
            }
            if (typeof(bloxdefault.font) != 'undefined' && bloxdefault.font !== null) {
                this.font = new BloxFont(bloxdefault.font);
            }
            if (typeof(bloxdefault.stroke) != 'undefined' && bloxdefault.stroke !== null) {
                this.stroke = new BloxStroke(bloxdefault.stroke);
            }
            if (typeof(bloxdefault.banner) != 'undefined' && bloxdefault.banner !== null) {
                this.banner = new BloxBanner(bloxdefault.banner);
            }
        }
    }

}

export interface BLOXDEFAULT {
    'fill'?: BLOXFILL;
    'font'?: BLOXFONT;
    'stroke'?: BLOXSTROKE;
    'banner'?: BLOXBANNER;
}
