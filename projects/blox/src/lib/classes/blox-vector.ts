export class BloxVector {

    readonly type: string = 'vector'

    public src: string = ''

    constructor(args?: BLOX_VECTOR) {
        Object.assign(this, args)
    }

}

export interface BLOX_VECTOR {
    src?: string
}
