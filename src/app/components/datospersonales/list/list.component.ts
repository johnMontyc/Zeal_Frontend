import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DatospersonalesService } from '../../../services/datospersonales.service';

@Component({
  selector: 'app-datospersonales-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class datospersonalesListComponent implements OnInit{
  datospersonales: any[]=[];
  constructor(private datospersonalesService: DatospersonalesService) { }

  ngOnInit(): void {
    this.datospersonalesService.getAllDatosPersonales().subscribe((data) => {
      this.datospersonales = data;
    })
  }
  deleteDatospersonales(id: number): void {
    this.datospersonalesService.deleteDatoPersonal(id).subscribe(() => {
      this.datospersonales = this.datospersonales.filter(datospersonales => datospersonales.id !== id);
    });
  }
}
