import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-line.html',
  styleUrl: './timeline-line.scss',
})
export class TimelineLineComponent {
  @Input() variant: 'default' | 'slim' | 'faded' = 'default';
  @Input() customClass: string = '';
}
