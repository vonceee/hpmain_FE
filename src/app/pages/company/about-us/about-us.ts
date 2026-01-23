import {
  Component,
  signal,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
  HostListener,
  OnInit,
  OnDestroy,
  Inject,
  Renderer2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MainHeader } from 'src/app/components/main-header/main-header';
import { MainFooter } from 'src/app/components/main-footer/main-footer';
import { CommonModule } from '@angular/common';
import { HeroSection } from 'src/app/components/hero-section/hero-section';
import { DecorGlowComponent } from 'src/app/components/decor-glow/decor-glow';
import { JourneySection } from './components/journey-section/journey-section';
import { AwardsSection } from './components/awards-section/awards-section';
import { PresidentSection } from './components/president-section/president-section';
import { ProgramsSection } from './components/programs-section/programs-section';
import { PartnershipsSection } from './components/partnerships-section/partnerships-section';
import { MissionVisionSection } from './components/mission-vision-section/mission-vision-section';

interface NavTab {
  id: number;
  label: string;
  icon: string;
}

// Component Definition
@Component({
  selector: 'about-us',
  host: { class: 'about-us-page' },
  imports: [
    MainHeader,
    CommonModule,
    HeroSection,
    DecorGlowComponent,
    JourneySection,
    AwardsSection,
    PresidentSection,
    ProgramsSection,
    PartnershipsSection,
    MissionVisionSection,
  ],
  templateUrl: './about-us.html',
  styleUrls: ['./about-us.scss'],
})
export class aboutUs implements AfterViewInit, OnInit, OnDestroy {
  tab = signal<number>(0);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    // Moved scroll styles to :host in SCSS to prevent layout shifts and double scrollbars
  }

  ngOnDestroy() {}

  /* -- NavTabs Variables -- */
  @ViewChildren('navBtn') navButtons!: QueryList<ElementRef>;
  indicatorLeft = signal<string>('0px');
  indicatorWidth = signal<string>('0px');

  navTabs: NavTab[] = [
    { id: 0, label: 'Our Journey', icon: 'bi bi-building' },
    { id: 1, label: 'Awards & Achievements', icon: 'bi bi-award' },
    { id: 2, label: 'President & CEO', icon: 'bi bi-person' },
    { id: 3, label: 'Programs', icon: 'bi bi-award' },
    { id: 4, label: 'Partnerships', icon: 'bi bi-briefcase' },
    { id: 5, label: 'Mission & Vision', icon: 'bi bi-rocket-takeoff' },
  ];

  /* -- Scroll to Top Logic -- */
  showScrollTop = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* -- NavTabs Functions -- */
  ngAfterViewInit() {
    // timeout ensures the DOM is fully rendered before measuring
    setTimeout(() => this.updateIndicator(this.tab()), 50);
  }

  // update the measurement whenever the window resizes
  @HostListener('window:resize')
  onResize() {
    this.updateIndicator(this.tab());
  }

  // setTab method to trigger the update
  setTab(index: number) {
    this.tab.set(index);
    this.updateIndicator(index);
  }

  // find the active button and move the pill
  updateIndicator(index: number) {
    if (!this.navButtons) return;

    const elements = this.navButtons.toArray();
    const activeBtn = elements[index]?.nativeElement;

    if (activeBtn) {
      // offsetLeft gives the position relative to the .body-nav container
      this.indicatorLeft.set(`${activeBtn.offsetLeft}px`);
      this.indicatorWidth.set(`${activeBtn.offsetWidth}px`);
    }
  }
}
