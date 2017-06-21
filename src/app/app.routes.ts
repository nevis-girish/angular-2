import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppComponent1 } from './app.component';

// Route Configuration
export const routes: Routes = [
  { path: 'appcom', component: AppComponent },
  { path: 'appcom1', component: AppComponent1 }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);