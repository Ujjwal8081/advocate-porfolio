import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import emailjs from '@emailjs/browser';

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

  constructor(private http: HttpClient,
    private messageService: MessageService 
  ) {}

  showDialog() {
    this.appointmentDialog = true;
  }

  bookAppointment() {

     const serviceID = 'service_Service';
    const templateID = 'template_m01i9hg';
    const publicKey = '19-29-1sq6ZSxosG6';

       emailjs.send(serviceID, templateID, this.appointment, publicKey)
      .then(res => {
       this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Appointment Request Sent Successfully!.' });
        this.appointmentDialog = false;
        this.appointment = { name: '', email: '', phone: '', address: '', reason: '' };
      }, err => {
          console.error('Send error', err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to send message. Please try again later.' });
      });
  }

  downloadCV() {
    window.open('http://localhost:3000/download-cv', '_blank');
  }
}
