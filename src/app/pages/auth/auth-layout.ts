import { Component, computed, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ThemeToggleComponent } from '@/shared/components/theme-toggle/theme-toggle.component';
import { injectRegisterIcons } from '@ngneat/svg-icon';
import { infoIcon } from '@/svg/info';
import { filter, map } from 'rxjs';

@Component({
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
  selector: 'app-auth-layout',
  imports: [RouterOutlet, ThemeToggleComponent],
})
export class AuthLayoutComponent {
  private readonly router = inject(Router);

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(() => this.router.url)
    ),
    { initialValue: this.router.url }
  );

  private readonly images: Record<string, string> = {
    login: 'images/bot/bot-4.png',
    register: 'images/bot/bot-1.png',
    waiting: 'images/bot/bot-5.png',
  };

  readonly currentBotImage = computed(() => {
    const url = this.currentUrl();
    const segment = url.split('?')[0].split('/').filter(Boolean).pop() || 'login';
    return this.images[segment] ?? this.images['login'];
  });

  constructor() {
    injectRegisterIcons([
      infoIcon
    ])
  }
}
