import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./layout/navbar/navbar";
import { SidebarComponent } from "./layout/sidebar/sidebar";

@Component({
  templateUrl: './dashboard.html',
  selector: 'app-dashboard',
  imports: [RouterOutlet, NavbarComponent, SidebarComponent],
})
export default class DashboardComponent {
}