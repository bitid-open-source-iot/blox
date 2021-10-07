import { BloxFont, BLOX_FONT } from './blox-font';

export class BloxTableColumn {
    
    public key?: string = '';
    public font?: BloxFont = new BloxFont();
    public value?: string | number = '';

    constructor(args?: BLOX_TABLE_COLUMN) {
        if (typeof(args) != 'undefined' && args != null) {
            if (typeof(args.key) != 'undefined' && args.key != null) {
                this.key = args.key;
            };
            if (typeof(args.font) != 'undefined' && args.font != null) {
                this.font = new BloxFont(args.font);
            };
            if (typeof(args.value) != 'undefined' && args.value != null) {
                this.value = args.value;
            };
        }
    }

}

export interface BLOX_TABLE_COLUMN {
    key?: string;
    font?: BloxFont;
    value?: string | number;
}
