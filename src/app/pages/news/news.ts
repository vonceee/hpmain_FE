import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Added for routerLink
import { MainHeader } from 'src/app/components/main-header/main-header';
import { MainFooter } from 'src/app/components/main-footer/main-footer';
import { HeroSection } from 'src/app/components/hero-section/hero-section';
import { DecorGlowComponent } from 'src/app/components/decor-glow/decor-glow';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';
import { SectionHeader } from 'src/app/components/section-header/section-header';
import { BackToTopComponent } from 'src/app/components/back-to-top/back-to-top';
import { NewsService, NewsItem } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    MainHeader,
    MainFooter,
    HeroSection,
    DecorGlowComponent,
    CommonModule,
    TitleBadge,
    SectionHeader,
    BackToTopComponent,
    RouterModule, // Needed for [routerLink]
  ],
  templateUrl: './news.html',
  styleUrl: './news.scss',
})
export class News implements OnInit {
  activePreviewUrl: string | null = null;
  selectedVideo: SafeResourceUrl | null = null;
  previewVideoSafeUrl: SafeResourceUrl | null = null;
  hoverTimeout: any;

  featuredNews!: NewsItem;
  educationalNews: NewsItem[] = [];
  industrialNews: NewsItem[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private newsService: NewsService,
  ) {}

  ngOnInit() {
    this.newsService.getFeaturedNews().subscribe((data) => {
      this.featuredNews = data;
    });
    this.newsService.getEducationalNews().subscribe((data) => {
      this.educationalNews = data;
    });
    this.newsService.getIndustrialNews().subscribe((data) => {
      this.industrialNews = data;
    });
  }

  playVideo(url: string) {
    const embedUrl = this.getEmbedUrl(url);
    this.selectedVideo = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  closeVideo() {
    this.selectedVideo = null;
  }

  startPreview(videoUrl: string) {
    this.hoverTimeout = setTimeout(() => {
      this.activePreviewUrl = videoUrl;
      const embedUrl = this.getEmbedUrl(videoUrl);
      const previewUrl = `${embedUrl}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${this.getVideoId(videoUrl)}`;
      this.previewVideoSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(previewUrl);
    }, 1500); // 1.5s delay
  }

  stopPreview() {
    clearTimeout(this.hoverTimeout);
    this.activePreviewUrl = null;
    this.previewVideoSafeUrl = null;
  }

  private getEmbedUrl(url: string): string {
    const videoId = this.getVideoId(url);
    return `https://www.youtube.com/embed/${videoId}`;
  }

  private getVideoId(url: string): string {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : '';
  }

  shorts = [
    {
      videoUrl: 'https://youtube.com/shorts/SMHBzqiR0V8?si=HbNkbMpbhOttj4xK',
      thumbnail: 'https://img.youtube.com/vi/SMHBzqiR0V8/hqdefault.jpg',
      title: '1st F2F GENERAL MEETING 3',
      duration: '< 1 min',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/7ZYXiXw3yjc',
      thumbnail: 'https://img.youtube.com/vi/7ZYXiXw3yjc/hqdefault.jpg',
      title: '012822 Amatrol ACDC video ads',
      duration: '< 1 min',
    },
    {
      videoUrl: 'https://youtube.com/shorts/RhMqYoVBMvI?si=Hs714tw1CfGhnm9j',
      thumbnail: 'https://img.youtube.com/vi/RhMqYoVBMvI/hqdefault.jpg',
      title: '01 Mickey The talking parrot',
      duration: '< 1 min',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/7ZYXiXw3yjc',
      thumbnail: 'https://img.youtube.com/vi/7ZYXiXw3yjc/hqdefault.jpg',
      title: '012822 Amatrol ACDC video ads',
      duration: '< 1 min',
    },
  ];
}
