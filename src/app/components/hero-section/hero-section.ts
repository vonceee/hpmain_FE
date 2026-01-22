import { Component, Input } from '@angular/core';
import { DecorGlowComponent } from '../decor-glow/decor-glow';

@Component({
  selector: 'hero-section',
  imports: [DecorGlowComponent],
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.scss'],
})
export class HeroSection {
  @Input() heroImage: string = '/assets/images/home/234acacc5e5bd069189972b51d9bfeeade704003.jpg';
  @Input() heroTitle: string = 'HYTEC POWER INCORPORATED';
  @Input() heroSubtitle: string = '';
  @Input() heroDatePill: string = '';
  @Input() variant: 'full' | 'slim' = 'full';
}
