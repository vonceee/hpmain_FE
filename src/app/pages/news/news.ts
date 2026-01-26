import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MainHeader } from 'src/app/components/main-header/main-header';
import { MainFooter } from 'src/app/components/main-footer/main-footer';
import { HeroSection } from 'src/app/components/hero-section/hero-section';
import { DecorGlowComponent } from 'src/app/components/decor-glow/decor-glow';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';
import { SectionHeader } from 'src/app/components/section-header/section-header';

@Component({
  selector: 'app-news',
  imports: [
    MainHeader,
    MainFooter,
    HeroSection,
    DecorGlowComponent,
    CommonModule,
    TitleBadge,
    SectionHeader,
  ],
  templateUrl: './news.html',
  styleUrl: './news.scss',
})
export class News {
  activePreviewUrl: string | null = null;
  selectedVideo: SafeResourceUrl | null = null;
  previewVideoSafeUrl: SafeResourceUrl | null = null;
  hoverTimeout: any;

  constructor(private sanitizer: DomSanitizer) {}

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

  featuredNews = {
    title:
      'Hytec Power Incorporated forges innovative partnership with Manual S. Enverga University foundation to drive academic growth.',
    image: 'assets/images/news/b92d05722a0336f1cbb860895fa25279936224f7.png',
    date: '15 Jan 2026',
    category: 'EDUCATIONAL',
    authorName: 'Noh Yunah',
    authorImage: 'assets/images/news/152864596.jpg',
    readTime: '5 minutes read',
    timeAgo: '10 minutes ago',
  };

  educationalNews: NewsItem[] = [
    {
      title: 'Advanced Laboratories for College Engineering',
      date: '17 August 2025',
      image: '/assets/images/news/edu-1.png',
      description:
        'HPI provides state-of-the-art laboratory equipment to upgrade engineering programs.',
    },
    {
      title: 'Revolutionizing Education with smart Classrooms',
      date: '12 September 2025',
      image: '/assets/images/news/edu-2.png',
      description: 'HPI launches new smart classroom solutions to enhance learning experiences.',
    },
    {
      title: 'Partnership with Top Universities',
      date: '05 October 2025',
      image: '/assets/images/news/edu-3.png',
      description:
        'Collaborating with leading universities to bridge the gap between industry and academe.',
    },
    {
      title: 'New Training Modules for Instructors',
      date: '20 November 2025',
      image: '/assets/images/news/edu-4.png',
      description: 'Empowering educators with the latest technology training and certifications.',
    },
    {
      title: 'Advanced Laboratories for College Engineering',
      date: '17 August 2025',
      image: '/assets/images/news/edu-1.png',
      description:
        'HPI provides state-of-the-art laboratory equipment to upgrade engineering programs.',
    },
    {
      title: 'Revolutionizing Education with smart Classrooms',
      date: '12 September 2025',
      image: '/assets/images/news/edu-2.png',
      description: 'HPI launches new smart classroom solutions to enhance learning experiences.',
    },
    {
      title: 'Partnership with Top Universities',
      date: '05 October 2025',
      image: '/assets/images/news/edu-3.png',
      description:
        'Collaborating with leading universities to bridge the gap between industry and academe.',
    },
    {
      title: 'New Training Modules for Instructors',
      date: '20 November 2025',
      image: '/assets/images/news/edu-4.png',
      description: 'Empowering educators with the latest technology training and certifications.',
    },
  ];

  industrialNews: NewsItem[] = [
    {
      title: 'HPI Launches New Industrial Automation line',
      date: '22 January 2026',
      image: '/assets/images/news/ind-1.png',
      description:
        'Introducing the latest in industrial automation technology for manufacturing efficiently.',
    },
    {
      title: 'Sustainable Energy Solutions for Factories',
      date: '10 December 2025',
      image: '/assets/images/news/ind-2.png',
      description: 'Helping factories reduce carbon footprint with our new green energy systems.',
    },
    {
      title: 'Robotics Integration in Logistics',
      date: '05 January 2026',
      image: '/assets/images/news/ind-3.png',
      description: 'Streamlining logistics operations with advanced robotics and AI integration.',
    },
    {
      title: 'IoT Solutions for Smart Manufacturing',
      date: '28 November 2025',
      image: '/assets/images/news/ind-4.png',
      description: 'Connecting machines and data for smarter, data-driven manufacturing decisions.',
    },
    {
      title: 'HPI Launches New Industrial Automation line',
      date: '22 January 2026',
      image: '/assets/images/news/ind-1.png',
      description:
        'Introducing the latest in industrial automation technology for manufacturing efficiently.',
    },
    {
      title: 'Sustainable Energy Solutions for Factories',
      date: '10 December 2025',
      image: '/assets/images/news/ind-2.png',
      description: 'Helping factories reduce carbon footprint with our new green energy systems.',
    },
    {
      title: 'Robotics Integration in Logistics',
      date: '05 January 2026',
      image: '/assets/images/news/ind-3.png',
      description: 'Streamlining logistics operations with advanced robotics and AI integration.',
    },
    {
      title: 'IoT Solutions for Smart Manufacturing',
      date: '28 November 2025',
      image: '/assets/images/news/ind-4.png',
      description: 'Connecting machines and data for smarter, data-driven manufacturing decisions.',
    },
  ];

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

interface NewsItem {
  title: string;
  date: string;
  image: string;
  description: string;
}
