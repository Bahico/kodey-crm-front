import {Component, signal} from '@angular/core';
import {SvgIconComponent} from '@ngneat/svg-icon';
import {CustomScrollbar} from '@/shared/components/custom-scrollbar/custom-scrollbar';
import {DriverComponent} from '@/shared/components/driver/driver';
import {TuiDataList, TuiDropdown, TuiDropdownOptionsDirective} from '@taiga-ui/core';

@Component({
  templateUrl: 'edit-payment.html',
  selector: 'edit-payment',
  imports: [
    SvgIconComponent,
    CustomScrollbar,
    DriverComponent,
    TuiDropdownOptionsDirective,
    TuiDropdown,
    TuiDataList,
  ],
  host: {
    class: 'flex flex-col w-full gap-4'
  }
})
export class EditPayment {
  openType = signal(false);
  type = signal('Humo');
}
