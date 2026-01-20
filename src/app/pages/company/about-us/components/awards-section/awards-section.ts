import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';
import { ContainerBox } from 'src/app/components/container-box/container-box';

@Component({
  selector: 'awards-section',
  imports: [CommonModule, TitleBadge, ContainerBox],
  templateUrl: './awards-section.html',
  styleUrls: ['./awards-section.scss'],
})
export class AwardsSection {}
