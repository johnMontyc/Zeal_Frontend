import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private baseUrl = 'https://localhost:8080/api/v1/rol';

  constructor(private http:HttpClient) { }
  
  getAllRoles(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  getRoleById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  createRoles(rol: Object): Observable<Object> {
    return this.http.post(this.baseUrl, rol);
  }
  
  updateRoles(id: number, rol: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, rol);
  }
  
  deleteRoles(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
}
