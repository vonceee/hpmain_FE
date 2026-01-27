import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo-3d',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-3d.component.html',
  styleUrls: ['./logo-3d.component.scss'],
})
export class Logo3dComponent {
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}
