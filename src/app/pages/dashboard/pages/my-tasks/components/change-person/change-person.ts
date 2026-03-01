import {Component} from '@angular/core';
import {injectRegisterIcons, SvgIconComponent} from '@ngneat/svg-icon';
import {positionIcon} from '@/svg/position';

@Component({
  templateUrl: 'change-person.html',
  selector: 'app-change-person',
  imports: [
    SvgIconComponent
  ]
})
export class ChangePerson {
  constructor() {
    injectRegisterIcons([
      positionIcon
    ])
  }
}
