import { ObjectId } from './id';

export class BloxGaugeHand {

    public keys = <{
        value?: string;
    }>{
            value: null
        };
    public type?: 'clock' = 'clock';
    public label?: string = '';
    public color?: string = '#000000';
    public value?: number = 0;
    public handId?: string = ObjectId();
    public opacity?: number = 100;

    constructor(args?: BLOX_GAUGE_HAND) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.keys) != 'undefined' && args.keys != null) {
                if (typeof (args.keys.value) != 'undefined' && args.keys.value != null) {
                    this.keys.value = args.keys.value;
                };
            };
            if (typeof (args.type) != 'undefined' && args.type != null) {
                this.type = args.type;
            };
            if (typeof (args.label) != 'undefined' && args.label != null) {
                this.label = args.label;
            };
            if (typeof (args.color) != 'undefined' && args.color != null) {
                this.color = args.color;
            };
            if (typeof (args.value) != 'undefined' && args.value != null) {
                this.value = args.value;
            };
            if (typeof (args.handId) != 'undefined' && args.handId != null) {
                this.handId = args.handId;
            };
            if (typeof (args.opacity) != 'undefined' && args.opacity != null) {
                this.opacity = args.opacity;
            };
        };
    }

}

export interface BLOX_GAUGE_HAND {
    keys?: {
        value?: string;
    };
    type?: 'clock';
    label?: string;
    color?: string;
    value?: number;
    handId?: string;
    opacity?: number;
}