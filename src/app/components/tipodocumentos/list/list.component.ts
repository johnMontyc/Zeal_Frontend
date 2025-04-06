import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tipo_documentosService } from '../../../services/tipodocumentos.service';

@Component({
  selector: 'app-tipodocumentos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class TipodocumentosListComponent implements OnInit{
  tipodocumentos: any[]=[];
  constructor(private tipodocumentosService: Tipo_documentosService) { }

  ngOnInit(): void {
    this.tipodocumentosService.getAllTipo_Documento().subscribe((data) => {
      this.tipodocumentos = data;
    })
  }
  deleteTipodocumento(id: number): void {
    this.tipodocumentosService.deleteTipo_Documento(id).subscribe(() => {
      this.tipodocumentos = this.tipodocumentos.filter(tipodocumento => tipodocumento.id !== id);
    });
  }
}
