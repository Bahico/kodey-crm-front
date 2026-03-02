import {Component, inject, signal} from '@angular/core';
import {CustomScrollbar} from '@/shared/components/custom-scrollbar/custom-scrollbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SvgIconComponent} from '@ngneat/svg-icon';
import {TuiCheckbox} from '@taiga-ui/kit';
import {ResponsiveBreakpointsService} from '@/services/responsive-breakpoints.service';
import {TuiDropdown} from '@taiga-ui/core';
import {TuiActiveZone, TuiObscured} from '@taiga-ui/cdk';
import {NgClass} from '@angular/common';

@Component({
  templateUrl: 'my-finance.html',
  selector: 'app-my-finance',
  host: {class: 'overflow-y-auto h-full flex flex-col pb-4'},
  imports: [
    CustomScrollbar,
    ReactiveFormsModule,
    SvgIconComponent,
    TuiCheckbox,
    FormsModule,
    TuiDropdown,
    TuiObscured,
    TuiActiveZone,
    NgClass
  ]
})
export class MyFinance {
  private readonly rbs = inject(ResponsiveBreakpointsService);

  protected readonly btnSize = this.rbs.btnSize;
  protected readonly activeYear = signal<number>(null);
  protected readonly activeMonth = signal<number>(null);
  protected readonly open = signal(false);

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
