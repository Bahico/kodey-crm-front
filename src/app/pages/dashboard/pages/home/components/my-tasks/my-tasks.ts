import {Component, inject, input, signal} from '@angular/core';
import {injectRegisterIcons, SvgIconComponent} from '@ngneat/svg-icon';
import {documentJustifyCenterIcon} from '@/svg/document-justify-center';
import type {Task} from '@/shared/models/task.model';
import {CustomScrollbar} from '@/shared/components/custom-scrollbar/custom-scrollbar';
import {taskCheckIcon} from '@/svg/task-check';
import {TuiCalendar, TuiDataList, TuiDropdown, TuiOptGroup} from '@taiga-ui/core';
import {TuiCheckbox, TuiDataListDropdownManager} from '@taiga-ui/kit';
import {TuiActiveZone, TuiDay, TuiObscured} from '@taiga-ui/cdk';
import {calendarIcon} from '@/svg/calendar';
import {profileIcon} from '@/svg/profile';
import {deleteIcon} from '@/svg/delete';
import {positionIcon} from '@/svg/position';
import {filterIcon} from '@/svg/filter';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {ResponsiveBreakpointsService} from '@/services/responsive-breakpoints.service';
import {refreshIcon} from '@/svg/refresh';

@Component({
  templateUrl: 'my-tasks.html',
  selector: 'app-home-my-tasks',
  styleUrl: 'my-tasks.css',
  host: {class: 'card h-full'},
  imports: [
    SvgIconComponent,
    CustomScrollbar,
    TuiDataListDropdownManager,
    TuiDropdown,
    TuiCalendar,
    TuiOptGroup,
    TuiObscured,
    TuiActiveZone,
    TuiCheckbox,
    FormsModule,
    TuiDataList,
    RouterLink,
  ],
})
export default class HomeMyTasksComponent {
  private readonly rbs = inject(ResponsiveBreakpointsService);

  openFilter = input(false);

  protected readonly btnSize = this.rbs.btnSize;
  protected readonly activeTab = signal<'my-tasks' | 'archive'>('my-tasks');
  protected readonly lastUpdated = signal<string>('30.01.2026 15:30');
  protected readonly open = signal(false);

  protected dateValue: TuiDay = new TuiDay(2020, 0, 1);

  tasks = signal<Task[]>([
    {
      id: '1',
      title:
        'Проверить работоспособность кошелька, если не работает поставить на техническое обслуживание',
      projectName: 'Проект "Diram Wallet"',
      lastModified: '30.01.2026',
      completed: true,
      starred: true,
    },
    {
      id: '2',
      title:
        'Проверить работоспособность кошелька, если не работает поставить на техническое обслуживание',
      projectName: 'Проект "Diram Wallet"',
      lastModified: '30.01.2026',
      completed: true,
      starred: false,
    },
    {
      id: '3',
      title: 'Проверить работоспособность коше',
      projectName: 'Проект "Diram Wallet"',
      dueDate: 'Пт, 9 января',
      lastModified: '30.01.2026',
      completed: false,
      starred: true,
    },
    {
      id: '4',
      title:
        'Проверить работоспособность кошелька, если не работает поставить на техническое обслуживание',
      projectName: 'Проект "Diram Wallet"',
      dueDate: 'Пт, 9 января',
      lastModified: '30.01.2026',
      completed: false,
      starred: true,
    },
    {
      id: '5',
      title:
        'Проверить работоспособность кошелька, если не работает поставить на техническое обслуж',
      projectName: 'Проект "Diram Wallet"',
      dueDate: 'Пт, 9 января',
      lastModified: '30.01.2026',
      completed: false,
      starred: false,
    },
    {
      id: '4',
      title:
        'Проверить работоспособность кошелька, если не работает поставить на техническое обслуживание',
      projectName: 'Проект "Diram Wallet"',
      dueDate: 'Пт, 9 января',
      lastModified: '30.01.2026',
      completed: false,
      starred: true,
    },
    {
      id: '5',
      title:
        'Проверить работоспособность кошелька, если не работает поставить на техническое обслуж',
      projectName: 'Проект "Diram Wallet"',
      dueDate: 'Пт, 9 января',
      lastModified: '30.01.2026',
      completed: false,
      starred: false,
    },
  ]);

  constructor() {
    injectRegisterIcons([
      documentJustifyCenterIcon,
      taskCheckIcon,
      calendarIcon,
      profileIcon,
      deleteIcon,
      positionIcon,
      filterIcon,
      refreshIcon
    ]);
  }

  setTab(tab: 'my-tasks' | 'archive'): void {
    this.activeTab.set(tab);
  }

  refresh(): void {
    this.lastUpdated.set(
      new Date().toLocaleString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).replace(',', '')
    );
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

  protected onDayClick(day: TuiDay): void {
    this.dateValue = day;
  }
}
