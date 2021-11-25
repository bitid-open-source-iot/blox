import { BloxPie } from './blox-pie';
import { BloxMap } from './blox-map';
import { ObjectId } from './id';
import { BloxLink } from './blox-link';
import { BloxText } from './blox-text';
import { BloxBlank } from './blox-blank';
import { BloxChart } from './blox-chart';
import { BloxGauge } from './blox-gauge';
import { BloxTable } from './blox-table';
import { BloxValue } from './blox-value';
import { BloxVector } from './blox-vector';
import { BloxIframe } from './blox-iframe';
import { BloxStyle, BLOX_STYLE } from './blox-style';

export class BloxColumn extends BloxStyle {

    public pie?: BloxPie = new BloxPie();
    public map?: BloxMap = new BloxMap();
    public link?: BloxLink = new BloxLink();
    public text?: BloxText = new BloxText();
    public type?: 'pie' | 'map' | 'link' | 'text' | 'value' | 'chart' | 'table' | 'blank' | 'gauge' | 'vector' | 'iframe';
    public value?: BloxValue = new BloxValue();
    public chart?: BloxChart = new BloxChart();
    public table?: BloxTable = new BloxTable();
    public blank?: BloxBlank = new BloxBlank();
    public gauge?: BloxGauge = new BloxGauge();
    public vector?: BloxVector = new BloxVector();
    public iframe?: BloxIframe = new BloxIframe();
    public loading?: boolean = false;
    public columnId?: string = ObjectId();

    constructor(args?: BLOX_COLUMN) {
        super(args);
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.pie) != 'undefined' && args.pie != null) {
                this.pie = new BloxPie(args.pie);
            }
            if (typeof (args.map) != 'undefined' && args.map != null) {
                this.map = new BloxMap(args.map);
            }
            if (typeof (args.text) != 'undefined' && args.text != null) {
                this.text = new BloxText(args.text);
            }
            if (typeof (args.link) != 'undefined' && args.link != null) {
                this.link = new BloxLink(args.link);
            }
            if (typeof (args.type) != 'undefined' && args.type != null) {
                this.type = args.type;
            }
            if (typeof (args.value) != 'undefined' && args.value != null) {
                this.value = new BloxValue(args.value);
            }
            if (typeof (args.chart) != 'undefined' && args.chart != null) {
                this.chart = new BloxChart(args.chart);
            }
            if (typeof (args.table) != 'undefined' && args.table != null) {
                this.table = new BloxTable(args.table);
            }
            if (typeof (args.blank) != 'undefined' && args.blank != null) {
                this.blank = new BloxBlank(args.blank);
            }
            if (typeof (args.gauge) != 'undefined' && args.gauge != null) {
                this.gauge = new BloxGauge(args.gauge);
            }
            if (typeof (args.vector) != 'undefined' && args.vector != null) {
                this.vector = new BloxVector(args.vector);
            }
            if (typeof (args.iframe) != 'undefined' && args.iframe != null) {
                this.iframe = new BloxIframe(args.iframe);
            }
            if (typeof (args.loading) != 'undefined' && args.loading != null) {
                this.loading = args.loading;
            }
            if (typeof (args.columnId) != 'undefined' && args.columnId != null) {
                this.columnId = args.columnId;
            }
        }
    }
}

export interface BLOX_COLUMN extends BLOX_STYLE {
    pie?: BloxPie;
    map?: BloxMap;
    link?: BloxLink;
    text?: BloxText;
    type?: 'pie' | 'map' | 'link' | 'text' | 'value' | 'chart' | 'table' | 'blank' | 'gauge' | 'vector' | 'iframe';
    value?: BloxValue;
    chart?: BloxChart;
    table?: BloxTable;
    blank?: BloxBlank;
    gauge?: BloxGauge;
    vector?: BloxVector;
    iframe?: BloxIframe;
    loading?: boolean;
    columnId?: string;
}
