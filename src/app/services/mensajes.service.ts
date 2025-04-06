import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  private baseUrl = 'https://localhost:8080/api/v1/mensajes';

  constructor(private http:HttpClient) { }
  
  getAllMensajes(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  getMensajeById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  createMensaje(mensaje: Object): Observable<Object> {
    return this.http.post(this.baseUrl, mensaje);
  }
  
  updateMensaje(id: number, mensaje: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, mensaje);
  }
  
  deleteMensaje(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
}
