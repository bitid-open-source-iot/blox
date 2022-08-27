export class BloxText {

    readonly type: string = 'text'

    public value: string | number = ''

    constructor(args?: BLOX_TEXT) {
        Object.assign(this, args)
    }

}

export interface BLOX_TEXT {
    value?: string | number
}
