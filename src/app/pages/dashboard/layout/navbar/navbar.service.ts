import { Injectable, signal } from '@angular/core';
import { SidebarNavItem } from '@/pages/dashboard/layout/sidebar/sidebar';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  currentRoute = signal<SidebarNavItem>({ label: 'Главная', icon: 'home', path: '' });
  /** Дочерняя подпись в навбаре (например, название проекта на странице задачи) */
  routeChild = signal<string | null>(null);
}
