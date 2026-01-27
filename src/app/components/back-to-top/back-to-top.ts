import {
  Component,
  ElementRef,
  OnDestroy,
  AfterViewInit,
  NgZone,
  Input,
  ChangeDetectorRef,
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
  @Input() set scrollTarget(value: HTMLElement | null) {
    if (value) {
      console.log('[BackToTop] scrollTarget set via input:', value);
      this._scrollTarget = value;
      this.setupListener();
    }
  }

  get scrollTarget() {
    return this._scrollTarget;
  }

  showScrollTop = false;
  private _scrollTarget: HTMLElement | null = null;
  private scrollContainer: HTMLElement | Window | null = null;
  private scrollListener: (() => void) | null = null;

  constructor(
    private el: ElementRef,
    private zone: NgZone,
    private cdr: ChangeDetectorRef,
  ) {
    console.log('[BackToTop] Component initialized (Fixed Version)');
  }

  ngAfterViewInit() {
    if (!this._scrollTarget) {
      console.warn('[BackToTop] No scrollTarget input. Attempting fallback...');

      const mainContent = document.querySelector('.main-content');
      if (mainContent instanceof HTMLElement) {
        console.log('[BackToTop] Found .main-content via querySelector');
        this._scrollTarget = mainContent;
      } else {
        console.log('[BackToTop] Fallback to window');
        this.scrollContainer = window;
      }
    }

    this.setupListener();
  }

  ngOnDestroy() {
    this.removeScrollListener();
  }

  private setupListener() {
    this.removeScrollListener();

    this.scrollContainer = this._scrollTarget || window;
    const container = this.scrollContainer;

    if (!container) return;

    this.zone.runOutsideAngular(() => {
      const listener = () => {
        const scrollTop = this.getScrollTop(container);

        this.updateVisibility(scrollTop);
      };

      container.addEventListener('scroll', listener, { passive: true });
      this.scrollListener = () => container.removeEventListener('scroll', listener);

      console.log('[BackToTop] Listener attached to:', container);
      this.updateVisibility(this.getScrollTop(container));
    });
  }

  private getScrollTop(container: HTMLElement | Window): number {
    if (container instanceof Window) {
      return window.scrollY || document.documentElement.scrollTop;
    }
    return (container as HTMLElement).scrollTop;
  }

  private updateVisibility(scrollTop: number) {
    const shouldShow = scrollTop > 100;

    if (this.showScrollTop !== shouldShow) {
      this.zone.run(() => {
        this.showScrollTop = shouldShow;
        this.cdr.detectChanges();
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
    const container = this._scrollTarget || this.scrollContainer || window;
    console.log('[BackToTop] Scrolling to top on:', container);

    if (container.scrollTo) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (container instanceof Window) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      (container as HTMLElement).scrollTop = 0;
    }
  }
}
