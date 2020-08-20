import { Component, OnInit } from '@angular/core';
import {ArticlesProviderService} from '../_services/articles-provider.service';
import { Router } from "@angular/router";
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  articles: any[];
  cols: any[]

  constructor(
    @Inject(DOCUMENT) document,
    private articlesService: ArticlesProviderService,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
     this.articlesService.getArticles().subscribe(data => this.articles = data);
     this.cols = [
       {field: "pmid",header: "pmid", width: "5%"},
       {field: "title",header: "title", width:"85%" },
       {field: "type",header: "type", width:"5%" },
      ]
  }

  getArticleDet(pmid: any) {
   this.router.navigate([`article-det/${pmid}`]);
 }

 fetchArticle(){
   document.getElementById('loader').setAttribute("paused", false);
   this.articlesService.generateArticle().subscribe(data => {
     this.articles = data;
     document.getElementById('loader').setAttribute("paused", true);
     const toast = this.toastCtrl.create({
               message: 'Articles fetched',
               duration: 2000,
               color: 'success',
               position: 'top'
           });
           toast.then(toast => toast.present());
   });
 }

 generateLDA(){
   document.getElementById('loaderLDA').setAttribute("paused", false);
   this.articlesService.generateLDA().subscribe(data => {
     console.log(data);
     document.getElementById('loaderLDA').setAttribute("paused", true);
     const toast = this.toastCtrl.create({
               message: data.message,
               duration: 2000,
               color: 'success',
               position: 'top'
           });
           toast.then(toast => toast.present());
   });
 }

}
