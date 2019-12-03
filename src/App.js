import * as fetchFunc from './fetchRequests.js';
import * as DomEventListeners from './listeners/DomEventListeners.js';
import Slider from './Slider.js';
import SportsProp from './SportsProp.js';

class App {
  constructor() {
    console.log("Application Starting...");
    this.state = {
      user_id: "",
      user: "",
      props: "",
      date: new Date()
    };
    this.buildProps();
    this.addEventListeners();
  }

  buildProps() {
    fetchFunc.fetchSportsProps()
      .then(props => {
        for (let obj of props) {
          let slider = new Slider(obj);
          let prop = new SportsProp(obj);
          prop.renderHtml();
          slider.render();
        }
      })
      .catch(error => console.log("There was an error connecting to the server: \n", error))

    //sets delay so Props can be fetched and built before Listeners are added
    setInterval(() => {
    }, 300);
  }

  addEventListeners() {
    let radioButtons = document.querySelectorAll('input[type=radio][name="nav-toggle"]');
    for (let button of radioButtons) {
      button.addEventListener('click', () => {
        let views = document.querySelectorAll('.views');
        let view = document.getElementById(button.value);
        views.forEach(div => {
          div.style.display = "none";
          view.style.display = "block";
        });
      });
    }

    document.getElementById("create-account-form").addEventListener("submit", (e) => {
      e.preventDefault();
      fetchFunc.fetchCreateUser(this);
    });

    document.getElementById('open-create-account-modal').addEventListener('click', (e) => {
      let modal = document.getElementById('create-account-modal');
      e.preventDefault();
      modal.style.display = "block";
    });

    document.getElementById('create-modal-close-btn').addEventListener('click', () => {
      let modal = document.getElementById('create-account-modal');
      modal.style.display = "none";
    });

    document.getElementById('open-signin-account-modal').addEventListener('click', (e) => {
      let modal = document.getElementById('signin-modal');
      modal.style.display = "block";
    });

    document.getElementById('signin-modal-close-btn').addEventListener('click', () => {
      let modal = document.getElementById('signin-modal');
      modal.style.display = "none";
    });

    window.addEventListener('click', (e) => {
      let createModal = document.getElementById('create-account-modal');
      let signinModal = document.getElementById('create-account-modal');
      if ([createModal, signinModal].includes(e.target)) {
        e.target.style.display = "none";
      }
    });
    DomEventListeners.addListenerToSignOutBtn(this);
    DomEventListeners.addListenersToSliders();
  }
}

export default App;