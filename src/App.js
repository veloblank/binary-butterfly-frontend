import SportsPropBuilder from './SportsPropBuilder.js';
import * as mathFuncs from "./mathFuncs.js";
import * as DomEventListeners from "./listeners/DomEventListeners.js";

class App {
  constructor() {
    this.state = {
      userLoggedIn: null,
      user_id: "",
      user: null,
      date: new Date(),
    };
    this.propBuilder = new SportsPropBuilder();
    this.loggedIn();
    this.addEventListeners();
  }

  loggedIn() {
    if (this.state.user) {
    }
    return this.state.user ? true : false;
  }

  addEventListeners() {
    let radioButtons = document.querySelectorAll('input[type=radio][name="nav-toggle"]');
    radioButtons = [...radioButtons];
    radioButtons.forEach(button => button.addEventListener('click', () => {
      let views = document.querySelectorAll(".views");
      let view = document.getElementById(button.value);
      views.forEach(div => {
        div.style.display = "none";
        view.style.display = "block";
      });
    }));

    document
      .getElementById("open-signin-account-modal")
      .addEventListener("click", e => {
        let modal = document.getElementById("signin-account-modal");
        modal.style.display = "block";
      });

    document
      .getElementById("signin-modal-close-btn")
      .addEventListener("click", () => {
        let modal = document.getElementById("signin-account-modal");
        modal.style.display = "none";
      });

    document
      .getElementById('signin-account-form')
      .addEventListener("submit", e => {
        e.preventDefault();
      });

    window.addEventListener("click", e => {
      let signinModal = document.getElementById("signin-account-modal");
      if (signinModal === e.target) {
        e.target.style.display = "none";
      }
    });

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