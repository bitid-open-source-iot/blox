export class BloxVector {

    readonly type: string = 'vector';

    public src?: string = '';

    constructor(args?: BLOX_VECTOR) {
        if (typeof(args) != 'undefined' && args != null) {
            if (typeof(args.src) != 'undefined' && args.src != null) {
                this.src = args.src;
            }
        }
    }

}

export interface BLOX_VECTOR {
    src?: string;
}
