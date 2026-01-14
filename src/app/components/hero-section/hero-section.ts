import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.scss'],
})
export class HeroSection {
  @Input() heroImage: string = '/assets/images/home/234acacc5e5bd069189972b51d9bfeeade704003.jpg';
  @Input() heroTitle: string = 'HYTEC POWER INCORPORATED';
  @Input() heroSubtitle: string = '';
  @Input() heroDatePill: string = '';
}
