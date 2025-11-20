import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CarouselItem {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-carousel-v1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-v1.html',
  styleUrl: './carousel-v1.css',
})
export class CarouselV1 {
  items: CarouselItem[] = [
    {
      title: 'AFTER SALES 1',
      description: 'Description for item 1',
      image: 'assets/images/solutions/industrial/our-services/item-image-1.png'
    },
    {
      title: 'MAINTENANCE 2',
      description: 'Description for item 2',
      image: 'assets/images/solutions/industrial/our-services/item-image-2.png'
    },
    {
      title: 'ENGINEERING 3',
      description: 'Description for item 3',
      image: 'assets/images/solutions/industrial/our-services/item-image-3.png'
    },
    {
      title: 'SUPPORT 4',
      description: 'Description for item 4',
      image: 'assets/images/solutions/industrial/our-services/item-image-4.png'
    },
    {
      title: 'LOGISTICS 5',
      description: 'Description for item 5',
      image: 'assets/images/solutions/industrial/our-services/item-image-5.png'
    },
    {
      title: 'TRAINING 6',
      description: 'Description for item 6',
      image: 'assets/images/solutions/industrial/our-services/item-image-6.png'
    },
    {
      title: 'CONSULTING 7',
      description: 'Description for item 7',
      image: 'assets/images/solutions/industrial/our-services/item-image-7.png'
    },
  ];

  activeIndex = 0;

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.items.length;
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length;
  }

  getItemClass(index: number): string {
    const len = this.items.length;

    const prevIndex = (this.activeIndex - 1 + len) % len;
    const nextIndex = (this.activeIndex + 1) % len;

    if (index === this.activeIndex) return 'item current';
    if (index === prevIndex) return 'item previous';
    if (index === nextIndex) return 'item next';

    return 'item hidden';
  }
}
