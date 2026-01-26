import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  darkMode = signal<boolean>(false);

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.darkMode.set(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.darkMode.set(prefersDark);
    }

    effect(() => {
      const isDark = this.darkMode();
      document.body.classList.toggle('dark-theme', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  toggleTheme() {
    this.darkMode.update((current) => !current);
  }
}
