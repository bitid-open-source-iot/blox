export class BloxBanner {

    public size: number = 14
    public color: string = '#FFFFFF'
    public family: string = 'Arial'
    public opacity: number = 100
    public baseline: string = 'center'
    public alignment: string = 'center'

    constructor(args?: BLOX_BANNER) {
        Object.assign(this, args)
    }

}

export interface BLOX_BANNER {
    size?: number
    color?: string
    family?: string
    opacity?: number
    baseline?: string
    alignment?: string
}
