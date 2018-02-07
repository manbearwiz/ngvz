import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  NgvzCoreModule,
  NgvzBubbleModule,
  NgvzForceDirectedModule,
  NgvzTreemapModule,
  NgvzPieModule
} from './lib';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
