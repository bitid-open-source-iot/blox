export class BloxMap {

    readonly type: string = 'map'

    constructor(args?: BLOX_MAP) {
        Object.assign(this, args)
    }

}

export interface BLOX_MAP { }
