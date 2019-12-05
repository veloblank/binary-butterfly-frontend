import * as appData from './App.js';

class SportsProps {
  constructor(props) {
    this.buildProps(props);
  }
  buildProps(props) {
    for (let obj of props) {
      let prop = new SportsProp(obj);
      let slider = new Slider(obj);
      prop.renderHtml();
      slider.render();
    }
  }

}