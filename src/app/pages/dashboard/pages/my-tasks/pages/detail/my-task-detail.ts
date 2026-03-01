import {Component, inject, signal} from '@angular/core';
import {injectRegisterIcons, SvgIconComponent} from '@ngneat/svg-icon';
import {documentJustifyCenterIcon} from '@/svg/document-justify-center';
import {editIcon} from '@/svg/edit';
import {rightSquareIcon} from '@/svg/right-square';
import {TuiDropdown} from '@taiga-ui/core';
import {TuiActiveZone, TuiObscured} from '@taiga-ui/cdk';
import {positionIcon} from '@/svg/position';
import {ResponsiveBreakpointsService} from '@/services/responsive-breakpoints.service';
import {ChangePerson} from '@/pages/dashboard/pages/my-tasks/components/change-person/change-person';
import {DialogService} from '@/services/dialog.service';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

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
  private readonly dialogs = inject(DialogService);

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

  changePerson() {
    this.dialogs
      .open(
        new PolymorpheusComponent(ChangePerson),
        {
          size: 'm',
        },
      )
      .subscribe();
  }
}
