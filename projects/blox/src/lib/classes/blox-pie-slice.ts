export class BloxPieSlice {

    public color?: string = '#FFFFFF';
    public label?: string = null;
    public value?: number = 0;
    public opacity?: number = 100;

    constructor(args?: BLOX_PIE_SLICE) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.color) != 'undefined' && args.color != null) {
                this.color = args.color;
            }
            if (typeof (args.label) != 'undefined' && args.label != null) {
                this.label = args.label;
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
    color?: string;
    label?: string;
    value?: number;
    opacity?: number;
}
