export class BloxPieSlice {

    public color: string = '#FFFFFF'
    public label: string = ''
    public value: number = 0
    public opacity: number = 100

    constructor(args?: BLOX_PIE_SLICE) {
        Object.assign(this, args)
    }

}

export interface BLOX_PIE_SLICE {
    color?: string
    label?: string
    value?: number
    opacity?: number
}
