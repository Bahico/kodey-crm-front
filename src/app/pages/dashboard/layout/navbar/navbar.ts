import { ThemeToggleComponent } from '@/shared/components/theme-toggle/theme-toggle.component';
import { homeIcon } from '@/svg/home';
import { notificationIcon } from '@/svg/notification';
import { searchIcon } from '@/svg/search';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {NavigationEnd, Router, RouterLink, RouterLinkActive} from '@angular/router';
import { injectRegisterIcons, SvgIconComponent } from '@ngneat/svg-icon';
import { filter, map } from 'rxjs';
import { SIDEBAR_ITEMS } from '../sidebar/sidebar-items';
import {TuiDropdown} from '@taiga-ui/core';
import {TuiActiveZone, TuiObscured} from '@taiga-ui/cdk';
import {exitIcon} from '@/svg/exit';
import {documentJustifyCenterIcon} from '@/svg/document-justify-center';
import {cardIcon} from '@/svg/card';
import {folderIcon} from '@/svg/folder';
import {logoKodeyIcon} from '@/svg/logo-kodey';
import {ResponsiveBreakpointsService} from '@/services/responsive-breakpoints.service';

@Component({
  templateUrl: 'navbar.html',
  styleUrl: 'navbar.css',
  selector: 'app-navbar',
  imports: [
    SvgIconComponent,
    ThemeToggleComponent,
    TuiDropdown,
    TuiObscured,
    TuiActiveZone,
    RouterLinkActive,
    RouterLink,
  ],
})
export class NavbarComponent {
  private readonly router = inject(Router);
  private readonly rbs = inject(ResponsiveBreakpointsService);

  protected open = signal(false);
  protected openNavbar = signal(false);
  protected readonly searchQuery = signal('');
  protected readonly btnSize = this.rbs.btnSize;
  protected readonly navItems = SIDEBAR_ITEMS;

  protected readonly currentPath = toSignal(this.router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    map(() => this.router.url.split('?')[0].split('/').filter(Boolean).pop() || ''),
  ), { initialValue: this.router.url.split('?')[0].split('/').filter(Boolean).pop() || '' });

  readonly currentRoute = computed(() =>
    SIDEBAR_ITEMS.find(item => item.path === this.currentPath()) ?? { label: 'Главная', icon: 'home' }
  );

  readonly searchPlaceholder = 'Поиск по сайту';

  constructor() {
    injectRegisterIcons([
      homeIcon,
      searchIcon,
      notificationIcon,
      exitIcon,
      documentJustifyCenterIcon,
      cardIcon,
      folderIcon,
      logoKodeyIcon,
    ]);
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

  logout(): void {
    this.router.navigate(['/auth']);
  }
}
