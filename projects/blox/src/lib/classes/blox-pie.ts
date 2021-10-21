import { BloxPieSlice } from "./blox-pie-slice";

export class BloxPie {

    readonly type: string = 'pie';
    
    public slices?: BloxPieSlice[] = [];
    public connector?: Object = new Object();

    constructor(args?: BLOX_PIE) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.slices) != 'undefined' && args.slices != null) {
                this.slices = args.slices.map(o => new BloxPieSlice(o));
            }
            if (typeof (args.connector) != 'undefined' && args.connector != null) {
                this.connector = args.connector;
            }
        }
    }

}

export interface BLOX_PIE {
    slices?: BloxPieSlice[];
    connector?: Object;
}
