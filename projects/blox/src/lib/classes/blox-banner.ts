export class BloxBanner {

    public size = 14;
    public color = '#FFFFFF';
    public family = 'Arial';
    public opacity = 100;
    public baseline = 'center';
    public alignment = 'center';

    constructor(args?: BLOX_BANNER) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.size) != 'undefined' && args.size != null) {
                this.size = args.size;
            }
            if (typeof (args.color) != 'undefined' && args.color != null) {
                this.color = args.color;
            }
            if (typeof (args.opacity) != 'undefined' && args.opacity != null) {
                this.opacity = args.opacity;
            }
            if (typeof (args.family) != 'undefined' && args.family != null) {
                this.family = args.family;
            }
            if (typeof (args.baseline) != 'undefined' && args.baseline != null) {
                this.baseline = args.baseline;
            }
            if (typeof (args.alignment) != 'undefined' && args.alignment != null) {
                this.alignment = args.alignment;
            }
        }
    }

}

export interface BLOX_BANNER {
    'size'?: number;
    'color'?: string;
    'family'?: string;
    'opacity'?: number;
    'baseline'?: string;
    'alignment'?: string;
}
