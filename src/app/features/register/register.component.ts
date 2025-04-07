import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register', // Selector del componente
  standalone: true, // Indica que este componente es independiente
  imports: [CommonModule], // Importa módulos comunes de Angular
  templateUrl: './register.component.html', // Archivo HTML asociado al componente
  styleUrls: ['./register.component.css'] // Archivo CSS asociado al componente
})
export class RegisterComponent {
  registerMessage: string | null = null; // Mensaje que se muestra al registrarse
  loginMessage: string | null = null; // Mensaje que se muestra al redirigir al login

  constructor(private router: Router) {} // Inyecta el servicio Router para manejar la navegación

  onRegister(event: Event): void {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    const form = event.target as HTMLFormElement;
    const idNumber = (form[1] as HTMLInputElement).value; // Número de identificación
    const phone = (form[3] as HTMLInputElement).value; // Teléfono

    // Validación adicional en caso de que el navegador no soporte `pattern`
    if (!/^\d+$/.test(idNumber) || !/^\d+$/.test(phone)) {
      alert('Por favor, ingresa solo números en los campos de Número de Identificación y Teléfono.');
      return;
    }

    // Muestra un mensaje de registro exitoso
    this.registerMessage = '¡Te has registrado exitosamente! Bienvenido a nuestra plataforma.';
    setTimeout(() => {
      this.registerMessage = null; // Oculta el mensaje después de 3 segundos
    }, 3000);
  }

  showLoginMessage(): void {
    // Muestra un mensaje indicando que se redirige al login
    this.loginMessage = 'Redirigiendo a la página de inicio de sesión...';
    setTimeout(() => {
      this.router.navigate(['/login']); // Redirige al login después de 2 segundos
    }, 2000);
  }

  navigateToLogin(): void {
    // Redirige directamente al formulario de inicio de sesión
    this.router.navigate(['/login']);
  }
}

/*
Este componente maneja el formulario de registro de usuarios. Su propósito principal es capturar los datos ingresados por el usuario, validarlos y mostrar mensajes dinámicos según las acciones realizadas.

### Funcionalidades principales:
1. **Registro de usuarios (`onRegister`)**:
   - Captura los datos del formulario.
   - Valida que los campos de "Número de Identificación" y "Teléfono" contengan solo números.
   - Muestra un mensaje de éxito si el registro es válido.

2. **Redirección al inicio de sesión (`showLoginMessage` y `navigateToLogin`)**:
   - `showLoginMessage`: Muestra un mensaje antes de redirigir al login.
   - `navigateToLogin`: Redirige directamente al formulario de inicio de sesión.

### Papel en el proyecto:
Este componente es esencial para el flujo de registro de nuevos usuarios en la plataforma. Permite validar los datos ingresados y proporciona una experiencia interactiva mediante mensajes dinámicos y redirecciones. Además, asegura que los datos sean consistentes antes de proceder con el registro, mejorando la calidad de la información capturada.
*/
