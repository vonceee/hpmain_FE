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
    this.isDesktop = window.innerWidth >= 768;

    // close mobile menu if resizing to desktop
    if (this.isDesktop && wasDesktop === false && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  // close mobile menu when clicking on navigation links
  onNavLinkClick(): void {
    if (!this.isDesktop && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
}