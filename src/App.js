import SportsPropBuilder from './SportsPropBuilder.js';
import { addModalListeners } from './listeners/modalListeners.js'
import * as mathFuncs from "./mathFuncs.js";

class App {
  constructor() {
    this.state = {
      userLoggedIn: null,
      user_id: "",
      user: null,
      date: new Date(),
    };
    this.propBuilder = new SportsPropBuilder();
    this.addEventListeners();
  }

  loggedIn(data) {
    if (data.username) {
      console.log(data)
      this.state.user_id = data.id
      this.state.user = data.username
      this.userLoggedIn = true
    };
    return this.state.user ? true : false;
  }

  addEventListeners() {
    addModalListeners();

    let sliders = document.getElementsByClassName("slider");
    for (let slider of sliders) {
      slider.addEventListener("input", e => {
        if (e.target.value > 0) {
          document.getElementById(
            `prop-${e.target.dataset.id}-home-values`
          ).innerHTML = (e.target.value * 10) / 10;
          document.getElementById(
            `prop-${e.target.dataset.id}-away-values`
          ).innerHTML = Math.round((e.target.value * 30) / 10) * -1;
        } else {
          document.getElementById(
            `prop-${e.target.dataset.id}-away-values`
          ).innerHTML = (e.target.value * -10) / 10;
          document.getElementById(
            `prop-${e.target.dataset.id}-home-values`
          ).innerHTML = Math.round((e.target.value * 30) / 10);
        }
      });

      slider.addEventListener("mouseup", () => {
        mathFuncs.displayPoints();
        //TODO: Make patch req to server that shows the user has made this pick
      });
    }
  }
}

export default App;