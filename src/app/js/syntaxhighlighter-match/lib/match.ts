export default class Match {
  value: any;
  index: any;
  length: any;
  css: any;
  brushName: any;

  constructor(value, index, css) {
    this.value = value;
    this.index = index;
    this.length = value.length;
    this.css = css;
    this.brushName = null;
  }

  toString() {
    return this.value;
  }
}
