import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideButtons } from './components/side-buttons/side-buttons';
import { BackToTopComponent } from './components/back-to-top/back-to-top';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideButtons, BackToTopComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('hytec_fe');
}
