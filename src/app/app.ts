import {TuiRoot} from "@taiga-ui/core";
import {afterNextRender, Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ThemeService} from './core/theme.service';
import {AccountService} from '@/services/account.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kodey-crm-front');

  constructor(
    private theme: ThemeService,
    private readonly accountService: AccountService,
  ) {
    afterNextRender(() => {
      accountService.isAdmin.set(Boolean(localStorage.getItem('isAdmin')));
    })
  }
}
