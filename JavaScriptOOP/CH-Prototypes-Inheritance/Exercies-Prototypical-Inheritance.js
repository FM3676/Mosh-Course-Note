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
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
HtmlSelectElement.prototype = new HtmlElement();
// We set HtmlSelectElement.prototype as instance of HtmlElement Obj
// Instead of HtmlSelectElement.prototype = Object.create(HtmlElement.prototype)
// Otherwise we will lose the click()

HtmlSelectElement.prototype.constructor = HtmlSelectElement;
