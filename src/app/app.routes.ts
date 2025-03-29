import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { OurServicesComponent } from './features/our-services/our-services.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: '**', redirectTo: '' }
];
