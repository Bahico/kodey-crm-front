import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { form, required, submit, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormField],
  templateUrl: './login.html',
})
export default class LoginComponent {
  loginModel = signal<{ login: string; password: string }>({
    login: '',
    password: '',
  });

  loginForm = form(this.loginModel, (path) => {
    required(path.login);
    required(path.password);
  });

  hidePassword = true;

  onSubmit(): void {
    submit(this.loginForm, async () => {
      // TODO: call auth API
      console.log('Login', this.loginModel());
    });
  }
}
