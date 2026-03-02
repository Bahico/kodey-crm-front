import {Component, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {CustomScrollbar} from '@/shared/components/custom-scrollbar/custom-scrollbar';
import {injectRegisterIcons, SvgIconComponent} from '@ngneat/svg-icon';
import {editIcon} from '@/svg/edit';

@Component({
  templateUrl: 'all-finance.html',
  selector: 'app-all-finance',
  styleUrl: 'all-finance.css',
  host: {class: 'h-full flex flex-col p-4 gap-4'},
  imports: [
    NgClass,
    CustomScrollbar,
    SvgIconComponent
  ]
})
export class AllFinance {
  protected readonly activeYear = signal<number>(0);
  protected readonly activeMonth = signal<number>(0);

  constructor() {
    injectRegisterIcons([editIcon])
  }
}
