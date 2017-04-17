import SyntaxHighlighter, {registerBrush} from '../js/syntaxhighlighter/src/core';
import JsBrush from '../js/brush-javascript';
import { Brush as PhpBrush } from '../js/brush-php/brush';

function getSyntaxformatted(content: string): string {
    registerBrush(JsBrush);
    registerBrush(PhpBrush);
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