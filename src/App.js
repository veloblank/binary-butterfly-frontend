import SportsPropBuilder from './SportsPropBuilder.js';
import * as fetchRequests from './fetchRequests.js'

class App {
  constructor() {
    this.state = {
      sportsProps: [],
      user_id: '',
      user: null,
      date: new Date(),
    };

    this.propBuilder = new SportsPropBuilder();
    this.state.sportsProps = this.propBuilder.adapter.sportsProps;
    this.addEventListeners();
  }

  // loggedIn() {
  //   console.log("Checking login")
  //   document.getElementsByClassName('user-display').classList.remove('logged-out');
  //   document.getElementsByClassName('user-display').classList.add('logged-in');
  //   document.getElementById('account-user').innerText = this.state.user;
  // }
  addEventListeners() {
    document
      .getElementById("open-signin-account-modal")
      .addEventListener("click", e => {
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
        fetchRequests.fetchCreateUser(e);
        //alert("You are signed in!")
      });


    //Click outside of Modal  
    window.addEventListener("click", e => {
      let signinModal = document.getElementById("signin-account-modal");
      if (signinModal === e.target) {
        e.target.style.display = "none";
      }
    });

  }
}

export default App;