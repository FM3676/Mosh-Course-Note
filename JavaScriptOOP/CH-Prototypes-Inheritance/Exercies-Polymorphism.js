function HtmlElement() {
  this.click = () => {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = () => {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = (item) => {
    this.items.push(item);
  };

  this.removeItem = (item) => {
    this.items.splice(this.items.indexOf(item), 1);
  };

  this.render = () =>
    `
        <select>
            ${this.items.map((item) => `<option>${item}</option>`).join("")}
        </select>
    `;
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;

  this.render = () => `<img src ="${this.src}" />`;
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
