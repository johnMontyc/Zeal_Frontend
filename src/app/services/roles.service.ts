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

  getRolById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createRol(rol: Object): Observable<Object> {
    return this.http.post(this.baseUrl, rol);
  }

  updateRol(id: number, rol: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, rol);
  }

  deleteRol(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
}
