import { Component } from '@angular/core';
import { CarouselV1 } from 'src/app/components/carousel-v1/carousel-v1';
import { MainHeader } from 'src/app/components/main-header/main-header';

@Component({
  selector: 'industrial',
  imports: [MainHeader, CarouselV1],
  templateUrl: './industrial.html',
  styleUrl: './industrial.css',
})
export class Industrial {
}
