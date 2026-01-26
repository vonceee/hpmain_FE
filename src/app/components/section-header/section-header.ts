import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-header',
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss',
  standalone: true,
})
export class SectionHeader {
  @Input() title: string = '';
}
