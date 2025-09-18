import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {



  testimonials = [
  { message: "Very professional and supportive throughout my case. Highly recommended!", name: "Client A", post: "Software Engineer" },
  { message: "Great communication and excellent service.", name: "Client B", post: "Product Manager" },
  { message: "Really happy with the training sessions.", name: "Client C", post: "Business Analyst" },
  { message: "Friendly and professional team.", name: "Client D", post: "UX Designer" },
  { message: "They exceeded my expectations!", name: "Client E", post: "Data Scientist" },
  { message: "Good support and fast response.", name: "Client F", post: "DevOps Engineer" },
  { message: "Training was detailed and useful.", name: "Client G", post: "HR Manager" },
  { message: "Loved the practical approach.", name: "Client H", post: "Marketing Specialist" },
  { message: "Trainers are very knowledgeable.", name: "Client I", post: "Sales Executive" },
  { message: "I highly recommend their services.", name: "Client J", post: "Consultant" }
];


 customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 2
      }
    },
    nav: false
  }



}
