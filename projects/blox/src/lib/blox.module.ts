/* --- MODULES --- */
import { NgModule } from '@angular/core';
import { ChartModule } from './chart/chart.module';
import { CommonModule } from '@angular/common';

/* --- SERVICES --- */
import { BloxService } from './blox.service';

/* --- COMPONENTS --- */
import { BloxComponent } from './blox.component';
import { BloxRowComponent } from './row/row.component';
import { BloxTextComponent } from './text/text.component';
import { BloxImageComponent } from './image/image.component';
import { BloxValueComponent } from './value/value.component';
import { BloxHandleComponent } from './handle/handle.component';
import { BloxColumnComponent } from './column/column.component';
import { BloxBannerComponent } from './banner/banner.component';

@NgModule({
    imports: [
        ChartModule,
        CommonModule
    ],
    exports: [
        BloxComponent,
        BloxRowComponent,
        BloxTextComponent,
        BloxImageComponent,
        BloxValueComponent,
        BloxHandleComponent,
        BloxColumnComponent,
        BloxBannerComponent
    ],
    providers: [
        BloxService
    ],
    declarations: [
        BloxComponent,
        BloxRowComponent,
        BloxTextComponent,
        BloxImageComponent,
        BloxValueComponent,
        BloxHandleComponent,
        BloxColumnComponent,
        BloxBannerComponent
    ]
})

export class BloxModule { }