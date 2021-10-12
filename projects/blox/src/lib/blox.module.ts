/* --- MODULES --- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* --- SERVICES --- */
import { BloxService } from './blox.service';

/* --- COMPONENTS --- */
import { BloxComponent } from './blox.component';
import { BloxRowComponent } from './row/row.component';
import { BloxPieComponent } from './pie/pie.component';
import { BloxTextComponent } from './text/text.component';
import { BloxGaugeComponent } from './gauge/gauge.component';
import { BloxImageComponent } from './image/image.component';
import { BloxValueComponent } from './value/value.component';
import { BloxChartComponent } from './chart/chart.component';
import { BloxPointComponent } from './chart/series/point/point.component';
import { BloxTableComponent } from './table/table.component';
import { BloxHandleComponent } from './handle/handle.component';
import { BloxColumnComponent } from './column/column.component';
import { BloxBannerComponent } from './banner/banner.component';
import { BloxPieSliceComponent } from './pie/slice/slice.component';
import { BloxGaugeHandComponent } from './gauge/hand/hand.component';
import { BloxGaugeRangeComponent } from './gauge/range/range.component';
import { BloxChartSeriesComponent } from './chart/series/series.component';
import { BloxChartLegendComponent } from './chart/legend/legend.component';
import { BloxChartFixedLineComponent } from './chart/fixed-line/fixed-line.component';
import { BloxIframeComponent } from './iframe/iframe.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        BloxComponent,
        BloxPieComponent,
        BloxRowComponent,
        BloxTextComponent,
        BloxGaugeComponent,
        BloxChartComponent,
        BloxPointComponent,
        BloxImageComponent,
        BloxTableComponent,
        BloxValueComponent,
        BloxHandleComponent,
        BloxColumnComponent,
        BloxBannerComponent,
        BloxIframeComponent,
        BloxPieSliceComponent,
        BloxGaugeHandComponent,
        BloxGaugeRangeComponent,
        BloxChartSeriesComponent,
        BloxChartLegendComponent,
        BloxChartFixedLineComponent
    ],
    providers: [
        BloxService
    ],
    declarations: [
        BloxComponent,
        BloxPieComponent,
        BloxRowComponent,
        BloxTextComponent,
        BloxGaugeComponent,
        BloxChartComponent,
        BloxPointComponent,
        BloxImageComponent,
        BloxTableComponent,
        BloxValueComponent,
        BloxIframeComponent,
        BloxHandleComponent,
        BloxColumnComponent,
        BloxBannerComponent,
        BloxPieSliceComponent,
        BloxGaugeHandComponent,
        BloxGaugeRangeComponent,
        BloxChartSeriesComponent,
        BloxChartLegendComponent,
        BloxChartFixedLineComponent
    ]
})

export class BloxModule { }
