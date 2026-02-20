import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { form, required, submit, FormField } from '@angular/forms/signals';

@Component({
  templateUrl: './register.html',
  selector: 'app-register',
  host: {
    class: 'auth-form-block'
  },  imports: [ReactiveFormsModule, RouterLink, FormField],
})
export default class RegisterComponent {

  registerModel = signal<{
    name: string;
    position: string;
    login: string;
    password: string;
    confirmPassword: string;
  }>({
    name: '',
    position: '',
    login: '',
    password: '',
    confirmPassword: '',
  });

  registerForm = form(this.registerModel, (path) => {
    required(path.name);
    required(path.position);
    required(path.login);
    required(path.password);
    required(path.confirmPassword);
  });

  hidePassword = true;
  hideConfirmPassword = true;

  onSubmit(): void {

    submit(this.registerForm, async () => {
      // TODO: call auth API
      console.log('Register', this.registerModel());
    })
  }
}
