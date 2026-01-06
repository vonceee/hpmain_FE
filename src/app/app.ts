import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideButtons } from './components/side-buttons/side-buttons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideButtons],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('hytec_fe');
}
