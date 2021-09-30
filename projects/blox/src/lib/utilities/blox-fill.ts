export class BloxFill {

    public color = '#000000';
    public opacity = 100;

    constructor(bloxfill?: BLOXFILL) {
        if (typeof(bloxfill) != 'undefined' && bloxfill != null) {
            if (typeof(bloxfill.color) != 'undefined' && bloxfill.color != null) {
                this.color = bloxfill.color;
            }
            if (typeof(bloxfill.opacity) != 'undefined' && bloxfill.opacity != null) {
                this.opacity = bloxfill.opacity;
            }
        }
    }

}

export interface BLOXFILL {
    'color'?: string;
    'opacity'?: number;
}
