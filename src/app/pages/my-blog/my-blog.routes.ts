import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ArticleComponent } from './article/article.component';

export const MY_BLOG_ROUTES: Routes = [
  {
    path: 'MyBlog',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'Index' },
      { path: 'Index', component: IndexComponent },
      { path: 'Article', component: ArticleComponent },
    ]
  }
];
