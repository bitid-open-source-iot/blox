export class BloxFilter {

    public call = <{
        result: {
            value?: string
            label?: string
        }
        url?: string
        body?: string | Object
        data?: any
        method?: 'PUT' | 'POST'
        enabled?: boolean
        endpoint?: string
    }>{
            result: {
                value: '',
                label: ''
            },
            url: 'https://',
            body: {},
            data: null,
            method: 'POST',
            enabled: false,
            endpoint: '/'
        }
    public events = <{
        change?: string | Function
    }>{
            change: undefined
        }
    public key: string = ''
    public type: 'color' | 'date' | 'datetime-local' | 'email' | 'label' | 'number' | 'password' | 'select' | 'select-multiple' | 'text' | 'time' | 'url' = 'text'
    public name: string = ''
    public value: string = ''
    public options: any[] = []
    public fieldId: string = ''
    public required: boolean = false
    public placeholder: string = ''

    constructor(args?: BLOX_FILTER) {
        Object.assign(this, args)
    }
}

interface BLOX_FILTER {
    call?: {
        result: {
            value?: string
            label?: string
        }
        url?: string
        body?: string | Object
        data?: any
        method?: 'PUT' | 'POST'
        enabled?: boolean
        endpoint?: string
    }
    events?: {
        change?: null | string | Function
    }
    key?: string
    type?: 'color' | 'date' | 'datetime-local' | 'email' | 'label' | 'number' | 'password' | 'select' | 'select-multiple' | 'text' | 'time' | 'url'
    name?: string
    value?: string
    options?: any[]
    fieldId?: string
    required?: boolean
    placeholder?: string
}