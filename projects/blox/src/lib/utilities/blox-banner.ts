export class BloxBanner {

    public size: number = 14;
    public color: string = '#FFFFFF';
    public family: string = 'Arial';
    public opacity: number = 100;
    public vertical: string = 'center';
    public horizontal: string = 'center';

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
            if (typeof (bloxbanner.vertical) != 'undefined' && bloxbanner.vertical !== null) {
                this.vertical = bloxbanner.vertical;
            };
            if (typeof (bloxbanner.horizontal) != 'undefined' && bloxbanner.horizontal !== null) {
                this.horizontal = bloxbanner.horizontal;
            };
        };
    };

}

export interface BLOXBANNER {
    'size'?: number;
    'color'?: string;
    'family'?: string;
    'opacity'?: number;
    'vertical'?: string;
    'horizontal'?: string;
}