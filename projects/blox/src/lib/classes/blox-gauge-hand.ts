import { ObjectId } from './id';

export class BloxGaugeHand {

    public id: string = ObjectId();
    public color: string;
    public value: number;

    constructor(args?: BLOX_GAUGE_HAND) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.id) != 'undefined' && args.id != null) {
                this.id = args.id;
            };
            if (typeof (args.color) != 'undefined' && args.color != null) {
                this.color = args.color;
            };
            if (typeof (args.value) != 'undefined' && args.value != null) {
                this.value = args.value;
            };
        };
    }

}

export interface BLOX_GAUGE_HAND {
    id?: string;
    color?: string;
    value?: number;
}