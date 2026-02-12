import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeader } from '../section-header/section-header';


interface Cell {
  title: string;
  desc: string;
  date: string;
  img?: string;
}

@Component({
  selector: 'news-articles',
  imports: [CommonModule,SectionHeader],
  templateUrl: './news-articles.html',
  styleUrls: ['../news-articles/news-articles.scss'],
  standalone: true, 
})

export class NewsArticles { 
  @Input() title: string = 'Title';
  @Input() desc: string = 'Description';
  @Input() date: string = 'Date';
  @Input() img: string = 'Image';

  @Input() cards: Cell[] = []
} 