import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {
  private baseUrl = 'https://localhost:8080/api/v1/contratos';

  constructor(private http:HttpClient) { }
  
  getAllContratos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  getContratoById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  createContrato(contrato: Object): Observable<Object> {
    return this.http.post(this.baseUrl, contrato);
  }
  
  updateContrato(id: number, contrato: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, contrato);
  }
  
  deleteContrato(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
