import {Component} from '@angular/core';
import {CustomScrollbar} from "@/shared/components/custom-scrollbar/custom-scrollbar";
import {injectRegisterIcons, SvgIconComponent} from '@ngneat/svg-icon';
import {taskCheckIcon} from '@/svg/task-check';
import {DriverComponent} from '@/shared/components/driver/driver';
import {TuiTextfield} from '@taiga-ui/core';

@Component({
  templateUrl: 'edit-debt.html',
  selector: 'edit-payment',
  host: {
    class: 'flex flex-col w-full gap-4'
  },
  imports: [
    CustomScrollbar,
    SvgIconComponent,
    DriverComponent,
    TuiTextfield
  ]
})
export class EditDebt {
  constructor() {
    injectRegisterIcons([
      taskCheckIcon
    ])
  }
}
