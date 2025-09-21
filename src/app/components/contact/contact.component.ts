import { Component } from '@angular/core';
import { ContactService } from './contact.service';
import { MessageService } from 'primeng/api';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  };

  constructor(private contactService: ContactService,
     private messageService: MessageService
  ) {}

  sendMessage() {
    const serviceID = 'service_Service';   // e.g. 'service_xxx'
    const templateID = 'template_gw9pgto'; // e.g. 'template_abc'
    const publicKey = '19-29-1sq6ZSxosG6';   // e.g. 'user_xxx' (from dashboard)

    emailjs.send(serviceID, templateID, this.contact, publicKey)
      .then((result) => {
        console.log('Email sent', result);
         this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message sent successfully!' });
        this.contact = { user_name: '', user_email: '', user_phone: '', message: '' };
      }, (error) => {
        console.error('Send error', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to send message. Please try again later.' });
      });
  }
}
