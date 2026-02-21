import { Routes } from "@angular/router";

export default [
  { path: '', loadChildren: () => import('./dashboard/dashboard.routes') },
  { path: 'auth', loadChildren: () => import('./auth/auth.routes').then(m => m.authRoutes) },
] satisfies Routes;