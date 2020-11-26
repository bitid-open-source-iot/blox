import { BloxMap } from './utilities/blox-map';
import { BloxText } from './utilities/blox-text';
import { BloxTable } from './utilities/blox-table';
import { BloxChart } from './utilities/blox-chart';
import { BloxValue } from './utilities/blox-value';
import { BloxBlank } from './utilities/blox-blank';
import { BloxGauge } from './utilities/blox-gauge';
import { BloxVector } from './utilities/blox-vector';

export function BloxParse(array) {
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

export function BloxUnparse(array) {
    return JSON.parse(JSON.stringify(BloxParse(array)));
};