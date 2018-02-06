import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  NgvzCoreModule,
  NgvzBubbleModule,
  NgvzForceDirectedModule,
  NgvzTreemapModule
} from './lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgvzCoreModule,
    NgvzBubbleModule,
    NgvzForceDirectedModule,
    NgvzTreemapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
