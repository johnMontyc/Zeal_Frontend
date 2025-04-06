import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Tipo_usuariosService {
  private baseUrl = 'https://localhost:8080/api/v1/tipo_usuario';

  constructor(private http:HttpClient) { }
  
  getAllTipo_Usuario(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  getTipo_UsuarioById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  createTipo_Usuario(tipo_Usuario: Object): Observable<Object> {
    return this.http.post(this.baseUrl, tipo_Usuario);
  }
  
  updateTipo_Usuario(id: number, tipo_Usuario: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, tipo_Usuario);
  }
  
  deleteTipo_Usuario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
}
