/* --- MODULES --- */
import { NgModule } from '@angular/core';
import { BloxModule } from 'projects/blox/src/public-api';
import { BrowserModule } from '@angular/platform-browser';

/* --- COMPONENTS --- */
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BloxModule,
    BrowserModule,
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})

export class AppModule { }
