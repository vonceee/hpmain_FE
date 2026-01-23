import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeader } from 'src/app/components/main-header/main-header';
import { MainFooter } from 'src/app/components/main-footer/main-footer';
import { HeroSection } from 'src/app/components/hero-section/hero-section';
import { DecorGlowComponent } from 'src/app/components/decor-glow/decor-glow';

@Component({
  selector: 'app-news',
  imports: [MainHeader, MainFooter, HeroSection, DecorGlowComponent, CommonModule],
  templateUrl: './news.html',
  styleUrl: './news.scss',
})
export class News {
  featuredNews = {
    title:
      'Hytec Power Incorporated forges innovative partnership with Manuel S. Enverga University Foundation to drive academic growth.',
    image: '/assets/images/news/featured-news.jpg', // Placeholder
    date: '15 Jan 2026',
    category: 'Featured',
  };

  educationalNews: NewsItem[] = [
    {
      title: 'Advanced Laboratories for College Engineering',
      date: '17 August 2025',
      image: '/assets/images/news/edu-1.jpg',
      description:
        'HPI provides state-of-the-art laboratory equipment to upgrade engineering programs.',
    },
    {
      title: 'Revolutionizing Education with smart Classrooms',
      date: '12 September 2025',
      image: '/assets/images/news/edu-2.jpg',
      description: 'HPI launches new smart classroom solutions to enhance learning experiences.',
    },
    {
      title: 'Partnership with Top Universities',
      date: '05 October 2025',
      image: '/assets/images/news/edu-3.jpg',
      description:
        'Collaborating with leading universities to bridge the gap between industry and academe.',
    },
    {
      title: 'New Training Modules for Instructors',
      date: '20 November 2025',
      image: '/assets/images/news/edu-4.jpg',
      description: 'Empowering educators with the latest technology training and certifications.',
    },
  ];

  industrialNews: NewsItem[] = [
    {
      title: 'HPI Launches New Industrial Automation line',
      date: '22 January 2026',
      image: '/assets/images/news/ind-1.jpg', // Placeholder
      description:
        'Introducing the latest in industrial automation technology for manufacturing efficiently.',
    },
    {
      title: 'Sustainable Energy Solutions for Factories',
      date: '10 December 2025',
      image: '/assets/images/news/ind-2.jpg', // Placeholder
      description: 'Helping factories reduce carbon footprint with our new green energy systems.',
    },
    {
      title: 'Robotics Integration in Logistics',
      date: '05 January 2026',
      image: '/assets/images/news/ind-3.jpg', // Placeholder
      description: 'Streamlining logistics operations with advanced robotics and AI integration.',
    },
    {
      title: 'IoT Solutions for Smart Manufacturing',
      date: '28 November 2025',
      image: '/assets/images/news/ind-4.jpg', // Placeholder
      description: 'Connecting machines and data for smarter, data-driven manufacturing decisions.',
    },
  ];

  shorts = [
    '/assets/images/news/short-1.jpg',
    '/assets/images/news/short-2.jpg',
    '/assets/images/news/short-3.jpg',
    '/assets/images/news/short-4.jpg',
  ];
}

interface NewsItem {
  title: string;
  date: string;
  image: string;
  description: string;
}
