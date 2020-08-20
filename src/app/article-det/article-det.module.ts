import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleDetPageRoutingModule } from './article-det-routing.module';

import { ArticleDetPage } from './article-det.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleDetPageRoutingModule
  ],
  declarations: [ArticleDetPage]
})
export class ArticleDetPageModule {}
