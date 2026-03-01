import {Component, signal} from '@angular/core';
import {injectRegisterIcons, SvgIconComponent} from '@ngneat/svg-icon';
import {documentJustifyCenterIcon} from '@/svg/document-justify-center';
import {rightSquareIcon} from '@/svg/right-square';

export interface Post {
  id: string;
  title: string;
  description?: string;
  link: string;
}

@Component({
  templateUrl: 'regulations.html',
  selector: 'app-home-regulations',
  host: {
    class: 'card',
  },
  imports: [SvgIconComponent],
})
export default class HomeRegulationsComponent {
  constructor() {
    injectRegisterIcons([documentJustifyCenterIcon, rightSquareIcon]);
  }

  posts = signal<Post[]>([
    { id: '1', title: 'Внутренние общение', description: 'Общий регламент общения внутри компании Общий регламент общения внутри компании ', link: '#' },
    { id: '2', title: 'Новичкам', description: 'Рассказываем про то как все устроено как лучше работать Рассказываем про то как все устроено как лучше работать ', link: '#' },
    { id: '3', title: 'Технические работы', description: 'Ожидаем окончания апдейта по нашей любимой CRM Ожидаем окончания апдейта по нашей любимой CRM', link: '#' },
  ]);
}
