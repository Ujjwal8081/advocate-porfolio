import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class NavbarComponent {
  menuItems: any[] = [
    { label: 'About', command: () => this.scrollTo('about') },
    { label: 'Practice Areas', command: () => this.scrollTo('practice') },
    { label: 'Testimonials', command: () => this.scrollTo('testimonials') },
    { label: 'Contact', command: () => this.scrollTo('contact') }
  ];
  
scrollTo(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    const yOffset = -80; 
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

  goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 👈 Smooth scroll to top
  }
}
