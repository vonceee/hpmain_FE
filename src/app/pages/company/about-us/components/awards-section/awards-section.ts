import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';
import { ContainerBox } from 'src/app/components/container-box/container-box';
import { Award } from './award.model';

@Component({
  selector: 'awards-section',
  standalone: true,
  imports: [CommonModule, TitleBadge, ContainerBox],
  templateUrl: './awards-section.html',
  styleUrls: ['./awards-section.scss'],
})
export class AwardsSection {
  // CMS / API-ready structure
  awardsColumns: Award[][] = [
    [
      {
        id: 'philippine-social-award',
        imageUrl: 'assets/images/aboutus/awards/philippine-social-award.png',
        altText: 'Philippine Social Responsibility Award',
      },
      {
        id: 'mosliv-award',
        imageUrl: 'assets/images/aboutus/awards/mosliv-award.png',
        altText: 'MOSLIV Excellence Award',
      },
    ],
    [
      {
        id: 'world-class-philippines',
        imageUrl: 'assets/images/aboutus/awards/world-class-philippines.png',
        altText: 'World-Class Philippines Award',
      },
      {
        id: 'global-award',
        imageUrl: 'assets/images/aboutus/awards/global-award.png',
        altText: 'Global Business Excellence Award',
      },
    ],
    [
      {
        id: 'best-choice-award',
        imageUrl: 'assets/images/aboutus/awards/best-choice-award.png',
        altText: 'Best Choice Excellence Award',
      },
      {
        id: 'golden-global-award',
        imageUrl: 'assets/images/aboutus/awards/golden-global-award.png',
        altText: 'Golden Global Achievement Award',
      },
    ],
    [
      {
        id: 'asia-ceo-award',
        imageUrl: 'assets/images/aboutus/awards/asia-ceo-award.png',
        altText: 'Asia CEO Award',
      },
      {
        id: 'legacy-award',
        imageUrl: 'assets/images/aboutus/awards/legacy-award.png',
        altText: 'Legacy Leadership Award',
      },
    ],
    [
      {
        id: 'nb-mosliv-award',
        imageUrl: 'assets/images/aboutus/awards/nb&mosliv-award.png',
        altText: 'NB and MOSLIV Partnership Award',
      },
      {
        id: 'top-3000',
        imageUrl: 'assets/images/aboutus/awards/top-3000.png',
        altText: 'Top 3000 Companies Award',
      },
    ],
  ];
}
