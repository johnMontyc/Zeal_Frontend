import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../../services/reviews.service';

@Component({
  selector: 'app-reviews-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ReviewsListComponent implements OnInit{
  reviews: any[]=[];
  constructor(private reviewsService: ReviewsService) { }

  ngOnInit(): void {
    this.reviewsService.getAllReviews().subscribe((data) => {
      this.reviews = data;
    })
  }
  deleteReview(id: number): void {
    this.reviewsService.deleteReview(id).subscribe(() => {
      this.reviews = this.reviews.filter(review => review.id !== id);
    });
  }

}
