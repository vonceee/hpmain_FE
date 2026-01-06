import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

interface AccordionState {
  [key: string]: boolean;
}

@Component({
  selector: 'main-footer',
  imports: [FontAwesomeModule, RouterModule, CommonModule],
  templateUrl: './main-footer.html',
  styleUrl: './main-footer.scss',
})
export class MainFooter {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faLinkedinIn = faLinkedinIn;

  // track which sections are expanded on mobile
  expandedSections: AccordionState = {
    solutions: false,
    news: false,
    trainings: false,
    company: false,
  };

  isMobile = false;

  constructor() {
    this.checkScreenSize();
  }

  toggleSection(section: string): void {
    // only toggle on mobile
    if (this.isMobile) {
      this.expandedSections[section] = !this.expandedSections[section];
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth < 768;

    // if switching from mobile to desktop, reset all sections to expanded
    if (wasMobile && !this.isMobile) {
      Object.keys(this.expandedSections).forEach(key => {
        this.expandedSections[key] = true;
      });
    }
  }

  isSectionExpanded(section: string): boolean {
    // on desktop, all sections are always expanded
    if (!this.isMobile) {
      return true;
    }
    return this.expandedSections[section];
  }
}