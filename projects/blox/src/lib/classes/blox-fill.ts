export class BloxFill {

    public color: string = '#000000'
    public opacity: number = 100

    constructor(bloxfill?: BLOX_FILL) {
        if (typeof(bloxfill) !== 'undefined' && bloxfill !== null) {
            if (typeof(bloxfill.color) !== 'undefined' && bloxfill.color !== null) this.color = bloxfill.color
            if (typeof(bloxfill.opacity) !== 'undefined' && bloxfill.opacity !== null) this.opacity = bloxfill.opacity
        }
    }

}

export interface BLOX_FILL {
    color?: string
    opacity?: number
}
