import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  NgvzCoreModule,
  NgvzBubbleModule,
  NgvzForceDirectedModule,
  NgvzTreemapModule,
  NgvzPieModule,
  NgvzRadialTreeModule
} from './lib';
import { HttpClientModule } from '@angular/common/http';
import { NGVZ_ORDINAL_COLORS } from './lib/core/color-scale/color-scale.pipe';
import { schemeSet3 } from 'd3-scale-chromatic';
import { NgvzStackedBarModule } from './lib/stacked-bar';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgvzCoreModule,
    NgvzBubbleModule,
    NgvzForceDirectedModule,
    NgvzPieModule,
    NgvzTreemapModule,
    NgvzRadialTreeModule,
    NgvzStackedBarModule,
  ],
  providers: [{ provide: NGVZ_ORDINAL_COLORS, useValue: [...schemeSet3] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
