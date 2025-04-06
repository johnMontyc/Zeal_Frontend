import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Tipo_documentosService {
  private baseUrl = 'https://localhost:8080/api/v1/tipo_documentos';

  constructor(private http:HttpClient) { }
  
  getAllTipo_Documento(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  getTipo_DocumentoById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  createTipo_Documento(tipo_documento: Object): Observable<Object> {
    return this.http.post(this.baseUrl, tipo_documento);
  }
  
  updateTipo_Documento(id: number, tipo_documento: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, tipo_documento);
  }
  
  deleteTipo_Documento(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
}
