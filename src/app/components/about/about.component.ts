import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
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