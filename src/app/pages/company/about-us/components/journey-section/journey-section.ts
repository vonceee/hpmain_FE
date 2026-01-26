import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';
import { ContainerBox } from 'src/app/components/container-box/container-box';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}

import { TimelineLineComponent } from 'src/app/components/timeline-elements/timeline-line/timeline-line';
import { TimelineDotComponent } from 'src/app/components/timeline-elements/timeline-dot/timeline-dot';

@Component({
  selector: 'journey-section',
  imports: [CommonModule, TitleBadge, ContainerBox, TimelineLineComponent, TimelineDotComponent],
  templateUrl: './journey-section.html',
  styleUrls: ['./journey-section.scss'],
})
export class JourneySection implements AfterViewInit, OnDestroy {
  @ViewChildren('timelineItem') timelineItems!: QueryList<ElementRef>;

  observer: IntersectionObserver | null = null;

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

  logos = [
    {
      name: 'Amatrol',
      url: 'https://amatrol.com',
      src: 'assets/images/aboutus/distributionship/amatrol.png',
    },
    {
      name: 'Milwaukee Tool',
      url: 'https://www.milwaukeetool.com',
      src: 'assets/images/aboutus/distributionship/milwaukee.png',
    },
    {
      name: 'Snap-on',
      url: 'https://www.snapon.com',
      src: 'assets/images/aboutus/distributionship/snapon.png',
    },
    {
      name: 'TAG Heuer',
      url: 'https://www.tagheuer.com',
      src: 'assets/images/aboutus/distributionship/tag.png',
    },
    {
      name: 'Chester Machine Tools',
      url: 'https://www.chestermachinetools.com',
      src: 'assets/images/aboutus/distributionship/chester.png',
    },
    {
      name: 'Unison Industries',
      url: 'https://www.unisonindustries.com',
      src: 'assets/images/aboutus/distributionship/unison.png',
    },
    {
      name: 'Laerdal Medical',
      url: 'https://laerdal.com',
      src: 'assets/images/aboutus/distributionship/laerdal.png',
    },
    {
      name: 'Nord-Lock Group',
      url: 'https://www.nord-lock.com',
      src: 'assets/images/aboutus/distributionship/nordlock.png',
    },
    {
      name: 'Dorian Tool',
      url: 'https://www.doriantool.com',
      src: 'assets/images/aboutus/distributionship/dorian.png',
    },
    {
      name: 'Simlog',
      url: 'https://www.simlog.com',
      src: 'assets/images/aboutus/distributionship/simlog.png',
    },
    {
      name: 'Soldamatic',
      url: 'https://seaberyat.com/en/soldamatic',
      src: 'assets/images/aboutus/distributionship/soldamatic.png',
    },
    {
      name: 'Norbar',
      url: 'https://www.norbar.com',
      src: 'assets/images/aboutus/distributionship/norbar.png',
    },
    {
      name: 'Geobit Instruments',
      url: 'https://geobit-instruments.com',
      src: 'assets/images/aboutus/distributionship/geobit.png',
    },
    {
      name: 'Amos/AAMC',
      url: 'https://www.aamc.org',
      src: 'assets/images/aboutus/distributionship/amos.png',
    },
    {
      name: 'American Saw',
      url: 'https://www.americansaw.com',
      src: 'assets/images/aboutus/distributionship/american.png',
    },
    {
      name: 'Chicago Pneumatic',
      url: 'https://www.chicago-pneumatic.com',
      src: 'assets/images/aboutus/distributionship/chicago.png',
    },
    {
      name: 'ABB',
      url: 'https://new.abb.com',
      src: 'assets/images/aboutus/distributionship/abb.png',
    },
    {
      name: 'Utest',
      url: 'https://www.utest.com.tr/en',
      src: 'assets/images/aboutus/distributionship/utest.png',
    },
    {
      name: 'Hypertherm',
      url: 'https://www.hypertherm.com',
      src: 'assets/images/aboutus/distributionship/hypertherm.png',
    },
    {
      name: 'AAMC',
      url: 'https://www.aamc.org',
      src: 'assets/images/aboutus/distributionship/aamc.png',
    },
    {
      name: 'Wärtsilä',
      url: 'https://www.wartsila.com',
      src: 'assets/images/aboutus/distributionship/wartsila.png',
    },
    {
      name: 'AnyLogic',
      url: 'https://www.anylogic.com',
      src: 'assets/images/aboutus/distributionship/anylogic.png',
    },
    {
      name: 'EWM',
      url: 'https://www.ewm-group.com',
      src: 'assets/images/aboutus/distributionship/ewm.png',
    },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef,
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupObserver();
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the element is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: stop observing once visible
          // this.observer?.unobserve(entry.target);
        }
      });
    }, options);

    // Observe timeline items
    const timelineItems = this.el.nativeElement.querySelectorAll('.timeline-item');
    timelineItems.forEach((item: HTMLElement) => {
      this.observer?.observe(item);
    });

    // Observe title and subtitle
    // Observe title and subtitle
    const titles = this.el.nativeElement.querySelectorAll('title-badge');
    const subtitles = this.el.nativeElement.querySelectorAll('.subtitle');
    titles.forEach((t: Element) => this.observer?.observe(t));
    subtitles.forEach((s: Element) => this.observer?.observe(s));

    // Observe distributorship container
    const distributorship = this.el.nativeElement.querySelector('.distributorship-container');
    if (distributorship) {
      this.observer?.observe(distributorship);
    }
  }
}
