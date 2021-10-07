export class BloxPieSlice {

    public key?: string = '';
    public color?: string = '#FFFFFF';
    public value?: number = 0;
    public opacity?: number = 100;

    constructor(args?: BLOX_PIE_SLICE) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.key) != 'undefined' && args.key != null) {
                this.key = args.key;
            }
            if (typeof (args.color) != 'undefined' && args.color != null) {
                this.color = args.color;
            }
            if (typeof (args.value) != 'undefined' && args.value != null) {
                this.value = args.value;
            }
            if (typeof (args.opacity) != 'undefined' && args.opacity != null) {
                this.opacity = args.opacity;
            }
        }
    }

}

export interface BLOX_PIE_SLICE {
    key?: string;
    color?: string;
    value?: number;
    opacity?: number;
}
