import { Component } from '@angular/core';

import { MainHeader } from 'src/app/components/main-header/main-header';
import { MainFooter } from 'src/app/components/main-footer/main-footer';
import { BackToTopComponent } from 'src/app/components/back-to-top/back-to-top';
import { TeamMembersSection } from 'src/app/pages/company/team/components/team-members-section/team-members-section';
import { HeroSection } from 'src/app/components/hero-section/hero-section';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [MainHeader, MainFooter, TeamMembersSection, BackToTopComponent, HeroSection],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class TeamPage {}
