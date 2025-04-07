// Importaciones necesarias para el componente
import { CommonModule } from '@angular/common'; // Módulo común de Angular que incluye directivas como *ngIf y *ngFor
import { Component, OnInit } from '@angular/core'; // Decorador para definir un componente y la interfaz OnInit
import { ActivatedRoute } from '@angular/router'; // Servicio para acceder a los parámetros de la ruta activa

/*
Este archivo define la lógica del componente `ProfileWorkerComponent`, que se encarga de mostrar el perfil detallado de un trabajador seleccionado. Utiliza datos dinámicos para renderizar la información del trabajador en la interfaz.

### Papel en el proyecto:
1. **Presentación de perfiles dinámicos**:
   - Muestra información específica de cada trabajador, como nombre, rol, ubicación, funciones, teléfono y correo electrónico, utilizando datos obtenidos dinámicamente.

2. **Navegación basada en rutas**:
   - Utiliza el servicio `ActivatedRoute` para capturar el ID del trabajador desde la URL, lo que permite mostrar el perfil correspondiente.

3. **Modularidad y reutilización**:
   - Este componente es independiente (`standalone`), lo que facilita su reutilización en diferentes partes de la aplicación sin depender de un módulo específico.

4. **Conexión con la interfaz de usuario**:
   - Conecta la lógica de Angular con la interfaz visual definida en el archivo HTML, asegurando que los datos dinámicos se reflejen correctamente en la vista.

En resumen, este componente es esencial para proporcionar una experiencia personalizada al usuario, mostrando perfiles detallados de los trabajadores disponibles en la plataforma y permitiendo una navegación fluida basada en rutas.
*/

// Decorador que define el componente
@Component({
  selector: 'app-profile-worker', // Selector del componente, utilizado para incluirlo en otras plantillas
  imports: [CommonModule], // Módulos importados para usar funcionalidades comunes de Angular
  standalone: true, // Indica que este componente es independiente y no depende de un módulo específico
  templateUrl: './profile-worker.component.html', // Archivo HTML asociado al componente
  styleUrls: ['./profile-worker.component.css'] // Archivo CSS asociado al componente
})
export class ProfileWorkerComponent implements OnInit {
  // Propiedades del componente
  workerId: string | null = null; // ID del trabajador capturado de la URL
  workerData: any = null; // Datos del trabajador actual

  // Datos de los trabajadores
  workers = {
    claudia: {
      name: 'Claudia', // Nombre del trabajador
      role: 'Especialista en instalación de paneles solares', // Rol del trabajador
      location: '📍 Ciudad de México', // Ubicación del trabajador
      phone: '+52 55 1234 5678', // Teléfono del trabajador
      email: 'claudia@example.com', // Email del trabajador
      functions: [
        'Instalación de paneles solares residenciales.', // Función 1
        'Asesoramiento en proyectos de energía solar.', // Función 2
        'Mantenimiento de sistemas solares.' // Función 3
      ],
      image: 'assets/customers/claudia.jpg' // Ruta de la imagen del trabajador
    },
    margaret: {
      name: 'Margaret',
      role: 'Ingeniera en sistemas de energía renovable',
      location: '📍 Monterrey',
      phone: '+52 81 9876 5432',
      email: 'margaret@example.com',
      functions: [
        'Diseño de sistemas de energía renovable.',
        'Supervisión de proyectos de energía eólica.',
        'Optimización de recursos energéticos.'
      ],
      image: 'assets/customers/margaret.jpg'
    },
    carla: {
      name: 'Carla',
      role: 'Técnica en mantenimiento eléctrico',
      location: '📍 Guadalajara',
      phone: '+52 33 8765 4321',
      email: 'carla@example.com',
      functions: [
        'Mantenimiento preventivo de sistemas eléctricos.',
        'Reparación de fallas eléctricas.',
        'Instalación de sistemas eléctricos industriales.'
      ],
      image: 'assets/customers/carla.jpg'
    },
    sofia: {
      name: 'Sofía',
      role: 'Asesora en proyectos de energía sostenible',
      location: '📍 Puebla',
      phone: '+52 22 3456 7890',
      email: 'sofia@example.com',
      functions: [
        'Asesoramiento en proyectos de energía sostenible.',
        'Evaluación de impacto ambiental.',
        'Optimización de recursos energéticos.'
      ],
      image: 'assets/customers/sofia.jpg'
    },
    manuel: {
      name: 'Manuel',
      role: 'Instalador de paneles solares industriales',
      location: '📍 Querétaro',
      phone: '+52 44 9876 5432',
      email: 'manuel@example.com',
      functions: [
        'Instalación de paneles solares industriales.',
        'Supervisión de proyectos de energía solar.',
        'Capacitación en sistemas solares.'
      ],
      image: 'assets/customers/manuel.jpg'
    },
    julia: {
      name: 'Julia',
      role: 'Consultora en eficiencia energética',
      location: '📍 Mérida',
      phone: '+52 99 1234 5678',
      email: 'julia@example.com',
      functions: [
        'Consultoría en eficiencia energética.',
        'Diseño de estrategias de ahorro energético.',
        'Implementación de soluciones sostenibles.'
      ],
      image: 'assets/customers/julia.jpg'
    },
    fernando: {
      name: 'Fernando',
      role: 'Experto en instalación de baterías solares',
      location: '📍 Tijuana',
      phone: '+52 66 8765 4321',
      email: 'fernando@example.com',
      functions: [
        'Instalación de baterías solares.',
        'Mantenimiento de sistemas de almacenamiento de energía.',
        'Optimización de sistemas solares.'
      ],
      image: 'assets/customers/fernando.jpg'
    },
    carlos: {
      name: 'Carlos',
      role: 'Ingeniero en energías renovables',
      location: '📍 León',
      phone: '+52 47 3456 7890',
      email: 'carlos@example.com',
      functions: [
        'Diseño de sistemas de energía renovable.',
        'Supervisión de proyectos de energía eólica y solar.',
        'Investigación en tecnologías sostenibles.'
      ],
      image: 'assets/customers/carlos.jpg'
    },
    carmen: {
      name: 'Carmen',
      role: 'Especialista en climatización solar',
      location: '📍 Cancún',
      phone: '+52 99 8765 4321',
      email: 'carmen@example.com',
      functions: [
        'Diseño e instalación de sistemas de climatización solar.',
        'Mantenimiento de sistemas de climatización.',
        'Asesoramiento en proyectos de energía solar.'
      ],
      image: 'assets/customers/carmen.jpg'
    },
    zun: {
      name: 'Zun',
      role: 'Asesor en soluciones de energía renovable',
      location: '📍 Oaxaca',
      phone: '+52 95 1234 5678',
      email: 'zun@example.com',
      functions: [
        'Asesoramiento en soluciones de energía renovable.',
        'Evaluación de proyectos sostenibles.',
        'Capacitación en tecnologías renovables.'
      ],
      image: 'assets/customers/zun.jpg'
    }
  };

  // Constructor para inicializar dependencias
  constructor(private route: ActivatedRoute) {} // Inyecta el servicio ActivatedRoute para acceder a los parámetros de la URL

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Obtiene el ID del trabajador desde los parámetros de la URL
    this.workerId = this.route.snapshot.paramMap.get('id');

    // Verifica si el ID existe en el objeto `workers`
    if (this.workerId && this.workerId in this.workers) {
      // Asigna los datos del trabajador correspondiente a la propiedad `workerData`
      this.workerData = this.workers[this.workerId as keyof typeof this.workers];
    }
  }
}
