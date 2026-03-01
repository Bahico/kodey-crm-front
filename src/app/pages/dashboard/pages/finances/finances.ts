import {Component, inject, signal} from '@angular/core';
import {CustomScrollbar} from '@/shared/components/custom-scrollbar/custom-scrollbar';
import {injectRegisterIcons, SvgIconComponent} from '@ngneat/svg-icon';
import {rightSquareIcon} from '@/svg/right-square';
import {filterIcon} from '@/svg/filter';
import {NgClass} from '@angular/common';
import {TuiDropdown} from '@taiga-ui/core';
import {TuiActiveZone, TuiObscured} from '@taiga-ui/cdk';
import {FormsModule} from '@angular/forms';
import {TuiCheckbox} from '@taiga-ui/kit';
import {ResponsiveBreakpointsService} from '@/services/responsive-breakpoints.service';

@Component({
  templateUrl: 'finances.html',
  selector: 'app-finances',
  host: {class: 'overflow-y-auto h-full flex flex-col pb-4'},
  imports: [
    CustomScrollbar,
    SvgIconComponent,
    NgClass,
    TuiDropdown,
    TuiObscured,
    TuiActiveZone,
    FormsModule,
    TuiCheckbox
  ],
})
export default class FinancesComponent {
  private readonly rbs = inject(ResponsiveBreakpointsService);

  protected readonly btnSize = this.rbs.btnSize;
  protected readonly activeYear = signal<number>(null);
  protected readonly activeMonth = signal<number>(null);
  protected readonly open = signal(false);

  constructor() {
    injectRegisterIcons([
      rightSquareIcon,
      filterIcon
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
}
