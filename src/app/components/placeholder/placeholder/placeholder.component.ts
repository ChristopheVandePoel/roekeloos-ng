import { Component, OnInit } from '@angular/core';
import { getSyntaxformatted } from '../../../utils/syntax';

@Component({
  selector: 'placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  code: String;

  constructor() {
    let code = `
    <pre class="brush: jscript;">
      export function isTimeToSleep(isCoffeeGone: boolean, isWorkFinished: boolean): boolean {
        return (isCoffeeGone && isWorkFinished);
      }
    </pre>`
    
    this.code = getSyntaxformatted(code);
      
  }

  ngOnInit() {
  }

}
