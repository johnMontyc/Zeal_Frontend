import { bootstrapApplication } from '@angular/platform-browser'; // Importa la función para inicializar la aplicación Angular
import { AppComponent } from './app/app.component'; // Importa el componente principal de la aplicación
import { provideRouter } from '@angular/router'; // Importa la función para configurar el enrutador de Angular
import { routes } from './app/app.routes'; // Importa las rutas definidas en el archivo de rutas de la aplicación

// Inicializa la aplicación Angular con el componente principal y los proveedores necesarios
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)] // Configura el enrutador con las rutas definidas
}).catch(err => console.error(err)); // Captura y muestra errores en caso de que ocurra un problema durante la inicialización

/*
### Papel en el proyecto:
1. **Punto de entrada de la aplicación**:
   - Este archivo es el punto de inicio donde se inicializa la aplicación Angular.

2. **Configuración del enrutador**:
   - Utiliza `provideRouter` para registrar las rutas de la aplicación, permitiendo la navegación entre componentes.

3. **Gestión de errores**:
   - Incluye un manejador de errores (`catch`) para capturar y mostrar cualquier problema que ocurra durante la inicialización.

4. **Modularidad**:
   - Centraliza la configuración inicial de la aplicación, asegurando que todos los elementos necesarios estén correctamente configurados.

En resumen, este archivo es esencial para arrancar la aplicación Angular, configurando el componente principal y el enrutador, y asegurando que la aplicación esté lista para ejecutarse.
*/
