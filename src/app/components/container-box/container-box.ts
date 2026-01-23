import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'container-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container-box.html',
  styleUrl: './container-box.scss',
})
export class ContainerBox {
  @Input() variant: 'default' | 'red' | 'dark' = 'default';
  @Input() padding: string = '1.5rem';
  @Input() allowOverflow: boolean = false;
}
