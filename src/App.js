import SportsPropBuilder from './SportsPropBuilder.js';
import * as eventHandler from './eventHandlers.js'
import * as fetchRequests from './fetchRequests.js'

class App {
  constructor() {
    this.state = {
      sportsProps: [],
      user_id: '',
      date: new Date(),
    };

    this.propBuilder = new SportsPropBuilder();
    this.state.sportsProps = this.propBuilder.adapter.sportsProps;
    this.addEventListeners();
  }

  addEventListeners() {
    document
      .getElementById("open-signin-account-modal")
      .addEventListener("click", () => {
        let modal = document.getElementById("signin-account-modal");
        modal.style.display = "block";
      });

    //Click 'X' inside modal  
    document
      .getElementById("signin-modal-close-btn")
      .addEventListener("click", () => {
        let modal = document.getElementById("signin-account-modal");
        modal.style.display = "none";
      });

    //Click submit in Modal
    document
      .getElementById('signin-account-form')
      .addEventListener("submit", e => {
        e.preventDefault();
        fetchRequests.fetchUser(e);
        //alert("You are signed in!")
      });


    //Click outside of Modal  
    window.addEventListener("click", e => {
      let signinModal = document.getElementById("signin-account-modal");
      if (signinModal === e.target) {
        e.target.style.display = "none";
      }
    });

    let signOutBtn = document.getElementById('signout-button');
    let signInBtn = document.getElementById('open-signin-account-modal');
    signOutBtn.addEventListener('click', e => {
      e.preventDefault();
      eventHandler.onSignOutClick(this);

      if (this.state.user_id) {
        signOutBtn.style.display = "block";
        signInBtn.style.display = "none";

      } else {
        signOutBtn.style.display = "none";
        signInBtn.style.display = "inline";
      }
    });
  }
}

export default App;