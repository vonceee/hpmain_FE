import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MainHeader } from 'src/app/components/main-header/main-header';
import { MainFooter } from 'src/app/components/main-footer/main-footer';
import { NewsService, NewsItem } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-detail',
  standalone: true, // Assuming standalone based on other components
  imports: [CommonModule, RouterModule, MainHeader, MainFooter],
  templateUrl: './news-detail.html',
  styleUrl: './news-detail.scss',
})
export class NewsDetail implements OnInit {
  newsItem: NewsItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        this.newsService.getNewsBySlug(slug).subscribe((item) => {
          this.newsItem = item;
          // Optional: Reset scroll to top when navigation occurs
          window.scrollTo(0, 0);
        });
      }
    });
  }
}
