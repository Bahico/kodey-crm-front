import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from '@/shared/components/theme-toggle/theme-toggle.component';
import { injectRegisterIcons } from '@ngneat/svg-icon';
import { infoIcon } from '@/svg/info';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, ThemeToggleComponent],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayoutComponent {
  constructor() {
    injectRegisterIcons([
      infoIcon
    ])
  }
}
