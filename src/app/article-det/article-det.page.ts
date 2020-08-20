import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {ArticlesProviderService} from '../_services/articles-provider.service';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-article-det',
  templateUrl: './article-det.page.html',
  styleUrls: ['./article-det.page.scss'],
})
export class ArticleDetPage implements OnInit {

  article: any;

  recommendations: any;
  constructor(
    @Inject(DOCUMENT) document,
    public route: ActivatedRoute,
    private articlesService: ArticlesProviderService,
    private router: Router
  ) { }

  ngOnInit() {

    this.articlesService.getArticle(this.route.snapshot.params.pmid).subscribe(data => {
      this.article = data;
    });
  }

  afficherRecommendations(){
    document.getElementById('loader').setAttribute("paused", false);
    this.articlesService.getRecommendations(this.article.pmid).subscribe(data => {
      this.recommendations = data;
      console.log(data);
      document.getElementById('loader').setAttribute("paused", true);
    });
  }

  retourListe() {
   this.router.navigate([`tabs/articles`]);
 }

}
