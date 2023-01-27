import series from "../../data/series";
import { type SeriesStructure } from "../../data/types";
import { Component } from "../Component/Component";
import type { ListSectionComponentStructure } from "./ListSectionComponentStructure";

class ListSectionComponent
  extends Component
  implements ListSectionComponentStructure
{
  title: string;
  readonly series: SeriesStructure[];

  constructor(parentElement: Element, title: string) {
    super(parentElement, "section", "list");

    this.title = title;
    this.series = series;
  }

  render() {
    super.render();
    this.element.innerHTML = `
        <h3 class="list__title">${this.title}</h3>
        <span class="list__info">You have 4 series pending to watch</span>
        <!--<span class="list__info">Congrats! You've watched all your series</span>-->`;
  }
}

export default ListSectionComponent;
