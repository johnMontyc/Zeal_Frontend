import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private baseUrl = 'https://localhost:8080/api/v1/usuarios';
  constructor(private http:HttpClient) { }

  getAllUsuarios(): Observable<any> {
    return this.http.get("${this.baseURL}");
  }
  getUsuarioById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createUsuario(usuario: Object): Observable<Object> {
    return this.http.post(this.baseUrl, usuario);
  }
  updateUsuario(id: number,usuario: Object ): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, usuario);
  }
  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
