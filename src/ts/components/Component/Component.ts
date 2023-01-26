import { type ComponentStructure } from "./ComponentStructure";

class Component implements ComponentStructure {
  element: Element;
  parentElement: Element;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.parentElement = parentElement;
  }

  render() {
    this.parentElement.appendChild(this.element);
  }
}

export default Component;
