import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeader } from 'src/app/components/main-header/main-header';
import { MainFooter } from 'src/app/components/main-footer/main-footer';

@Component({
  selector: 'app-sponsorship',
  standalone: true,
  imports: [CommonModule, MainHeader, MainFooter],
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
      description: 'The mission of the REC Foundation is to...',
      image: 'assets/images/aboutus/sponsorship/ewh9g7er7qere9723r.png',
    },
    {
      title: 'Secondary Level',
      description: 'The mission of the REC Foundation is to...',
      image: 'assets/images/sponsorship/secondary-level.png',
    },
    {
      title: 'Tertiary Level',
      description: 'The mission of the REC Foundation is to...',
      image: 'assets/images/sponsorship/tertiary-level.png',
    },
  ];

  statistics = [
    {
      value: '24,000',
      label: 'Participating Teams',
      icon: 'assets/icons/sponsorship/teams-icon.svg',
    },
    {
      value: '1,000,000',
      label: 'Students Reached Globally',
      icon: 'assets/icons/sponsorship/students-icon.svg',
    },
    {
      value: '60+',
      label: 'Countries Represented',
      icon: 'assets/icons/sponsorship/countries-icon.svg',
    },
    {
      value: '22,000',
      label: 'Participating Schools',
      icon: 'assets/icons/sponsorship/schools-icon.svg',
    },
  ];

  contactInfo = {
    phone: '+63 917 123 4567',
    email: 'info@hytecpower.com',
  };
}
