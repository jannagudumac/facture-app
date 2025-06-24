import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DbService } from './services/db.service';

import { routes } from './app.routes';
import { FactureService } from './services/facture.service';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    
    provideHttpClient(),
    //injecter in-memory-data.service.ts
    //comme il est @Injectable
    importProvidersFrom([
      HttpClientInMemoryWebApiModule.forRoot(DbService,{delay:200})
    ]),
  ]
};
