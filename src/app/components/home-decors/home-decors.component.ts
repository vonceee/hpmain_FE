import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-decors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-decors.component.html',
  styleUrls: ['./home-decors.component.scss'],
})
export class HomeDecorsComponent {
  @Input() decorName: 'intro-bottom-left' | 'intro-top-right' | 'news-left' | 'news-right' | '' =
    '';
}
