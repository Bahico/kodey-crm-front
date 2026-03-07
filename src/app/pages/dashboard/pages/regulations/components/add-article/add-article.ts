import {Component, signal} from '@angular/core';
import {injectRegisterIcons, SvgIconComponent} from '@ngneat/svg-icon';
import {profilePlusIcon} from '@/svg/profile-plus';
import {FormsModule} from '@angular/forms';
import {QuillEditorComponent} from 'ngx-quill';

@Component({
  templateUrl: 'add-article.html',
  selector: 'add-article',
  imports: [
    SvgIconComponent,
    FormsModule,
    QuillEditorComponent
  ]
})
export class AddArticle {
  text = signal('');

  constructor() {
    injectRegisterIcons([
      profilePlusIcon
    ]);
  }

  test() {
    console.log('aa')
  }
}
