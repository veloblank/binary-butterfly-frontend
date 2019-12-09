import SportsPropBuilder from './SportsPropBuilder.js';
import { addModalListeners } from './listeners/modalListeners.js'

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
  }
}
export default App;