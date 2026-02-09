import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';
import { ContainerBox } from 'src/app/components/container-box/container-box';

@Component({
  selector: 'educational-first-section',
  imports: [CommonModule, TitleBadge, ContainerBox],
  templateUrl: './educational-first-section.html',
  styleUrls: ['./educational-first-section.scss'],
})
export class EducationalFirstSection {}
