import {
  Component,
  OnInit,
  AfterViewInit,
  signal,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFooter } from 'src/app/components/main-footer/main-footer';
import { MainHeader } from 'src/app/components/main-header/main-header';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';
import { ContainerBox } from 'src/app/components/container-box/container-box';
import { DecorGlowComponent } from 'src/app/components/decor-glow/decor-glow';
import { CtaButton } from 'src/app/components/cta-button/cta-button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatsGridComponent } from 'src/app/components/stats-grid/stats-grid.component';
import { Logo3dComponent } from 'src/app/components/logo-3d/logo-3d.component';
import { HomeDecorsComponent } from 'src/app/components/home-decors/home-decors.component';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { TestimonialSectionComponent } from 'src/app/components/testimonial-section/testimonial-section.component';

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
    DecorGlowComponent,
    CtaButton,
    StatsGridComponent,
    Logo3dComponent,
    HomeDecorsComponent,
    TestimonialSectionComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, AfterViewInit {
  @ViewChild('achievementSection') achievementSection!: ElementRef;

  constructor(
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
  ) {}

  protected readonly title = signal('hytec_fe');

  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faLinkedinIn = faLinkedinIn;

  achievementList = [
    {
      label: 'Years of Excellence',
      value: '30+',
      iconPath: '/assets/images/aboutus/sponsorship/lottie/Warranty.json',
      options: {
        path: '/assets/images/aboutus/sponsorship/lottie/Warranty.json',
        autoplay: false,
        loop: false,
      },
    },
    {
      label: 'Industrial Partners',
      value: '150+',
      iconPath: '/assets/images/aboutus/sponsorship/lottie/Community.json',
      options: {
        path: '/assets/images/aboutus/sponsorship/lottie/Community.json',
        autoplay: false,
        loop: false,
      },
    },
    {
      label: 'Academe Partners',
      value: '150+',
      iconPath: '/assets/images/aboutus/sponsorship/lottie/Learned.json',
      options: {
        path: '/assets/images/aboutus/sponsorship/lottie/Learned.json',
        autoplay: false,
        loop: false,
      },
    },
    {
      label: 'Commitment to Service',
      value: '100%',
      iconPath: '/assets/images/aboutus/sponsorship/lottie/Heart.json',
      options: {
        path: '/assets/images/aboutus/sponsorship/lottie/Heart.json',
        autoplay: false,
        loop: false,
      },
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

  ngOnInit(): void {}

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

    this.setupScrollAnimations();
    this.initVideoModal();
  }

  // --- VIDEO MODAL LOGIC ---
  openVideo(): void {
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo') as HTMLVideoElement;

    if (videoModal && modalVideo) {
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden'; // prevent background scrolling
      modalVideo.play();
    }
  }

  private closeModal(): void {
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo') as HTMLVideoElement;

    if (videoModal) {
      videoModal.classList.remove('active');
      document.body.style.overflow = ''; // restore scrolling
      if (modalVideo) {
        modalVideo.pause();
        modalVideo.currentTime = 0; // reset video to beginning
      }
    }
  }

  private initVideoModal(): void {
    // We bind local listeners instead of global script to ensure cleanup is easier if needed,
    // though for now we stick to document selection as the modal is outside the component.

    const modalOverlay = document.getElementById('modalOverlay');
    const closeVideoBtn = document.getElementById('closeVideoBtn');
    const videoModal = document.getElementById('videoModal');

    // close on X button click
    if (closeVideoBtn) {
      closeVideoBtn.addEventListener('click', () => this.closeModal());
    }

    // close on overlay click
    if (modalOverlay) {
      modalOverlay.addEventListener('click', () => this.closeModal());
    }

    // close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
        this.closeModal();
      }
    });
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

  // --- NAVIGATION LOGIC ---
  scrollToSection(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
