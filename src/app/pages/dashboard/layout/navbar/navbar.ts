import { ThemeToggleComponent } from '@/shared/components/theme-toggle/theme-toggle.component';
import { homeIcon } from '@/svg/home';
import { notificationIcon } from '@/svg/notification';
import { searchIcon } from '@/svg/search';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { injectRegisterIcons, SvgIconComponent } from '@ngneat/svg-icon';
import { filter, map } from 'rxjs';
import { SIDEBAR_ITEMS } from '../sidebar/sidebar-items';
import {TuiDropdown} from '@taiga-ui/core';
import {TuiActiveZone, TuiObscured} from '@taiga-ui/cdk';

@Component({
  templateUrl: './navbar.html',
  selector: 'app-navbar',
  imports: [
    SvgIconComponent,
    ThemeToggleComponent,
    TuiDropdown,
    TuiObscured,
    TuiActiveZone,
  ],
})
export class NavbarComponent {
  private readonly router = inject(Router);

  protected open = signal(false);
  readonly searchQuery = signal('');
  readonly currentPath = toSignal(this.router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    map(() => this.router.url.split('?')[0].split('/').filter(Boolean).pop() || ''),
  ), { initialValue: this.router.url.split('?')[0].split('/').filter(Boolean).pop() || '' });

  readonly currentRoute = computed(() =>
    SIDEBAR_ITEMS.find(item => item.path === this.currentPath()) ?? { label: 'Главная', icon: 'home' }
  );

  readonly searchPlaceholder = () => 'Поиск по сайту';

  constructor() {
    injectRegisterIcons([homeIcon, searchIcon, notificationIcon]);
  }

  protected onClick(): void {
    this.open.set(!this.open());
  }

  protected onObscured(obscured: boolean): void {
    if (obscured) {
      this.open.set(false);
    }
  }

  protected onActiveZone(active: boolean): void {
    this.open.set(active && this.open());
  }
}
