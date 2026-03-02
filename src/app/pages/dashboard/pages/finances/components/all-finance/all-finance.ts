import {Component, inject, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {CustomScrollbar} from '@/shared/components/custom-scrollbar/custom-scrollbar';
import {injectRegisterIcons, SvgIconComponent} from '@ngneat/svg-icon';
import {editIcon} from '@/svg/edit';
import {DialogService} from '@/services/dialog.service';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {EditPayment} from '@/pages/dashboard/pages/finances/components/edit-payment/edit-payment';
import {EditDebt} from '@/pages/dashboard/pages/finances/components/edit-debt/edit-debt';
import {EditExpenses} from '@/pages/dashboard/pages/finances/components/edit-expenses/edit-expenses';
import {
  EditAdditionalIncome
} from '@/pages/dashboard/pages/finances/components/edit-additional-income/edit-additional-income';
import {checkIcon} from '@/svg/check';
import {DriverComponent} from '@/shared/components/driver/driver';

@Component({
  templateUrl: 'all-finance.html',
  selector: 'app-all-finance',
  styleUrl: 'all-finance.css',
  host: {class: 'h-full flex flex-col p-4 gap-4'},
  imports: [
    NgClass,
    CustomScrollbar,
    SvgIconComponent,
    DriverComponent
  ]
})
export class AllFinance {
  private readonly dialog = inject(DialogService);

  protected readonly activeYear = signal<number>(0);
  protected readonly activeMonth = signal<number>(0);

  constructor() {
    injectRegisterIcons([editIcon, checkIcon])
  }

  openPayment(): void {
    this.dialog.open(
      new PolymorpheusComponent(EditPayment),
      {
        size: 'm'
      }
    ).subscribe()
  }

  openDebt(): void {
    this.dialog.open(
      new PolymorpheusComponent(EditDebt),
      {
        size: 'm'
      }
    ).subscribe()
  }

  openExpenses(): void {
    this.dialog.open(
      new PolymorpheusComponent(EditExpenses),
      {
        size: 'l'
      }
    ).subscribe()
  }

  openAdditionalIncome(): void {
    this.dialog.open(
      new PolymorpheusComponent(EditAdditionalIncome),
      {
        size: 'm'
      }
    ).subscribe()
  }
}
