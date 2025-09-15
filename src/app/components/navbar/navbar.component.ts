import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class NavbarComponent {
  menuItems: MenuItem[] = [
    { label: 'About', url: '#about' },
    { label: 'Practice Areas', url: '#practice' },
    { label: 'Testimonials', url: '#testimonials' },
    { label: 'Contact', url: '#contact' }
  ];
}
