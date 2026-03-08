import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {injectRegisterIcons, SvgIconComponent} from "@ngneat/svg-icon";
import {TuiIcon, TuiLabel, TuiTextfieldComponent, TuiTextfieldDirective} from "@taiga-ui/core";
import {TuiPassword} from "@taiga-ui/kit";
import {editIcon} from '@/svg/edit';
import {profilePlusIcon} from '@/svg/profile-plus';
import {CdkCopyToClipboard} from '@angular/cdk/clipboard';
import {closeIcon} from '@/svg/close';
import {checkIcon} from '@/svg/check';
import {NgxMaskDirective} from 'ngx-mask';
@Component({
  templateUrl: 'employee.html',
  selector: 'app-employee',
  host: {class: 'flex h-full overflow-y-auto'},
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SvgIconComponent,
    TuiIcon,
    TuiLabel,
    TuiPassword,
    TuiTextfieldComponent,
    TuiTextfieldDirective,
    CdkCopyToClipboard,
    NgxMaskDirective
  ]
})
export default class EmployeeComponent {
  protected readonly copied = signal<'humo' | 'uzcard' | 'binance' | 'usdt'>(null);
  protected readonly editMode = signal(false);

  timeout: NodeJS.Timeout;

  constructor() {
    injectRegisterIcons([editIcon, profilePlusIcon, closeIcon, checkIcon]);
  }

  copy(name: 'humo' | 'uzcard' | 'binance' | 'usdt') {
    this.copied.set(name);
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.copied.set(null);
    }, 1500)
  }
}
