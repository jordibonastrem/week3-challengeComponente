import Component from "./Component.js";

class Image extends Component {
  url;
  constructor(parentElement, url) {
    super(parentElement, "myimg", "img");

    this.url = url;

    this.element.src = url;
  }
}

export default Image;
