import { Component, OnInit } from '@angular/core';
import {ArticlesProviderService} from '../_services/articles-provider.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  articles: any;
  tab_article: [];

  constructor(private articlesService: ArticlesProviderService) { }

  ngOnInit() {
     this.articlesService.getArticles().subscribe(data => this.articles = data);
  }
}
