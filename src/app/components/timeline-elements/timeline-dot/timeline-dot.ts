import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline-dot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-dot.html',
  styleUrl: './timeline-dot.scss',
})
export class TimelineDotComponent {
  @Input() size: number = 16; // default size in px
  @Input() withBorder: boolean = true;
  @Input() customClass: string = '';
}
