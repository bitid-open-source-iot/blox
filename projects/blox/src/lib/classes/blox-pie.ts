import { BloxPieSlice, BLOX_PIE_SLICE } from "./blox-pie-slice"

export class BloxPie {

    readonly type: string = 'pie'

    public keys = <{
        value: string
        label: string
    }>{
            value: '',
            label: ''
        }
    public slices: BloxPieSlice[] = []
    public connector: Object = new Object()

    constructor(args?: BLOX_PIE) {
        if (typeof (args) !== 'undefined' && args !== null) {
            if (typeof (args.keys) !== 'undefined' && args.keys !== null) {
                if (typeof (args.keys.value) !== 'undefined' && args.keys.value !== null) this.keys.value = args.keys.value
                if (typeof (args.keys.label) !== 'undefined' && args.keys.label !== null) this.keys.label = args.keys.label
            }
            if (typeof (args.slices) !== 'undefined' && args.slices !== null) this.slices = args.slices.map((o: BLOX_PIE_SLICE) => new BloxPieSlice(o))
            if (typeof (args.connector) !== 'undefined' && args.connector !== null) this.connector = args.connector
        }
    }

}

export interface BLOX_PIE {
    keys: {
        value: string
        label: string
    }
    slices: BloxPieSlice[] | BLOX_PIE_SLICE[]
    connector: Object
}
