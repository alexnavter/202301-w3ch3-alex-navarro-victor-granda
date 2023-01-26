import Component from "../Component/Component";
import { ComponentStructure } from "../../data/types";

class MainComponent extends Component {
  render() {
    super.render();
    this.element.innerHTML = `
      <h2 class="main-content__title">Series list</h2>`;
  }
}

export default MainComponent;
