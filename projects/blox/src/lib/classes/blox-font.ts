export class BloxFont {

    public size: number = 14
    public color: string = '#000000'
    public family: string = 'Arial'
    public opacity: number = 100
    public baseline: string = 'center'
    public alignment: string = 'center'

    constructor(args?: BLOX_FONT) {
        Object.assign(this, args)
    }

}

export interface BLOX_FONT {
    size?: number
    color?: string
    family?: string
    opacity?: number
    baseline?: string
    alignment?: string
}
