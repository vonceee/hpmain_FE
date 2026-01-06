import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'side-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-buttons.html',
  styleUrl: './side-buttons.scss'
})

export class SideButtons {
  active: 'cart' | 'chart' | null = null;

  setActive(type: 'cart' | 'chart') {
    this.active = type;
  }

  clearActive() {
    this.active = null;
  }
}
