export class BloxPieSlice {

    public keys = <{
        value?: string;
    }>{
            value: null
        };
    public color?: string = '#FFFFFF';
    public value?: number = 0;
    public opacity?: number = 100;

    constructor(args?: BLOX_PIE_SLICE) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.keys) != 'undefined' && args.keys != null) {
                if (typeof (args.keys.value) != 'undefined' && args.keys.value != null) {
                    this.keys.value = args.keys.value;
                }
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
    keys?: {
        value?: string;
    };
    color?: string;
    value?: number;
    opacity?: number;
}
