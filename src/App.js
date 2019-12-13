import SportsPropBuilder from './SportsPropBuilder.js';
import {
  addModalListeners
} from './listeners/modalListeners.js'

class App {
  constructor() {
    this.state = {
      sportsProps: [],
      userLoggedIn: null,
      user_id: "",
      user: null,
      date: new Date(),
    };
    this.propBuilder = new SportsPropBuilder(this.state.sportsProps);
    this.state.sportsProps = this.propBuilder.adapter.sportsProps;
    this.addEventListeners();
  }

  loggedIn(data) {
    if (data.username) {
      this.state.user_id = data.id;
      this.state.user = data.username;
      this.userLoggedIn = true;
      //TODO:
      document.getElementsByClassName('user-display').classList.remove('logged-out');
      document.getElementsByClassName('user-display').classList.add('logged-in');
      document.getElementById('account-user').innerText = this.state.user;
    }
    return this.state.user ? true : false;
  }

  addEventListeners() {
    addModalListeners();
  }
}
export default App;