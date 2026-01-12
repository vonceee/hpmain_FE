import {
  Component,
  signal,
  OnInit,
  OnDestroy,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { MainHeader } from 'src/app/components/main-header/main-header';
import { MainFooter } from 'src/app/components/main-footer/main-footer';
import { CommonModule } from '@angular/common';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';
import { ContainerBox } from 'src/app/components/container-box/container-box';

interface NavTab {
  id: number;
  label: string;
  icon: string;
}

interface GalleryItem {
  src: string;
  caption: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}

@Component({
  selector: 'about-us',
  imports: [MainHeader, MainFooter, CommonModule, TitleBadge, ContainerBox],
  templateUrl: './about-us.html',
  styleUrls: ['./about-us.scss'],
})
export class aboutUs implements OnInit, OnDestroy {
  tab = signal<number>(0);

  /* -- Distributionship Logos -- */
  logos = [
    { name: 'Amatrol', url: 'https://amatrol.com', src: 'assets/images/aboutus/distributionship/amatrol.png' },
    { name: 'Milwaukee Tool', url: 'https://www.milwaukeetool.com', src: 'assets/images/aboutus/distributionship/milwaukee.png' },
    { name: 'Snap-on', url: 'https://www.snapon.com', src: 'assets/images/aboutus/distributionship/snapon.png' },
    { name: 'TAG Heuer', url: 'https://www.tagheuer.com', src: 'assets/images/aboutus/distributionship/tag.png' },
    { name: 'Chester Machine Tools', url: 'https://www.chestermachinetools.com', src: 'assets/images/aboutus/distributionship/chester.png' },
    { name: 'Unison Industries', url: 'https://www.unisonindustries.com', src: 'assets/images/aboutus/distributionship/unison.png' },
    { name: 'Laerdal Medical', url: 'https://laerdal.com', src: 'assets/images/aboutus/distributionship/laerdal.png' },
    { name: 'Nord-Lock Group', url: 'https://www.nord-lock.com', src: 'assets/images/aboutus/distributionship/nordlock.png' },
    { name: 'Dorian Tool', url: 'https://www.doriantool.com', src: 'assets/images/aboutus/distributionship/dorian.png' },
    { name: 'Simlog', url: 'https://www.simlog.com', src: 'assets/images/aboutus/distributionship/simlog.png' },
    { name: 'Soldamatic', url: 'https://seaberyat.com/en/soldamatic', src: 'assets/images/aboutus/distributionship/soldamatic.png' },
    { name: 'Norbar', url: 'https://www.norbar.com', src: 'assets/images/aboutus/distributionship/norbar.png' },
    { name: 'Geobit Instruments', url: 'https://geobit-instruments.com', src: 'assets/images/aboutus/distributionship/geobit.png' },
    { name: 'Amos/AAMC', url: 'https://www.aamc.org', src: 'assets/images/aboutus/distributionship/amos.png' },
    { name: 'American Saw', url: 'https://www.americansaw.com', src: 'assets/images/aboutus/distributionship/american.png' },
    { name: 'Chicago Pneumatic', url: 'https://www.chicago-pneumatic.com', src: 'assets/images/aboutus/distributionship/chicago.png' },
    { name: 'ABB', url: 'https://new.abb.com', src: 'assets/images/aboutus/distributionship/abb.png' },
    { name: 'Utest', url: 'https://www.utest.com.tr/en', src: 'assets/images/aboutus/distributionship/utest.png' },
    { name: 'Hypertherm', url: 'https://www.hypertherm.com', src: 'assets/images/aboutus/distributionship/hypertherm.png' },
    { name: 'AAMC', url: 'https://www.aamc.org', src: 'assets/images/aboutus/distributionship/aamc.png' },
    { name: 'Wärtsilä', url: 'https://www.wartsila.com', src: 'assets/images/aboutus/distributionship/wartsila.png' },
    { name: 'AnyLogic', url: 'https://www.anylogic.com', src: 'assets/images/aboutus/distributionship/anylogic.png' },
    { name: 'EWM', url: 'https://www.ewm-group.com', src: 'assets/images/aboutus/distributionship/ewm.png' }
  ];

  /* -- NavTabs Variables -- */
  @ViewChildren('navBtn') navButtons!: QueryList<ElementRef>;
  indicatorLeft = signal<string>('0px');
  indicatorWidth = signal<string>('0px');

  /* -- Outreach Gallery Variables -- */
  currentGalleryIndex = signal<number>(0);
  private autoPlayInterval: any;

  navTabs: NavTab[] = [
    { id: 0, label: 'Our Journey', icon: 'bi bi-building' },
    { id: 1, label: 'Awards and Achievements', icon: 'bi bi-award' },
    { id: 2, label: 'President & CEO', icon: 'bi bi-person' },
    { id: 3, label: 'Programs', icon: 'bi bi-award' },
    { id: 4, label: 'Partnerships', icon: 'bi bi-briefcase' },
    { id: 5, label: 'Mission and Vision', icon: 'bi bi-rocket-takeoff' },
  ];

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

  /* -- NavTabs Functions -- */
  ngAfterViewInit() {
    // timeout ensures the DOM is fully rendered before measuring
    setTimeout(() => this.updateIndicator(this.tab()), 50);
  }

  // update the measurement whenever the window resizes
  @HostListener('window:resize')
  onResize() {
    this.updateIndicator(this.tab());
  }

  // setTab method to trigger the update
  setTab(index: number) {
    this.tab.set(index);
    this.updateIndicator(index);
  }

  // find the active button and move the pill
  updateIndicator(index: number) {
    if (!this.navButtons) return;

    const elements = this.navButtons.toArray();
    const activeBtn = elements[index]?.nativeElement;

    if (activeBtn) {
      // offsetLeft gives the position relative to the .body-nav container
      this.indicatorLeft.set(`${activeBtn.offsetLeft}px`);
      this.indicatorWidth.set(`${activeBtn.offsetWidth}px`);
    }
  }

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
    }, 5000);
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

  events: TimelineEvent[] = [
    {
      year: '1994',
      title: 'The Beginning',
      description:
        'Hytec Power Inc. was founded to empower technical education across the Philippines.',
      position: 'left',
    },
    {
      year: '2000s',
      title: 'Expansion Era',
      description:
        'Partnered with leading global brands like Fischertechnik, De Lorenzo, and PHYWE to bring world-class educational solutions.',
      position: 'right',
    },
    {
      year: '2010s',
      title: 'Innovation Phase',
      description:
        'Introduced robotics and automation solutions including VEX Robotics, Armatrol, and advanced manufacturing systems.',
      position: 'left',
    },
    {
      year: '2020s',
      title: 'Industry 4.0',
      description:
        'Leading the transition to smart manufacturing and digital education with AI, IoT, and advanced automation.',
      position: 'right',
    },
    {
      year: '2025',
      title: 'Future Forward',
      description:
        'Continuing to shape the future of technical education with cutting-edge technology and strategic partnerships.',
      position: 'left',
    },
  ];
}

