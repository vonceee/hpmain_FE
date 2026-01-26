import {
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

export interface StatItem {
  label: string;
  value: string;
  iconPath: string;
  options: AnimationOptions;
}

@Component({
  selector: 'stats-grid',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './stats-grid.component.html',
  styleUrl: './stats-grid.component.scss',
})
export class StatsGridComponent implements AfterViewInit, OnDestroy {
  @Input() items: StatItem[] = [];

  @ViewChildren('statItem') statItemElements!: QueryList<ElementRef>;

  private observer: IntersectionObserver | undefined;
  private visibleIndices = new Set<number>();
  private animationItems = new Map<number, AnimationItem>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.setupIntersectionObserver();
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

          // Lottie Logic
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
      { threshold: 0.2 },
    );

    // Observe specific stat items
    this.statItemElements.changes.subscribe(() => {
      this.observeElements();
    });

    // Initial observation
    this.observeElements();
  }

  private observeElements() {
    if (!this.observer) return;
    this.statItemElements.forEach((el) => this.observer?.observe(el.nativeElement));
  }

  animationCreated(animationItem: AnimationItem, index: number): void {
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
}
