export class BloxValue {

    readonly type: string = 'value';
    
    public keys = <{
        value?: string;
    }>{
            value: null
        };
    public value?: string | number | boolean;
    public connector?: Object = new Object();

    constructor(args?: BLOX_VALUE) {
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

export interface BLOX_VALUE {
    keys?: {
        value?: string;
    };
    value?: string | number | boolean;
    connector?: Object;
}
