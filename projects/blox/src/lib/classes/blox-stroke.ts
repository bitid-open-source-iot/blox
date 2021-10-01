export class BloxStroke {

    public width = 0;
    public style = 'solid';
    public color = '#000000';
    public opacity = 100;

    constructor(bloxstroke?: BLOXSTROKE) {
        if (typeof(bloxstroke) != 'undefined' && bloxstroke != null) {
            if (typeof(bloxstroke.width) != 'undefined' && bloxstroke.width != null) {
                this.width = bloxstroke.width;
            }
            if (typeof(bloxstroke.style) != 'undefined' && bloxstroke.style != null) {
                this.style = bloxstroke.style;
            }
            if (typeof(bloxstroke.color) != 'undefined' && bloxstroke.color != null) {
                this.color = bloxstroke.color;
            }
            if (typeof(bloxstroke.opacity) != 'undefined' && bloxstroke.opacity != null) {
                this.opacity = bloxstroke.opacity;
            }
        }
    }

}

export interface BLOXSTROKE {
    width?: number;
    style?: string;
    color?: string;
    opacity?: number;
}
