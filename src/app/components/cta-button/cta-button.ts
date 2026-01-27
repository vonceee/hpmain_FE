import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cta-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cta-button.html',
  styleUrl: './cta-button.scss',
})
export class CtaButton {
  @Input() link?: string;
  @Input() text: string = '';
  @Input() variant: 'primary' | 'outline' | 'minimalist' = 'primary';
}
