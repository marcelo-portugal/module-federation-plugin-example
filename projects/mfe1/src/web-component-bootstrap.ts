import { FlightsModule } from "./app/flights/flights.module";
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(FlightsModule)
  .catch(err => console.error(err));
