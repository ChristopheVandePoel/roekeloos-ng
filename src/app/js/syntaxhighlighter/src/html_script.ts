import {applyRegexList} from '../../syntaxhighlighter-match';

export default class HtmlScript {
  BrushXML: any;
  brushClass: any;
  scriptBrush: any;
  xmlBrush: any;
  regexList: any;

  constructor(BrushXML, brushClass) {
    this.BrushXML = BrushXML;
    this.brushClass = brushClass;
    this.xmlBrush = new BrushXML();
    this.scriptBrush = new brushClass();

    if (brushClass === null){
      return;
    }

    if (this.scriptBrush.htmlScript == null)
      throw new Error('Brush wasn\'t configured for html-script option: ' + brushClass.brushName);

    this.xmlBrush.regexList.push(
      { regex: this.scriptBrush.htmlScript.code, func: this.process }
    );

    this.regexList = this.xmlBrush.regexList;
  }


  offsetMatches(matches, offset)
  {
    for (var j = 0, l = matches.length; j < l; j++)
      matches[j].index += offset;
  }

  process(match, info)
  {
    var code = match.code,
        results = [],
        regexList = this.scriptBrush.regexList,
        offset = match.index + match.left.length,
        htmlScript = this.scriptBrush.htmlScript,
        matches
        ;

    matches = applyRegexList(code, regexList);
    this.offsetMatches(matches, offset);
    results = results.concat(matches);

    // add left script bracket
    if (htmlScript.left != null && match.left != null)
    {
      matches = applyRegexList(match.left, [htmlScript.left]);
      this.offsetMatches(matches, match.index);
      results = results.concat(matches);
    }

    // add right script bracket
    if (htmlScript.right != null && match.right != null)
    {
      matches = applyRegexList(match.right, [htmlScript.right]);
      this.offsetMatches(matches, match.index + match[0].lastIndexOf(match.right));
      results = results.concat(matches);
    }

    for (var j = 0, l = results.length; j < l; j++)
      results[j].brushName = this.brushClass.brushName;

    return results;
  }
};
