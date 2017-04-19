import { Directive } from '@angular/core';

@Directive({
  selector: '[watchScroll]',
  host: {'(window:scroll)': 'track($event)'}
})
export class WatchScrollDirective {

  constructor() { }

  track($event: Event) {
      console.debug("Scroll Event", window.pageYOffset);
  }
}
