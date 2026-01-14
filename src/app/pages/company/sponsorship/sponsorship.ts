import { Component } from '@angular/core';

import { MainHeader } from 'src/app/components/main-header/main-header';
import { MainFooter } from 'src/app/components/main-footer/main-footer';
import { HeroSection } from 'src/app/components/hero-section/hero-section';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

interface StatItem {
  label: string;
  value: string;
  iconPath: string; // Path to the .json Lottie file
}

@Component({
  selector: 'app-sponsorship',
  standalone: true,
  imports: [MainHeader, MainFooter, HeroSection, LottieComponent],
  templateUrl: './sponsorship.html',
  styleUrl: './sponsorship.scss',
})
export class Sponsorship {
  partners = [
    { name: 'Cybertech', logo: 'assets/images/aboutus/sponsorship/logocybertech.png' },
    { name: 'VEX Robotics', logo: 'assets/images/aboutus/sponsorship/logovex.png' },
    { name: 'ElectroVex', logo: 'assets/images/aboutus/sponsorship/logophilippinerobot.png' },
    { name: 'VEX U', logo: 'assets/images/aboutus/sponsorship/logovexUrobcom.png' },
    { name: 'World Skills', logo: 'assets/images/aboutus/sponsorship/logoworldskills.png' },
  ];

  competitionLevels = [
    {
      title: 'Primary and Pre-school Level',
      description: 'These includes Robo Kids 1 & 2 and Animal Bot 1 & 2.',
      image: 'assets/images/aboutus/sponsorship/ewh9g7er7qere9723r.png',
    },
    {
      title: 'Secondary Level',
      description:
        'These includes Robo Kit 3, VEX Classroom Competition Team Kit, and Fishertechnik ROBO TX Explorer',
      image: 'assets/images/aboutus/sponsorship/hdsbvaibaidsbvo.png',
    },
    {
      title: 'Tertiary Level',
      description: 'These includes Robo Kit 5, VEX Competition Robot, and ROBO TX Training Lab',
      image: 'assets/images/aboutus/sponsorship/lbkjablkjavnlapvknapva.png',
    },
  ];

  statistics: StatItem[] = [
    {
      value: '24,000',
      label: 'Participating Teams',
      iconPath: '/assets/images/aboutus/sponsorship/lottie/Partnership.json',
    },
    {
      value: '1,000,000',
      label: 'Students Reached Globally',
      iconPath: '/assets/images/aboutus/sponsorship/lottie/Partnership.json',
    },
    {
      value: '60+',
      label: 'Countries Represented',
      iconPath: '/assets/images/aboutus/sponsorship/lottie/Partnership.json',
    },
    {
      value: '22,000',
      label: 'Participating Schools',
      iconPath: '/assets/images/aboutus/sponsorship/lottie/Partnership.json',
    },
  ];

  private animationItems = new Map<number, AnimationItem>();

  animationCreated(animationItem: AnimationItem, index: number): void {
    this.animationItems.set(index, animationItem);
  }

  onMouseEnter(index: number): void {
    const item = this.animationItems.get(index);
    if (item) {
      item.stop(); // Ensure it starts from the beginning
      item.play();
    }
  }

  getAnimationOptions(path: string): AnimationOptions {
    return {
      path,
      autoplay: false,
      loop: false,
    };
  }

  contactInfo = {
    phone: '+63 917 123 4567',
    email: 'info@hytecpower.com',
  };
}
