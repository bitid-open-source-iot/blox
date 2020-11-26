import { BloxMap } from './lib/utilities/blox-map';
import { BloxText } from './lib/utilities/blox-text';
import { BloxTable } from './lib/utilities/blox-table';
import { BloxChart } from './lib/utilities/blox-chart';
import { BloxValue } from './lib/utilities/blox-value';
import { BloxBlank } from './lib/utilities/blox-blank';
import { BloxGauge } from './lib/utilities/blox-gauge';
import { BloxVector } from './lib/utilities/blox-vector';

/* --- MASTER --- */
export * from './lib/blox.module';
export * from './lib/blox.component';
export * from './lib/row/row.component';
export * from './lib/text/text.component';
export * from './lib/image/image.component';
export * from './lib/chart/chart.component';
export * from './lib/value/value.component';
export * from './lib/handle/handle.component';
export * from './lib/column/column.component';
export * from './lib/banner/banner.component';
export * from './lib/chart/series/series.component';
export * from './lib/chart/series/point/point.component';

/* --- UTILITIES --- */
export * from './lib/utilities/blox-banner';
export * from './lib/utilities/blox-blank';
export * from './lib/utilities/blox-chart';
export * from './lib/utilities/blox-condition';
export * from './lib/utilities/blox-default';
export * from './lib/utilities/blox-fill';
export * from './lib/utilities/blox-font';
export * from './lib/utilities/blox-gauge';
export * from './lib/utilities/blox-map';
export * from './lib/utilities/blox-row';
export * from './lib/utilities/blox-stroke';
export * from './lib/utilities/blox-style';
export * from './lib/utilities/blox-table';
export * from './lib/utilities/blox-text';
export * from './lib/utilities/blox-value';
export * from './lib/utilities/blox-vector';

export function parse(array) {
    array.map(item => {
        switch(item.type) {
            case('map'):
                item = new BloxMap(item);
                break;
            case('text'):
                item = new BloxText(item);
                break;
            case('chart'):
                item = new BloxChart(item);
                break;
            case('value'):
                item = new BloxValue(item);
                break;
            case('blank'):
                item = new BloxBlank(item);
                break;
            case('table'):
                item = new BloxTable(item);
                break;
            case('gauge'):
                item = new BloxGauge(item);
                break;
            case('vector'):
                item = new BloxVector(item);
                break;
        };
        return item;
    });
};

export function unparse(array) {
    return JSON.parse(JSON.stringify(parse(array)));
};