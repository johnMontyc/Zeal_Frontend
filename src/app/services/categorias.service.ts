import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private baseUrl = 'https://localhost:8080/api/v1/categorias';

  constructor(private http:HttpClient) { }
  
  getAllCategorias(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  getCategoriaById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  createCategoria(categoria: Object): Observable<Object> {
    return this.http.post(this.baseUrl, categoria);
  }
  
  updateCategoria(id: number, categoria: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, categoria);
  }
  
  deleteCategoria(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
 
}
