import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', loadComponent: () => import('./login/login') },
      { path: 'register', loadComponent: () => import('./register/register') },
      { path: 'waiting', loadComponent: () => import('./waiting/waiting') },
    ],
  },
];
