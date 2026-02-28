import { Component } from "@angular/core";
import HomeMyTasksComponent from "./components/my-tasks/my-tasks";
import HomeFinanceComponent from "./components/finance/finance";
import HomeRegulationsComponent from "./components/regulations/regulations";

@Component({
    templateUrl: 'home.html',
    selector: 'app-home',
    imports: [HomeMyTasksComponent, HomeFinanceComponent, HomeRegulationsComponent],
})
export default class HomeComponent {
}