import { Component } from "@angular/core";
import HomeMyTasksComponent from '@/pages/dashboard/pages/home/components/my-tasks/my-tasks';

@Component({
  templateUrl: 'my-tasks.html',
  selector: 'app-my-tasks',
  imports: [
    HomeMyTasksComponent
  ]
})
export default class MyTasksComponent {}
