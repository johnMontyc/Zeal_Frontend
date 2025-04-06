import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private baseUrl = 'https://localhost:8080/api/v1/reviews';

  constructor(private http:HttpClient) { }
  
  getAllReviews(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  getReviewById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  createReview(review: Object): Observable<Object> {
    return this.http.post(this.baseUrl, review);
  }
  
  updateReview(id: number, review: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, review);
  }
  
  deleteReview(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
}
