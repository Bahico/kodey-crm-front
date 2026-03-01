import {Component, computed, inject, signal} from '@angular/core';
import { injectRegisterIcons, SvgIconComponent } from '@ngneat/svg-icon';
import { cardIcon } from '@/svg/card';
import { CustomScrollbar } from "@/shared/components/custom-scrollbar/custom-scrollbar";
import {ResponsiveBreakpointsService} from '@/services/responsive-breakpoints.service';

export interface ChartMonth {
  label: string;
  value: number | null;
}

export interface Payment {
  id: string;
  date: string;
  wallet: string;
  time: string;
  amount: string;
}

@Component({
  templateUrl: 'finance.html',
  selector: 'app-home-finance',
  host: {
    class: 'card',
  },
  imports: [SvgIconComponent, CustomScrollbar],
})
export default class HomeFinanceComponent {
  private readonly rbs = inject(ResponsiveBreakpointsService);

  protected readonly btnSize = this.rbs.btnSize;

  constructor() {
    injectRegisterIcons([cardIcon]);
  }

  chartData = signal<ChartMonth[]>([
    { label: 'Январь', value: 314 },
    { label: 'Февраль', value: 1120 },
    { label: 'Март', value: 476 },
    { label: 'Апрель', value: 581 },
    { label: 'Май', value: 202 },
    { label: 'Июнь', value: 743 },
    { label: 'Июль', value: 412 },
    { label: 'Август', value: 502 },
    { label: 'Сентябрь', value: 491 },
    { label: 'Октябрь', value: 1120 },
    { label: 'Ноябрь', value: 202 },
    { label: 'Декабрь', value: 581 },
  ]);

  chartMax = computed(() => {
    const data = this.chartData();
    const values = data.map((m) => m.value).filter((v): v is number => v != null);
    return values.length ? Math.max(...values) : 1;
  });

  payments = signal<Payment[]>([
    { id: '1', date: '01.01.2026', wallet: 'Diram Wallet', time: '~ 14:51', amount: '+ 200 $' },
    { id: '2', date: '01.01.2026', wallet: 'Diram Wallet', time: '~ 14:51', amount: '+ 200 $' },
    { id: '3', date: '01.01.2026', wallet: 'Diram Wallet', time: '~ 14:51', amount: '+ 200 $' },
  ]);
}
