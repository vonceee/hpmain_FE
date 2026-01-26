import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-badge',
  standalone: true,
  templateUrl: './title-badge.html',
  styleUrl: './title-badge.scss',
})
export class TitleBadge {
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() align: 'left' | 'center' = 'center';
}
