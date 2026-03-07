import {Component, inject, ViewEncapsulation} from '@angular/core';
import {injectRegisterIcons, SvgIconComponent} from '@ngneat/svg-icon';
import {profilePlusIcon} from '@/svg/profile-plus';
import {DialogService} from '@/services/dialog.service';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {ArticleDirection} from '@/pages/dashboard/pages/regulations/components/article-direction/article-direction';
import {switchMap} from 'rxjs';
import {AddArticle} from '@/pages/dashboard/pages/regulations/components/add-article/add-article';

@Component({
  templateUrl: 'regulations.html',
  selector: 'app-regulations',
  styleUrl: 'regulations.css',
  encapsulation: ViewEncapsulation.None,
  imports: [
    SvgIconComponent
  ],
})
export default class RegulationsComponent {
  private readonly dialog = inject(DialogService);

  constructor() {
    injectRegisterIcons([
      profilePlusIcon
    ]);
  }

  addArticle() {
    this.dialog
      .open(new PolymorpheusComponent(ArticleDirection), {
        size: 'm',
      })
      .pipe(
        switchMap(direction =>
          this.dialog.open(new PolymorpheusComponent(AddArticle), {
            size: 'l',
            closeable: false,
          })
        )
      )
      .subscribe()
  }
}
