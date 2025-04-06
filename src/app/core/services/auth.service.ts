import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: { email: string } | null = null;

  constructor(private router: Router) {}

  login(email: string): void {
    this.user = { email }; // Guarda el correo del usuario logueado
    this.router.navigate(['/']); // Redirige al home
  }

  getUser(): { email: string } | null {
    return this.user; // Devuelve el usuario logueado
  }

  logout(): void {
    this.user = null; // Limpia la sesión
    this.router.navigate(['/login']); // Redirige al login
  }
}