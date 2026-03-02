import {Component, inject, signal} from '@angular/core';
import {injectRegisterIcons, SvgIconComponent} from '@ngneat/svg-icon';
import {editIcon} from '@/svg/edit';
import {ResponsiveBreakpointsService} from '@/services/responsive-breakpoints.service';
import {profilePlusIcon} from '@/svg/profile-plus';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiPassword} from '@taiga-ui/kit';
import {FormsModule} from '@angular/forms';
import {profileSidebarIcon} from '@/svg/profile-sidebar';
import {AccountService} from '@/services/account.service';

@Component({
  templateUrl: 'profile.html',
  selector: 'app-profile',
  host: {class: 'flex h-full overflow-y-auto'},
  imports: [SvgIconComponent, TuiTextfield, FormsModule, TuiIcon, TuiPassword],
})
export default class Profile {
  private readonly rbs = inject(ResponsiveBreakpointsService);
  private readonly accountService = inject(AccountService);

  protected readonly btnSize = this.rbs.btnSize;
  protected readonly isAdmin = this.accountService.isAdmin;

  readonly user = signal<{ fullName: string; username: string; role: string; avatarUrl?: string }>({
    fullName: 'Виктор Котов',
    username: '@viktrkotov',
    role: 'Дизайнер',
    avatarUrl: undefined,
  });

  constructor() {
    injectRegisterIcons([profileSidebarIcon, editIcon, profilePlusIcon]);
  }

  editProfile(): void {
    // TODO: открыть редактирование профиля
  }
}
