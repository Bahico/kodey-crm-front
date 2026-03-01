import {Component, computed, inject, signal} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {SvgIconComponent} from '@ngneat/svg-icon';
import {SIDEBAR_ITEMS} from './sidebar-items';
import {AccountService} from '@/services/account.service';

export interface SidebarNavItem {
  path: string;
  label: string;
  icon: string;
  exact?: boolean;
  class?: string;
  admin?: boolean;
}

@Component({
  templateUrl: './sidebar.html',
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, SvgIconComponent],
})
export class SidebarComponent {
  private readonly router = inject(Router);
  private readonly accountService = inject(AccountService);

  readonly navItems = SIDEBAR_ITEMS;

  protected readonly isAdmin = this.accountService.isAdmin;
  protected readonly user = signal<{ fullName: string; username: string; role: string; avatarUrl?: string }>({
    fullName: 'Ikromiddinov Bahodirjon',
    username: '@bahico',
    role: 'Frontend Developer',
    avatarUrl: 'images/avatar/bahico.png',
  });
  protected readonly userAvatar = computed(() => {
    const url = this.user().avatarUrl;
    return url ? `url(${url})` : 'none';
  });

  logout(): void {
    this.router.navigate(['/auth']);
  }
}
