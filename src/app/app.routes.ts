import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { TeamComponent } from './features/team/team.component';
import { OurServicesComponent } from './features/our-services/our-services.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para Home
  { path: 'team', component: TeamComponent }, // Ruta para Nosotros
  { path: 'our-services', component: OurServicesComponent }, // Ruta para Servicios
  { path: 'login', component: LoginComponent }, // Ruta para Iniciar Sesión
  { path: 'register', component: RegisterComponent }, // Ruta para Registrarse
  { path: '**', redirectTo: '' } // Redirección para rutas no encontradas
];