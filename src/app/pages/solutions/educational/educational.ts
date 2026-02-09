import { Component } from '@angular/core';
import { BackToTopComponent } from 'src/app/components/back-to-top/back-to-top';
import { MainHeader } from 'src/app/components/main-header/main-header';
import { MainFooter } from 'src/app/components/main-footer/main-footer';  


@Component({
  selector: 'educational',
  imports: [BackToTopComponent, MainHeader, MainFooter],
  templateUrl: './educational.html',
  styleUrl: './educational.scss',
})
export class Educational {}