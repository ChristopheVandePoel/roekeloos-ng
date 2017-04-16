import SyntaxHighlighter, {registerBrush} from '../../assets/js/syntaxhighlighter';
import JsBrush from '../../assets/js/brush-javascript';
import PhpBrush from '../../assets/js/brush-php';

registerBrush(JsBrush);
registerBrush(PhpBrush);

function getSyntaxformatted(content: string): string {
    let div = document.createElement("div");
    div.className = "post";
    div.innerHTML = content;
    let preElements: number = div.getElementsByTagName('pre').length;

    for(let i=0; i < preElements; i++) {
        SyntaxHighlighter.highlight({}, div.getElementsByTagName('pre')[0]);
    }
    return div.outerHTML;
}

export { getSyntaxformatted };