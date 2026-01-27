import { Component } from '@angular/core';
import { CarouselV1 } from 'src/app/components/carousel-v1/carousel-v1';
import { BackToTopComponent } from 'src/app/components/back-to-top/back-to-top';
import { MainHeader } from 'src/app/components/main-header/main-header';

@Component({
  selector: 'industrial',
  imports: [MainHeader, CarouselV1, BackToTopComponent],
  templateUrl: './industrial.html',
  styleUrl: './industrial.scss',
})
export class Industrial {}
