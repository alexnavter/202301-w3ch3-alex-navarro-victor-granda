import { type SeriesStructure } from "../../data/types";
import series from "../../data/series";
import { Component } from "../Component/Component";
import { type CardComponentStructure } from "./CardComponentStructure";

class CardComponent extends Component implements CardComponentStructure {
  serie: SeriesStructure;
  series: SeriesStructure[];

  constructor(parentElement: Element, serie: SeriesStructure) {
    super(parentElement, "li", "serie");
    this.serie = serie;
    this.series = series;
  }

  render() {
    super.render();

    this.element.innerHTML = `
    <img class="serie__poster"
      src=${this.serie.poster}
      alt="${this.serie.name} poster" />
    <h4 class="serie__title">${this.serie.name}</h4>
    <span class="serie__info">${this.serie.creator} (${this.serie.year})</span>
    `;
  }
}
export default CardComponent;
