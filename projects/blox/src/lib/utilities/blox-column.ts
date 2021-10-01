import { BloxMap } from './blox-map';
import { ObjectId } from './id';
import { BloxText } from './blox-text';
import { BloxBlank } from './blox-blank';
import { BloxChart } from './blox-chart';
import { BloxGauge } from './blox-gauge';
import { BloxTable } from './blox-table';
import { BloxValue } from './blox-value';
import { BloxVector } from './blox-vector';
import { BloxDefault } from './blox-default';

export class BloxColumn {

    public id: string = ObjectId();
    public map: BloxMap = new BloxMap();
    public text: BloxText = new BloxText();
    public table: BloxTable = new BloxTable();
    public value: BloxValue = new BloxValue();
    public blank: BloxBlank = new BloxBlank();
    public chart: BloxChart = new BloxChart();
    public gauge: BloxGauge = new BloxGauge();
    public vector: BloxVector = new BloxVector();
    public height: number = 0;
    public default: BloxDefault = new BloxDefault();
    public position: number = 0;

    constructor(args?: BLOX_COLUMN) {
        if (typeof(args) != 'undefined' && args != null) {
            if (typeof(args.id) != 'undefined' && args.id != null) {
                this.id = args.id;
            }
            if (typeof(args.map) != 'undefined' && args.map != null) {
                this.map = new BloxMap(args.map);
            }
            if (typeof(args.text) != 'undefined' && args.text != null) {
                this.text = new BloxText(args.text);
            }
            if (typeof(args.table) != 'undefined' && args.table != null) {
                this.table = new BloxTable(args.table);
            }
            if (typeof(args.value) != 'undefined' && args.value != null) {
                this.value = new BloxValue(args.value);
            }
            if (typeof(args.blank) != 'undefined' && args.blank != null) {
                this.blank = new BloxBlank(args.blank);
            }
            if (typeof(args.chart) != 'undefined' && args.chart != null) {
                this.chart = new BloxChart(args.chart);
            }
            if (typeof(args.gauge) != 'undefined' && args.gauge != null) {
                this.gauge = new BloxGauge(args.gauge);
            }
            if (typeof(args.vector) != 'undefined' && args.vector != null) {
                this.vector = new BloxVector(args.vector);
            }
            if (typeof(args.height) != 'undefined' && args.height != null) {
                this.height = args.height;
            }
            if (typeof(args.default) != 'undefined' && args.default != null) {
                this.default = new BloxDefault(args.default);
            }
            if (typeof(args.position) != 'undefined' && args.position != null) {
                this.position = args.position;
            }
        }
    }
}

export interface BLOX_COLUMN {
    id: string;
    map: BloxMap;
    text: BloxText;
    table: BloxTable;
    value: BloxValue;
    blank: BloxBlank;
    chart: BloxChart;
    gauge: BloxGauge;
    vector: BloxVector;
    height: number;
    default: BloxDefault;
    position: number;
}
