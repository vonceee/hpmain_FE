import { Component, signal } from '@angular/core';
import { MainHeader } from "src/app/components/main-header/main-header";
import { MainFooter } from "src/app/components/main-footer/main-footer";
import { TitleBadge } from 'src/app/components/title-badge/title-badge';
import { CommonModule } from '@angular/common';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}

@Component({
  selector: 'about-us',
  imports: [MainHeader, MainFooter, CommonModule, TitleBadge],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class aboutUs {
  tab = signal<number>(0)

  events: TimelineEvent[] = [
    {
      year: '1994',
      title: 'The Beginning',
      description: 'Hytec Power Inc. was founded to empower technical education across the Philippines.',
      position: 'left'
    },
    {
      year: '2000',
      title: 'Expansion Era',
      description: 'Partnered with leading global brands like Fischertechnik, De Lorenzo, and PHYWE to bring world-class educational solutions.',
      position: 'right'
    },
    {
      year: '2010',
      title: 'Innovation Phase',
      description: 'Introduced robotics and automation solutions including VEX Robotics, Armatrol, and advanced manufacturing systems.',
      position: 'left'
    },
    {
      year: '2020',
      title: 'Industry 4.0',
      description: 'Leading the transition to smart manufacturing and digital education with AI, IoT, and advanced automation.',
      position: 'right'
    },
    {
      year: '2025',
      title: 'Future Forward',
      description: 'Continuing to shape the future of technical education with cutting-edge technology and strategic partnerships.',
      position: 'left'
    }
  ];
}
