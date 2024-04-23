import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ArticleComponent } from './article/article.component';

export const MY_BLOG_ROUTES: Routes = [
  {
    path: 'MyBlog',
    data: { breadcrumb: '博客管理' },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'Index' },
      { path: 'Index', component: IndexComponent, data: { breadcrumb: '博客首頁' } },
      { path: 'Article', component: ArticleComponent, data: { breadcrumb: '文章管理' } },
    ]
  }
];
