import { Routes } from "@angular/router";
import type { SidebarNavItem } from "./layout/sidebar/sidebar";
import type { NavbarItem } from "./layout/navbar/navbar-items";

export const DASHBOARD_NAVBAR_DATA = {
  home: { label: 'Главная', icon: 'home', path: '' } satisfies NavbarItem,
  finances: { label: 'Финансы', icon: 'card', path: 'finances' } satisfies NavbarItem,
  profile: { label: 'Профиль', icon: 'profile-sidebar', path: 'profile', } satisfies NavbarItem,
  employees: { label: 'Сотрудники', icon: 'employees', path: 'employees' } satisfies NavbarItem,
  employee: { label: 'Сотрудник', icon: 'employees', path: 'employees' } satisfies NavbarItem,
  regulations: { label: 'Регламенты и советы', icon: 'folder', path: 'regulations' } satisfies NavbarItem,
  myTasks: { label: 'Мои задачи', icon: 'document-justify-center', path: 'my-tasks' } satisfies NavbarItem,
  myTaskDetail: { label: 'Мои задачи', icon: 'document-justify-center', path: 'my-tasks' } satisfies NavbarItem
} as const;

export default [
    {
        path: '',
        loadComponent: () => import('./dashboard'),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/home/home'),
                data: { navbar: DASHBOARD_NAVBAR_DATA.home },
            },
            {
                path: 'finances',
                loadComponent: () => import('./pages/finances/finances'),
                data: { navbar: DASHBOARD_NAVBAR_DATA.finances },
            },
            {
                path: 'profile',
                loadComponent: () => import('./pages/profile/profile'),
                data: { navbar: DASHBOARD_NAVBAR_DATA.profile },
            },
            {
                path: 'employees',
                loadComponent: () => import('./pages/employees/employees'),
                data: { navbar: DASHBOARD_NAVBAR_DATA.employees },
            },
            {
                path: 'employees/:id',
                loadComponent: () => import('./pages/employees/employee/employee'),
                data: { navbar: DASHBOARD_NAVBAR_DATA.employee },
            },
            {
                path: 'regulations',
                loadComponent: () => import('./pages/regulations/regulations'),
                data: { navbar: DASHBOARD_NAVBAR_DATA.regulations },
            },
            {
                path: 'my-tasks',
                loadComponent: () => import('./pages/my-tasks/my-tasks'),
                data: { navbar: DASHBOARD_NAVBAR_DATA.myTasks },
            },
            {
                path: 'my-tasks/:id',
                loadComponent: () => import('./pages/my-tasks/pages/detail/my-task-detail'),
                data: { navbar: DASHBOARD_NAVBAR_DATA.myTaskDetail },
            },
        ]
    }
] satisfies Routes;
