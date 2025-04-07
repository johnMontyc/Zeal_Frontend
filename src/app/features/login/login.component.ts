/*
Este archivo contiene la lógica del componente `LoginComponent`, que maneja la funcionalidad de inicio de sesión y navegación relacionada con el flujo de autenticación en la aplicación.

### Papel en el proyecto:
1. **Autenticación de usuarios**:
   - Permite a los usuarios iniciar sesión en la plataforma mostrando mensajes de éxito y manejando el evento de envío del formulario.

2. **Navegación entre páginas**:
   - Redirige a los usuarios a diferentes rutas, como la página de registro (`/register`) o la página principal (`/`), según las acciones realizadas.

3. **Mensajes dinámicos**:
   - Proporciona retroalimentación visual mediante mensajes dinámicos, como confirmaciones de inicio de sesión o registro exitoso.

4. **Interactividad**:
   - Incluye métodos para cerrar el modal, redirigir al registro y manejar el inicio de sesión, mejorando la experiencia del usuario.

En resumen, este componente es esencial para gestionar el flujo de autenticación en la aplicación, proporcionando una experiencia de usuario clara y funcional mientras conecta diferentes partes del sistema mediante la navegación.
*/

// Importaciones necesarias para el componente
import { Component } from '@angular/core'; // Decorador para definir un componente
import { Router } from '@angular/router'; // Servicio para manejar la navegación entre rutas
import { CommonModule } from '@angular/common'; // Módulo común de Angular

// Decorador que define el componente
@Component({
  selector: 'app-login', // Selector del componente
  standalone: true, // Indica que este componente es independiente
  imports: [CommonModule], // Módulos importados para el componente
  templateUrl: './login.component.html', // Archivo HTML asociado al componente
  styleUrls: ['./login.component.css'] // Archivo CSS asociado al componente
})
export class LoginComponent {
  // Propiedades del componente
  registerMessage: string | null = null; // Mensaje que se muestra al registrarse
  loginMessage: string | null = null; // Mensaje que se muestra al iniciar sesión

  // Constructor para inicializar dependencias
  constructor(private router: Router) {} // Inyecta el servicio Router para manejar la navegación

  // Método para mostrar un mensaje al registrarse
  showRegisterMessage(): void {
    this.registerMessage = '¡Te acabas de registrar con nosotros! Redirigiendo a la página de registro...'; // Mensaje de registro
    setTimeout(() => {
      this.router.navigate(['/register']); // Redirige a la página de registro después de 2 segundos
    }, 2000);
  }

  // Método para cerrar el modal y redirigir al home u otra página
  closeModal(): void {
    this.router.navigate(['/']); // Redirige al home o a la página principal
  }

  // Método para redirigir al formulario de inicio de sesión
  navigateToLogin(): void {
    this.router.navigate(['/register']); // Redirige al formulario de registro
  }

  // Método para manejar el evento de inicio de sesión
  onLogin(event: Event): void {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    this.loginMessage = '¡Has iniciado sesión exitosamente! Bienvenido a nuestra plataforma.'; // Mensaje de inicio de sesión exitoso
    setTimeout(() => {
      this.loginMessage = null; // Oculta el mensaje después de 3 segundos
    }, 3000);
  }
}
