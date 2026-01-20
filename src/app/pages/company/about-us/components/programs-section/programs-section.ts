import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';

interface GalleryItem {
  src: string;
  caption: string;
}

@Component({
  selector: 'programs-section',
  imports: [CommonModule, TitleBadge],
  templateUrl: './programs-section.html',
  styleUrls: ['./programs-section.scss'],
})
export class ProgramsSection implements OnInit, OnDestroy {
  /* -- Outreach Gallery Variables -- */
  currentGalleryIndex = signal<number>(0);
  private autoPlayInterval: any;

  galleryItems: GalleryItem[] = [
    {
      src: '/assets/images/aboutus/programs/07e4af2a12cc40d65d4ffdce1070383cda9a6972.png',
      caption:
        'Ms. Mhae explains to the SPED children the applications of Fischer Tips during the art excercises for special children.',
    },
    {
      src: '/assets/images/aboutus/programs/3d9f73857a51bed7a299433a5fbc93fd00d8bb88.png',
      caption:
        'Fischer Tips Contests as one of the features of “Simpleng Pasko Para Sa Pamilyang Pilipino” Projects.',
    },
    {
      src: '/assets/images/aboutus/programs/700eba0728af555a5ed2b7db7d3b7faf0fc74e89.png',
      caption:
        'NAO “The Humanoid Robot” entertained the special children with his talent performances.',
    },
    {
      src: '/assets/images/aboutus/programs/d930b7a59c5e8bccd902106856c6a5e9042ab23f.png',
      caption: 'HPI Robot Show for underprivileged children in Malolos, Bulacan.',
    },
    {
      src: '/assets/images/aboutus/programs/fd8eb0a7fc53e1829f328e13286a6420520add75.png',
      caption:
        'Winners from Fischer Tips Contest received their awards from Ms. Che and the officials of the Rotary Club.',
    },
    {
      src: '/assets/images/aboutus/programs/2e63f8a821bb2af90bc20a9538e89edde601e30e.png',
      caption:
        'Special Education Department of the Commonwealth Elementary School was granted the 48 inches LCD Television during their Christmas Party organized by ABS-CBN, the teacher shown receiving the TV-Set is also a handicapped person.',
    },
  ];

  /* -- Outreach Gallery Functions -- */
  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    // change image every 5 seconds (5000ms)
    this.autoPlayInterval = setInterval(() => {
      this.nextGalleryItem();
    }, 12000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextGalleryItem() {
    // calculate next index, loop back to 0 if at the end
    const nextIndex = (this.currentGalleryIndex() + 1) % this.galleryItems.length;
    this.currentGalleryIndex.set(nextIndex);
  }

  // update user interaction method
  setGalleryIndex(index: number) {
    this.stopAutoPlay(); // stop the timer so it doesn't jump immediately after a click
    this.currentGalleryIndex.set(index);
    this.startAutoPlay(); // restart the timer
  }
}
