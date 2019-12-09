import SportsProp from '../src/SportsProp.js';
import Slider from '../src/Slider.js';
import {
  addSliderListeners
} from '../src/listeners/sliderListeners.js';


class SportsPropsAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/current";
    this.sportsProps = [];
  }

  async getCurrentProps(props) {
    await fetch(this.baseUrl)
      .then(response => response.json())
      .then(data => {
        for (let obj of data) {
          let prop = new SportsProp(obj);
          this.sportsProps.push(prop)
          let slider = new Slider(obj);
          prop.renderHtml();
          slider.render();
        }
        addSliderListeners();
      })
  }
}

export default SportsPropsAdapter;