import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'; // Importa Component para definir el componente
import { Router, RouterModule } from '@angular/router'; // Importa Router para manejar la navegación

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/']); // Redirige a la ruta Home
  }
}
