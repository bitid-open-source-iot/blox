export class BloxIframe {

    readonly type: string = 'iframe'

    public keys = <{
        value: string
    }>{
            value: ''
        }
    public value: string = ''
    public connector: Object = new Object()

    constructor(args?: BLOX_IFRAME) {
        Object.assign(this, args)
    }

}

export interface BLOX_IFRAME {
    keys?: {
        value?: string
    }
    value?: string
    connector?: Object
}
