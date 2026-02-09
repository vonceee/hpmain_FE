import { Component, signal, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackToTopComponent } from 'src/app/components/back-to-top/back-to-top';
import { MainHeader } from 'src/app/components/main-header/main-header';
import { MainFooter } from 'src/app/components/main-footer/main-footer';
import { HeroSection } from 'src/app/components/hero-section/hero-section';
import { DecorGlowComponent } from 'src/app/components/decor-glow/decor-glow';
import { EducationalFirstSection } from 'src/app/components/educational-first-section/educational-first-section';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';

@Component({
  selector: 'educational',
  standalone: true,
  imports: [CommonModule, BackToTopComponent, MainHeader, MainFooter, HeroSection, DecorGlowComponent, EducationalFirstSection, TitleBadge],
  templateUrl: './educational.html',
  styleUrl: './educational.scss',
})
export class Educational implements OnInit, OnDestroy {

  //CAROUSEL VIDEOS
  // 1. Video Data prepared for Database Integration
  videos = signal([
    { id: 1, title: 'What is total bolting solution?', thumbnail: '/assets/images/videos/v1.jpg', youtubeUrl: '#' },
    { id: 2, title: 'Industrial Robotics 101', thumbnail: '/assets/images/videos/v2.jpg', youtubeUrl: '#' },
    { id: 3, title: 'Smart Factory Integration', thumbnail: '/assets/images/videos/v3.jpg', youtubeUrl: '#' },
    { id: 4, title: 'AI in Manufacturing', thumbnail: '/assets/images/videos/v4.jpg', youtubeUrl: '#' },
    { id: 5, title: 'Predictive Maintenance', thumbnail: '/assets/images/videos/v5.jpg', youtubeUrl: '#' }
  ]);

  // 2. Carousel Positioning
  videoStartIndex = signal(0);
  visibleCount = signal(4); // Shows 4 videos at a time on desktop

  // Handle responsiveness via window resize
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateVisibleCount(event.target.innerWidth);
  }

  updateVisibleCount(width: number) {
    if (width < 768) this.visibleCount.set(1);
    else if (width < 1200) this.visibleCount.set(2);
    else this.visibleCount.set(4);
  }

  nextVideos() {
    const total = this.videos().length;
    this.videoStartIndex.update(val => (val + 1) % total);
  }

  prevVideos() {
    const total = this.videos().length;
    this.videoStartIndex.update(val => (val - 1 + total) % total);
  }

  // Computed slice for the template
  get visibleVideos() {
    const start = this.videoStartIndex();
    const count = this.visibleCount();
    const list = this.videos();
    
    // Simple logic to wrap around for a continuous carousel feel
    let result = [];
    for (let i = 0; i < count; i++) {
      result.push(list[(start + i) % list.length]);
    }
    return result;
  }


  //CAROUSEL IMAGE
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