export class BloxValue {

    readonly type: string = 'value'
    
    public keys = <{
        value: string
    }>{
            value: ''
        }
    public value: string | number | boolean = ''
    public connector: Object = new Object()

    constructor(args?: BLOX_VALUE) {
        Object.assign(this, args)
    }

}

export interface BLOX_VALUE {
    keys?: {
        value?: string
    }
    value?: string | number | boolean
    connector?: Object
}
