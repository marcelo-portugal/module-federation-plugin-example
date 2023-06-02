import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebComponentWrapper } from '@angular-architects/module-federation-tools';

const URL = 'http://localhost:4000/remoteEntry.js';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },

    // Your route here:
    {
      path: 'flights',
      component: WebComponentWrapper,
      data: {
          type: 'module',
          remoteEntry: URL,
          exposedModule: './web-components',
          elementName: 'flight-search'
      }
    },

    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

