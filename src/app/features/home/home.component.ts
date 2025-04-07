// Importaciones necesarias para el componente
import { Component } from '@angular/core'; // Decorador para definir un componente
import { CommonModule } from '@angular/common'; // Módulo común de Angular
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; // Herramientas para formularios reactivos
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'; // Para manejar URLs seguras
import { trigger, state, style, animate, transition } from '@angular/animations'; // Herramientas para animaciones
import { Router } from '@angular/router'; // Servicio para manejar la navegación entre rutas

/*
Este archivo contiene la lógica del componente `HomeComponent`, que es la página principal de la aplicación. Su propósito es manejar la interacción del usuario con los elementos principales de la página, como el slider de proyectos, el equipo, el formulario de contacto y la suscripción al boletín.

### Papel en el proyecto:
1. **Interacción con el usuario**:
   - Permite a los usuarios navegar entre proyectos destacados y miembros del equipo mediante sliders interactivos.
   - Maneja el envío de formularios de contacto y la suscripción al boletín.

2. **Navegación**:
   - Facilita la redirección a los perfiles detallados de los trabajadores mediante el método `goToProfile`.

3. **Validación y experiencia del usuario**:
   - Valida los datos ingresados en el formulario de contacto y en el campo de suscripción al boletín.
   - Proporciona retroalimentación visual, como mensajes de agradecimiento, para mejorar la experiencia del usuario.

4. **Diseño dinámico**:
   - Implementa animaciones para transiciones suaves en los sliders de proyectos y equipo, haciendo que la interfaz sea más atractiva.

En resumen, este componente es esencial para la funcionalidad y la experiencia del usuario en la página principal, actuando como un punto de entrada clave para explorar los servicios, proyectos y miembros del equipo de la aplicación.
*/

// Decorador que define el componente
@Component({
  selector: 'app-home', // Selector del componente
  standalone: true, // Indica que este componente es independiente
  imports: [CommonModule, FormsModule, ReactiveFormsModule], // Módulos importados
  templateUrl: './home.component.html', // Archivo HTML asociado al componente
  styleUrls: ['./home.component.css'], // Archivo CSS asociado al componente
  animations: [
    // Definición de animaciones para transiciones
    trigger('slideAnimation', [
      state('*', style({
        transform: 'translateX(0)', // Posición inicial
        opacity: 1 // Totalmente visible
      })),
      transition(':increment', [
        style({ transform: 'translateX(100%)', opacity: 0 }), // Estado inicial de la animación
        animate('300ms ease-out') // Duración y estilo de la animación
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('300ms ease-out')
      ])
    ])
  ]
})
export class HomeComponent {
  // Propiedades del componente
  contactForm: FormGroup; // Formulario reactivo para el contacto
  newsletterEmail: string = ''; // Email para suscripción al boletín
  showThanks: boolean = false; // Bandera para mostrar mensaje de agradecimiento
  currentProjectIndex: number = 0; // Índice del proyecto actual en el slider
  currentTeamIndex: number = 0; // Índice del miembro del equipo actual en el slider

  // Lista de proyectos destacados
  projects = [
    {
      title: 'Eco-Innovación', // Título del proyecto
      description: 'Soluciones sostenibles para empresas modernas', // Descripción breve
      details: 'Implementación de sistemas de gestión ambiental y optimización de recursos energéticos.', // Detalles del proyecto
      icon: '🌿' // Ícono representativo
    },
    {
      title: 'Ciudad Verde',
      description: 'Transformando espacios urbanos en áreas verdes',
      details: 'Diseño e implementación de jardines verticales y techos verdes para empresas y comunidades.',
      icon: '🏢'
    },
    {
      title: 'Energía Limpia',
      description: 'Implementación de energías renovables',
      details: 'Instalación de paneles solares y sistemas de energía eólica para reducir la huella de carbono.',
      icon: '⚡'
    }
  ];

  // Lista de miembros del equipo
  team = [
    {
      name: 'Juan Gil', // Nombre del miembro
      role: 'Backend Developer', // Rol en el equipo
      description: 'Experto en desarrollo sostenible y arquitectura de software', // Descripción breve
      image: './assets/team/juan-gil.jpg', // Imagen del miembro
      social: { // Redes sociales
        linkedin: 'https://linkedin.com/in/juan-gil',
        github: 'https://github.com/Juangil56'
      }
    },
    {
      name: 'Issa Cooper',
      role: 'Frontend Developer',
      description: 'Diseñadora creativa enfocada en interfaces sostenibles',
      image: './assets/team/issa-cooper.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/issa-cooper-moretti-b9a3b5324/',
        github: 'https://github.com/ISSACOOPER'
      }
    },
    {
      name: 'John Montoya',
      role: 'Backend Developer',
      description: 'Experto en optimización y seguridad de sistemas',
      image: './assets/team/john-montoya.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/john-montoya',
        github: 'https://github.com/JohnMUCA'
      }
    },
    {
      name: 'Luis Martinez',
      role: 'Frontend Developer',
      description: 'Especialista en crear experiencias de usuario excepcionales',
      image: './assets/team/luis-martinez.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/luis-martínez-3a9881343/',
        github: 'https://github.com/malucefe'
      }
    }
  ];

  // Constructor para inicializar dependencias y el formulario reactivo
  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer, private router: Router) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]], // Campo de nombre con validaciones
      email: ['', [Validators.required, Validators.email]], // Campo de email con validaciones
      message: ['', [Validators.required, Validators.minLength(10)]] // Campo de mensaje con validaciones
    });
  }

  // Método para obtener una URL segura para imágenes
  getImageUrl(path: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(path);
  }

  // Métodos para navegar entre proyectos en el slider
  nextProject() {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
  }

  prevProject() {
    this.currentProjectIndex = (this.currentProjectIndex - 1 + this.projects.length) % this.projects.length;
  }

  // Métodos para navegar entre miembros del equipo en el slider
  nextTeamMember() {
    this.currentTeamIndex = (this.currentTeamIndex + 1) % this.team.length;
  }

  prevTeamMember() {
    this.currentTeamIndex = (this.currentTeamIndex - 1 + this.team.length) % this.team.length;
  }

  // Método para manejar el envío del formulario de contacto
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value); // Imprime los datos del formulario en la consola
      this.contactForm.reset(); // Reinicia el formulario
      this.showThanks = true; // Muestra el mensaje de agradecimiento
      setTimeout(() => this.showThanks = false, 3000); // Oculta el mensaje después de 3 segundos
    }
  }

  // Método para manejar la suscripción al boletín
  subscribeNewsletter() {
    if (this.newsletterEmail && this.newsletterEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      console.log('Newsletter subscription:', this.newsletterEmail); // Imprime el email en la consola
      this.newsletterEmail = ''; // Limpia el campo de email
      alert('¡Gracias por suscribirte a nuestro boletín!'); // Muestra un mensaje de agradecimiento
    }
  }

  // Método para redirigir al perfil de un trabajador
  goToProfile(workerId: string): void {
    this.router.navigate(['/profile-worker', workerId]); // Navega a la ruta del perfil del trabajador
  }
}
