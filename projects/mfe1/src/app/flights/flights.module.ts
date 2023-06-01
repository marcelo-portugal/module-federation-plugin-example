import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { FlightsSearchComponent } from './flights-search/flights-search.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  ],
  declarations: [
    FlightsSearchComponent
  ],
  bootstrap: []
})
export class FlightsModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
      const ce = createCustomElement(FlightsSearchComponent, {injector: this.injector});

      customElements.define('flight-search', ce);
  }
}
