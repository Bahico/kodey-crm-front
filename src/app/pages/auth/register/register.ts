import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { form, required, submit, FormField } from '@angular/forms/signals';
import {TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {injectRegisterIcons, SvgIconComponent} from '@ngneat/svg-icon';
import {dropdownIcon} from '@/svg/dropdown';
import {fullNameIcon} from '@/svg/fullName';
import {positionIcon} from '@/svg/position';

@Component({
  templateUrl: './register.html',
  selector: 'app-register',
  host: {
    class: 'auth-form-block'
  }, imports: [ReactiveFormsModule, RouterLink, FormField, TuiDropdown, TuiDataList, SvgIconComponent],
})
export default class RegisterComponent {
  protected readonly items = ['Должность', 'Менеджер', 'Продажи', 'Поддержка', 'Другое'];

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

  protected readonly hidePassword = signal(true);
  protected readonly hideConfirmPassword = signal(true);
  protected readonly openPosition = signal(false);

  constructor() {
    injectRegisterIcons([dropdownIcon, fullNameIcon, positionIcon]);
  }

  positionClick(position: string) {
    this.openPosition.set(false);
    this.registerModel.update(register => ({...register, position}));

  }

  onSubmit(): void {
    submit(this.registerForm, async () => {
      // TODO: call auth API
      console.log('Register', this.registerModel());
    })
  }
}
