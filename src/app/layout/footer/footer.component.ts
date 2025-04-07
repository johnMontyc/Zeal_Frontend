import { Component } from '@angular/core'; // Importa el decorador Component para definir un componente de Angular
import { CommonModule } from '@angular/common'; // Importa funcionalidades comunes de Angular, como directivas y pipes

@Component({
  selector: 'app-footer', // Define el selector del componente, utilizado para incluirlo en otras plantillas
  standalone: true, // Indica que este componente es independiente y no depende de un módulo específico
  imports: [CommonModule], // Especifica los módulos que este componente utiliza
  templateUrl: './footer.component.html', // Ruta al archivo HTML asociado al componente
  styleUrls: ['./footer.component.css'] // Ruta al archivo CSS asociado al componente
})
export class FooterComponent {
  // Clase del componente Footer, que contiene la lógica del footer
}

/*
### Papel en el proyecto:
1. **Diseño del footer**:
   - Este componente se encarga de mostrar el footer de la aplicación, que incluye información como derechos reservados y enlaces a redes sociales.

2. **Modularidad**:
   - Al ser un componente independiente (`standalone`), puede ser reutilizado fácilmente en diferentes partes de la aplicación.

3. **Conexión con la interfaz de usuario**:
   - Conecta la lógica de Angular con la interfaz visual definida en el archivo HTML y estilizada en el archivo CSS.

4. **Consistencia visual**:
   - Asegura que el footer sea consistente con el diseño general de la aplicación.

En resumen, este componente es esencial para proporcionar un footer funcional y visualmente atractivo, mejorando la experiencia del usuario y la navegación en la aplicación.
*/
