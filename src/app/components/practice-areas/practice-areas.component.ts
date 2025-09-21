import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-areas',
  templateUrl: './practice-areas.component.html',
  styleUrls: ['./practice-areas.component.scss'],
})
export class PracticeAreasComponent {
  practiceAreas: any[] = [
    {
      title: 'Criminal Law',
      description:
        'Providing strong legal defense in all types of criminal cases including bail, trials, and appeals.',
      image: 'criminal-img.jpg',
    },
    {
      title: 'Matrimonial Matters',
      description:
        'Handling family and matrimonial disputes with sensitivity and professional expertise.',
      image: 'matrimonial.png',
    },
    {
      title: 'Marriage & Divorce',
      description:
        'Advising and representing clients in marriage registration, divorce petitions, and related proceedings.',
      image: 'divorce.jpg',
    },
    {
      title: 'Civil Cases',
      description:
        'Expert representation in civil disputes, property matters, contracts, and recovery cases.',
      image: 'civil-law.jpg',
    },
    {
      title: 'Mandamus & Writ Petitions',
      description:
        'Filing and contesting writ petitions including Mandamus, Habeas Corpus, and Certiorari before High Court.',
      image: 'writ.jpeg',
    },
    {
      title: 'Family Law',
      description:
        'Navigating family law matters and ensuring a stable and harmonious family environment.',
      image: 'family-law.jpg',
    },
    {
      title: 'Criminal Law',
      description:
        'Defending clients against criminal charges with a strong and strategic legal defense.',
      image: 'criminal-law.jpg',
    },
    {
      title: 'Employment Law',
      description:
        'Protecting employee and employer rights in the workplace with expert legal guidance.',
      image: 'employment-law.jpg',
    },
    {
      title: 'Immigration Law',
      description:
        'Helping individuals and businesses navigate immigration processes and regulations.',
      image: 'immigration-law.jpg',
    },
    {
      title: 'Tax Law',
      description:
        'Providing solutions for tax planning, compliance, and dispute resolution with tax authorities.',
      image: 'tax-law.jpg',
    },
    {
      title: 'Environmental Law',
      description:
        'Ensuring compliance with environmental regulations and advocating for sustainable practices.',
      image: 'environmental-law.jpg',
    },
    {
      title: 'Consumer Protection Law',
      description:
        'Safeguarding consumer rights against unfair trade practices and fraud.',
      image: 'consumer-protection-law.jpg',
    },
  ];
}
