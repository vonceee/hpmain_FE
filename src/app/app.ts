import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Industrial } from 'D:/Documents/GitHub/hytec_fe/src/app/pages/solutions/industrial/industrial';
import { Home } from 'D:/Documents/GitHub/hytec_fe/src/app//pages/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Industrial, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hytec_fe');
}
