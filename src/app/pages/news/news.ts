import { Component } from '@angular/core';
import { MainHeader } from "src/app/components/main-header/main-header";
import { MainFooter } from "src/app/components/main-footer/main-footer";

@Component({
  selector: 'app-news',
  imports: [MainHeader,MainFooter],
  templateUrl: './news.html',
  styleUrl: './news.scss',
})
export class News {

}
