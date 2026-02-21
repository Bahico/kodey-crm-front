import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { injectRegisterIcons } from '@ngneat/svg-icon';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { cardIcon } from '@/svg/card';
import { documentJustifyCenterIcon } from '@/svg/document-justify-center';
import { exitIcon } from '@/svg/exit';
import { folderIcon } from '@/svg/folder';
import { logoKodeyIcon } from '@/svg/logo-kodey';

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
  readonly user = signal<{ fullName: string; username: string; role: string; avatarUrl?: string }>({
    fullName: 'Виктор Котов',
    username: '@viktrkotov',
    role: 'Дизайнер',
    avatarUrl: undefined,
  });

  readonly navItems = computed<SidebarNavItem[]>(() => [
    { path: '', label: 'Мои задачи', icon: 'document-justify-center', exact: true },
    { path: 'finances', label: 'Финансы', icon: 'card' },
    { path: 'regulations', label: 'Регламенты и советы', icon: 'folder' },
  ]);

  userAvatar = computed(() => {
    const url = this.user().avatarUrl;
    return url ? `url(${url})` : 'none';
  });

  constructor() {
    injectRegisterIcons([
      exitIcon,
      documentJustifyCenterIcon,
      cardIcon,
      folderIcon,
      logoKodeyIcon,
    ]);
  }

  logout(): void {
    // TODO: вызов сервиса выхода и редирект на /auth
  }
}
