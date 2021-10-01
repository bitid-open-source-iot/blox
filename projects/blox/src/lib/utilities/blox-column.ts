import { BloxMap } from './blox-map';
import { ObjectId } from './id';
import { BloxFill } from './blox-fill';
import { BloxFont } from './blox-font';
import { BloxText } from './blox-text';
import { BloxBlank } from './blox-blank';
import { BloxChart } from './blox-chart';
import { BloxGauge } from './blox-gauge';
import { BloxTable } from './blox-table';
import { BloxValue } from './blox-value';
import { BloxStroke } from './blox-stroke';
import { BloxVector } from './blox-vector';
import { BloxBanner } from './blox-banner';
import { BloxDefault } from './blox-default';
import { BloxCondition } from './blox-condition';

export class BloxColumn {

    public id?: string = ObjectId();
    public map?: BloxMap = new BloxMap();
    public font?: BloxFont = new BloxFont();
    public fill?: BloxFill = new BloxFill();
    public text?: BloxText = new BloxText();
    public type?: string = 'default';
    public value?: BloxValue = new BloxValue();
    public label?: string;
    public width?: number = 100;
    public chart?: BloxChart = new BloxChart();
    public table?: BloxTable = new BloxTable();
    public blank?: BloxBlank = new BloxBlank();
    public gauge?: BloxGauge = new BloxGauge();
    public vector?: BloxVector = new BloxVector();
    public height?: number = 0;
    public stroke?: BloxStroke = new BloxStroke();
    public banner?: BloxBanner = new BloxBanner();
    public default?: BloxDefault = new BloxDefault();
    public position?: number = 0;
    public conditions?: BloxCondition[] = [];

    constructor(args?: BLOX_COLUMN) {
        if (typeof(args) != 'undefined' && args != null) {
            if (typeof(args.id) != 'undefined' && args.id != null) {
                this.id = args.id;
            }
            if (typeof(args.map) != 'undefined' && args.map != null) {
                this.map = new BloxMap(args.map);
            }
            if (typeof(args.font) != 'undefined' && args.font != null) {
                this.font = new BloxFont(args.font);
            }
            if (typeof(args.fill) != 'undefined' && args.fill != null) {
                this.fill = new BloxFill(args.fill);
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
            if (typeof(args.label) != 'undefined' && args.label != null) {
                this.label = args.label;
            }
            if (typeof(args.width) != 'undefined' && args.width != null) {
                this.width = args.width;
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
            if (typeof(args.height) != 'undefined' && args.height != null) {
                this.height = args.height;
            }
            if (typeof(args.stroke) != 'undefined' && args.stroke != null) {
                this.stroke = new BloxStroke(args.stroke);
            }
            if (typeof(args.banner) != 'undefined' && args.banner != null) {
                this.banner = new BloxBanner(args.banner);
            }
            if (typeof(args.default) != 'undefined' && args.default != null) {
                this.default = new BloxDefault(args.default);
            }
            if (typeof(args.position) != 'undefined' && args.position != null) {
                this.position = args.position;
            }
            if (typeof(args.conditions) != 'undefined' && args.conditions != null) {
                this.conditions = args.conditions.map(o => new BloxCondition(o));
            }
        }
    }
}

export interface BLOX_COLUMN {
    id?: string;
    map?: BloxMap;
    font?: BloxFont;
    fill?: BloxFill;
    text?: BloxText;
    type?: string;
    value?: BloxValue;
    label?: string;
    width?: number;
    chart?: BloxChart;
    table?: BloxTable;
    blank?: BloxBlank;
    gauge?: BloxGauge;
    vector?: BloxVector;
    height?: number;
    stroke?: BloxStroke;
    banner?: BloxBanner;
    default?: BloxDefault;
    position?: number;
    conditions?: BloxCondition[];
}
