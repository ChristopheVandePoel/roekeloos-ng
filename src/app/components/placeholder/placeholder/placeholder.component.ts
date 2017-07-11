import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { getSyntaxformatted } from '../../../utils/syntax';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  code: String;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    let code = `
    <pre class="brush: jscript;">
      function isTimeToSleep(isCoffeeGone: boolean, isWorkFinished: boolean): boolean {
        return (isCoffeeGone && isWorkFinished);
      }
    </pre>`;
    this.code = isPlatformBrowser(this.platformId) ? getSyntaxformatted(code) : code;
  }

  ngOnInit() {
  }

}
