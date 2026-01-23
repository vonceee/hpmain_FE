import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'main-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './main-header.html',
  styleUrl: './main-header.scss',
})
export class MainHeader {
  isMobileMenuOpen = false;
  isDesktop = false;

  constructor() {
    this.checkScreenSize();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // Prevent body scroll when mobile menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    const wasDesktop = this.isDesktop;
    // content-based breakpoint matching the SCSS variable $nav-switch-point
    this.isDesktop = window.matchMedia('(min-width: 60rem)').matches;

    // close mobile menu if switching to desktop view
    if (this.isDesktop && wasDesktop === false && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  // UPDATED METHOD
  onNavLinkClick(): void {
    // 1. Scroll to top immediately or smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Change to 'auto' if you want it to jump instantly
    });

    // 2. Handle mobile menu closing logic
    if (!this.isDesktop && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
}
