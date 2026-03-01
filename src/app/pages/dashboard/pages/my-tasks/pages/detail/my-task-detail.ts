import {Component, inject, signal} from '@angular/core';
import {injectRegisterIcons, SvgIconComponent} from '@ngneat/svg-icon';
import {documentJustifyCenterIcon} from '@/svg/document-justify-center';
import {editIcon} from '@/svg/edit';
import {rightSquareIcon} from '@/svg/right-square';
import {TuiDropdown} from '@taiga-ui/core';
import {TuiActiveZone, TuiObscured} from '@taiga-ui/cdk';
import {positionIcon} from '@/svg/position';
import {ResponsiveBreakpointsService} from '@/services/responsive-breakpoints.service';

@Component({
  templateUrl: 'my-task-detail.html',
  selector: 'my-task-detail',
  imports: [
    SvgIconComponent,
    TuiDropdown,
    TuiObscured,
    TuiActiveZone
  ],
  host: {
    class: 'flex w-full p-4'
  }
})
export default class MyTaskDetailPage {
  private readonly rbs = inject(ResponsiveBreakpointsService);


  protected readonly btnSize = this.rbs.btnSize;
  protected readonly open = signal(false);

  constructor() {
    injectRegisterIcons([
      documentJustifyCenterIcon,
      editIcon,
      rightSquareIcon,
      positionIcon
    ])
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
