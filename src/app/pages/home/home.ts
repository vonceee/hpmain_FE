import { Component, signal, Renderer2, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { MainFooter } from 'D:/Documents/GitHub/hytec_fe/src/app/components/main-footer/main-footer';
import { MainHeader } from 'D:/Documents/GitHub/hytec_fe/src/app/components/main-header/main-header';
import { DOCUMENT, CommonModule } from '@angular/common';

interface Testimonial {
  logo: string;
  text: string;
  bgImage: string; // Kulay ng background pag active ito
  company: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, FontAwesomeModule, MainFooter, MainHeader, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
protected readonly title = signal('hytec_fe');
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faLinkedinIn = faLinkedinIn;


     cardData: Testimonial[] = [
    {
      // Card 1: MSEUF
      logo: 'assets/images/home/MSEUFlogo.png',
      text: 'These young minds, representing the future of the workforce, served as a stimulating reminder of the purpose and significance of the partnership between HPI and MSEUF.',
      // Palitan mo ito ng actual background image mo para sa MSEUF
      bgImage: 'assets/images/home/MSEUF.png',
      company: 'Manuel S. Enverga University Foundation'
    },
    {
      // Card 2: QCU
      logo: 'assets/images/home/QCUlogo.png',
      text: 'We extend our heartfelt gratitude to HYTEC Inc. for their trust and support in this partnership. Together, we look forward to unlocking new possibilities and shaping the future of technical education, a productive, and countless opportunities for growth and innovation!',
      // Palitan ng actual background image para sa QCU
      bgImage: 'assets/images/home/QCU.png',
      company: 'Quezon City University',
    },
    {
      // Card 3: AICS
      logo: 'assets/images/home/AICSlogo.png',
      text: 'We are grateful to Engr. Soliman and Hytec Power Inc. for choosing QCU to become their partners. We are very happy that we have a common vision to ensure that our students have the skills necessary to be employed.',
      // Palitan ng actual background image para sa AICS
      bgImage: 'assets/images/home/AICS.png',
      company: 'Asian Institute of Computer Studies',
    }
  ];

  cardPositions: string[] = ['left', 'active', 'right'];

  currentBackgroundStyle: string = '';

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // Set global body styles for images
    this.renderer.setStyle(this.document.body, 'background-size', '1920px 713px');
    this.renderer.setStyle(this.document.body, 'background-position', 'top left');
    this.renderer.setStyle(this.document.body, 'background-attachment', 'fixed');
    this.renderer.setStyle(this.document.body, 'background-repeat', 'no-repeat');
    this.renderer.setStyle(this.document.body, 'transition', 'background 0.5s ease-in-out');

    this.updateBackground();
  }

  ngOnDestroy(): void {
    // Linisin ang styles pag umalis sa component
    this.renderer.removeStyle(this.document.body, 'background');
    this.renderer.removeStyle(this.document.body, 'background-size');
    this.renderer.removeStyle(this.document.body, 'background-position');
    this.renderer.removeStyle(this.document.body, 'background-attachment');
    this.renderer.removeStyle(this.document.body, 'background-repeat');
  }

  // --- NAVIGATION LOGIC (Pareho lang sa dati) ---
  next(): void {
    const last = this.cardPositions.pop();
    if (last) {
      this.cardPositions.unshift(last);
      this.updateBackground();
    }
  }

  prev(): void {
    const first = this.cardPositions.shift();
    if (first) {
      this.cardPositions.push(first);
      this.updateBackground();
    }
  }

  goToCard(index: number): void {
    let safety = 0;
    while (this.cardPositions[index] !== 'active' && safety < 5) {
      this.next();
      safety++;
    }
  }

  // --- DITO ANG PAGBABAGO ---
  private updateBackground(): void {
    const activeIndex = this.cardPositions.indexOf('active');
    if (activeIndex !== -1) {
      const imgPath = this.cardData[activeIndex].bgImage;

      // Set string format for style binding
      this.currentBackgroundStyle = `
        linear-gradient(to right, #8a0005e0 15%, #d18b8bc5 50%, #8a0005e0 85%),
        url('${imgPath}')
      `;
    }
  }
}
