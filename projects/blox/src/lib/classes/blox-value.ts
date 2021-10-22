export class BloxValue {

    readonly type: string = 'value';
    
    public key?: string;
    public value?: string | number | boolean;
    public connector?: Object = new Object();

    constructor(args?: BLOX_VALUE) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.key) != 'undefined' && args.key != null) {
                this.key = args.key;
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
    key?: string;
    value?: string | number | boolean;
    connector?: Object;
}
