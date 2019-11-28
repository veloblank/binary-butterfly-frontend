class Slider {
  constructor(prop) {
    this.id = prop.id;
    this.value = 50;
  }

  render() {
    let slider =
      `<input type="range" min="-25" max="25" value="0" step="0.2" class="slider" data-id="${this.id}"id="slider-${this.id}">
      <div class="slider-values">
        <div data-id="${this.id}"id="prop-${this.id}-away-values"><strong>0 pts</strong></div>
        <div data-id="${this.id}"id="prop-${this.id}-home-values"><strong>0 pts</strong></div>
      </div>`
    document.getElementById(`slider-container-${this.id}`).innerHTML = slider;
  }
}


export default Slider;