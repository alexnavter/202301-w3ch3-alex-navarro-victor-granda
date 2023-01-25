import Component from "./components/Component/Component";
import { ComponentStructure } from "./types";

const mainContent = document.querySelector("main-content"); // <Section class"list">
const listSection = document.createElement("section");

mainContent?.appendChild(listSection);
