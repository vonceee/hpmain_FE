import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBadge } from 'src/app/components/title-badge/title-badge';
import { ContainerBox } from 'src/app/components/container-box/container-box';

interface Cell {
  title: string;
  desc: string;
  icon?: string;
  img?: string;
}

@Component({
  selector: 'people-cards',
  imports: [CommonModule, TitleBadge, ContainerBox],
  templateUrl: './people-cards.html',
  styleUrls: ['../icon-cards/icon-cards.scss'],
  standalone: true, 
})

export class PeopleCards {
  @Input() title: string = 'Name';
  @Input() desc: string = 'Role';
  @Input() img: string = 'Image';

  @Input() cards: Cell[] = []
} 