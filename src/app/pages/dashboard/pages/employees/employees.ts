import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  templateUrl: 'employees.html',
  selector: 'app-employees',
  imports: [RouterLink],
})
export default class EmployeesComponent {
  employees = new Array(20);
}
