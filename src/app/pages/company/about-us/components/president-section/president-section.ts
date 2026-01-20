import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';
import { ContainerBox } from 'src/app/components/container-box/container-box';

@Component({
  selector: 'president-section',
  imports: [CommonModule, TitleBadge, ContainerBox],
  templateUrl: './president-section.html',
  styleUrls: ['./president-section.scss'],
})
export class PresidentSection {}
