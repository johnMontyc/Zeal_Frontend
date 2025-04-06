import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private baseUrl = 'https://localhost:8080/api/v1/servicios';

  constructor(private http:HttpClient) { }
  
  getAllServicios(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  getServicioById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  createServicio(servicio: Object): Observable<Object> {
    return this.http.post(this.baseUrl, servicio);
  }
  
  updateServicio(id: number, servicio: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, servicio);
  }
  
  deleteServicio(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
}
