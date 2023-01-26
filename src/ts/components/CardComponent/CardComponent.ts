import { Series, type SeriesStructure } from "../../data/types";
import Component from "../Component/Component";

class CardComponent extends Component {
  private readonly series: SeriesStructure;

  constructor(parentElement: Element, serie: SeriesStructure) {
    super(parentElement, "li", "serie");
  }
}
export default CardComponent;
