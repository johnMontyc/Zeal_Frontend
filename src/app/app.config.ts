import { ApplicationConfig } from '@angular/core'; // Importa la interfaz ApplicationConfig para definir la configuración de la aplicación
import { provideRouter } from '@angular/router'; // Importa la función para configurar el enrutador de Angular
import { provideAnimations } from '@angular/platform-browser/animations'; // Importa la función para habilitar las animaciones en Angular
import { routes } from './app.routes'; // Importa las rutas definidas en el archivo de rutas de la aplicación

// Define la configuración principal de la aplicación
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Proveedor para configurar el enrutador con las rutas definidas
    provideAnimations() // Proveedor para habilitar las animaciones en la aplicación
  ]
};

/*
### Papel en el proyecto:
1. **Configuración centralizada**:
   - Este archivo define la configuración principal de la aplicación, incluyendo el enrutador y las animaciones.

2. **Gestión de rutas**:
   - Utiliza `provideRouter` para registrar las rutas de la aplicación, permitiendo la navegación entre diferentes componentes.

3. **Habilitación de animaciones**:
   - Incluye `provideAnimations` para activar las animaciones en Angular, mejorando la experiencia del usuario.

4. **Modularidad**:
   - Centraliza la configuración en un solo lugar, facilitando el mantenimiento y la escalabilidad de la aplicación.

En resumen, este archivo es esencial para establecer la configuración base de la aplicación, integrando el enrutador y las animaciones de manera centralizada.
*/
