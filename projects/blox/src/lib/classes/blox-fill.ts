export class BloxFill {

    public color: string = '#000000'
    public opacity: number = 100

    constructor(args?: BLOX_FILL) {
        Object.assign(this, args)
    }

}

export interface BLOX_FILL {
    color: string
    opacity: number
}
