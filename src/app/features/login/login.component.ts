import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  registerMessage: string | null = null;
  loginMessage: string | null = null;

  constructor(private router: Router) {}

  showRegisterMessage(): void {
    this.registerMessage = '¡Te acabas de registrar con nosotros! Redirigiendo a la página de registro...';
    setTimeout(() => {
      this.router.navigate(['/register']); // Redirige a la página de registro después de 2 segundos
    }, 2000);
  }

  closeModal(): void {
    this.router.navigate(['/']); // Redirige al home o a otra página
  }

  navigateToLogin(): void {
    this.router.navigate(['/register']); // Redirige al home o a otra página
  }

  onLogin(event: Event): void {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    this.loginMessage = '¡Has iniciado sesión exitosamente! Bienvenido a nuestra plataforma.';
    setTimeout(() => {
      this.loginMessage = null; // Oculta el mensaje después de 3 segundos
    }, 3000);
  }
}
