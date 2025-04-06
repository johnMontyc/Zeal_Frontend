import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Tipo_usuariosService {
  private baseUrl = 'https://localhost:8080/api/v1/tipo_usuarios';

  constructor(private http:HttpClient) { }
  
  getAllTipo_Usuarios(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  getTipo_UsuarioById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  createTipo_Usuario(tipo_usuario: Object): Observable<Object> {
    return this.http.post(this.baseUrl, tipo_usuario);
  }
  
  updateTipo_Usuario(id: number, tipo_usuario: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, tipo_usuario);
  }
  
  deleteTipo_Usuario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
}
