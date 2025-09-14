import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  appointmentDialog = false;

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
    fetch('http://localhost:3000/download-cv')
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Advocate_CV.pdf';
        link.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(err => console.error('Error downloading CV:', err));
  }
}
