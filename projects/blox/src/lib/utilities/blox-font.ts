export class BloxFont {

    public size?: number = 14;
    public color?: string = '#000000';
    public family?: string = 'Arial';
    public opacity?: number = 100;
    public baseline?: string = 'center';
    public alignment?: string = 'center';

    constructor(bloxfont?: BLOXFONT) {
        if (typeof(bloxfont) != 'undefined' && bloxfont !== null) {
            if (typeof(bloxfont.size) != 'undefined' && bloxfont.size !== null) {
                this.size = bloxfont.size;
            };
            if (typeof(bloxfont.family) != 'undefined' && bloxfont.family !== null) {
                this.family = bloxfont.family;
            };
            if (typeof(bloxfont.color) != 'undefined' && bloxfont.color !== null) {
                this.color = bloxfont.color;
            };
            if (typeof(bloxfont.opacity) != 'undefined' && bloxfont.opacity !== null) {
                this.opacity = bloxfont.opacity;
            };
            if (typeof(bloxfont.baseline) != 'undefined' && bloxfont.baseline !== null) {
                this.baseline = bloxfont.baseline;
            };
            if (typeof(bloxfont.alignment) != 'undefined' && bloxfont.alignment !== null) {
                this.alignment = bloxfont.alignment;
            };
        };
    };

}

export interface BLOXFONT {
    'size'?: number;
    'color'?: string;
    'family'?: string;
    'opacity'?: number;
    'baseline'?: string;
    'alignment'?: string;
}