import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';

@Component({
  selector: 'mission-vision-section',
  imports: [CommonModule, TitleBadge],
  templateUrl: './mission-vision-section.html',
  styleUrls: ['./mission-vision-section.scss'],
})
export class MissionVisionSection {}
