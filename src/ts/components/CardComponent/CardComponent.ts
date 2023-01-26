import series from "../../data/series";
import { Series, type SeriesStructure } from "../../data/types";
import Component from "../Component/Component";
import { type ComponentStructure } from "../Component/ComponentStructure";

class CardComponent extends Component implements ComponentStructure {
  series: SeriesStructure;

  render() {
    this.element.innerHTML = `
            <img class="serie__poster"
              src=${this.series.poster}
              alt="${this.series.name} poster" />
            <h4 class="serie__title">${this.series.name}</h4>
            <span class="serie__info">${this.series.creator}</span>
            <ul class="score">
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="1/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="2/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="3/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="4/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="5/5"></i></button>
              </li>
            </ul>
            <button><i class="icon icon--delete fas fa-times-circle"></i></button>
          </li>`;
  }
}
export default CardComponent;
