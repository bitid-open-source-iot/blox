export class BloxFont {

    public size?: number = 14;
    public color?: string = '#000000';
    public family?: string = 'Arial';
    public opacity?: number = 100;
    public vertical?: string = 'center';
    public horizontal?: string = 'center';

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
            if (typeof(bloxfont.vertical) != 'undefined' && bloxfont.vertical !== null) {
                this.vertical = bloxfont.vertical;
            };
            if (typeof(bloxfont.horizontal) != 'undefined' && bloxfont.horizontal !== null) {
                this.horizontal = bloxfont.horizontal;
            };
        };
    };

}

export interface BLOXFONT {
    'size'?: number;
    'color'?: string;
    'family'?: string;
    'opacity'?: number;
    'vertical'?: string;
    'horizontal'?: string;
}