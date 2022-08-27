export class BloxLink {

    readonly type: string = 'link'

    public href: string = ''
    public value: string | number = ''
    public target: '_top' | '_self' | '_blank' | '_parent' = '_blank'

    constructor(args?: BLOX_LINK) {
        Object.assign(this, args)
    }

}

export interface BLOX_LINK {
    href?: string
    value?: string | number
    target?: '_top' | '_self' | '_blank' | '_parent'
}
