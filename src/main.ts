import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone'; // Asegúrate de que este archivo exista y tenga tus rutas

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), 
    ...appConfig.providers, provideIonicAngular({}),
  ],
})
  .catch((err) => console.error(err));
