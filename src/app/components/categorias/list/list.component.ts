import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../../services/categorias.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class CategoriasListComponent implements OnInit{
  categorias: any[]=[];
  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.getAllCategorias().subscribe((data) => {
      this.categorias = data;
    })
  }
  deleteCategoria(id: number): void {
    this.categoriasService.deleteCategoria(id).subscribe(() => {
      this.categorias = this.categorias.filter(categoria => categoria.id !== id);
    });

  }
}
