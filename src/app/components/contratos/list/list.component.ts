import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContratosService } from '../../../services/contratos.service';

@Component({
  selector: 'app-contratos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ContratosListComponent implements OnInit{
  contratos: any[]=[];
  constructor(private contratosService: ContratosService) { }

  ngOnInit(): void {
    this.contratosService.getAllContratos().subscribe((data) => {
      this.contratos = data;
    })
  }
  deleteContrato(id: number): void {
    this.contratosService.deleteContrato(id).subscribe(() => {
      this.contratos = this.contratos.filter(contrato => contrato.id !== id);
    });
  }

}
