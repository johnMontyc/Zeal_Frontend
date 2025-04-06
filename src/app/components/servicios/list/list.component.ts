import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../../services/servicios.service';

@Component({
  selector: 'app-servicios-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ServiciosListComponent implements OnInit{
  servicios: any[]=[];
  constructor(private serviciosService: ServiciosService) { }

  ngOnInit(): void {
    this.serviciosService.getAllServicios().subscribe((data) => {
      this.servicios = data;
    })
  }
  deleteServicio(id: number): void {
    this.serviciosService.deleteServicio(id).subscribe(() => {
      this.servicios = this.servicios.filter(servicio => servicio.id !== id);
    });
  }
}
