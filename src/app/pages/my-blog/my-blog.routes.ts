import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ArticleComponent } from './article/article.component';
import { UserManageComponent } from './user-manage/user-manage.component';

export const MY_BLOG_ROUTES: Routes = [
  { path: '', component: IndexComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'user-manage', component: UserManageComponent },
];
