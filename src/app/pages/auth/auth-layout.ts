import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from '@/shared/components/theme-toggle/theme-toggle.component';
import { injectRegisterIcons } from '@ngneat/svg-icon';
import { infoIcon } from '@/svg/info';

@Component({
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
  selector: 'app-auth-layout',
  imports: [RouterOutlet, ThemeToggleComponent],
})
export class AuthLayoutComponent {
  constructor() {
    injectRegisterIcons([
      infoIcon
    ])
  }
}
