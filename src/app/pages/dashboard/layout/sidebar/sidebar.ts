import {Component, computed, inject, signal} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import { injectRegisterIcons } from '@ngneat/svg-icon';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { cardIcon } from '@/svg/card';
import { documentJustifyCenterIcon } from '@/svg/document-justify-center';
import { exitIcon } from '@/svg/exit';
import { folderIcon } from '@/svg/folder';
import { logoKodeyIcon } from '@/svg/logo-kodey';
import { SIDEBAR_ITEMS } from './sidebar-items';

export interface SidebarNavItem {
  path: string;
  label: string;
  icon: string;
  exact?: boolean;
}

@Component({
  templateUrl: './sidebar.html',
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, SvgIconComponent],
})
export class SidebarComponent {
  private readonly router = inject(Router);

  readonly user = signal<{ fullName: string; username: string; role: string; avatarUrl?: string }>({
    fullName: 'Виктор Котов',
    username: '@viktrkotov',
    role: 'Дизайнер',
    avatarUrl: undefined,
  });

  readonly navItems = SIDEBAR_ITEMS;

  userAvatar = computed(() => {
    const url = this.user().avatarUrl;
    return url ? `url(${url})` : 'none';
  });

  logout(): void {
    this.router.navigate(['/auth']);
  }
}
