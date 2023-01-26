import Component from "./components/Component/Component";

import ContainerComponent from "./components/ContainerComponent/ContainerComponent";

const listSection = document.createElement("section")!;

const { body } = document;
const container = new ContainerComponent(body, "div", "container");

container.render();
