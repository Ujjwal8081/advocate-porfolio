import { Component } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor(private contactService: ContactService) {}

  sendMessage() {
    this.contactService.sendContactForm(this.contact).subscribe({
      next: () => {
        alert('Message sent successfully!');
        this.contact = { name: '', email: '', phone: '', message: '' }; // reset form
      },
      error: (err) => {
        console.error('❌ Error:', err);
        alert('❌ Failed to send message. Please try again later.');
      }
    });
  }
}
