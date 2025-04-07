import { CommonModule } from '@angular/common'; // Importa funcionalidades comunes de Angular, como directivas y pipes
import { Component } from '@angular/core'; // Importa el decorador Component para definir un componente de Angular
import { Router, RouterModule } from '@angular/router'; // Importa Router y RouterModule para manejar la navegación entre rutas

@Component({
  selector: 'app-header', // Define el selector del componente, utilizado para incluirlo en otras plantillas
  standalone: true, // Indica que este componente es independiente y no depende de un módulo específico
  imports: [CommonModule, RouterModule], // Especifica los módulos que este componente utiliza
  templateUrl: './header.component.html', // Ruta al archivo HTML asociado al componente
  styleUrls: ['./header.component.css'] // Ruta al archivo CSS asociado al componente
})
export class HeaderComponent {
  constructor(private router: Router) {} // Inyecta el servicio Router para manejar la navegación

  navigateToHome(): void {
    this.router.navigate(['/']); // Redirige a la ruta Home (página principal)
  }
}

/*
### Papel en el proyecto:
1. **Navegación principal**:
   - Este componente actúa como el encabezado de la aplicación, proporcionando enlaces y botones para navegar entre las diferentes secciones.

2. **Modularidad**:
   - Al ser un componente independiente (`standalone`), puede ser reutilizado fácilmente en diferentes partes de la aplicación.

3. **Conexión con la interfaz de usuario**:
   - Conecta la lógica de Angular con la interfaz visual definida en el archivo HTML y estilizada en el archivo CSS.

4. **Interactividad**:
   - Incluye un método (`navigateToHome`) que permite redirigir al usuario a la página principal al hacer clic en el logo o botón correspondiente.

En resumen, este componente es esencial para proporcionar una navegación clara y funcional en la aplicación, mejorando la experiencia del usuario y facilitando el acceso a las secciones clave.
*/
