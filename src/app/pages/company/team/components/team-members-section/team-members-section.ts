import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerBox } from 'src/app/components/container-box/container-box';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';
import { TeamDepartmentCarousel } from '../team-department-carousel/team-department-carousel';

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  socials?: {
    linkedin?: string;
    github?: string;
    facebook?: string;
  };
}

export interface Department {
  name: string;
  members: TeamMember[];
}

@Component({
  selector: 'team-members-section',
  imports: [CommonModule, ContainerBox, TitleBadge, TeamDepartmentCarousel],
  templateUrl: './team-members-section.html',
  styleUrls: ['./team-members-section.scss'],
})
export class TeamMembersSection {
  departments: Department[] = [
    {
      name: 'Website Development Team',
      members: [
        {
          name: 'Alex Rivera',
          role: 'Frontend Developer',
          photo: 'assets/images/employees/reze.png',
          socials: { linkedin: '#', github: '#' }
        },
        {
          name: 'Sarah Chen',
          role: 'Full Stack Developer',
          photo: 'assets/images/employees/reze.png',
          socials: { linkedin: '#', github: '#', facebook: '#' }
        },
        {
          name: 'Marcus Johnson',
          role: 'Backend Developer',
          photo: 'assets/images/employees/reze.png',
          socials: { linkedin: '#', github: '#' }
        },
                {
          name: 'Alex Rivera',
          role: 'Frontend Developer',
          photo: 'assets/images/employees/reze.png',
          socials: { linkedin: '#', github: '#' }
        },
        {
          name: 'Sarah Chen',
          role: 'Full Stack Developer',
          photo: 'assets/images/employees/reze.png',
          socials: { linkedin: '#', github: '#', facebook: '#' }
        },
        {
          name: 'Marcus Johnson',
          role: 'Backend Developer',
          photo: 'assets/images/employees/reze.png',
          socials: { linkedin: '#', github: '#' }
        },
      ]
    },
    {
      name: 'IT Support Team',
      members: [
        {
          name: 'Emma Wilson',
          role: 'IT Support Specialist',
          photo: 'assets/images/employees/reze.png',
          socials: { linkedin: '#', facebook: '#' }
        },
        {
          name: 'David Park',
          role: 'Systems Administrator',
          photo: 'assets/images/employees/reze.png',
          socials: { linkedin: '#', github: '#' }
        },
        {
          name: 'Jessica Lee',
          role: 'Network Engineer',
          photo: 'assets/images/employees/reze.png',
          socials: { linkedin: '#', facebook: '#' }
        },
      ]
    },
    {
      name: 'Multimedia Team',
      members: [
        {
          name: 'Oliver Martinez',
          role: 'Graphic Designer',
          photo: 'assets/images/employees/reze.png',
          socials: { linkedin: '#', facebook: '#' }
        },
        {
          name: 'Sophia Thompson',
          role: 'Video Editor',
          photo: 'assets/images/employees/reze.png',
          socials: { linkedin: '#', github: '#' }
        },
        {
          name: 'James Anderson',
          role: 'UI/UX Designer',
          photo: 'assets/images/employees/reze.png',
          socials: { linkedin: '#', facebook: '#' }
        },
      ]
    },
    {
      name: 'Social Media Team',
      members: [
        {
          name: 'Linda Brown',
          role: 'Social Media Manager',
          photo: 'assets/images/employees/reze.png',
          socials: { linkedin: '#', facebook: '#' }
        },
        {
          name: 'Christopher Davis',
          role: 'Content Creator',
          photo: 'assets/images/employees/reze.png',
          socials: { linkedin: '#', github: '#', facebook: '#' }
        },
        {
          name: 'Rachel Garcia',
          role: 'Community Manager',
          photo: 'assets/images/employees/reze.png',
          socials: { linkedin: '#', facebook: '#' }
        },
      ]
    },
  ];
}

