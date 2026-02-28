import {afterNextRender, AfterViewInit, Component, ElementRef, HostListener, signal, ViewChild} from '@angular/core';
import {injectRegisterIcons, SvgIconComponent} from '@ngneat/svg-icon';
import {scrollbarUpIcon} from '@/svg/scrollbar-up';

@Component({
  templateUrl: 'custom-scrollbar.html',
  styleUrl: 'custom-scrollbar.scss',
  selector: 'custom-scrollbar',
  imports: [
    SvgIconComponent
  ]
})
export class CustomScrollbar {

  @ViewChild('content', { static: true })
  contentRef!: ElementRef<HTMLDivElement>;

  thumbHeight = signal(0);
  thumbTop = signal(0);

  private dragging = false;
  private startY = 0;
  private startScrollTop = 0;

  constructor() {
    injectRegisterIcons([scrollbarUpIcon]);

    afterNextRender(() => {
      setTimeout(() => {
        this.updateThumb();
      }, 10)
    })
  }

  @HostListener('window:resize')
  onResize() {
    this.updateThumb();
  }

  onScroll() {
    this.updateThumb();
  }

  private updateThumb() {
    const el = this.contentRef.nativeElement;

    const ratio = el.clientHeight / el.scrollHeight;
    this.thumbHeight.set(Math.max(ratio * 100, 10)); // minimum size

    const scrollRatio = el.scrollTop / (el.scrollHeight - el.clientHeight);
    this.thumbTop.set(scrollRatio * (100 - this.thumbHeight()));
  }

  scrollUp() {
    this.contentRef.nativeElement.scrollBy({ top: -80, behavior: 'smooth' });
  }

  scrollDown() {
    this.contentRef.nativeElement.scrollBy({ top: 80, behavior: 'smooth' });
  }

  startDrag(event: MouseEvent) {
    event.preventDefault();
    this.dragging = true;
    this.startY = event.clientY;
    this.startScrollTop = this.contentRef.nativeElement.scrollTop;

    document.addEventListener('mousemove', this.onDrag);
    document.addEventListener('mouseup', this.stopDrag);
  }

  private onDrag = (event: MouseEvent) => {
    if (!this.dragging) return;

    const el = this.contentRef.nativeElement;
    const delta = event.clientY - this.startY;

    const trackHeight = el.clientHeight;
    const scrollHeight = el.scrollHeight - el.clientHeight;

    const scrollDelta = (delta / trackHeight) * scrollHeight;
    el.scrollTop = this.startScrollTop + scrollDelta;
  };

  private stopDrag = () => {
    this.dragging = false;
    document.removeEventListener('mousemove', this.onDrag);
    document.removeEventListener('mouseup', this.stopDrag);
  };
}
