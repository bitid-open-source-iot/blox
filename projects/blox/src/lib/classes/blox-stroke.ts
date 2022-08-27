export class BloxStroke {

    public width: number = 0
    public style: string = 'solid'
    public color: string = '#000000'
    public opacity: number = 100

    constructor(args?: BLOXSTROKE) {
        Object.assign(this, args)
    }

}

export interface BLOXSTROKE {
    width?: number
    style?: string
    color?: string
    opacity?: number
}
