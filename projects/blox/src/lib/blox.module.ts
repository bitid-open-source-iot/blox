/* --- MODULES --- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* --- SERVICES --- */
import { BloxService } from './blox.service';

/* --- COMPONENTS --- */
import { BloxComponent } from './blox.component';
import { BloxRowComponent } from './row/row.component';
import { BloxHandleComponent } from './handle/handle.component';
import { BloxColumnComponent } from './column/column.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        BloxComponent,
        BloxRowComponent,
        BloxHandleComponent,
        BloxColumnComponent
    ],
    providers: [
        BloxService
    ],
    declarations: [
        BloxComponent,
        BloxRowComponent,
        BloxHandleComponent,
        BloxColumnComponent
    ]
})

export class BloxModule { }