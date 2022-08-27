import { BloxMap } from './blox-map'
import { BloxText } from './blox-text'
import { BloxTable } from './blox-table'
import { BloxChart } from './blox-chart'
import { BloxValue } from './blox-value'
import { BloxBlank } from './blox-blank'
import { BloxGauge } from './blox-gauge'
import { BloxVector } from './blox-vector'

export function BloxParse(array: any[]) {
    return array.filter((item: any) => typeof(item) !== 'undefined' && item !== null).map(item => {
        switch (item.type) {
            case('map'):
                item = new BloxMap(item)
                break
            case('text'):
                item = new BloxText(item)
                break
            case('chart'):
                item = new BloxChart(item)
                break
            case('value'):
                item = new BloxValue(item)
                break
            case('blank'):
                item = new BloxBlank(item)
                break
            case('table'):
                item = new BloxTable(item)
                break
            case('gauge'):
                item = new BloxGauge(item)
                break
            case('vector'):
                item = new BloxVector(item)
                break
        }
        return item
    })
}

export function BloxUnparse(array: any[]) {
    return JSON.parse(JSON.stringify(BloxParse(array)))
}
