import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFooter } from 'src/app/components/main-footer/main-footer';
import { MainHeader } from 'src/app/components/main-header/main-header';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

interface Testimonial {
  logo: string;
  text: string;
  bgImage: string;
  company: string;
}

import { TitleBadge } from 'src/app/components/title-badge/title-badge';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MainFooter, MainHeader, FontAwesomeModule, TitleBadge],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  protected readonly title = signal('hytec_fe');

  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faLinkedinIn = faLinkedinIn;

  achievementList = [
    { value: '30+', label: 'Years of Excellence' },
    { value: '150+', label: 'Industrial Partners' },
    { value: '150+', label: 'Academe Partners' },
    { value: '100%', label: 'Commitment to service' },
  ];

  featuredNews = {
    title: 'Philippine VEX Robotics National Championship Representative - QCU',
    date: 'May 26, 2025',
    description:
      'Lorem ipsum dolor sit amet consectetur. Congue quis sagittis leo odio molestie pellentesque in. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Congue quis sagittis leo odio molestie pellentesque in. Lorem ipsum dolor sit amet consectetur.',
    image: '/assets/images/home/Updates.png',
  };

  latestNewsList = [
    {
      title: 'HPI Launch The Humanoid Robot: Pepper',
      date: 'May 26, 2025',
      description:
        'Lorem ipsum dolor sit amet consectetur. Congue quis sagittis leo odio molestie pellentesque in. Lorem ipsum dolor sit amet consectetur.',
      image: '/assets/images/home/News.png',
    },
    {
      title: 'New AI Features Announced',
      date: 'June 10, 2025',
      description:
        'Lorem ipsum dolor sit amet consectetur. Congue quis sagittis leo odio molestie pellentesque in. Lorem ipsum dolor sit amet consectetur.',
      image: '/assets/images/home/News.png',
    },
    {
      title: 'Robotics Workshop 2025',
      date: 'July 15, 2025',
      description:
        'Lorem ipsum dolor sit amet consectetur. Congue quis sagittis leo odio molestie pellentesque in. Lorem ipsum dolor sit amet consectetur.',
      image: '/assets/images/home/News.png',
    },
  ];

  cardData: Testimonial[] = [
    {
      logo: '/assets/images/home/MSEUFlogo.png',
      text: 'These young minds, representing the future of the workforce, served as a stimulating reminder of the purpose and significance of the partnership between HPI and MSEUF.',
      bgImage: '/assets/images/home/MSEUF.png',
      company: 'Manuel S. Enverga University Foundation',
    },
    {
      logo: '/assets/images/home/QCUlogo.png',
      text: 'We extend our heartfelt gratitude to HYTEC Inc. for their trust and support in this partnership. Together, we look forward to unlocking new possibilities and shaping the future of technical education!',
      bgImage: '/assets/images/home/QCU.png',
      company: 'Quezon City University',
    },
    {
      logo: '/assets/images/home/AICSlogo.png',
      text: 'We are grateful to Engr. Soliman and Hytec Power Inc. for choosing QCU to become their partners. We are very happy that we have a common vision to ensure that our students have the skills necessary to be employed.',
      bgImage: '/assets/images/home/AICS.png',
      company: 'Asian Institute of Computer Studies',
    },
  ];

  activeIndex = 1; // start with the middle card (QCU)
  currentBackgroundStyle: string = '';

  ngOnInit(): void {
    this.updateBackground();
  }

  // --- NAVIGATION LOGIC ---
  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.cardData.length;
    this.updateBackground();
  }

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.cardData.length) % this.cardData.length;
    this.updateBackground();
  }

  goToCard(index: number): void {
    this.activeIndex = index;
    this.updateBackground();
  }

  // calculate position class relative to active index
  getCardClass(index: number): string {
    if (index === this.activeIndex) return 'active';

    const len = this.cardData.length;
    // check if it's the previous item (handling wrap-around)
    if (index === (this.activeIndex - 1 + len) % len) return 'left';
    // check if it's the next item (handling wrap-around)
    if (index === (this.activeIndex + 1) % len) return 'right';

    return 'hidden'; // for lists longer than 3 items
  }

  private updateBackground(): void {
    const imgPath = this.cardData[this.activeIndex].bgImage;
    this.currentBackgroundStyle = `
      linear-gradient(to right, #8a0005e0 15%, #d18b8bc5 50%, #8a0005e0 85%),
      url('${imgPath}')
    `;
  }
}
