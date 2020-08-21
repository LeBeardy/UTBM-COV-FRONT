import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {ArticlesProviderService} from '../_services/articles-provider.service';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from "@angular/router";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-article-det',
  templateUrl: './article-det.page.html',
  styleUrls: ['./article-det.page.scss'],
})
export class ArticleDetPage implements OnInit {

  article: any;
  loading: any;

  recommendations: any;
  constructor(
    @Inject(DOCUMENT) document,
    public route: ActivatedRoute,
    private articlesService: ArticlesProviderService,
    private router: Router,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {

    this.articlesService.getArticle(this.route.snapshot.params.pmid).subscribe(data => {
      this.article = data;
    });
  }

  afficherRecommendations(){
    this.presentLoading();

    this.articlesService.getRecommendations(this.article.pmid).subscribe(data => {
      this.recommendations = data;
      this.loading.dismiss();
    });
  }

  retourListe() {
   this.router.navigate([`tabs/articles`]);
 }

 async presentLoading() {
  this.loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Please wait...',
  });
  await this.loading.present();

  const { role, data } = await this.loading.onDidDismiss();
}

}
