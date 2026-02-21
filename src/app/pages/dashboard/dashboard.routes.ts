import { Routes } from "@angular/router";

export default [
    {
        path: '',
        loadComponent: () => import('./dashboard'),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/home/home'),
            },
            {
                path: 'finances',
                loadComponent: () => import('./pages/finances/finances'),
            },
            {
                path: 'regulations',
                loadComponent: () => import('./pages/regulations/regulations'),
            }
        ]
    }
] satisfies Routes;