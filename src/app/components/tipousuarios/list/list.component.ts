import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tipo_usuariosService } from '../../../services/tipousuarios.service';

@Component({
  selector: 'app-tipousuarios-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class TipousuariosListComponent implements OnInit{
  tipousuarios: any[]=[];
  constructor(private tipousuariosService: Tipo_usuariosService) { }

  ngOnInit(): void {
    this.tipousuariosService.getAllTipo_Usuarios().subscribe((data) => {
      this.tipousuarios = data;
    })
  }
  deleteTipoUsuario(id: number): void {
    this.tipousuariosService.deleteTipo_Usuario(id).subscribe(() => {
      this.tipousuarios = this.tipousuarios.filter(tipousuario => tipousuario.id !== id);
    });
  }
}
