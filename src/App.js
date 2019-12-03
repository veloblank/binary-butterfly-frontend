import * as fetchFunc from "./fetchRequests.js";
import Slider from "./Slider.js";
import SportsProp from "./SportsProp.js";
import * as mathFuncs from "./mathFuncs.js";
import * as DomEventListeners from "./listeners/DomEventListeners.js";

class App {
  constructor() {
    this.state = {
      userLoggedIn: false,
      user_id: "",
      user: null,
      props: [],
      date: new Date()
    };
    this.loggedIn();
    this.buildProps();
  }

  loggedIn() {
    return this.state.user ? true : false;
  }

  buildProps() {
    fetchFunc
      .fetchSportsProps()
      .then(props => {
        for (let obj of props) {
          let slider = new Slider(obj);
          let prop = new SportsProp(obj);
          prop.renderHtml();
          slider.render();
        }
      })
      .catch(error =>
        console.log("There was an error connecting to the server: \n", error)
      );

    // //sets delay so Props can be fetched and built before Listeners are added
    // setTimeout(() => {
    // this.addEventListeners();
    // }, 300);
  }

  addEventListeners() {
    let radioButtons = document.querySelectorAll(
      'input[type=radio][name="nav-toggle"]'
    );
    for (let button of radioButtons) {
      button.addEventListener("click", () => {
        let views = document.querySelectorAll(".views");
        let view = document.getElementById(button.value);
        views.forEach(div => {
          div.style.display = "none";
          view.style.display = "block";
        });
      });
    }

    document
      .getElementById("create-account-form")
      .addEventListener("submit", e => {
        e.preventDefault();
        fetchFunc.fetchCreateUser(this);
      });

    document
      .getElementById("open-create-account-modal")
      .addEventListener("click", e => {
        let modal = document.getElementById("create-account-modal");
        e.preventDefault();
        modal.style.display = "block";
      });

    document
      .getElementById("create-modal-close-btn")
      .addEventListener("click", () => {
        let modal = document.getElementById("create-account-modal");
        modal.style.display = "none";
      });

    document
      .getElementById("open-signin-account-modal")
      .addEventListener("click", e => {
        let modal = document.getElementById("signin-modal");
        modal.style.display = "block";
      });

    document
      .getElementById("signin-modal-close-btn")
      .addEventListener("click", () => {
        let modal = document.getElementById("signin-modal");
        modal.style.display = "none";
      });

    window.addEventListener("click", e => {
      let createModal = document.getElementById("create-account-modal");
      let signinModal = document.getElementById("signin-modal");
      if (createModal === e.target || signinModal === e.target) {
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

      DomEventListeners.addListenerToSignOutBtn(this);
    }
  }
}

export default App;