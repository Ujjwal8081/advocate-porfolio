import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  appointmentDialog: boolean = false;

  appointment = {
    name: '',
    address: '',
    phone: '',
    email: '',
    reason: ''
  };

  constructor(private http: HttpClient) {}

  showDialog() {
    this.appointmentDialog = true;
  }

  bookAppointment() {
    this.http.post('http://localhost:3000/book-appointment', this.appointment, { responseType: 'text' })
      .subscribe({
        next: () => {
          alert('Appointment request sent successfully!');
          this.appointmentDialog = false;
          this.appointment = { name: '', address: '', phone: '', email: '', reason: '' };
        },
        error: () => {
          alert('Failed to send appointment. Please try again later.');
        }
      });
  }

  downloadCV() {
    window.open('http://localhost:3000/download-cv', '_blank');
  }
}
