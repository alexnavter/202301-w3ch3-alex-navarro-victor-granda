import Component from "./components/Component/Component";
import { ComponentStructure } from "./data/types";

const container = document.querySelector(".container")!;
const mainContent = document.querySelector(".main-content")!;
const listSection = document.createElement("section")!;

mainContent?.appendChild(listSection);
const greeting = "This is a section";
listSection.innerText = greeting;
