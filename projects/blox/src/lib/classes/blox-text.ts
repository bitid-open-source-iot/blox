export class BloxText {

    readonly type: string = 'text';

    public value?: string | number = '';

    constructor(args?: BLOX_TEXT) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.value) != 'undefined' && args.value != null) {
                this.value = args.value;
            }
        }
    }

}

export interface BLOX_TEXT {
    value?: string | number;
}
