export class BloxFilter {

    public call = <{
        result: {
            value?: string;
            label?: string;
        };
        url?: string;
        body?: string | Object;
        data?: any;
        method?: 'PUT' | 'POST';
        enabled?: boolean;
        endpoint?: string;
    }>{
            result: {
                value: '',
                label: ''
            },
            url: '',
            body: {},
            data: null,
            method: 'POST',
            enabled: false,
            endpoint: ''
        };
    public events = <{
        change?: null | string | Function;
    }>{
            change: null
        };
        public key: string = '';
        public type: 'color' | 'date' | 'datetime-local' | 'email' | 'label' | 'number' | 'password' | 'select' | 'select-multiple' | 'text' | 'time' | 'url' = 'text';
        public name: string = '';
        public value: string = '';
        public options: any[] = [];
        public fieldId: string = '';
        public required: boolean = false;
        public placeholder: string = '';

    constructor(args?: BLOX_FILTER) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.call) != 'undefined' && args.call != null) {
                if (typeof (args.call.result) != 'undefined' && args.call.result != null) {
                    if (typeof (args.call.result.value) != 'undefined' && args.call.result.value != null) {
                        this.call.result.value = args.call.result.value;
                    }
                    if (typeof (args.call.result.label) != 'undefined' && args.call.result.label != null) {
                        this.call.result.label = args.call.result.label;
                    }
                }
                if (typeof (args.call.url) != 'undefined' && args.call.url != null) {
                    this.call.url = args.call.url;
                }
                if (typeof (args.call.body) != 'undefined' && args.call.body != null) {
                    this.call.body = args.call.body;
                }
                if (typeof (args.call.data) != 'undefined' && args.call.data != null) {
                    this.call.data = args.call.data;
                }
                if (typeof (args.call.method) != 'undefined' && args.call.method != null) {
                    this.call.method = args.call.method;
                }
                if (typeof (args.call.enabled) != 'undefined' && args.call.enabled != null) {
                    this.call.enabled = args.call.enabled;
                }
                if (typeof (args.call.endpoint) != 'undefined' && args.call.endpoint != null) {
                    this.call.endpoint = args.call.endpoint;
                }
            }
            if (typeof (args.events) != 'undefined' && args.events != null) {
                if (typeof (args.events.change) != 'undefined' && args.events.change != null) {
                    this.events.change = args.events.change;
                }
            }
            if (typeof (args.key) != 'undefined' && args.key != null) {
                this.key = args.key;
            }
            if (typeof (args.type) != 'undefined' && args.type != null) {
                this.type = args.type;
            }
            if (typeof (args.name) != 'undefined' && args.name != null) {
                this.name = args.name;
            }
            if (typeof (args.value) != 'undefined' && args.value != null) {
                this.value = args.value;
            }
            if (typeof (args.fieldId) != 'undefined' && args.fieldId != null) {
                this.fieldId = args.fieldId;
            }
            if (typeof (args.options) != 'undefined' && args.options != null) {
                this.options = args.options;
            }
            if (typeof (args.required) != 'undefined' && args.required != null) {
                this.required = args.required;
            }
            if (typeof (args.placeholder) != 'undefined' && args.placeholder != null) {
                this.placeholder = args.placeholder;
            }
        }
    }
}

interface BLOX_FILTER {
    call?: {
        result: {
            value?: string;
            label?: string;
        };
        url?: string;
        body?: string | Object;
        data?: any;
        method?: 'PUT' | 'POST';
        enabled?: boolean;
        endpoint?: string;
    };
    events?: {
        change?: null | string | Function;
    };
    key?: string;
    type?: 'color' | 'date' | 'datetime-local' | 'email' | 'label' | 'number' | 'password' | 'select' | 'select-multiple' | 'text' | 'time' | 'url';
    name?: string;
    value?: string;
    options?: any[];
    fieldId?: string;
    required?: boolean;
    placeholder?: string;
}