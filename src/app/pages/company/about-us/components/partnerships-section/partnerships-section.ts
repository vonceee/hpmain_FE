import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';
import { ContainerBox } from 'src/app/components/container-box/container-box';

@Component({
  selector: 'partnerships-section',
  imports: [CommonModule, TitleBadge, ContainerBox],
  templateUrl: './partnerships-section.html',
  styleUrls: ['./partnerships-section.scss'],
})
export class PartnershipsSection {}
