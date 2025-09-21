import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {



  testimonials = [
    { message: "Handled my case with great professionalism and secured a favorable outcome.", name: "Suseel Kumar", post: "" },
    { message: "Provided clear legal guidance and kept me informed at every stage.", name: "Monu Sahu", post: "" },
    { message: "Helped me draft legal agreements with precision and care.", name: "Brijesh Saroj", post: "" },
    { message: "Very supportive and approachable throughout the proceedings.", name: "Rahul Yadav", post: "" },
    { message: "Went above and beyond to protect my rights and interests.", name: "Vijay Tiwari", post: "" },
    { message: "Quick response and practical legal solutions to my concerns.", name: "Prakher Pandey", post: "" },
    { message: "Guided me through a complex legal dispute with ease.", name: "Priyansu Mehta", post: "" },
    { message: "Explained everything in simple terms and made me feel confident.", name: "Mustapha", post: "" },
    { message: "Extremely knowledgeable in handling family matters and disputes.", name: "Akmal Khan", post: "" },
    { message: "I am very satisfied with the professional representation received.", name: "Khurseed Khan", post: "" }
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
