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
                path: 'profile',
                loadComponent: () => import('./pages/profile/profile'),
            },
            {
                path: 'employees',
                loadComponent: () => import('./pages/employees/employees'),
            },
            {
                path: 'employees/:id',
                loadComponent: () => import('./pages/employees/employee/employee'),
            },
            {
                path: 'regulations',
                loadComponent: () => import('./pages/regulations/regulations'),
            },
            {
                path: 'my-tasks',
                loadComponent: () => import('./pages/my-tasks/my-tasks'),
            },
            {
                path: 'my-tasks/:id',
                loadComponent: () => import('./pages/my-tasks/pages/detail/my-task-detail'),
            },
        ]
    }
] satisfies Routes;
