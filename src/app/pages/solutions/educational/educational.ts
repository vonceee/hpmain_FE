import { Component, signal, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackToTopComponent } from 'src/app/components/back-to-top/back-to-top';
import { MainHeader } from 'src/app/components/main-header/main-header';
import { MainFooter } from 'src/app/components/main-footer/main-footer';

@Component({
  selector: 'educational',
  standalone: true,
  imports: [CommonModule, BackToTopComponent, MainHeader, MainFooter],
  templateUrl: './educational.html',
  styleUrl: './educational.scss',
})
export class Educational implements OnInit, OnDestroy {
  // 1. Carousel State using Signals
  currentSlide = signal(0);
  private intervalId: any;

  // 2. Swipe Tracking Variables
  private touchStartX = 0;
  private touchEndX = 0;

  // 3. Webinar Data
  webinars = [
    {
      title: 'RELATIONAL DATA MODELING FOR BUSINESS OWNERS',
      description: 'Master the art of structuring data to drive business insights. Join our expert-led session on building scalable relational models.',
      image: '/assets/images/expertise/training.jpg' 
    },
    {
      title: 'ADVANCED ROBOTICS IN MODERN EDUCATION',
      description: 'Discover how AI-driven robots like Pepper and NAO are reshaping the classroom experience for students worldwide.',
      image: '/assets/images/expertise/training.jpg' 
    },
    {
      title: 'INDUSTRIAL AI & AUTOMATION',
      description: 'Explore the future of factory floors and how integrated software solutions are optimizing production lines.',
      image: '/assets/images/expertise/training.jpg'
    }
  ];

  ngOnInit() {
    this.startAutoPlay();
  }

  // --- Carousel Logic ---

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 6000); // 6 seconds for better readability
  }

  next() {
    this.currentSlide.update(val => (val + 1) % this.webinars.length);
    this.resetTimer();
  }

  prev() {
    this.currentSlide.update(val => (val - 1 + this.webinars.length) % this.webinars.length);
    this.resetTimer();
  }

  setSlide(index: number) {
    this.currentSlide.set(index);
    this.resetTimer();
  }

  /**
   * Restarts the autoplay timer so the transition doesn't feel 
   * abrupt after a manual user interaction.
   */
  private resetTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.startAutoPlay();
  }

  // --- Mobile Swipe Gestures ---

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const swipeThreshold = 50; // Minimum distance to register as a swipe
    const deltaX = this.touchStartX - this.touchEndX;

    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0) {
        this.next(); // Swiped Left
      } else {
        this.prev(); // Swiped Right
      }
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}