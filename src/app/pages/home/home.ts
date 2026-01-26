import {
  Component,
  OnInit,
  AfterViewInit,
  signal,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainFooter } from 'src/app/components/main-footer/main-footer';
import { MainHeader } from 'src/app/components/main-header/main-header';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';
import { ContainerBox } from 'src/app/components/container-box/container-box';
import { DecorGlowComponent } from 'src/app/components/decor-glow/decor-glow';
import { CtaButton } from 'src/app/components/cta-button/cta-button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

interface Testimonial {
  logo: string;
  text: string;
  bgImage: string;
  company: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MainFooter,
    MainHeader,
    FontAwesomeModule,
    TitleBadge,
    ContainerBox,
    RouterLink,
    LottieComponent,
    DecorGlowComponent,
    CtaButton,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, AfterViewInit {
  @ViewChild('achievementSection') achievementSection!: ElementRef;
  @ViewChild('logoSection') logoSection!: ElementRef;

  isLogoVisible = false;

  constructor(
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
  ) {}

  protected readonly title = signal('hytec_fe');

  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faLinkedinIn = faLinkedinIn;

  private animationItems = new Map<number, AnimationItem>();

  achievementList: any[] = [
    {
      target: 30,
      current: 0,
      suffix: '+',
      label: 'Years of Excellence',
      value: '30+',
      iconPath: '/assets/images/aboutus/sponsorship/lottie/Warranty.json',
      options: {
        path: '/assets/images/aboutus/sponsorship/lottie/Warranty.json',
        autoplay: false,
        loop: false,
      } as AnimationOptions,
    },
    {
      target: 150,
      current: 0,
      suffix: '+',
      label: 'Industrial Partners',
      value: '150+',
      iconPath: '/assets/images/aboutus/sponsorship/lottie/Community.json',
      options: {
        path: '/assets/images/aboutus/sponsorship/lottie/Community.json',
        autoplay: false,
        loop: false,
      } as AnimationOptions,
    },
    {
      target: 150,
      current: 0,
      suffix: '+',
      label: 'Academe Partners',
      value: '150+',
      iconPath: '/assets/images/aboutus/sponsorship/lottie/Learned.json',
      options: {
        path: '/assets/images/aboutus/sponsorship/lottie/Learned.json',
        autoplay: false,
        loop: false,
      } as AnimationOptions,
    },
    {
      target: 100,
      current: 0,
      suffix: '%',
      label: 'Commitment to Service',
      value: '100%',
      iconPath: '/assets/images/aboutus/sponsorship/lottie/Heart.json',
      options: {
        path: '/assets/images/aboutus/sponsorship/lottie/Heart.json',
        autoplay: false,
        loop: false,
      } as AnimationOptions,
    },
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
  isReadMoreOpen = false;
  private hasAnimated = false;

  ngOnInit(): void {
    this.updateBackground();
  }

  ngAfterViewInit(): void {
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    }

    this.setupIntersectionObserver();
    this.setupScrollAnimations();
  }

  private setupScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Animate once
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    const elements = this.el.nativeElement.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el: HTMLElement) => observer.observe(el));
  }

  private setupIntersectionObserver() {
    if (!this.achievementSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.startCounting();
            this.playAnimations();
            this.hasAnimated = true;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }, // trigger when 20% visible
    );

    observer.observe(this.achievementSection.nativeElement);

    if (this.logoSection) {
      const logoObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            this.isLogoVisible = entry.isIntersecting;
            this.cdr.detectChanges();
          });
        },
        { threshold: 0, rootMargin: '200px 0px 200px 0px' }, // pre-load slightly before
      );
      logoObserver.observe(this.logoSection.nativeElement);
    }
  }

  private startCounting() {
    const duration = 2000; // 2 seconds
    const fps = 60;
    const interval = 1000 / fps;
    const totalFrames = (duration / 1000) * fps;

    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = this.easeOutExpo(frame / totalFrames);

      this.achievementList.forEach((item) => {
        if (frame <= totalFrames) {
          item.current = Math.floor(item.target * progress);
        } else {
          item.current = item.target;
        }
      });

      if (frame >= totalFrames) {
        clearInterval(timer);
      }
    }, interval);
  }

  // easing function for smooth animation
  private easeOutExpo(x: number): number {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
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
  animationCreated(animationItem: AnimationItem, index: number): void {
    this.animationItems.set(index, animationItem);
    // If we've already scrolled past the trigger point, play immediately (optional constraint)
    if (this.hasAnimated) {
      animationItem.play();
    }
  }

  onMouseEnter(index: number): void {
    const item = this.animationItems.get(index);
    if (item) {
      item.stop();
      item.play();
    }
  }

  private playAnimations(): void {
    this.animationItems.forEach((item) => {
      item.play();
    });
  }
}
