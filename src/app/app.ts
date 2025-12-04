import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Industrial } from './pages/solutions/industrial/industrial';
import { Educational } from './pages/solutions/educational/educational';
import { aboutUs } from "./pages/company/about-us/about-us";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Industrial, Educational, Home, aboutUs],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hytec_fe');
}
