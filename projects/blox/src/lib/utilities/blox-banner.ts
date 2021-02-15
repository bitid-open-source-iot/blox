export class BloxBanner {

    public size: number = 14;
    public color: string = '#FFFFFF';
    public family: string = 'Arial';
    public opacity: number = 100;
    public baseline: string = 'center';
    public alignment: string = 'center';

    constructor(bloxbanner?: BLOXBANNER) {
        if (typeof (bloxbanner) != 'undefined' && bloxbanner != null) {
            if (typeof (bloxbanner.size) != 'undefined' && bloxbanner.size !== null) {
                this.size = bloxbanner.size;
            };
            if (typeof (bloxbanner.color) != 'undefined' && bloxbanner.color !== null) {
                this.color = bloxbanner.color;
            };
            if (typeof (bloxbanner.opacity) != 'undefined' && bloxbanner.opacity !== null) {
                this.opacity = bloxbanner.opacity;
            };
            if (typeof (bloxbanner.family) != 'undefined' && bloxbanner.family !== null) {
                this.family = bloxbanner.family;
            };
            if (typeof (bloxbanner.baseline) != 'undefined' && bloxbanner.baseline !== null) {
                this.baseline = bloxbanner.baseline;
            };
            if (typeof (bloxbanner.alignment) != 'undefined' && bloxbanner.alignment !== null) {
                this.alignment = bloxbanner.alignment;
            };
        };
    };

}

export interface BLOXBANNER {
    'size'?: number;
    'color'?: string;
    'family'?: string;
    'opacity'?: number;
    'baseline'?: string;
    'alignment'?: string;
}