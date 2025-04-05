import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private baseUrl = 'https://localhost:8080/api/v1/roles';

  constructor(private http:HttpClient) { }
  
  getAllRoles(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  getRoleById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  createRole(role: Object): Observable<Object> {
    return this.http.post(this.baseUrl, role);
  }
  
  updateRole(id: number, role: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, role);
  }
  
  deleteRole(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
}
