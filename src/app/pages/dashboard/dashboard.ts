import { Component, inject, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { filter } from "rxjs";
import { NavbarComponent } from "./layout/navbar/navbar";
import { SidebarComponent } from "./layout/sidebar/sidebar";
import { NavbarService } from "./layout/navbar/navbar.service";
import type { SidebarNavItem } from "./layout/sidebar/sidebar";

const DEFAULT_NAVBAR: SidebarNavItem = { label: 'Главная', icon: 'home', path: '' };

@Component({
  templateUrl: './dashboard.html',
  selector: 'app-dashboard',
  imports: [RouterOutlet, NavbarComponent, SidebarComponent],
})
export default class DashboardComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  private readonly navbarService = inject(NavbarService);
  private subscription: ReturnType<typeof this.router.events.subscribe> | null = null;

  ngOnInit(): void {
    this.setNavbarFromRoute(this.router.routerState.root);
    this.subscription = this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    ).subscribe(() => {
      this.setNavbarFromRoute(this.router.routerState.root);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private setNavbarFromRoute(route: ActivatedRoute): void {
    const leaf = this.getLeafRoute(route);
    const navbar = leaf?.snapshot?.data?.['navbar'] as SidebarNavItem | undefined;
    this.navbarService.currentRoute.set(navbar ?? DEFAULT_NAVBAR);
  }

  private getLeafRoute(route: ActivatedRoute): ActivatedRoute | null {
    let current: ActivatedRoute | null = route;
    while (current?.firstChild) {
      current = current.firstChild;
    }
    return current;
  }
}
