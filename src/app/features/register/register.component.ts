import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerMessage: string | null = null;
  loginMessage: string | null = null;

  constructor(private router: Router) {}

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

    this.registerMessage = '¡Te has registrado exitosamente! Bienvenido a nuestra plataforma.';
    setTimeout(() => {
      this.registerMessage = null; // Oculta el mensaje después de 3 segundos
    }, 3000);
  }

  showLoginMessage(): void {
    this.loginMessage = 'Redirigiendo a la página de inicio de sesión...';
    setTimeout(() => {
      this.router.navigate(['/login']); // Redirige al login después de 2 segundos
    }, 2000);
  }
  navigateToLogin(): void {
    this.router.navigate(['/login']); // Redirige al home o a otra página
  }
}
