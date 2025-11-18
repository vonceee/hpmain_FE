import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Industrial } from './pages/solutions/industrial/industrial';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Industrial],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hytec_fe');
}
