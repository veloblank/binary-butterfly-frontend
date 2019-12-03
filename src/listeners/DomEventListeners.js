import displayPoints from '../mathFuncs.js';
import * as eventHandlers from '../eventHandlers.js';

function addListenerToSignOutBtn(app) {
  let signOutBtn = document.getElementById('signout-button');
  signOutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    eventHandlers.onSignOutClick(app);

    if (app.state.user) {
      signOutBtn.style.display = "block";
      createActBtn.style.display = "none";
      signInBtn.style.display = "none";

    } else {
      signOutBtn.style.display = "none";
      createActBtn.style.display = "block";
      signInBtn.style.display = "inline";
    }
  });
}

function addListenersToSliders() {
  let sliders = document.getElementsByClassName('slider');
  for (let slider of sliders) {
    slider.addEventListener('mouseup', () => {
      displayPoints();
      //TODO: Make patch req to server that shows the user has made this pick
    });

    slider.addEventListener('input', e => {
      if (e.target.value > 0) {
        document.getElementById(`prop-${e.target.dataset.id}-home-values`).innerHTML = e.target.value * 10 / 10;
        document.getElementById(`prop-${e.target.dataset.id}-away-values`).innerHTML = Math.round((e.target.value * 30) / 10) * (-1);
      } else {
        document.getElementById(`prop-${e.target.dataset.id}-away-values`).innerHTML = e.target.value * (-10) / 10;
        document.getElementById(`prop-${e.target.dataset.id}-home-values`).innerHTML = Math.round((e.target.value * 30) / 10);
      }
    });
  }
}

export {
  addListenerToSignOutBtn,
  addListenersToSliders
};