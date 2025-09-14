import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  menuItems: MenuItem[] = [
    { label: 'About', url: '#about' },
    { label: 'Practice Areas', url: '#practice' },
    { label: 'Testimonials', url: '#testimonials' },
    { label: 'Contact', url: '#contact' }
  ];
}
