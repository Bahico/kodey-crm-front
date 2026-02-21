import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { injectRegisterIcons } from '@ngneat/svg-icon';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { homeIcon } from '@/svg/home';
import { searchIcon } from '@/svg/search';
import { notificationIcon } from '@/svg/notification';
import { ThemeToggleComponent } from '@/shared/components/theme-toggle/theme-toggle.component';

@Component({
  templateUrl: './navbar.html',
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    SvgIconComponent,
    ThemeToggleComponent,
  ],
})
export class NavbarComponent {
  private readonly router = inject(Router);

  readonly searchQuery = signal('');

  readonly homePath = () => '/';

  readonly searchPlaceholder = () => 'Поиск по сайту';

  isHomeActive(): boolean {
    const url = this.router.url.split('?')[0];
    return url === '/' || url === '';
  }

  constructor() {
    injectRegisterIcons([homeIcon, searchIcon, notificationIcon]);
  }

  onNotificationsClick(): void {
    // TODO: открыть панель/страницу уведомлений
  }
}
