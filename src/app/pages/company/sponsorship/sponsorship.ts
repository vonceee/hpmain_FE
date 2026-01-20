import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

import { MainHeader } from 'src/app/components/main-header/main-header';
import { MainFooter } from 'src/app/components/main-footer/main-footer';
import { HeroSection } from 'src/app/components/hero-section/hero-section';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

interface StatItem {
  label: string;
  value: string;
  iconPath: string; // path to the .json Lottie file
  options: AnimationOptions;
}

@Component({
  selector: 'app-sponsorship',
  standalone: true,
  imports: [MainHeader, MainFooter, HeroSection, LottieComponent],
  templateUrl: './sponsorship.html',
  styleUrl: './sponsorship.scss',
})
export class Sponsorship implements AfterViewInit, OnDestroy {
  @ViewChildren('statItem') statItemElements!: QueryList<ElementRef>;
  @ViewChildren('marqueeTrack') marqueeTrack!: QueryList<ElementRef>;

  private observer: IntersectionObserver | undefined;
  private visibleIndices = new Set<number>();

  partners = [
    { name: 'Cybertech', logo: 'assets/images/aboutus/sponsorship/logocybertech.png' },
    { name: 'VEX Robotics', logo: 'assets/images/aboutus/sponsorship/logovex.png' },
    { name: 'ElectroVex', logo: 'assets/images/aboutus/sponsorship/logophilippinerobot.png' },
    { name: 'VEX U', logo: 'assets/images/aboutus/sponsorship/logovexUrobcom.png' },
    { name: 'World Skills', logo: 'assets/images/aboutus/sponsorship/world-skills-asean-logo.png' },
  ];

  /* ... data ... */

  competitionLevels = [
    {
      title: 'Primary and Pre-school Level',
      description: 'These includes Robo Kids 1 & 2 and Animal Bot 1 & 2.',
      image: 'assets/images/aboutus/sponsorship/ewh9g7er7qere9723r.png',
    },
    {
      title: 'Secondary Level',
      description:
        'These includes Robo Kit 3, VEX Classroom Competition Team Kit, and Fishertechnik ROBO TX Explorer',
      image: 'assets/images/aboutus/sponsorship/hdsbvaibaidsbvo.png',
    },
    {
      title: 'Tertiary Level',
      description: 'These includes Robo Kit 5, VEX Competition Robot, and ROBO TX Training Lab',
      image: 'assets/images/aboutus/sponsorship/lbkjablkjavnlapvknapva.png',
    },
  ];

  statistics: StatItem[] = [
    {
      value: '24,000',
      label: 'Participating Teams',
      iconPath: '/assets/images/aboutus/sponsorship/lottie/Partnership.json',
      options: {
        path: '/assets/images/aboutus/sponsorship/lottie/Partnership.json',
        autoplay: false,
        loop: false,
      },
    },
    {
      value: '1,000,000',
      label: 'Students Reached Globally',
      iconPath: '/assets/images/aboutus/sponsorship/lottie/Team.json',
      options: {
        path: '/assets/images/aboutus/sponsorship/lottie/Team.json',
        autoplay: false,
        loop: false,
      },
    },
    {
      value: '60+',
      label: 'Countries Represented',
      iconPath: '/assets/images/aboutus/sponsorship/lottie/Globe.json',
      options: {
        path: '/assets/images/aboutus/sponsorship/lottie/Globe.json',
        autoplay: false,
        loop: false,
      },
    },
    {
      value: '22,000',
      label: 'Participating Schools',
      iconPath: '/assets/images/aboutus/sponsorship/lottie/AcademicBackground.json',
      options: {
        path: '/assets/images/aboutus/sponsorship/lottie/AcademicBackground.json',
        autoplay: false,
        loop: false,
      },
    },
  ];

  private animationItems = new Map<number, AnimationItem>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.setupIntersectionObserver();
    this.setupMarqueeAnimation();
  }

  private setupMarqueeAnimation() {
    // the marquee track element
    const track = this.marqueeTrack.first?.nativeElement;
    if (!track) return;

    // wait a tick to ensure animations are ready
    setTimeout(() => {
      const animations = track.getAnimations();
      if (animations.length > 0) {
        const anim = animations[0]; // the scroll animation

        let currentRate = 8; // start very fast
        const targetRate = 1;
        const duration = 2500; // time to slow down in ms
        const startTime = performance.now();

        // set initial rate
        anim.updatePlaybackRate(currentRate);

        const step = (currentTime: number) => {
          const elapsed = currentTime - startTime;

          if (elapsed >= duration) {
            anim.updatePlaybackRate(targetRate);
            return; // done
          }

          // ease out exponential decay-ish via linear interpolation for simplicity or ease-out
          // simple linear:
          currentRate = 8 - 7 * (elapsed / duration);
          const t = elapsed / duration;
          const easeOut = 1 - Math.pow(1 - t, 3);

          // interpolate
          currentRate = 8 - 7 * easeOut;

          anim.updatePlaybackRate(currentRate);
          requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
      }
    }, 100);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // General Scroll Animation
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }

          // Existing Lottie Logic
          const index = this.statItemElements
            .toArray()
            .findIndex((el) => el.nativeElement === entry.target);

          if (index !== -1) {
            if (entry.isIntersecting) {
              this.visibleIndices.add(index);
              const item = this.animationItems.get(index);
              if (item) {
                item.stop();
                item.play();
              }
            } else {
              this.visibleIndices.delete(index);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe specific stat items
    this.statItemElements.forEach((el) => this.observer?.observe(el.nativeElement));

    // Observe generic animated elements
    const animatedElements = this.el.nativeElement.querySelectorAll(
      '.animate-on-scroll, .slide-in-left, .slide-in-right, .animate-fade-in'
    );
    animatedElements.forEach((el: Element) => this.observer?.observe(el));
  }

  animationCreated(animationItem: AnimationItem, index: number): void {
    console.log('Animation created for index', index);
    this.animationItems.set(index, animationItem);

    // If already visible, play immediately
    if (this.visibleIndices.has(index)) {
      animationItem.play();
    }
  }

  onMouseEnter(index: number): void {
    const item = this.animationItems.get(index);
    if (item) {
      item.stop(); // Ensure it starts from the beginning
      item.play();
    }
  }

  contactInfo = {
    phone: '+63 917 123 4567',
    email: 'info@hytecpower.com',
  };
}
