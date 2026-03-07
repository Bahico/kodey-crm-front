import {Component} from '@angular/core';
import {injectRegisterIcons, SvgIconComponent} from '@ngneat/svg-icon';
import {positionIcon} from '@/svg/position';
import {TuiDialogContext} from '@taiga-ui/core';
import {injectContext} from '@taiga-ui/polymorpheus';

@Component({
  templateUrl: 'article-direction.html',
  selector: 'article-direction',
  imports: [
    SvgIconComponent
  ]
})
export class ArticleDirection {
  public readonly context = injectContext<TuiDialogContext<string, void>>();

  constructor() {
    injectRegisterIcons([positionIcon]);
  }
}
