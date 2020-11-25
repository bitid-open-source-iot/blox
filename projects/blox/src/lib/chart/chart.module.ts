/* --- MODULES --- */
import { NgModule } from '@angular/core';

/* --- COMPONENTS --- */
import { BloxPointComponent } from './series/point/point.component';
import { BloxChartComponent } from './chart.component';
import { BloxSeriesComponent } from './series/series.component';

@NgModule({
    exports: [
        BloxChartComponent,
        BloxPointComponent,
        BloxSeriesComponent
    ],
    declarations: [
        BloxChartComponent,
        BloxPointComponent,
        BloxSeriesComponent
    ]
})

export class ChartModule { }