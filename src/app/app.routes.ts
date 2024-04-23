import { Routes } from '@angular/router';

export const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  // { path: 'monitor', loadChildren: () => import('./pages/monitor/monitor.routes').then(m => m.MONITOR_ROUTES) },
  // { path: '**', redirectTo: '/welcome' }

  { path: '', pathMatch: 'full', redirectTo: '/MyBlog/Index' },
  { path: '', loadChildren: () => import('./pages/my-blog/my-blog.routes').then(m => m.MY_BLOG_ROUTES) },
  { path: '', loadChildren: () => import('./pages/user-manage/user-info/user-info.routes').then(m => m.USER_INFO_ROUTES) },
  { path: '**', redirectTo: '/MyBlog/Index' }

];
