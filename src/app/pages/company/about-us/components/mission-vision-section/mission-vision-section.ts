import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';

import { TimelineLineComponent } from 'src/app/components/timeline-elements/timeline-line/timeline-line';
import { TimelineDotComponent } from 'src/app/components/timeline-elements/timeline-dot/timeline-dot';

@Component({
  selector: 'mission-vision-section',
  imports: [CommonModule, TitleBadge, TimelineLineComponent, TimelineDotComponent],
  templateUrl: './mission-vision-section.html',
  styleUrls: ['./mission-vision-section.scss'],
})
export class MissionVisionSection {}
