import { Component } from "@angular/core";
import HomeMyTasksComponent from '@/pages/dashboard/pages/home/components/my-tasks/my-tasks';

@Component({
  templateUrl: 'my-tasks.html',
  selector: 'app-my-tasks',
  host: {class: 'flex w-full'},
  imports: [
    HomeMyTasksComponent
  ]
})
export default class MyTasksComponent {}
