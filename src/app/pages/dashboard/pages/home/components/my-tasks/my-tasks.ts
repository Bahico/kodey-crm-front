import {Component, signal} from '@angular/core';
import {injectRegisterIcons, SvgIconComponent} from '@ngneat/svg-icon';
import {documentJustifyCenterIcon} from '@/svg/document-justify-center';
import {chevronUpIcon} from '@/svg/chevron-up';
import {chevronDownIcon} from '@/svg/chevron-down';
import type {Task} from '@/shared/models/task.model';
import {CustomScrollbar} from '@/shared/components/custom-scrollbar/custom-scrollbar';
import {taskCheckIcon} from '@/svg/task-check';
import {TuiCalendar, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiDataListDropdownManager} from '@taiga-ui/kit';
import {TuiDay} from '@taiga-ui/cdk';
import {calendarIcon} from '@/svg/calendar';
import {profileIcon} from '@/svg/profile';
import {deleteIcon} from '@/svg/delete';
import {positionIcon} from '@/svg/position';

@Component({
  templateUrl: 'my-tasks.html',
  selector: 'app-home-my-tasks',
  styleUrl: 'my-tasks.css',
  host: {class: 'card'},
  imports: [SvgIconComponent, CustomScrollbar, TuiDropdown, TuiDataList, TuiDataListDropdownManager, TuiCalendar],
})
export default class HomeMyTasksComponent {
  activeTab = signal<'my-tasks' | 'archive'>('my-tasks');
  lastUpdated = signal<string>('30.01.2026 15:30');
  activeTask = signal<Task | null>(null);

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
  ]);

  constructor() {
    injectRegisterIcons([
      documentJustifyCenterIcon,
      chevronUpIcon,
      chevronDownIcon,
      taskCheckIcon,
      calendarIcon,
      profileIcon,
      deleteIcon,
      positionIcon
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

  onChangeDropDown(event: boolean, task: Task): void {
    if (event) {
      this.activeTask.set(task);
    }
  }

  protected onDayClick(day: TuiDay): void {
    this.dateValue = day;
  }
}
