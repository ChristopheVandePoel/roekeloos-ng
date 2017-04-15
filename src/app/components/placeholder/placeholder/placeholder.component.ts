import { Component, OnInit } from '@angular/core';
import SyntaxHighlighter, {registerBrush} from 'syntaxhighlighter';
import PhpBrush from 'brush-php';


@Component({
  selector: 'placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  code: String;

  constructor() { 
    registerBrush(PhpBrush);
    this.code = `
    <pre class="brush: php; title: ; notranslate" title="">
    &lt;?php function(test) {
        return $test;
    }
    </pre>`
    setTimeout(() => {SyntaxHighlighter.highlight({});},2000);
    
      
  }

  ngOnInit() {
  }

}
