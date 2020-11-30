/* --- MODULES --- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* --- SERVICES --- */
import { BloxService } from './blox.service';

/* --- COMPONENTS --- */
import { BloxComponent } from './blox.component';
import { BloxRowComponent } from './row/row.component';
import { BloxTextComponent } from './text/text.component';
import { BloxImageComponent } from './image/image.component';
import { BloxValueComponent } from './value/value.component';
import { BloxChartComponent } from './chart/chart.component';
import { BloxPointComponent } from './chart/series/point/point.component';
import { BloxHandleComponent } from './handle/handle.component';
import { BloxColumnComponent } from './column/column.component';
import { BloxBannerComponent } from './banner/banner.component';
import { BloxSeriesComponent } from './chart/series/series.component';
import { BloxLegendComponent } from './chart/legend/legend.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        BloxComponent,
        BloxRowComponent,
        BloxTextComponent,
        BloxChartComponent,
        BloxPointComponent,
        BloxImageComponent,
        BloxValueComponent,
        BloxSeriesComponent,
        BloxHandleComponent,
        BloxColumnComponent,
        BloxLegendComponent,
        BloxBannerComponent
    ],
    providers: [
        BloxService
    ],
    declarations: [
        BloxComponent,
        BloxRowComponent,
        BloxTextComponent,
        BloxChartComponent,
        BloxPointComponent,
        BloxImageComponent,
        BloxValueComponent,
        BloxSeriesComponent,
        BloxHandleComponent,
        BloxColumnComponent,
        BloxLegendComponent,
        BloxBannerComponent
    ]
})

export class BloxModule { }