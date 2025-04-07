import { Component } from '@angular/core'; // Importa el decorador Component para definir un componente de Angular
import { CommonModule } from '@angular/common'; // Importa funcionalidades comunes de Angular, como directivas y pipes
import { RouterModule } from '@angular/router'; // Importa el módulo de enrutamiento para manejar la navegación

@Component({
  selector: 'app-team', // Define el selector del componente, utilizado para incluirlo en otras plantillas
  standalone: true, // Indica que este componente es independiente y no depende de un módulo específico
  imports: [CommonModule, RouterModule], // Especifica los módulos que este componente utiliza
  templateUrl: './team.component.html', // Ruta al archivo HTML asociado al componente
  styleUrls: ['./team.component.css'] // Ruta al archivo CSS asociado al componente
})
export class TeamComponent {} // Define la clase del componente, que contiene su lógica

/*
### Papel en el proyecto:
1. **Presentación del equipo**:
   - Este componente se encarga de mostrar información sobre los miembros del equipo, como nombres, roles y enlaces a redes sociales.

2. **Modularidad**:
   - Al ser un componente independiente (`standalone`), puede ser reutilizado fácilmente en diferentes partes de la aplicación.

3. **Conexión con la interfaz de usuario**:
   - Conecta la lógica de Angular con la interfaz visual definida en el archivo HTML y estilizada en el archivo CSS.

4. **Navegación**:
   - Utiliza el módulo de enrutamiento (`RouterModule`) para manejar posibles enlaces o redirecciones dentro del componente.

En resumen, este componente es esencial para proporcionar una vista organizada y funcional del equipo de desarrollo, mejorando la experiencia del usuario al explorar la información del equipo detrás de la plataforma.
*/
