import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {



  testimonials = [
    { message: "Handled my case with great professionalism and secured a favorable outcome.", name: "Client A", post: "Business Owner" },
    { message: "Provided clear legal guidance and kept me informed at every stage.", name: "Client B", post: "Entrepreneur" },
    { message: "Helped me draft legal agreements with precision and care.", name: "Client C", post: "Startup Founder" },
    { message: "Very supportive and approachable throughout the proceedings.", name: "Client D", post: "Teacher" },
    { message: "Went above and beyond to protect my rights and interests.", name: "Client E", post: "Engineer" },
    { message: "Quick response and practical legal solutions to my concerns.", name: "Client F", post: "Freelancer" },
    { message: "Guided me through a complex legal dispute with ease.", name: "Client G", post: "HR Manager" },
    { message: "Explained everything in simple terms and made me feel confident.", name: "Client H", post: "Doctor" },
    { message: "Extremely knowledgeable in handling family matters and disputes.", name: "Client I", post: "Banker" },
    { message: "I am very satisfied with the professional representation received.", name: "Client J", post: "Consultant" }
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
