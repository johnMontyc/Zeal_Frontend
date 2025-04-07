/*
Este archivo define la lógica del componente `OurServicesComponent`, que se encarga de manejar la sección de servicios ofrecidos por la plataforma.

### Papel en el proyecto:
1. **Presentación de servicios**:
   - Este componente actúa como el núcleo para mostrar los servicios principales de la plataforma, utilizando su archivo HTML y CSS asociados.

2. **Base para funcionalidad futura**:
   - Aunque actualmente no contiene lógica ni propiedades, este componente sirve como base para agregar funcionalidades dinámicas en el futuro, como la interacción con datos o eventos del usuario.

3. **Modularidad**:
   - Al ser un componente independiente (`standalone`), puede ser reutilizado fácilmente en diferentes partes de la aplicación sin depender de un módulo específico.

4. **Conexión con la interfaz de usuario**:
   - Este componente conecta la lógica de Angular con la interfaz visual definida en el archivo HTML y estilizada en el archivo CSS.

En resumen, este componente es esencial para estructurar y manejar la sección de servicios de la plataforma, proporcionando una base sólida para futuras expansiones y funcionalidades.
*/

// Importaciones necesarias para el componente
import { Component } from '@angular/core'; // Decorador para definir un componente
import { CommonModule } from '@angular/common'; // Módulo común de Angular que incluye directivas como *ngIf y *ngFor

// Decorador que define el componente
@Component({
  selector: 'app-our-services', // Selector del componente, utilizado para incluirlo en otras plantillas
  standalone: true, // Indica que este componente es independiente y no depende de un módulo específico
  imports: [CommonModule], // Módulos importados para usar funcionalidades comunes de Angular
  templateUrl: './our-services.component.html', // Archivo HTML asociado al componente
  styleUrl: './our-services.component.css' // Archivo CSS asociado al componente
})
export class OurServicesComponent {
  // Clase del componente
  // Actualmente no tiene lógica ni propiedades, pero sirve como base para manejar la funcionalidad de la sección "Our Services"
}
