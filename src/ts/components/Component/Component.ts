import { type ComponentStructure } from "./ComponentStructure";

export class Component implements ComponentStructure {
  element: Element;
  private readonly parentElement: Element;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.parentElement = parentElement;
    if (className !== undefined) {
      this.element.className = className;
    }
  }

  render() {
    this.parentElement.appendChild(this.element);
  }
}
