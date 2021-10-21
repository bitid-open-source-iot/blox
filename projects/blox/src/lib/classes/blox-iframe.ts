export class BloxIframe {

    readonly type: string = 'iframe';

    public value?: string;
    public connector?: Object = new Object();

    constructor(args?: BLOX_IFRAME) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.value) != 'undefined' && args.value != null) {
                this.value = args.value;
            }
            if (typeof (args.connector) != 'undefined' && args.connector != null) {
                this.connector = args.connector;
            }
        }
    }

}

export interface BLOX_IFRAME {
    value?: string;
    connector?: Object;
}
