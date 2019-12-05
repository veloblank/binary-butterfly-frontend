import SportsProp from '../src/SportsProp.js';
import Slider from '../src/Slider.js';

class SportsPropsAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/current";
  }

  async getCurrentProps() {
    let response = await fetch(this.baseUrl);
    let data = await response.json();
    for (let obj of data) {
      let prop = new SportsProp(obj);
      let slider = new Slider(obj);
      prop.renderHtml();
      slider.render();
    }
  }
}

export default SportsPropsAdapter;
