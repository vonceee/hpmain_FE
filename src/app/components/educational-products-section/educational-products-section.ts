import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';
import { ContainerBox } from 'src/app/components/container-box/container-box';

@Component({
  selector: 'educational-products-section',
  imports: [CommonModule, TitleBadge, ContainerBox],
  templateUrl: './educational-products-section.html',
  styleUrls: ['./educational-products-section.scss'],
})
export class EducationalProductsSection {}