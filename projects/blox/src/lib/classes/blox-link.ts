export class BloxLink {

    readonly type: string = 'link';

    public href?: string = '';
    public value?: string | number = '';
    public target?: '_top' | '_self' | '_blank' | '_parent' = '_blank';

    constructor(args?: BLOX_LINK) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.href) != 'undefined' && args.href != null) {
                this.href = args.href;
            }
            if (typeof (args.value) != 'undefined' && args.value != null) {
                this.value = args.value;
            }
            if (typeof (args.target) != 'undefined' && args.target != null) {
                this.target = args.target;
            }
        }
    }

}

export interface BLOX_LINK {
    href?: string;
    value?: string | number;
    target?: '_top' | '_self' | '_blank' | '_parent';
}
