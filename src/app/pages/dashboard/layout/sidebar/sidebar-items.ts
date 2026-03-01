import { SidebarNavItem } from "./sidebar";

export const SIDEBAR_ITEMS: SidebarNavItem[] = [
    {
      path: 'profile',
      label: 'Профиль',
      icon: 'profile-sidebar',
      class: 'md:hidden'
    },
    { path: 'my-tasks', label: 'Мои задачи', icon: 'document-justify-center' },
    { path: 'finances', label: 'Финансы', icon: 'card' },
    {
      path: 'employees',
      label: 'Сотрудники',
      icon: 'employees',
      admin: true
    },
    { path: 'regulations', label: 'Регламенты и советы', icon: 'folder' },
  ];
