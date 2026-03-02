import {Component, signal} from '@angular/core';
import {CustomScrollbar} from '@/shared/components/custom-scrollbar/custom-scrollbar';
import {DriverComponent} from '@/shared/components/driver/driver';
import {SvgIconComponent} from '@ngneat/svg-icon';
import {TuiDataList, TuiDropdown, TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {FormsModule} from '@angular/forms';
import {NgxMaskDirective} from 'ngx-mask';
import {CdkCopyToClipboard} from '@angular/cdk/clipboard';
import {TuiActiveZone, TuiObscured} from '@taiga-ui/cdk';

@Component({
  templateUrl: 'edit-expenses.html',
  selector: 'edit-payment',
  host: {
    class: 'flex flex-col w-full gap-4'
  },
  imports: [
    CustomScrollbar,
    DriverComponent,
    SvgIconComponent,
    TuiDropdown,
    TuiDataList,
    FormsModule,
    TuiTextfield,
    TuiIcon,
    NgxMaskDirective,
    CdkCopyToClipboard,
    TuiObscured,
    TuiActiveZone
  ]
})
export class EditExpenses {
  protected readonly openType = signal(false);
  protected readonly openUser = signal(false);
  protected readonly copied = signal(false);
  protected readonly openAddUser = signal(false);

  protected readonly type = signal('Humo');
  protected readonly user = signal('Кристина');
  protected readonly card = signal<string>(null);


  copy() {
    this.copied.set(true);
    setTimeout(() => {
      this.copied.set(false);
    }, 1500)
  }

  protected onClick(): void {
    this.openAddUser.set(!this.openAddUser());
  }

  protected onObscured(obscured: boolean): void {
    if (obscured) {
      this.openAddUser.set(false);
    }
  }

  protected onActiveZone(active: boolean): void {
    this.openAddUser.set(active && this.openAddUser());
  }

}
