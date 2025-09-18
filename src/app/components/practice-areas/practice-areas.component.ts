import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-areas',
  templateUrl: './practice-areas.component.html',
  styleUrls: ['./practice-areas.component.scss']
})
export class PracticeAreasComponent {
  practiceAreas: any[] = [
    { title: 'Estate Planning', description: 'Securing your legacy with wills, trusts, and estate administration.', image: 'estate-planning.jpg' },
    { title: 'Business Law', description: 'Navigating complex business transactions and legal matters for successful business growth.', image: 'business-law.jpg' },
    { title: 'Civil Law', description: 'Defending rights and resolving disputes in a fair and ethical manner.', image: 'civil-law.jpg' },
    { title: 'Real Estate Law', description: 'Navigating complex real estate transactions and disputes with expert guidance.', image: 'real-estate-law.jpg' },
    { title: 'Intellectual Property Law', description: 'Protecting your intellectual property rights and ensuring fair use.', image: 'intellectual-property-law.jpg' },
    { title: 'Family Law', description: 'Navigating family law matters and ensuring a stable and harmonious family environment.', image: 'family-law.jpg' },
    { title: 'Criminal Law', description: 'Defending clients against criminal charges with a strong and strategic legal defense.', image: 'criminal-law.jpg' },
    { title: 'Employment Law', description: 'Protecting employee and employer rights in the workplace with expert legal guidance.', image: 'employment-law.jpg' },
    { title: 'Immigration Law', description: 'Helping individuals and businesses navigate immigration processes and regulations.', image: 'immigration-law.jpg' },
    { title: 'Tax Law', description: 'Providing solutions for tax planning, compliance, and dispute resolution with tax authorities.', image: 'tax-law.jpg' },
    { title: 'Environmental Law', description: 'Ensuring compliance with environmental regulations and advocating for sustainable practices.', image: 'environmental-law.jpg' },
    { title: 'Consumer Protection Law', description: 'Safeguarding consumer rights against unfair trade practices and fraud.', image: 'consumer-protection-law.jpg' }
      
  ]
}
