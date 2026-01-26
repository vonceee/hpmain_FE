import { Component, signal, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSection } from 'src/app/components/hero-section/hero-section';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';
import { ContainerBox } from 'src/app/components/container-box/container-box';

interface GalleryItem {
  src: string;
  caption: string;
}

interface Testimonial {
  logo: string;
  alt: string;
  school: string;
  message: string;
}

import { TimelineLineComponent } from 'src/app/components/timeline-elements/timeline-line/timeline-line';
import { TimelineDotComponent } from 'src/app/components/timeline-elements/timeline-dot/timeline-dot';

@Component({
  selector: 'programs-section',
  imports: [
    CommonModule,
    HeroSection,
    TitleBadge,
    ContainerBox,
    TimelineLineComponent,
    TimelineDotComponent,
  ],
  templateUrl: './programs-section.html',
  styleUrls: ['./programs-section.scss'],
})
export class ProgramsSection implements OnInit, OnDestroy {
  @ViewChild('testimonialGrid') testimonialGrid!: ElementRef<HTMLDivElement>;

  activeIndex = 0;

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.collegeTestimonials.length;
  }

  prev() {
    this.activeIndex =
      (this.activeIndex - 1 + this.collegeTestimonials.length) % this.collegeTestimonials.length;
  }

  goToCard(index: number) {
    this.activeIndex = index;
  }

  getCardClass(index: number): string {
    if (index === this.activeIndex) return 'active';

    const len = this.collegeTestimonials.length;
    // check if it's the previous item (handling wrap-around)
    if (index === (this.activeIndex - 1 + len) % len) return 'left';
    // check if it's the next item (handling wrap-around)
    if (index === (this.activeIndex + 1) % len) return 'right';

    return 'hidden'; // for lists longer than 3 items
  }

  /* -- College Testimonials Data -- */
  collegeTestimonials: Testimonial[] = [
    {
      logo: '/assets/images/aboutus/programs/4b56f92e4559e332a39e0ac1ff981720b37eb4ef.png',
      alt: 'Asian Institute of Computer Studies Logo',
      school: 'Asian Institute of Computer Studies',
      message:
        'We extend our heartfelt gratitude to HYTEC Inc. for their trust and support in this partnership. Together, we look forward to unlocking new possibilities and shaping the future of technical education, a productive, and countless opportunities for growth and innovation.',
    },
    {
      logo: '/assets/images/aboutus/programs/b6a4ffd5a66fd74e7c74a42ce6e23cc06c7367d1.png',
      alt: 'Manuel S. Enverga University Foundation Logo',
      school: 'Manuel S. Enverga University Foundation',
      message:
        'These young minds, representing the future of the workforce, served as a stimulating reminder of the purpose and significance of the partnership between HPI and MSEUF',
    },
    {
      logo: '/assets/images/aboutus/programs/3ce842428f32fcd88eb1a4939212dea344c3957c.png',
      alt: 'Quezon City University Logo',
      school: 'Quezon City University',
      message:
        'We are grateful to Engr. Soliman and Hytec Power Inc. for choosing QCU to become their partners. We are very happy that we have a common vision to ensure that our students have the skills necessary to be employed.',
    },
    {
      logo: '/assets/images/aboutus/programs/4b56f92e4559e332a39e0ac1ff981720b37eb4ef.png',
      alt: 'Asian Institute of Computer Studies Logo',
      school: 'Asian Institute of Computer Studies',
      message:
        'We extend our heartfelt gratitude to HYTEC Inc. for their trust and support in this partnership. Together, we look forward to unlocking new possibilities and shaping the future of technical education, a productive, and countless opportunities for growth and innovation.',
    },
    {
      logo: '/assets/images/aboutus/programs/b6a4ffd5a66fd74e7c74a42ce6e23cc06c7367d1.png',
      alt: 'Manuel S. Enverga University Foundation Logo',
      school: 'Manuel S. Enverga University Foundation',
      message:
        'These young minds, representing the future of the workforce, served as a stimulating reminder of the purpose and significance of the partnership between HPI and MSEUF',
    },
    {
      logo: '/assets/images/aboutus/programs/3ce842428f32fcd88eb1a4939212dea344c3957c.png',
      alt: 'Quezon City University Logo',
      school: 'Quezon City University',
      message:
        'We are grateful to Engr. Soliman and Hytec Power Inc. for choosing QCU to become their partners. We are very happy that we have a common vision to ensure that our students have the skills necessary to be employed.',
    },
  ];

  /* -- Modal State -- */
  selectedTestimonial = signal<Testimonial | null>(null);

  openTestimonialModal(item: Testimonial) {
    this.selectedTestimonial.set(item);
  }

  closeTestimonialModal() {
    this.selectedTestimonial.set(null);
  }

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
