class Slider {
  constructor(prop) {
    this.id = prop.id;
    this.value = 50;
  }

  render() {
    let slider =
      `<input type="range" min="1" max="100" value="50" class="slider" id="slider-${this.id}">
      <div class="slider-values">
        <div id="prop-${this.id}-away-values"></div>
        <div id="prop-${this.id}-home-values"></div>
      </div>`
    document.getElementById(`slider-container-${this.id}`).innerHTML = slider;
  }
}


export default Slider;