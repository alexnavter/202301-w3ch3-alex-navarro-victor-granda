import Component from "../Component/Component";

class ComponentContainer extends Component {
  render() {
    super.render();
    this.element.innerHTML = `<header class="main-header">
      <h1 class="main-title">My Series</h1>
    </header>
    <main class="main-content">
      <h2 class="main-content__title">Series list</h2>`;
  }
}

export default ComponentContainer;
