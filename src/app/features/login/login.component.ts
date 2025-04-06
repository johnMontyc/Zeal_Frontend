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
  constructor(private router: Router) {}

  closeModal(): void {
    this.router.navigate(['/']); // Redirige al home o a otra página
  }
  navigateToLogin(): void {
    this.router.navigate(['/register']); // Redirige al home o a otra página
  }
}
