import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatospersonalesService {
  private baseUrl = 'https://localhost:8080/api/v1/datospersonales';

  constructor(private http:HttpClient) { }
  
  getAllDatosPersonales(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  getDatoPersonalById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  createDatoPersonal(datoPersonal: Object): Observable<Object> {
    return this.http.post(this.baseUrl, datoPersonal);
  }
  
  updateDatoPersonal(id: number, datoPersonal: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, datoPersonal);
  }
  
  deleteDatoPersonal(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
}
