import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-usuarios-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class UsuariosListComponent implements OnInit{
  usuarios: any[]=[];
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.getAllUsuarios().subscribe((data) => {
      this.usuarios = data;
    })
  }
  deleteUsuario(id: number): void {
    this.usuariosService.deleteUsuario(id).subscribe(() => {
      this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
    });
  }
}
