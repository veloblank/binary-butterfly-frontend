import App from './App.js';
import addRadioListeners from './listeners/radioButtonListeners.js'

const app = new App();
window.load = addRadioListeners();