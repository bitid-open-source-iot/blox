import { BloxMap } from './blox-map';
import { ObjectId } from './id';
import { BloxText } from './blox-text';
import { BloxBlank } from './blox-blank';
import { BloxChart } from './blox-chart';
import { BloxGauge } from './blox-gauge';
import { BloxTable } from './blox-table';
import { BloxValue } from './blox-value';
import { BloxVector } from './blox-vector';
import { BloxStyle, BLOX_STYLE } from './blox-style';

export class BloxColumn extends BloxStyle {

    public map?: BloxMap = new BloxMap();
    public text?: BloxText = new BloxText();;
    public type?: 'map' | 'text' | 'value' | 'chart' | 'table' | 'blank' | 'gauge' | 'vector';
    public value?: BloxValue = new BloxValue();
    public chart?: BloxChart = new BloxChart();
    public table?: BloxTable = new BloxTable();
    public blank?: BloxBlank = new BloxBlank();
    public gauge?: BloxGauge = new BloxGauge();
    public vector?: BloxVector = new BloxVector();
    public columnId?: string = ObjectId();

    constructor(args?: BLOX_COLUMN) {
        super(args);
        if (typeof(args) != 'undefined' && args != null) {
            if (typeof(args.map) != 'undefined' && args.map != null) {
                this.map = new BloxMap(args.map);
            }
            if (typeof(args.text) != 'undefined' && args.text != null) {
                this.text = new BloxText(args.text);
            }
            if (typeof(args.type) != 'undefined' && args.type != null) {
                this.type = args.type;
            }
            if (typeof(args.value) != 'undefined' && args.value != null) {
                this.value = new BloxValue(args.value);
            }
            if (typeof(args.chart) != 'undefined' && args.chart != null) {
                this.chart = new BloxChart(args.chart);
            }
            if (typeof(args.table) != 'undefined' && args.table != null) {
                this.table = new BloxTable(args.table);
            }
            if (typeof(args.blank) != 'undefined' && args.blank != null) {
                this.blank = new BloxBlank(args.blank);
            }
            if (typeof(args.gauge) != 'undefined' && args.gauge != null) {
                this.gauge = new BloxGauge(args.gauge);
            }
            if (typeof(args.vector) != 'undefined' && args.vector != null) {
                this.vector = new BloxVector(args.vector);
            }
            if (typeof(args.columnId) != 'undefined' && args.columnId != null) {
                this.columnId = args.columnId;
            }
        }
    }
}

export interface BLOX_COLUMN extends BLOX_STYLE {
    map?: BloxMap;
    text?: BloxText;
    type?: 'map' | 'text' | 'value' | 'chart' | 'table' | 'blank' | 'gauge' | 'vector';
    value?: BloxValue;
    chart?: BloxChart;
    table?: BloxTable;
    blank?: BloxBlank;
    gauge?: BloxGauge;
    vector?: BloxVector;
    columnId?: string;
}
