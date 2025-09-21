import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  menuItems: any[] = [
    { label: 'About', command: () => this.scrollTo('about') },
    { label: 'Practice Areas', command: () => this.scrollTo('practice') },
    { label: 'Testimonials', command: () => this.scrollTo('testimonials') },
    { label: 'Contact', command: () => this.scrollTo('contact') }
  ];
  currentYear: number = new Date().getFullYear();

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
