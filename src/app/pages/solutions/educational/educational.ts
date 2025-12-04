import { Component } from '@angular/core';
import { MainFooter } from 'src/app/components/main-footer/main-footer';
import { MainHeader } from 'src/app/components/main-header/main-header';

@Component({
  selector: 'educational',
  imports: [MainFooter, MainHeader],
  templateUrl: './educational.html',
  styleUrl: './educational.scss',
})
export class Educational {

}
