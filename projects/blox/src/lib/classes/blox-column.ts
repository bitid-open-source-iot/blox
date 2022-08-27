import { ObjectId } from './id'
import { BloxPie, BLOX_PIE } from './blox-pie'
import { BloxMap, BLOX_MAP } from './blox-map'
import { BloxLink, BLOX_LINK } from './blox-link'
import { BloxText, BLOX_TEXT } from './blox-text'
import { BloxBlank, BLOX_BLANK } from './blox-blank'
import { BloxChart, BLOX_CHART } from './blox-chart'
import { BloxGauge, BLOX_GAUGE } from './blox-gauge'
import { BloxTable, BLOX_TABLE } from './blox-table'
import { BloxValue, BLOX_VALUE } from './blox-value'
import { BloxStyle, BLOX_STYLE } from './blox-style'
import { BloxVector, BLOX_VECTOR } from './blox-vector'
import { BloxIframe, BLOX_IFRAME } from './blox-iframe'
import { BloxFilter, BLOX_FILTER } from './blox-filter'

export class BloxColumn extends BloxStyle {

    public pie: BloxPie = new BloxPie()
    public map: BloxMap = new BloxMap()
    public link: BloxLink = new BloxLink()
    public text: BloxText = new BloxText()
    public type: 'pie' | 'map' | 'link' | 'text' | 'value' | 'chart' | 'table' | 'blank' | 'gauge' | 'vector' | 'iframe' | 'filter' = 'blank'
    public value: BloxValue = new BloxValue()
    public chart: BloxChart = new BloxChart()
    public table: BloxTable = new BloxTable()
    public blank: BloxBlank = new BloxBlank()
    public gauge: BloxGauge = new BloxGauge()
    public vector: BloxVector = new BloxVector()
    public iframe: BloxIframe = new BloxIframe()
    public filter: BloxFilter = new BloxFilter()
    public loading: boolean = false
    public columnId: string = ObjectId()

    constructor(args?: BLOX_COLUMN) {
        super(args)
        if (typeof (args) !== 'undefined' && args !== null) {
            if (typeof (args.pie) !== 'undefined' && args.pie !== null) this.pie = new BloxPie(args.pie)
            if (typeof (args.map) !== 'undefined' && args.map !== null) this.map = new BloxMap(args.map)
            if (typeof (args.text) !== 'undefined' && args.text !== null) this.text = new BloxText(args.text)
            if (typeof (args.link) !== 'undefined' && args.link !== null) this.link = new BloxLink(args.link)
            if (typeof (args.type) !== 'undefined' && args.type !== null) this.type = args.type
            if (typeof (args.value) !== 'undefined' && args.value !== null) this.value = new BloxValue(args.value)
            if (typeof (args.chart) !== 'undefined' && args.chart !== null) this.chart = new BloxChart(args.chart)
            if (typeof (args.table) !== 'undefined' && args.table !== null) this.table = new BloxTable(args.table)
            if (typeof (args.blank) !== 'undefined' && args.blank !== null) this.blank = new BloxBlank(args.blank)
            if (typeof (args.gauge) !== 'undefined' && args.gauge !== null) this.gauge = new BloxGauge(args.gauge)
            if (typeof (args.vector) !== 'undefined' && args.vector !== null) this.vector = new BloxVector(args.vector)
            if (typeof (args.iframe) !== 'undefined' && args.iframe !== null) this.iframe = new BloxIframe(args.iframe)
            if (typeof (args.filter) !== 'undefined' && args.filter !== null) this.filter = new BloxFilter(args.filter)
            if (typeof (args.loading) !== 'undefined' && args.loading !== null) this.loading = args.loading
            if (typeof (args.columnId) !== 'undefined' && args.columnId !== null) this.columnId = args.columnId
        }
    }
}

export interface BLOX_COLUMN extends BLOX_STYLE {
    pie: BloxPie | BLOX_PIE
    map: BloxMap | BLOX_MAP
    link: BloxLink | BLOX_LINK
    text: BloxText | BLOX_TEXT
    type: 'pie' | 'map' | 'link' | 'text' | 'value' | 'chart' | 'table' | 'blank' | 'gauge' | 'vector' | 'iframe' | 'filter'
    value: BloxValue | BLOX_VALUE
    chart: BloxChart | BLOX_CHART
    table: BloxTable | BLOX_TABLE
    blank: BloxBlank | BLOX_BLANK
    gauge: BloxGauge | BLOX_GAUGE
    vector: BloxVector | BLOX_VECTOR
    iframe: BloxIframe | BLOX_IFRAME
    filter: BloxFilter | BLOX_FILTER
    loading: boolean
    columnId: string
}
