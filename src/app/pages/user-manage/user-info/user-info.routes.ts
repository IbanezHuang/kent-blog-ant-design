import { Routes } from '@angular/router';
import { UserInfoComponent } from './user-info.component';


export const USER_INFO_ROUTES: Routes = [
  {
    path: 'UserManage',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'UserInfo' },
      { path: 'UserInfo', component: UserInfoComponent },
    ]
  }
];
