import Component from "../Component/Component";

class ListSectionComponent extends Component {
  render() {
    super.render();
    this.element.innerHTML = `
        <h3 class="list__title">Pending series</h3>
        <span class="list__info">You have 4 series pending to watch</span>
        <!--<span class="list__info">Congrats! You've watched all your series</span>-->`;
  }
}

export default ListSectionComponent;
