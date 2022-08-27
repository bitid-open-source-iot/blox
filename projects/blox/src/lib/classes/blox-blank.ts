export class BloxBlank {

    readonly type: string = 'blank'

    constructor(args?: BLOX_BLANK) {
        Object.assign(this, args)
    }

}

export interface BLOX_BLANK { }
