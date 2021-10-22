export class BloxIframe {

    readonly type: string = 'iframe';

    public keys = <{
        value?: string;
    }>{
            value: null
        };
    public value?: string;
    public connector?: Object = new Object();

    constructor(args?: BLOX_IFRAME) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.keys) != 'undefined' && args.keys != null) {
                if (typeof (args.keys.value) != 'undefined' && args.keys.value != null) {
                    this.keys.value = args.keys.value;
                }
            }
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
    keys?: {
        value?: string;
    };
    value?: string;
    connector?: Object;
}
