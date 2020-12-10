# @bitid/blox

Quick and easy dashbording tool!

## Installation

```sh
$ npm i --save @bitid/blox
```

## Usage

Add package to NgModule imports:

```js
import { BloxModule } from '@bitid/blox';

@NgModule({
    ...
    imports: [
        BloxModule
    ]
    ...
})
```

Add component to your page:
```html
<blox [editing]="true">
    <blox-row *ngFor="let row of rows" [id]="row.id" [height]="row.height" [position]="row.position">
        <blox-column *ngFor="let column of row.columns" [id]="column.id" [fill]="column.fill" [font]="column.font" [width]="column.width" [stroke]="column.stroke">
            <blox-banner>
                {{ column.label }}
            </blox-banner>

            <blox-chart *ngIf="column.type == 'chart'" [id]="column.id" [font]="column.font">
                <blox-series *ngFor="let series of column.series" [id]="series.id" [type]="series.type" [label]="series.label" [color]="series.color" [opacity]="series.opacity">
                    <blox-point *ngFor="let point of series.data" [date]="point.date" [value]="point.value"></blox-point>
                </blox-series>

                <blox-legend></blox-legend>
            </blox-chart>

            <blox-value *ngIf="column.type == 'value'" [font]="column.font">
                {{ column.value }}
            </blox-value>
        </blox-column>
    </blox-row>
</blox>
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details