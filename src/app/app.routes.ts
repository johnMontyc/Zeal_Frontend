import { Routes } from '@angular/router'; // Importa la interfaz Routes para definir las rutas de la aplicación
import { HomeComponent } from './features/home/home.component'; // Importa el componente para la página principal
import { TeamComponent } from './features/team/team.component'; // Importa el componente para la página "Nosotros"
import { OurServicesComponent } from './features/our-services/our-services.component'; // Importa el componente para la página de servicios
import { LoginComponent } from './features/login/login.component'; // Importa el componente para la página de inicio de sesión
import { RegisterComponent } from './features/register/register.component'; // Importa el componente para la página de registro
import { ProfileWorkerComponent } from './features/profile-worker/profile-worker.component'; // Importa el componente para los perfiles de trabajadores

// Define las rutas de la aplicación
export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para la página principal (Home)
  { path: 'team', component: TeamComponent }, // Ruta para la página "Nosotros"
  { path: 'our-services', component: OurServicesComponent }, // Ruta para la página de servicios
  { path: 'login', component: LoginComponent }, // Ruta para la página de inicio de sesión
  { path: 'register', component: RegisterComponent }, // Ruta para la página de registro
  { path: 'profile-worker/:id', component: ProfileWorkerComponent }, // Ruta dinámica para los perfiles de trabajadores, utilizando un parámetro `id`
  { path: '**', redirectTo: '' } // Redirección para rutas no encontradas hacia la página principal
];

/*
### Papel en el proyecto:
1. **Definición de rutas**:
   - Este archivo define las rutas principales de la aplicación, conectando las URLs con los componentes correspondientes.

2. **Navegación dinámica**:
   - Incluye una ruta dinámica (`profile-worker/:id`) que permite mostrar perfiles específicos de trabajadores según el parámetro `id`.

3. **Gestión de errores de navegación**:
   - La ruta `**` redirige a la página principal en caso de que el usuario intente acceder a una ruta no válida.

4. **Organización modular**:
   - Centraliza la configuración de las rutas, facilitando el mantenimiento y la escalabilidad de la aplicación.

En resumen, este archivo es esencial para manejar la navegación de la aplicación, asegurando que cada URL cargue el componente adecuado y proporcionando una experiencia de usuario fluida.
*/