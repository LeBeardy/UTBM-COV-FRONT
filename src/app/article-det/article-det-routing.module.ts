import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleDetPage } from './article-det.page';

const routes: Routes = [
  {
    path: '',
    component: ArticleDetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleDetPageRoutingModule {}
