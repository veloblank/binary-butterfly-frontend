import * as fetchFunc from './fetchRequests.js';
import * as eventHandlers from './eventHandlers.js';
import SportsProp from './SportsProp.js';
import Slider from './Slider.js';
import * as DomEventListeners from './listeners/DomEventListeners.js';

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
      });

    //sets delay so Props can be fetched and built before Listeners are added
    setInterval(() => {
      this.addEventListeners(this);
    }, 25);
  }

  addEventListeners(app) {
    DomEventListeners.addListenersToAccountBtns(app);
    DomEventListeners.createAccountModalListeners();
    DomEventListeners.addListenersToSliders();

    let radioButtons = document.querySelectorAll('input[type=radio][name="nav-toggle"]');
    for (let button of radioButtons) {
      button.addEventListener('click', () => {
        this.parentNode.parentNode.attributes['data-view'] = this.value;
        let views = document.querySelectorAll('.views');
        let view = document.getElementById(this.value);
        views.forEach(div => {
          div.style.display = "none";
        });
        view.style.display = "block";
      });
    }

    //controls form submission in modal
    document.getElementById("create-account-form").addEventListener("submit", (e) => {
      e.preventDefault();
      DomEventListeners.onCreateAccountFormSubmission(this);
    });
  }
}

export default App;