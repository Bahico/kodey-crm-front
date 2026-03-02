import {Component, inject} from '@angular/core';
import {injectRegisterIcons} from '@ngneat/svg-icon';
import {rightSquareIcon} from '@/svg/right-square';
import {filterIcon} from '@/svg/filter';
import {FormsModule} from '@angular/forms';
import {AccountService} from '@/services/account.service';
import {MyFinance} from './components/my-finance/my-finance';
import {AllFinance} from './components/all-finance/all-finance';

@Component({
  templateUrl: 'finances.html',
  selector: 'app-finances',
  imports: [
    FormsModule,
    MyFinance,
    AllFinance
  ],
})
export default class FinancesComponent {
  private readonly accountService = inject(AccountService);

  protected readonly isAdmin = this.accountService.isAdmin;

  constructor() {
    injectRegisterIcons([
      rightSquareIcon,
      filterIcon
    ]);
  }


}
