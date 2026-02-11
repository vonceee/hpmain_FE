import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  socials?: {
    linkedin?: string;
    github?: string;
    facebook?: string;
  };
}

@Component({
  selector: 'team-department-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-department-carousel.html',
  styleUrl: './team-department-carousel.scss',
})
export class TeamDepartmentCarousel implements OnInit, OnDestroy {
  @Input() departmentName: string = '';
  @Input() members: TeamMember[] = [];
  @ViewChild('carousel') carouselRef!: ElementRef<HTMLDivElement>;

  activeIndex = 0;
  autoScrollInterval: any;
  isDragging = false;
  startX = 0;
  currentTranslate = 0;
  prevTranslate = 0;
  animationID: number | null = null;
  readonly PAGINATION_DOT_LIMIT = 20; // switch to compact pager when exceeded

  readonly AUTO_SCROLL_INTERVAL = 4000; // 4 seconds
  readonly SWIPE_THRESHOLD = 50; // pixels
  readonly PEEK_WIDTH = 120; // pixels for peeking next/prev

  get showCompactPager(): boolean {
    return this.members && this.members.length > this.PAGINATION_DOT_LIMIT;
  }

  goTo(index: number) {
    if (index < 0 || index >= this.members.length) return;
    this.activeIndex = index;
    this.updateCarousel();
  }

  nextPage() {
    this.next();
  }

  prevPage() {
    this.prev();
  }

  ngOnInit() {
    // No auto-scroll, swipe only
  }

  ngOnDestroy() {
    if (this.animationID) {
      cancelAnimationFrame(this.animationID);
    }
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.members.length;
  }

  prev() {
    this.activeIndex =
      (this.activeIndex - 1 + this.members.length) % this.members.length;
  }

  updateCarousel() {
    // No longer restarts auto-scroll
  }

  getItemClass(index: number): string {
    const len = this.members.length;
    const prevIndex = (this.activeIndex - 1 + len) % len;
    const nextIndex = (this.activeIndex + 1) % len;

    if (index === this.activeIndex) return 'item current';
    if (index === prevIndex) return 'item previous';
    if (index === nextIndex) return 'item next';

    return 'item hidden';
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.startDragging(event.clientX);
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.startDragging(event.touches[0].clientX);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.onDrag(event.clientX);
    }
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (this.isDragging) {
      this.onDrag(event.touches[0].clientX);
    }
  }

  @HostListener('mouseup')
  @HostListener('touchend')
  onDragEnd() {
    this.endDragging();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.isDragging) {
      this.endDragging();
    }
  }

  private startDragging(startX: number) {
    this.isDragging = true;
    this.startX = startX;
    this.prevTranslate = this.currentTranslate;
  }

  private onDrag(currentX: number) {
    const diff = currentX - this.startX;
    this.currentTranslate = this.prevTranslate + diff * 0.2; // Dampen drag movement
  }

  private endDragging() {
    this.isDragging = false;
    const diff = this.currentTranslate - this.prevTranslate;

    if (Math.abs(diff) > this.SWIPE_THRESHOLD) {
      if (diff > 0) {
        this.prev();
      } else {
        this.next();
      }
    }

    this.currentTranslate = 0;
    this.prevTranslate = 0;
  }
}
