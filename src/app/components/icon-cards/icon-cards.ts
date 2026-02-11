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
  selector: 'icon-cards',
  imports: [CommonModule, TitleBadge, ContainerBox],
  templateUrl: './icon-cards.html',
  styleUrls: ['./icon-cards.scss'],
  standalone: true,
})

export class IconCards {
  @Input() title: string = 'Title';
  @Input() desc: string = 'Desciption';
  @Input() icon: string = 'Icon';

  @Input() cards: Cell[] = []
}