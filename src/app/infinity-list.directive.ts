import { Directive, HostListener, EventEmitter,Output } from '@angular/core';

/**
 * InfinityListDirective:
 * define onScroll event  for div element with current height
 * when scroll down
 */
@Directive({
  selector: '[appInfinityList]'
})
export class InfinityListDirective {
  @Output('appInfinityList') callback: EventEmitter<any> = new EventEmitter();
  @HostListener('scroll', ['$event'])
  onScroll(event) {

    // do tracking
    // console.log('scrolled', event.target.scrollTop);
    // Listen to click events in the component
    event.preventDefault();
    let tracker = event.target;
    let limit = tracker.scrollHeight - tracker.clientHeight;
    if (event.target.scrollTop === limit) {
      this.callback.emit(event);
    }
  }
  constructor() { }

}
