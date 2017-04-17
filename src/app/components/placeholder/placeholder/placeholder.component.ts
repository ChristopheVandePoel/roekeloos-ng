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
    <pre class="brush: php; title: ; notranslate" title="">
    &lt;?php function(test) {
        return $test;
    }
    </pre>`
    
    this.code = getSyntaxformatted(code);
      
  }

  ngOnInit() {
  }

}
