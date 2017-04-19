import SyntaxHighlighter, {registerBrush} from '../js/syntaxhighlighter/src/core';
import JsBrush from '../js/brush-javascript/brush';
import { Brush as PhpBrush } from '../js/brush-php/brush';

registerBrush(JsBrush);
registerBrush(PhpBrush);

function getSyntaxformatted(content: string): string {
    let div = document.createElement("div");
    div.className = "post";
    div.innerHTML = content;
    let preElements: number = div.getElementsByTagName('pre').length;
    
    let i: number = 0;

    for(i; i < preElements; i += 1) {
        SyntaxHighlighter.highlight({}, div.getElementsByTagName('pre')[0]);
    }
    return div.outerHTML;
}

export { getSyntaxformatted };