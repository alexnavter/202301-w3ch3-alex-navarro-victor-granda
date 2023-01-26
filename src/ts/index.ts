import Component from "./components/Component/Component";

import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import ListSectionComponent from "./components/ListSectionComponent/ListSectionComponent";
import MainComponent from "./components/MainComponent/MainComponent";

const { body } = document;
const container = new HeaderComponent(body, "div", "container")!;

const mainContainer = new MainComponent(
  container.element,
  "main",
  "main-content"
);

const seriesList = new ListSectionComponent(
  mainContainer.element,
  "section",
  "list"
);

container.render();
mainContainer.render();
seriesList.render();

const ulCardContainer = document.createElement("ul");
const sectionElement = document.querySelector(".list")!;
sectionElement?.appendChild(ulCardContainer);
ulCardContainer.classList.add("series");
