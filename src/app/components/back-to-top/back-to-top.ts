import {
  Component,
  ElementRef,
  OnDestroy,
  AfterViewInit,
  signal,
  NgZone,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'back-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-to-top.html',
  styleUrls: ['./back-to-top.scss'],
})
export class BackToTopComponent implements AfterViewInit, OnDestroy {
  @Input() scrollTarget: HTMLElement | null = null;
  showScrollTop = false;
  private scrollContainer: HTMLElement | Window | null = null;
  private scrollListener: (() => void) | null = null;

  constructor(
    private el: ElementRef,
    private zone: NgZone,
  ) {}

  ngAfterViewInit() {
    // Simple, robust logic: explicit target OR window. No guessing.
    this.scrollContainer = this.scrollTarget || window;

    // Small timeout to ensure inputs are bound and layout is ready
    setTimeout(() => {
      this.attachScrollListener();
    }, 100);
  }

  ngOnDestroy() {
    this.removeScrollListener();
  }

  private attachScrollListener() {
    const container = this.scrollContainer;
    if (!container) {
      console.warn('[BackToTop] No container to attach listener to');
      return;
    }

    this.zone.runOutsideAngular(() => {
      const listener = () => {
        this.checkVisibility(container);
      };

      container.addEventListener('scroll', listener);
      console.log('[BackToTop] Scroll listener attached to:', container);

      this.scrollListener = () => container.removeEventListener('scroll', listener);

      // Initial check
      this.checkVisibility(container);
    });
  }

  private checkVisibility(container: HTMLElement | Window) {
    let scrollTop = 0;
    let viewportHeight = 0;

    if (container instanceof Window) {
      scrollTop = window.scrollY || document.documentElement.scrollTop;
      viewportHeight = window.innerHeight;
    } else {
      scrollTop = (container as HTMLElement).scrollTop;
      viewportHeight = (container as HTMLElement).clientHeight;
    }

    // Show after scrolling past 80% of the first section (viewport height)
    // Fallback to 800px if viewportHeight is 0 (unlikely)
    const threshold = (viewportHeight || 800) * 0.8;

    const shouldShow = scrollTop > threshold;
    if (this.showScrollTop !== shouldShow) {
      this.zone.run(() => {
        console.log('[BackToTop] Visibility changed:', shouldShow);
        this.showScrollTop = shouldShow;
      });
    }
  }

  private removeScrollListener() {
    if (this.scrollListener) {
      this.scrollListener();
      this.scrollListener = null;
    }
  }

  scrollToTop() {
    console.log('[BackToTop] Scrolling to top...');
    if (this.scrollContainer) {
      this.scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
