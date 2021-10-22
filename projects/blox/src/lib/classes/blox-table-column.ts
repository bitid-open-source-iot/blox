import { ObjectId } from './id';
import { BloxFont } from './blox-font';

export class BloxTableColumn {
    
    public keys = <{
        value?: string;
    }>{
            value: null
        };
    public id?: string = ObjectId();
    public font?: BloxFont = new BloxFont();
    public value?: string | number = '';

    constructor(args?: BLOX_TABLE_COLUMN) {
        if (typeof(args) != 'undefined' && args != null) {
            if (typeof(args.keys) != 'undefined' && args.keys != null) {
                if (typeof(args.keys.value) != 'undefined' && args.keys.value != null) {
                    this.keys.value = args.keys.value;
                };
            };
            if (typeof(args.id) != 'undefined' && args.id != null) {
                this.id = args.id;
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
    keys?: {
        value?: string;
    };
    id?: string;
    font?: BloxFont;
    value?: string | number;
}
