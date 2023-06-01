import { FlightsModule } from "./app/flights/flights.module";
import { environment } from "./environments/environment";
import { bootstrap } from "@angular-architects/module-federation-tools";

bootstrap(FlightsModule, {
  production: environment.production,
  appType: 'microfrontend'
});
