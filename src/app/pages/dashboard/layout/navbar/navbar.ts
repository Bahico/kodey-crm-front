import { NavbarService } from '@/pages/dashboard/layout/navbar/navbar.service';
import { ResponsiveBreakpointsService } from '@/services/responsive-breakpoints.service';
import { ThemeToggleComponent } from '@/shared/components/theme-toggle/theme-toggle.component';
import { cardIcon } from '@/svg/card';
import { documentJustifyCenterIcon } from '@/svg/document-justify-center';
import { employeesIcon } from '@/svg/employees';
import { exitIcon } from '@/svg/exit';
import { folderIcon } from '@/svg/folder';
import { homeIcon } from '@/svg/home';
import { logoKodeyIcon } from '@/svg/logo-kodey';
import { notificationIcon } from '@/svg/notification';
import { profileSidebarIcon } from '@/svg/profile-sidebar';
import { searchIcon } from '@/svg/search';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { injectRegisterIcons, SvgIconComponent } from '@ngneat/svg-icon';
import { TuiActiveZone, TuiObscured } from '@taiga-ui/cdk';
import { TuiDropdown } from '@taiga-ui/core';
import { SIDEBAR_ITEMS } from '../sidebar/sidebar-items';

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
  private readonly navbarService = inject(NavbarService);

  protected open = signal(false);
  protected openNavbar = signal(false);
  protected readonly searchQuery = signal('');
  protected readonly btnSize = this.rbs.btnSize;
  protected readonly navItems = SIDEBAR_ITEMS;


  readonly currentRoute = this.navbarService.currentRoute;
  readonly routeChild = this.navbarService.routeChild;

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
      profileSidebarIcon,
      employeesIcon
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
