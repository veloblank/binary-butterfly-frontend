import SportsProp from './SportsProp.js';
import Slider from './Slider.js';
import fetchSportsProps from './sportsPropsData.js';
import * as DomEventListeners from './listeners/DomEventListeners.js';

class App {
  constructor() {
    this.state = {
      user: ""
    };
    console.log("Application Starting...");
    this.buildProps();
  }

  buildProps() {
    fetchSportsProps()
      .then(arr => {
        for (let obj of arr) {
          obj = new SportsProp(obj);
          obj.render();
          let slider = new Slider(obj);
          slider.render();
        }
      });

    //sets delay so Props can be built and rendered before Listeners are added
    setInterval(() => {
      this.addEventListeners(this);
    }, 500);
  }

  addEventListeners(app) {
    let signInContainer = document.getElementById('signin-container');
    let signInBtn = document.getElementById('signin-button');
    let signOutBtn = document.getElementById('signout-button');
    let createActBtn = document.getElementById('create-account-button');

    signInBtn.addEventListener('click', (e) => {
      e.preventDefault();
      //TODO: LAUNCH SIGNIN MODAL
      this.state.user = "User"
      signOutBtn.style.display = "block";
      createActBtn.style.display = "none";
      signInBtn.style.display = "none";

    })

    signOutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.state.user = "";

    })
    if (this.state.user) {
      signOutBtn.style.display = "block";
      createActBtn.style.display = "none";
      signInBtn.style.display = "none";

    } else {
      signOutBtn.style.display = "none";
      createActBtn.style.display = "block";
      signInBtn.style.display = "inline";

    }

    DomEventListeners.addModalListeners();

    //controls form submission in modal
    document.getElementById("create-account-form").addEventListener("submit", (e) => {
      e.preventDefault();
      DomEventListeners.onFormSubmission(this);
    });

    let sliders = document.getElementsByClassName('slider');
    for (let slider of sliders) {
      slider.addEventListener('input', e => {
        if (e.target.value > 0) {
          document.getElementById(`prop-${e.target.dataset.id}-home-values`).innerHTML = e.target.value * 10 / 10;
          document.getElementById(`prop-${e.target.dataset.id}-away-values`).innerHTML = Math.round((e.target.value * 30) / 10) * (-1);
        } else {
          document.getElementById(`prop-${e.target.dataset.id}-away-values`).innerHTML = e.target.value * (-10) / 10;
          document.getElementById(`prop-${e.target.dataset.id}-home-values`).innerHTML = Math.round((e.target.value * 30) / 10);
        }
      });
      slider.addEventListener('mouseup', () => {
        this.displayPoints();

        //TODO: MAKE FETCH POST REQUEST THAT UPDATES USER ACCOUNT
      });
    }




    let radioButtons = document.querySelectorAll('input[type=radio][name="nav-toggle"]');
    for (let button of radioButtons) {
      button.addEventListener('click', function () {
        this.parentNode.parentNode.attributes['data-view'] = this.value;
        let views = document.querySelectorAll('.views');
        let view = document.getElementById(this.value);
        views.forEach(div => {
          div.style.display = "none";
        });
        view.style.display = "block";
      });
    }
  }

  displayPoints() {
    let sliders = [...document.getElementsByClassName('slider')];
    let numOfPicksMade;
    let numOfProps = sliders.length;
    let filtered = sliders.filter(slider => {
      return (parseFloat(slider.value) != 0);
    });
    numOfPicksMade = filtered.length;
    document.querySelector('#daily-total-picks-made').innerHTML = numOfPicksMade;
    document.querySelector('#helper').style.display = "inline";
    document.querySelector('#daily-total-picks').innerHTML = numOfProps;
  }


}
export default App;