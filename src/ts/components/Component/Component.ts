import { type ComponentStructure } from "./types";

class Component implements ComponentStructure {
  element: Element;
  private readonly parentElement: Element;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    parentElement.appendChild(this.element);
  }

  render() {
    this.parentElement.appendChild(this.element);
  }
}

export default Component;
