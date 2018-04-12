import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  NgvzCoreModule,
  NgvzBubbleModule,
  NgvzForceDirectedModule,
  NgvzTreemapModule,
  NgvzPieModule,
  NgvzRadialTreeModule,
  NgvzHistogramModule,
  NgvzGroupedBarModule,
  NgvzStackedBarModule,
  NgvzSunburstModule,
  NgvzScatterModule,
  NgvzChordModule,
} from './lib';
import { HttpClientModule } from '@angular/common/http';
import { NGVZ_ORDINAL_COLORS } from './lib/core/color-scale/color-scale.pipe';
import { schemeSet3 } from 'd3-scale-chromatic';
import { SvgComponentsModule } from './lib/svg-components';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SvgComponentsModule,
    NgvzCoreModule,
    NgvzBubbleModule,
    NgvzForceDirectedModule,
    NgvzPieModule,
    NgvzTreemapModule,
    NgvzRadialTreeModule,
    NgvzStackedBarModule,
    NgvzGroupedBarModule,
    NgvzHistogramModule,
    NgvzSunburstModule,
    NgvzScatterModule,
    NgvzChordModule,
  ],
  providers: [{ provide: NGVZ_ORDINAL_COLORS, useValue: [...schemeSet3] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
